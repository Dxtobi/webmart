
<script>
    import Icon from "svelte-icons-pack";
    import { fly } from "svelte/transition";

    export let data;
    export let index;
    
</script>


<div class="data-box" transition:fly="{{delay:index * 100, y:0, duration:200, x:-100}}">
    <div class="data-header">
        <div class="data-icon">
            <Icon src={data.icon}  size="18" title="search admin" />
        </div>
        <div class="data-name">{data.name}</div>
    </div>
    <data class="data-digit">{data.name==='total sales' ? '$':''} { data.amount}</data>
    <div class="data-per">{data.totalpac!=='' ? '%':''}{data.totalpac}</div>
</div>