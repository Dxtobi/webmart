
<script>

    export let data;

</script>


<div class="top-product-row">

    <div class="t-p-d">
        <img src={data.img[0]} alt='' class='tpr-image'/>
        <div>{data.name}</div>
    </div>
    <div class="t-p-d">
        ${data.price}
    </div>
    <div class="t-p-d">
        {data.sold}
    </div>
    <div class="t-p-d">
        ${data.sales}
    </div>
</div>