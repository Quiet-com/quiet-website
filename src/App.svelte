<script>
  import Header from "./components/header.svelte";
  import Section1 from "./components/section1.svelte";
  import Section2 from "./components/section2.svelte";
  
</script>

<main>
  <Header></Header>
  <article class="scrolling">
    <Section1></Section1>
    <Section2></Section2>
  </article>
</main>

<style>
  main {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100vh;
  }
  .scrolling {
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  }
  .scrolling :global(section) {
    height: 100%;
    background-color: #4B4B4F;
    scroll-snap-align: start;
  }
</style>
