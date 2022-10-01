<script lang="ts">
    export let open: boolean;

    export let duration: number;
    export let width: string;
    export let padding: string;
    export let paddingTop: string;
    export let backgroundColor: string;
    export let menuColor: string;
</script>

<style>
    #container {
        position: absolute;
        height: 100vh;
        top: 0px;

        overflow-y: auto;
    }
    
    #menu {
        text-align: left;
    }

</style>

<div id="container" style="background-color: {backgroundColor}; color: {menuColor}; width: {width}; left: {open ? '0px' : ('-' + width)}; transition: left {duration}s ease-in-out">
    <div id="menu" style="padding: {padding}; padding-top: {paddingTop};">
        <slot></slot>
    </div>
</div>