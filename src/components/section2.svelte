<script>
    export let demoSection;
    import '@google/model-viewer';
    import getAsset from '../util/assets';
</script>

<section bind:this={demoSection}>
    <model-viewer disable-tap camera-orbit="-155deg 55deg" auto-rotate shadow-intensity="1" camera-controls touch-action="pan-y" src="{getAsset("3D/controller.glb")}"></model-viewer>
    <div class="textbox">
        <h1>Meet Quiet.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non luctus arcu. Maecenas quam tellus, bibendum eget magna at, eleifend vulputate erat. Cras pharetra volutpat odio et mattis. Pellentesque diam neque, mollis vitae neque vel, sagittis cursus sapien.</p>
        <button class="button">
            BUY NOW
        </button>
    </div>

</section>

<style>
    section {
        display: flex;
        z-index: 1;
        flex-direction: column;
    }
    .textbox {
        width: 45%;
        padding: 0 5% 0 2%;
    }
    h1 {
        font-size: 3rem;
    }
    model-viewer {
        height: 100%;
        width: 50%;
    }
    .button {
        width: 40%;
        font-size: 1.3em;
        font-weight: 600;
        cursor: pointer;
        height: 2.2em;
        border-radius: 0.4em;
        border: none;
        transition: all .4s ease-in-out;
        background-size: 300% 100%;
        background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }
    
    .button:hover {
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }

    @media screen and (max-width: 700px) {
        section {
            flex-direction: row;
            justify-content: center;
        }
        model-viewer {
            height: 50%;
        }
        .textbox {
            height: 50%;
            width: 100%;
            padding: 0 5% 0 5%;
        }
        h1 {
            margin: 0;
        }
    }

</style>