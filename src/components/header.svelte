<script>
    import getAsset from "../util/assets";
</script>

<main>
    <a href=".">
        <img src="{getAsset("QuietLogoIconWhite.svg")}" width=40vw id="logo" alt="Loggos">
    </a>
    <a href=".">
        <h1>Quiet.</h1>
    </a>
    <button class="menu">
        <img src="{getAsset("Hamburger.png")}" alt="Namnam Hamburger">
    </button>
    
</main>

<style>
    a {
        margin: 0;
        text-decoration: none;
    }
    main {
        display: flex;
        max-width: 100vw;
        background-color: var(--dark-gray);
        height: 64px;
        padding: 0 3vw;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        }
    h1 {
        align-self: center; 
        display: flex;
        font-size: 1.5rem;
        color: #F1F2F3;
        font-family: Integral;
        margin: -0.2em 0 0 0;
    }

    .menu img {
       transform: translateY(-50%);
       display: flex;
       align-self: center;
       position: relative;
       justify-self: flex-end;
       right: 30px;
    }
    
    .menu {
        transform: translateY(50%);
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
</style>