<script lang="ts">
</script>

<main>
  <section class="intro__section">
    <div class="intro__left">
      <div class="box" style="font-size: 4rem;">
        <h1>Jonas de Melo</h1>
      </div>
      <div class="black-box">
        <p>Full Stack Web Developer</p>
      </div>
    </div>

    <div class="intro__right">
      <div class="intro__logos">
        <img class="black" src="assets/svg/angular.svg" alt="angular" />
        <img src="assets/svg/css.svg" alt="css" />
        <img class="black" src="assets/svg/git.svg" alt="git" />
        <img src="assets/svg/go.svg" alt="go" />
        <img class="black" src="assets/svg/html.svg" alt="html" />
        <img src="assets/svg/java.svg" alt="java" />
        <img src="assets/svg/javascript.svg" alt="javascript" />
        <img src="assets/svg/linux.svg" alt="linux" />
        <img class="black" src="assets/svg/spring.svg" alt="spring" />
        <img src="assets/svg/sql.svg" alt="sql" />
        <img class="black" src="assets/svg/svelte.svg" alt="svelte" />
        <img src="assets/svg/typescript.svg" alt="typescript" />
        <img class="black" src="assets/svg/vscode.svg" alt="vscode" />
        <img src="assets/svg/windows.svg" alt="windows" />
      </div>

      <div class="about">
        <p>Ele/Dele</p>
        <p>21 anos</p>
        <p>Juazeiro do Norte, CE</p>
        <p>
          Bacharelado em <span class="black">
            Análise e Desenvolvimento de Sistemas
          </span>
        </p>
        <p>Estudo programação desde meus <span class="black">14 anos</span></p>
        <p>
          <span class="black">Desenvolvi</span> projetos open-source para o GitHub
        </p>
        <p>
          Amo conversar sobre <span class="black">programação</span> e
          <span class="black">tecnologia</span>
        </p>
        <p></p>
      </div>
    </div>
  </section>
</main>

<style>
  .intro__right {
    display: grid;
    gap: 1rem;
    /* height: 100%; */
    grid-template-rows: auto 1fr;
  }
  .intro__logos {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(7, 1fr);
    border: var(--clr-black) solid 3px;
  }
  .intro__logos img {
    width: 4rem;
  }
  .intro__section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    height: 100svh;
    width: 100%;
  }
  h1 {
    font-size: 4rem;
  }
  .intro__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
  .black {
    filter: invert();
    background: var(--clr-white);
  }
  .box {
    border: black solid 3px;
    padding: 0 0.5em;
    background-color: var(--clr-white);
    color: var(--clr-black);
  }
  .black-box {
    border: black solid 3px;
    padding: 0 0.5em;
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
  main {
    max-width: 1000px;
    width: 100%;
  }
</style>
