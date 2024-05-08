<script>
  import Header from "./components/header.svelte";
  import Section1 from "./components/section1.svelte";
  import Section2 from "./components/section2.svelte";
  // @ts-ignore
  import Section3 from "./components/section3.svelte";
  
  let articleRef
  let demoSection
  let purchaseSection
</script>

<main>
  <Header></Header>
  <article class="scrolling" bind:this={articleRef}>
    <Section1 {articleRef} bind:demoSection/>
    <Section2 bind:demoSection {purchaseSection}/>
    <Section3 bind:purchaseSection/>
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
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  .scrolling :global(section) {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    padding: 0 2%;
    background-color: var(--gray);
    scroll-snap-align: start;
  }
</style>
