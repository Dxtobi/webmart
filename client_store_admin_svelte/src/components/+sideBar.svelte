
<script>
import BsShopWindow from "svelte-icons-pack/bs/BsShopWindow";
import BiSolidShoppingBags from "svelte-icons-pack/bi/BiSolidShoppingBags";
import AiFillSetting from "svelte-icons-pack/ai/AiFillSetting";
import AiOutlineShoppingCart from "svelte-icons-pack/ai/AiOutlineShoppingCart";
import CgFileDocument from "svelte-icons-pack/cg/CgFileDocument";
import HiSolidUser from "svelte-icons-pack/hi/HiSolidUser";

import ListItem from "./sideBarList/+ListItem.svelte";
    const links = [
    {link:'/dashboard/overview', name:'overview', icon:BsShopWindow}, 
    {link:'/dashboard/customers', name:'customers',  icon:HiSolidUser},
    {link:'/dashboard/products',  name:'products', icon:BiSolidShoppingBags},
    {link:'/dashboard/orders', name:'orders',  icon:CgFileDocument},
    {link:'/dashboard/checkout', name:'checkout',  icon:AiOutlineShoppingCart}, 
    {link:'/dashboard/settings', name:'settings',  icon:AiFillSetting},
]

</script>

<div class="sb-holder">
    <div class="sb-header">
        <div class="brand-1">Web</div><div class="brand-2">Mart</div>
    </div>
    <div class="side-bar">
        {#each links as {link, icon, name} (link)}
         <ListItem {link} {icon} {name}/>
        {/each}
     </div>
</div>
