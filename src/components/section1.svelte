<script lang="ts">
    import getAsset from "../util/assets.js"
    
    export let demoSection
    
    function click(){
        demoSection.scrollIntoView({behavior: "smooth"})
    }

</script>
<section>
    <button class="startBtn" on:click={click}>START</button>
</section>

<style>
    .startBtn {
        margin: 0;
        padding: 0em 0.4em 0.2em 0.4em;
        font-size: 5em;
        border: white solid;
        border-radius: 20px;
        background-color: transparent;
        font-family: Integral;
    }
    button:hover {
        cursor: pointer;
    }
    section {
        display: flex;
        height: cover;
        justify-content: center;

        align-items: center;
        background-color: white !important;
        overflow: hidden;
        background-image: url("https://quiet-com.github.io/quiet-assets/bølger2.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center; 
    }
</style>
