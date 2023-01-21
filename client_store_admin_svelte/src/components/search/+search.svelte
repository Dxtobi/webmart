<script>
    import Icon from "svelte-icons-pack";
    import BiSearch from "svelte-icons-pack/bi/BiSearch";
    import FaSolidUserCircle from "svelte-icons-pack/fa/FaSolidUserCircle";
    import IoNotifications from "svelte-icons-pack/io/IoNotifications";
</script>


<div class="header-admin">
    <div class="input-con">
        <input type="text" name="search-top" id="search" placeholder="Search" class="search">
        <button class="search-btn">
            <Icon src={BiSearch} color="#0072d5" size="20" title="search admin" />
        </button>
    </div>

    <div class="user-header">
        
        <Icon src={IoNotifications} color="#0072d5" size="20" title="notification" />
        
        <div class="user-name-flex">
            <Icon src={FaSolidUserCircle} color="#0072d5" size="20" title="profile" />
            <div class="user-name-h">Akanbi</div>
        </div>
        <form action="/login?/logout" method="POST">
            <button class="btn btn-primary">Logout</button>
        </form>
        
    </div>
</div>
