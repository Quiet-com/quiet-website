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
    <div class="content">
        <div class="text">
            <h1>
                Unlock your concentration with Quiet.
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu turpis. Velit laoreet id donec ultrices tincidunt arcu non.</p>
            <div class="email">
                <input type="text" placeholder="Your email">
                <button class="button" on:click={click}>
                    Request demo
                </button>
            </div>
        </div>
        <model-viewer disable-tap camera-orbit="-155deg 55deg" auto-rotate shadow-intensity="1" camera-controls touch-action="pan-y" src="{getAsset("3D/controller.glb")}"></model-viewer>
    </div>
</section>

<style>
    h1 {
        font-size: 4cqw;
        font-family: Integral;
        margin: 0;
        font-weight: 1000;
        background-image: linear-gradient(to right, #F1F2F3, #FE5001);
        background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    p {
        font-size: 1em;
    }
    .content {
        height: 100%;
        width: 100%;
        display: flex;
        height: cover;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: row;
        margin-top: 8.2vh;
        margin: 8.2vh 2vw;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 50%;
        text-align: start;
    }
    .email {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin-top: 5%;
    }

    .email button {
        width: 10em;
        font-size: auto;
        text-align: center;
    }

    .email input {
        font-size: 1em;
        font-weight: 600;
        padding: 0em 1em;
        height: 3.15rem;
        width: 13em;
        margin: 0 1.3em 0 0;
        border: black solid 0.15em;
        border-radius: 0.4em;
        transition: all .4s ease-in-out;
        background-color: var(--dark-gray);
        box-shadow: 0 4px 15px 0 var(--dark-gray);
    }

    .button {
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        height: 3.2rem;
        border: none;
        border-radius: 0.4em;
        transition: all .4s ease-in-out;
        background-size: 300% 100%;
        background-image: linear-gradient(to right, #FE5001, #ff8147, #ff6924, #ff5100);  box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
    }
    
    .button:hover {
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }

    model-viewer {
        width: 40%;
        height: 65%;
    }

    section {
        overflow: hidden;
    }

    @media screen and (max-width: 460px) {
        h1 {
            font-size: 8cqw !important;
        }
        .email input {
            width: 8em;
        }
        model-viewer {
            height: 36% !important;
        }
    }

    @media screen and (max-width: 700px) {
        .content {
            flex-direction: column;
            margin-top: 5vw;
            align-items: center;
            justify-content: flex-start;
        }
        .text {
            width: 100%;
        }
        h1 {
            font-size: 5.2cqw;
        }
        model-viewer {
            height: 45%;
            width: 100%;
        }
    } 
</style>
