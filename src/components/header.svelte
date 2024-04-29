
<main>
    <img id="logo" src="https://quiet-com.github.io/quiet-assets/SVG/QuietLogoIconWhite.svg" width=40vw alt="Loggos" on:click={reload}>
    <h1 on:click={reload}>Quiet.</h1>
    <img id = "hamburger" src = "https://quiet-com.github.io/quiet-assets/Hamburger.png" alt = "Namnam Hamburger">
</main>

<script>
    function reload(){
        window.location.href = 'index.html';
    }
</script>

<style>
    main {
        display: flex;
        width: 100vw;
        background-color: var(--dark-gray);
        flex-grow:1;
        height: 95px;
    }
    h1 {
        align-self:center;
        display: flex;
        justify-self: center;
        font-size: 27pt;
        color: #F1F2F3;
        font-family: Integral;
        margin-left:3px;
    }

    h1:hover,#logo:hover {
        cursor: pointer;
    }

    #logo {
        margin-left:12px;
        padding-top:10px;
        padding-right: 5px;
        align-self: center;
    }

    #hamburger {
        display: flex;
        align-self: center;
        position: relative;
        left: 82.5vw;
    }
</style>