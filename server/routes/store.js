const Product = require("../models/Product");
const Store = require("../models/Store");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE NEW STORE
router.post("/", verifyToken, async (req, res) => {
  
    if (!req.body.name?.trim() || req.body.name === '') {
       return res.status(401).json({error:'store name is required'});
    }
    
    const data = {
        name: req.body.name.trim(),
        logo: req.body.logo?req.body.logo:'',
        banner: req.body.banner?req.body.banner:[],
        userId: req.user.id,
    }

    let store_name = await Store.findOne({ name: data.name })
    if (store_name) return res.status(401).json({ error: 'store already exist' });
    
    let user_id = await Store.findOne({ userId: data.userId })
    if (user_id) return res.status(401).json({ error: 'Users can Only Have One Store' });


    console.log(data)
    
    const newStore = new Store(data)
   
    try {
        let docs = await newStore.save()
        return res.status(200).json(docs);
    } catch (error) {
        return res.status(500).json(error.message);
    }
   
});

//GET ALL STORES
router.get("/products/:storeId", verifyToken, async (req, res) => {
    const storeId = req.params.storeId;

    try {
        let store = await Store.findOne({_id:storeId}).lean()
        let products = await Product.find({"storeId":storeId}).lean()
        let data = {
            store, products
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
   
});


module.exports = router;
