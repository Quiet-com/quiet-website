
<main>
    <button style="all:unset;" on:click={reload}>
        <img src="https://quiet-com.github.io/quiet-assets/SVG/QuietLogoIconWhite.svg" width=40vw id="logo" alt="Loggos">
    </button>
    <button style="all:unset;" on:click={reload}>
        <h1>Quiet.</h1>
    </button>
    <div>
        <img id = "hamburger" src = "https://quiet-com.github.io/quiet-assets/Hamburger.png" alt = "Namnam Hamburger">
    </div>
    
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
        font-size: 27pt;
        color: #F1F2F3;
        font-family: Integral;
        margin-left:3px;
        transform: translateY(-7%);
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

    div {
        display: grid;
        width: 100vw;
    }
    #hamburger {
       display: flex;
       align-self: center;
       position: relative;
       justify-self: flex-end;
       right: 30px;
}
</style>