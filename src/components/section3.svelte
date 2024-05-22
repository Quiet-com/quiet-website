<script lang="ts">
    import getAsset from "../util/assets";
    import { onMount } from 'svelte';
    let imgId = 1;

    onMount(() => { // Kjøres når slideshowet vises på nettsiden
        const buttons = document.querySelectorAll('.img-select button');
        const imgBtns = [...buttons]; // Lager en liste over alle knapper

        imgBtns.forEach((button) => {
            button.addEventListener('click', handleClick); // Legger til event listeners
        });

        window.addEventListener('resize', slideImage);

        return () => { // Rydder opp event listeners når slideshowet ikke vises på skjermen
            imgBtns.forEach((button) => {
            button.removeEventListener('click', handleClick);
            });
            window.removeEventListener('resize', slideImage);
        };
    });

    function handleClick(event: MouseEvent) {
        const button = event.target as HTMLElement;
        imgId = parseInt(button.dataset.id) // Tar imgId-en fra data-id attributen
        slideImage();
    }

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth; // Regner ut bredden til bildet
        const showcase = document.querySelector('.img-showcase') as HTMLElement; 
        showcase.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`; // Flytter bilderemsen lenger ut slik at riktig bilde blir rammet inn
    }

</script>

<section>
    <div>
        <div class="card_wrapper">
            <div class="card">
                <div class="product-imgs">
                    <div class="img-display">
                        <div class="img-showcase">
                            <img src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-1.png" alt="Bilde 1">
                            <img src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-2.png" alt="Bilde 2">
                            <img src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-3.png" alt="Bilde 3">
                            <img src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-4.png" alt="Bilde 4">
                        </div>
                    </div>
                    <div class="img-select">
                        <div class="img-item">
                            <button> 
                                <img data-id=1 src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-1.png" alt="Bilde 1">
                            </button>
                        </div>
                        <div class="img-item">
                            <button> 
                                <img data-id=2 src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-2.png" alt="Bilde 2">
                            </button>
                        </div>
                        <div class="img-item">
                            <button> 
                                <img data-id=3 src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-3.png" alt="Bilde 3">
                            </button>
                        </div>
                        <div class="img-item">
                            <button> 
                                <img data-id=4 src="https://quiet-com.github.io/quiet-assets/Produktbilder/produkt-thumbnail-4.png" alt="Bilde 4">
                            </button>
                        </div>
                        <div>
        
                    </div>
                </div>
    
            </div>
    </div>

        <div class="functionlist">
            <h1>
                FUNCTIONS
            </h1>
            <div class="point">
                <img class="icon" src="{getAsset("icons/plus.png")}" alt="plus icon">
                <div>
                    <h3>Volume +</h3>
                    <p>Increases ambient volume of desired sounds while maintaining noise-cancellation for unwanted noise, enhancing clarity and audibility for specific conversations or audio sources within a controlled environment.</p>
                </div>
            </div>
            <div class="point">
                <img class = "icon" src="{getAsset("icons/minus.png")}" alt="plus icon">
                <div>
                    <h3>Volume -</h3>
                    <p>Reduces the ambient volume of external sounds, allowing for a quieter environment while maintaining necessary communication, effectively balancing noise cancellation with selective sound reduction.</p>
                </div>
            </div>
            <div class="point">
                <img class = "icon" src="{getAsset("icons/mute.png")}" alt="plus icon">
                <div>
                    <h3>Mute</h3>
                    <p>Completely silences all ambient sounds, providing total noise cancellation for an undisturbed and quiet experience, perfect for focus-intensive tasks or moments requiring absolute silence.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .icon {
        max-width: 3vw;
        max-height: 3vw;
    }

    .product-imgs {
        max-height: 80vh;
    }

    section {
        display: flex;
        flex-direction: column;
        height:cover;
        z-index: 2;
    }
    .card_wrapper {
        max-height: 50vh;
        max-width: 900px;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        display: flex;
        height: cover;
        flex-wrap: nowrap;
        align-items: flex-start;
        flex-direction: row;
        margin-top: -10vh;
    }

    img {
        width: 15vh !important;
        display: block;
        -webkit-user-drag: none;
        transform: translateX(0.234%);
    }

    .img-display {
        overflow: hidden;
        max-height: 57.5vh;
        max-width: 57.5vh;
    }

    .img-showcase {
        display: flex;
        width: 100%;
        transition: all 0.5s ease;
    }

    .img-showcase img {
        min-width: 100%;
    }
    .img-select {
        max-height: 2.5vh;
        width: 0;
        user-select: none;
        display: flex;
   
    }
    .img-item {
        margin: 0.3rem;
        justify-self: center;
        transform: translateX(-20%);
    }
    .img-item:nth-child(1),
    .img-item:nth-child(2),
    .img-item:nth-child(3) {
        margin-right: 0;
    }

    .img-item:hover {
        opacity: 0.8;
    }

    button {
        all: unset;
        display: flex;
        height: 15vh !important;
        width: 90%;
    }


    .functionlist {
        font-size: 1rem;
    }
    .functionlist h1 {
        font-size: 3em;
        margin: 0 0 0.5em;
    }
    .point {
        display: flex;
        align-items: flex-start;
        font-size: 2em;
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

    img {
        width: 20%;
    }
    @media screen and (max-width: 10000px){
        img {
            transform: translateX(0%);
        }

        .card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5rem;
        }
        .card_wrapper {
            max-height: 100vh;
            max-width: 1100px;
            transform: translateX(2.5%);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .product-imgs {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    
    @media screen and (max-width: 980px) {
        .img-display {
            max-width: 35vw;
            max-height: 35vw;
        }
        button {

            transform: translateX(60%);
        }
        div {
            transform: translateY(0%);
        }

        .functionlist {
        font-size: 0.95rem;
        }
        .img-display {
            max-height:25vh;
            max-width:25vh;
           transform: translateX(50%);
        }
        .img-select {
            flex-grow: 1;
        }
        button img {
            max-height:10vh;
            max-width:10vh;
            justify-self: center;
        }
        .img-showcase {
            transform: translateX(10%);
        }

        .img-showcase img{
            flex-grow: 1;
            justify-self: center !important;
        }
    }
        
    @media screen and (max-width: 738px) {
        .functionlist {
            width: 100%;
            transform: translateY(55%) translateX(-30%);
        }
        .card {
            transform: translateY(-75%) translateX(35%);
            flex-grow: 1;
            justify-self: center;
            display: flex;
        }
        h1 {
            text-align: center;
            width: 100%;
        }
    }
</style>