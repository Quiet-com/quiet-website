<script>
    import getAsset from "../util/assets.js"
    
    export let demoSection
    
    function clickf(){
        demoSection.scrollIntoView({behavior: "smooth"})
    }

</script>
xw
<section>
    <button class="startBtn" on:click={clickf}>START</button>
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
    section {
        display: flex;
        height: cover;
        justify-content: center;

        align-items: center;
        background-color: white !important;
        overflow: hidden;
        background-image: url("https://quiet-com.github.io/quiet-assets/bølger.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center; 
    }
</style>