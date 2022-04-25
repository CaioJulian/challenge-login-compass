<template>
  <section class="card-home">
    <article class="card-home__article">
      <p class="card-home__title card-home__title--small">Our mission is</p>
      <p class="card-home__description">Nossa missão é</p>
    </article>
    <article class="card-home__article">
      <p class="card-home__title">to transform the world</p>
      <p class="card-home__description">transformar o mundo</p>
    </article>
    <article class="card-home__article">
      <p class="card-home__title">building digital experiences</p>
      <p class="card-home__description">construindo experiências digitais</p>
    </article>
    <article class="card-home__article">
      <p class="card-home__title">that enable our client’s growth</p>
      <p class="card-home__description">
        que permitam o crescimento dos nossos clientes
      </p>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-home {
  display: none;
}

@media (min-width: 1024px) {
  .card-home {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    padding-right: 4rem;
    height: 500px;
    text-shadow: 1px 1px #f0f0f0;

    &__title {
      margin: 0;
      font-weight: 700;
      font-size: 4rem;
      line-height: 5.063rem;
      color: #c12d18;

      &--small {
        font-size: 2.25rem;
        line-height: 2.875rem;
      }
    }

    &__description {
      margin: 0;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.875rem;
      color: #222222;
    }
  }
}
</style>
