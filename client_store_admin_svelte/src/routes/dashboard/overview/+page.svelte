<script>
    import Box from "../../../components/boxs/+box.svelte";
    import SiVirustotal from "svelte-icons-pack/si/SiVirustotal";
    import BiSolidUserPin from "svelte-icons-pack/bi/BiSolidUserPin";
    import BiSolidCartAdd from "svelte-icons-pack/bi/BiSolidCartAdd";
    import IoBagHandle from "svelte-icons-pack/io/IoBagHandle";
    import { each } from "svelte/internal";
    import TopProduct from "../../../components/topproducts/+topProduct.svelte";

const allData = [
    {name:'total sales', icon:SiVirustotal, amount:12000, totalpac:84.22, index:0 },
    {name:'total order', icon:BiSolidCartAdd, amount:3000, totalpac:84.22, index:1 },
    {name:'total product', icon:IoBagHandle, amount:200000, totalpac:84.22, index:2 },
    {name:'total users', icon:BiSolidUserPin, amount:43000, totalpac:'', index:3 },
]

const allProducts = [{
    img:['/favicon.png'],
    name:'polished soup',
    price:19,
    sold:200,
    sales:2300
},
{
    img:['/favicon.png'],
    name:'polished soup',
    price:19,
    sold:200,
    sales:2300
},
{
    img:['/favicon.png'],
    name:'polished soup',
    price:19,
    sold:200,
    sales:2300
},
{
    img:['/favicon.png'],
    name:'polished soup',
    price:19,
    sold:200,
    sales:2300
},
]
</script>

<div>
    <div class="box-holder-admin ">
        {#each allData as data, index}
            <Box {data} {index}/>
        {/each}
    </div>
    <div class="top-products-sales">
    <div class="tpheader">Top Product</div>
    <div class="top-product-row" style="text-transform: uppercase; font-weight: 900; color:gray">
        <div class="t-p-d">
            Item
        </div>
        <div class="t-p-d">
            Price
        </div>
        <div class="t-p-d">
            Sold
        </div>
        <div class="t-p-d">
            Sales
        </div>
    </div>
        {#each allProducts as product, index }
            <TopProduct data={product} {index}/>
        {/each}
    </div>
</div>