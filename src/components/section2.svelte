<script>
    export let demoSection;
    import '@google/model-viewer';
    import getAsset from '../util/assets';
</script>

<section bind:this={demoSection}>
    <model-viewer disable-tap auto-rotate shadow-intensity="1" camera-controls touch-action="pan-y" src="{getAsset("3D/controller.glb")}"></model-viewer>
    <div class="textbox">
        <h1>Meet Quiet.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non luctus arcu. Maecenas quam tellus, bibendum eget magna at, eleifend vulputate erat. Cras pharetra volutpat odio et mattis. Pellentesque diam neque, mollis vitae neque vel, sagittis cursus sapien. Integer rhoncus, tellus vel sodales scelerisque, erat diam dignissim sem, at condimentum ex velit quis turpis. Donec a consequat lectus, eget laoreet nibh. Praesent pretium nunc odio. Nulla facilisi. Nulla tellus erat, bibendum bibendum molestie eu, consequat sit amet augue.</p>
    </div>

</section>

<style>
    section {
        z-index: 1;
        flex-direction: column;
    }
    .textbox {
        width: 50%;
        transform: translateX(-210%);
    }
    h1 {
        font-size: 3rem;
    }
    model-viewer {
        transform: translateX(-33.4%);
        height: 100%;
        width: 150%;
    }
</style>