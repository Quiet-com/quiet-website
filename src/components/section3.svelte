
<script lang="ts">
    import { onMount } from 'svelte';

    export let purchaseSection;
    import getAsset from '../util/assets';

    let imgId = 1;

    onMount(() => {
    const buttons = document.querySelectorAll('.img-select button');
    const imgBtns = [...buttons];

    imgBtns.forEach((button) => {
        button.addEventListener('click', handleClick);
    });

    window.addEventListener('resize', slideImage);

    return () => {
        imgBtns.forEach((button) => {
        button.removeEventListener('click', handleClick);
        });
        window.removeEventListener('resize', slideImage);
    };
    });

    function handleClick(event: MouseEvent) {
    const button = event.target as HTMLElement;
    imgId = parseInt(button.dataset.id)
    slideImage();
    }

    function slideImage() {
    console.log("Image slided", imgId)
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    const showcase = document.querySelector('.img-showcase') as HTMLElement;
    showcase.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }
</script>

<section bind:this={purchaseSection}>
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
        <div class="product_content">
            <h2 class="product-title">QUIET.</h2>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        height:cover;
        z-index: 2;
    }
    .card_wrapper {
        max-width: 1100px;
        margin: 0 auto;
        transform: translateX(2.5%);
    }
    img {
        width: 100%;
        display: block;
    }

    .img-display {
        overflow: hidden;
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
        display: flex;
    }
    .img-item {
        margin: 0.3rem;
    }
    .img-item:nth-child(1),
    .img-item:nth-child(2),
    .img-item:nth-child(3) {
        margin-right: 0;
    }

    .img-item:hover {
        opacity: 0.8;
    }
    
    .product_content {
        padding: 2rem 1rem;
    }

    .product-title {
        font-size: 3rem;
        text-transform: capitalize;
        margin: 1rem 0;
    }

    @media screen and (min-width: 992px){
        .card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5rem;
        }
        .card_wrapper {
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
        .product_content {
            padding-top: 0;
        }
    }

    button {
        all: unset;
    }

</style>

