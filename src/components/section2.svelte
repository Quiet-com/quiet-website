<script>
    export let demoSection;
    export let purchaseSection;
    import '@google/model-viewer';
    import getAsset from '../util/assets';
    import Video from './video.svelte';
</script>

<section bind:this={demoSection}>
    <div class="video">
        <Video src={getAsset("Videoer/promo_video.webm")}/>
    </div>
    <div class="textbox">
        <h1>Meet Quiet.</h1>
        <p>Experience the ultimate in noise control with the QUIET AIR PRO ULTRA MAX ADVANCED OBSIDIAN. Watch our video to see how you can effortlessly boost, lower, or mute the volume of your surroundings, creating your perfect sound environment.</p>
        <button class="button" on:click={purchaseSection.scrollIntoView({behavior: "smooth"})}>
            BUY NOW
        </button>
    </div>

</section>

<style>
    section {
        display: flex;
        z-index: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .textbox {
        width: 45%;
        padding: 0 5% 0 2%;
        text-align: left;
    }
    h1 {
        font-size: 3rem;
        margin: 0;
        line-height: 1em;
    }
    .video {
        width: 45%;
        border-radius: 15px;
        overflow: hidden;
    }
    p {
        margin: 5% 0 5% 0;
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
            flex-direction: column;
            justify-content: center;
        }
        .video {
            width: 80%;
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