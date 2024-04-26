<script>
    import getAsset from "../util/assets.js"
</script>

<section>

    <button>START</button>
    <img src={getAsset("bølger.png")} alt="Bølger">
    
</section>

<style>
    img {
        width: 100vw;
        position: relative;
        top: -25%;
    }
    button {
        z-index: 1;
        margin:0;
        position: relative;
        top: 50%;
        padding: 0em 0.4em 0.2em 0.4em;
        font-size: 5em;
        border: white solid;
        border-radius: 20px;
        background-color: transparent;
        font-family: Integral;
    }
    section {
        height: cover;
        justify-content: center;
        align-items: center;
        background-color: white !important;
        overflow: hidden;
    }

</style>