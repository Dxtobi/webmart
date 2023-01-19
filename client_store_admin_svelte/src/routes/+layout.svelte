<script>

import '../app.css';
import SideBar from '../components/+sideBar.svelte';

    import Search from '../components/search/+search.svelte';
</script>
    
    <div class="header">
        <div class="main-div">
            <SideBar/>
            <div class="app">
                <Search/>
                <slot />
            </div>
        </div>
    </div>