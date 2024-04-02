<script lang="ts">
  import Card from "./Card.svelte";

  import GridSection from "./components/GridSection.svelte";
</script>

<main>
  <GridSection>
    <div slot="left" class="intro__info-side">
      <h1>Jonas de Melo</h1>
      <p class="intro__description">Full Stack Web Developer</p>
    </div>
    <div slot="right" class="intro__fox-side"></div>
  </GridSection>

  <GridSection columns="1fr 80%">
    <div slot="left" class="portfolio_title-section">
      <h2>Portfolio</h2>
    </div>
    <div slot="right">
      <div class="showcase">
        <div class="showcase__background">
          <h3 class="showcase__title">Showcase</h3>
          <p class="showcase__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            rerum minima nesciunt deserunt, recusandae commodi reiciendis ad
            laboriosam repellendus? Excepturi.
          </p>
        </div>
      </div>
    </div>
  </GridSection>
</main>

<style>
  .showcase {
    background-image: url(/assets/showcase.jpg);
  }
  h1 {
    font-size: 80px;
    word-spacing: -2px;
    margin: 0;
  }

  .intro__description {
    margin-top: 20px;
  }

  .intro__info-side {
    place-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .intro__fox-side {
    background-image: url(/assets/bg.jpg);
    background-size: cover;
    background-position: 50%;
    filter: grayscale(0.5) contrast(1.2);
  }

  .portfolio_title-section h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 100px;
    background-color: black;
    color: white;
    writing-mode: sideways-lr;
  }
</style>
