<script lang="ts">
    import getAsset from "../util/assets.js"

    export let demoSection;
    export let articleRef;

    function click(){
        articleRef.style.overflowY = 'scroll';
        demoSection.scrollIntoView({behavior: "smooth"})
    }
</script>
<section style="--bg-url: url({getAsset("waves.png")})">
    <div class="text">
        <h1>
            Unlock your concentration with Quiet.
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu turpis. Velit laoreet id donec ultrices tincidunt arcu non.</p>
        <button class="button" on:click={click}>
            SEE MORE
        </button>
    </div>
    <model-viewer disable-tap camera-orbit="-155deg 55deg" auto-rotate shadow-intensity="1" camera-controls touch-action="pan-y" src="{getAsset("3D/controller.glb")}"></model-viewer>
</section>

<style>
    h1 {
        font-size: 4cqw;
        font-family: Integral;
        margin: 0;
    }
    p {
        font-size: 1em;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        margin: 0 3% 0;
        width: 50%;
        text-align: start;
    }

    .button {
        width: 70%;
        font-size: 1.3em;
        font-weight: 600;
        cursor: pointer;
        height: 2.2em;
        margin: 5% 0 5%;
        border: none;
        border-radius: 1.1em;
        transition: all .4s ease-in-out;
        background-size: 300% 100%;
        background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }
    
    .button:hover {
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }

    model-viewer {
        width: 40%;
        height: 100%;
    }

    section {
        display: flex;
        height: cover;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        background-color: white;
        overflow: hidden;
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>
