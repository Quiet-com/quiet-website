<script>
    import getAsset from "../util/assets";
</script>

<section>
    <div class="content">
        <div class="image">
            <img src="{getAsset("Produktbilder/PNG-fjernkontroller.png")}" alt="">
        </div>
        <div class="functionlist">
            <h1>
                FUNCTIONS
            </h1>
            <div class="point">
                <img src="{getAsset("icons/plus.png")}" alt="plus icon">
                <div>
                    <h3>Volume +</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa ex. Nulla efficitur neque at turpis imperdiet aliquam. Integer ultricies lorem nec tristique dictum. Donec in posuere velit, eget lobortis lectus.</p>
                </div>
            </div>
            <div class="point">
                <img src="{getAsset("icons/minus.png")}" alt="plus icon">
                <div>
                    <h3>Volume -</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa ex. Nulla efficitur neque at turpis imperdiet aliquam. Integer ultricies lorem nec tristique dictum. Donec in posuere velit, eget lobortis lectus.</p>
                </div>
            </div>
            <div class="point">
                <img src="{getAsset("icons/mute.png")}" alt="plus icon">
                <div>
                    <h3>Mute</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa ex. Nulla efficitur neque at turpis imperdiet aliquam. Integer ultricies lorem nec tristique dictum. Donec in posuere velit, eget lobortis lectus.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .image {
        height: 100%;
    }
    .image img {
        width: 100%;
    }
    .functionlist h1 {
        font-size: 3rem;
        margin: 0.5em 0;
    }
    .point {
        display: flex;
        align-items: flex-start;
        font-size: 2rem;
    }
    .point img {
        width: 1em;
        height: 1em;
        margin-right: 0.7em;
    }
    .point h3 {
        font-size: 0.7em;
        font-weight: 800;
        margin: 0;
        line-height: 1em;
    }
    .point div {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .point p {
        font-size: 0.4em;
    }
    .functionlist {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 40%;
    }

    .content {
        height: 100%;
        width: 100%;
        display: flex;
        height: cover;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: row;
        margin-top: 8.2vh;
        margin: 8.2vh 2vw;
    }
    img {
        width: 20%;
    }
    @media screen and (max-width: 700px) {
        .content {
            margin-top: 5vw;
        }
    }
</style>