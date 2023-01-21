<script>

    import '../app.css';
    import SideBar from '../components/+sideBar.svelte';
    import Search from '../components/search/+search.svelte';
    export let data

    const {user} = data
    console.log(data, 'layout')

</script>
    
    <div class="header">
        <div class="main-div">
            {#if user}
                <SideBar/>
            {/if}
            <div class="app"> 
                {#if user}
                    <Search/>
                {/if}
                <slot />
            </div>
        </div>
    </div>