<script lang="ts">
  export let card: {
    imgURL: string;
    title: string;
    description: string;
    link: string;
  } = {
    imgURL: "https://via.placeholder.com/320x240",
    title: "Lorem ipsum card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic rem asperiores distinctio expedita amet corrupti dolores unde nihil impedit.`,
    link: "https://example.com",
  };
</script>

<div class="card">
  <img class="card__image" src={card.imgURL} alt="toaxt card" />
  <h3 class="card__title">{card.title}</h3>
  <p class="card__description">
    {card.description}
  </p>
  <a target="_blank" href={card.link} class="card__redirect">
    Acessar <i class="fa fa-external-link"></i>
  </a>
</div>

<style>
  .card {
    overflow: hidden;
    text-decoration: none;
    color: #050506;
    box-shadow: #05050650 0 1px 8px;
    border-radius: 12px;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    max-width: 320px;
    min-height: 440px;
    gap: 0.5rem;
  }
  .card__title {
    position: relative;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    padding-inline: 1.5rem;
  }
  .card__title::after {
    --_separator-width: 6rem;
    content: "";
    position: absolute;
    bottom: -4px;
    left: var(--_separator-width);
    right: var(--_separator-width);
    height: 1px;
    background-color: #05050640;
  }
  .card__description {
    text-align: justify;
    font-weight: 400;
    padding-inline: 1.5rem;
  }
  .card__redirect {
    position: relative;
    text-align: center;
    font-size: 0.7rem;
    padding-bottom: 8px;
  }
  .card__redirect::after {
    --_separator-width: 7rem;
    content: "";
    position: absolute;
    top: -4px;
    left: var(--_separator-width);
    right: var(--_separator-width);
    height: 1px;
    background-color: #05050640;
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
