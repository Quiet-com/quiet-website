<script lang="ts">
    import getAsset from "../util/assets.js"
    function scroll() {
        console.log("scrolled")

    }
</script>

<section>
    <button on:click={(event) => scroll()} id=start-button>START</button>
</section>

<style>
    button {
        margin: 0;
        position: absolute;
        top: 50%;
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
        z-index: -1;
        height: cover;
        justify-content: center;
        align-items: flex-end;
        background-color: white !important;
        overflow: hidden;
        background-image: url("https://quiet-com.github.io/quiet-assets/bølger2.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center; 
    }
</style>
