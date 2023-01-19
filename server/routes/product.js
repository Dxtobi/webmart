const Product = require("../models/Product");
const CategoriesSchema = require("../models/ProductTag")
const Store = require("../models/Store");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndStore,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  if (!req.body.title?.trim() || req.body.title === '') {
    return res.status(401).json({error:'store tittle is required'});
  }
  
  if (!req.body.desc.trim() || req.body.desc === '') {
    return res.status(401).json({error:'store tittle is required'});
  }
  let store_data = await Store.findOne({ userId: req.user.id })
  
  if (!store_data) return res.status(401).json({ error: 'you need a store' });
  req.body.categories?.map((cat) => {
    checkCategory(cat)
  })

  async function checkCategory (cat) {
    const ca = await CategoriesSchema.findOne({ name: cat })
    //console.log(cat, ca)
    if (!ca) {
      console.log(ca)
      CategoriesSchema({name:cat}).save().then((d)=>{console.log(d)})
    }
    if (ca) return
  }

  const data = {
    productName:req.body.title,
    title: `${req.body.title.trim()} - ${store_data.name} `,
    desc: req.body.desc.trim(),
    price: req.body.price ? req.body.price : 'free',
    images: req.body.images ? req.body.images : [],
    sizes: req.body.size ? req.body.size : [],
    colors: req.body.color ? req.body.color : [],
    categories:  req.body.categories ? req.body.categories: [],
    userId: req.user.id,
    storeId:store_data._id
  }
  
 
  
//console.log(store_data)

const newProduct = new Product(data);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(501).json({error:'Duplicate product or bad error'});
  }
});


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
 
  let store_data = await Store.findOne({ userId: req.user.id })
  if (!store_data) return res.status(401).json({ error: 'unauthorized action' });
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (err) {
   return res.status(500).json(err);
  }
});

//DELETE
router.delete("/:postedById/:productId/", verifyTokenAndStore, async (req, res) => {
  let store_data = await Store.findOne({ userId: req.user.id })
  if (!store_data) return res.status(401).json({ error: 'unauthorized action' });
  
  try {
    await Product.findByIdAndDelete(req.params.productId);
    return res.status(200).json("Product has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('storeId');
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
