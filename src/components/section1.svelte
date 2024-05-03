<script lang="ts">
    import getAsset from "../util/assets.js"

    export let demoSection;
    export let articleRef;

    function click(){
        articleRef.style.overflowY = 'scroll';
        demoSection.scrollIntoView({behavior: "smooth"})
    }
</script>
<section>
    <button class="startBtn" on:click={click}>VIEW PRODUCT</button>
    <div>
        <p>CONTACT</p>
        <p>ABOUT US</p>
    </div>
</section>

<style>
    .startBtn {
        margin: 0;
        padding: 0em 0.4em 0.2em 0.4em;
        font-size: 3.7em;
        border: gray solid;
        border-radius: 20px;
        background-color: transparent;
        font-family: Integral;
        position: fixed;
        z-index: 0;
    }
    .startBtn:hover {
        cursor: pointer;
    }

    section {
        display: flex;
        height: cover;
        justify-content: center;

        align-items: center;
        background-color: white !important;
        overflow: hidden;
        background-image: url("https://quiet-com.github.io/quiet-assets/waves.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center; 
    }

    div {
        flex-grow:1;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-left: 35px;
        padding-right: 35px;
        font-family: Integral;
        font-size: 1.75em;
    }
</style>
