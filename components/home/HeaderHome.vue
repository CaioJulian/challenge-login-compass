<template>
  <header class="header-home">
    <figure class="header-home__figure">
      <img
        src="/img/logo-compass.png"
        alt="logo compass"
        width="150"
        height="43"
      />
    </figure>
    <section class="header-home__card">
      <p class="header-home__location">{{ location }}</p>
      <p class="header-home__temp">{{ temp }}°</p>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      location: 'Passo Fundo - RS',
      temp: '22',
    }
  },
}
</script>

<style lang="scss" scoped>
.header-home {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  text-align: center;
  color: #222222;

  &__figure {
    margin: 0;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__location {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  &__temp {
    margin: 0;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;

    &::before {
      content: url('/img/icons/cloudy.png');
      position: relative;
      top: -10px;
      left: -10px;
    }
  }
}
</style>
