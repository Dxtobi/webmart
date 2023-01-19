    <script>
        import Icon from 'svelte-icons-pack/Icon.svelte';
        export let link;
        export let icon;
        export let name;
    </script>
    
    <a href={`${link}`} class="sb-item-link">
        <Icon src={icon} color="#0072d5" size="20" title="Custom icon params" />
        <div class="sb-item-link-link">{name}</div>
    </a>