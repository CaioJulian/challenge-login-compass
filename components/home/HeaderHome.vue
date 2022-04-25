<template>
  <header class="header-home">
    <figure class="header-home__figure">
      <img :src="src" alt="logo compass" width="150" height="43" />
    </figure>
    <section class="header-home__card-middle">
      <p class="header-home__clock">{{ clock }}</p>
      <p class="header-home__date">{{ dateFormat }}</p>
    </section>
    <section class="header-home__card-right">
      <p class="header-home__location">{{ location }}</p>
      <p class="header-home__temp">{{ temp }}°</p>
    </section>
  </header>
</template>

<script>
import months from '@/server/months.json'
import days from '@/server/days.json'
export default {
  props: {
    src: {
      type: String,
      default: '/img/logo-compass.png',
    },
  },
  data() {
    return {
      location: 'Ribeirão Preto - SP',
      temp: '25',
      date: new Date(),
    }
  },
  computed: {
    dateFormat() {
      const { date } = this
      return `${days[date.getDay()]}, ${date.getDate()} de ${
        months[date.getMonth()]
      } de ${date.getFullYear()}`
    },
    clock() {
      const { date } = this
      return `${`0${date.getHours()}`.slice(
        -2
      )}:${`0${date.getMinutes()}`.slice(-2)}`
    },
  },
  watch: {
    date: {
      handler() {
        setTimeout(() => {
          this.date = new Date()
        }, 1000)
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.header-home {
  background: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  text-align: center;
  color: #222222;

  &__figure {
    margin: 0;
  }

  &__card-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__location {
    margin: 0;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  &__temp {
    margin: 0;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.813rem;

    &::before {
      content: url('/img/icons/cloudy.png');
      position: relative;
      top: -10px;
      left: -10px;
    }
  }

  &__card-middle {
    display: none;
    text-align: center;
  }

  &__clock {
    margin: 0;
    font-weight: 700;
    font-size: 9rem;
    line-height: 7.063rem;
  }

  &__date {
    margin: 0;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
}
@media (min-width: 1024px) {
  .header-home__card-middle {
    display: block;
  }
}
</style>
