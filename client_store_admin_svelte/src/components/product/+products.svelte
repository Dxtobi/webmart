<script>
    import { fly } from "svelte/transition";
    import TopProduct from "../topproducts/+topProduct.svelte";





const allProducts = [
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
    {
        img:['/favicon.png'],
        name:'polished soup',
        price:19,
        sold:200,
        sales:2300
    },
];
</script>

<div transition:fly="{{delay:10, y:0, duration:200, x:-100}}">
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
        {#each allProducts as product}
            <TopProduct data = {product}/>
        {/each}
    </div>
</div>