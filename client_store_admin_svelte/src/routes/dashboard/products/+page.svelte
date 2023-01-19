<script>
    import Product from "../../../components/product/+product.svelte";
    import Products from "../../../components/product/+products.svelte";
    import Upload from "../../../components/product/+upload.svelte";

    let switch_ = true

    const handleToggle = ()=>{
        switch_ = !switch_
    }

</script>


<div>
    <div class="tab_menu">
        <button on:click={handleToggle} class={`button-menu_ ${switch_&& 'active'}`}>Products</button>
        <button on:click={handleToggle} class={`button-menu_ ${!switch_&& 'active'}`}>New</button>
    </div>
    {#if switch_}
        <Products/>
    {:else}
        <Upload />
    {/if}

   
</div>