<template>
  <footer class="footer-home">
    <section class="footer-home__card-left">
      <p class="footer-home__description-left">{{ description }}</p>
      <div class="footer-home__pipe"></div>
    </section>
    <form class="footer-home__form" action="">
      <input
        type="search"
        class="footer-home__input footer-home__input--user"
        placeholder="Buscar usuários"
        required
      />
    </form>
    <section class="footer-home__card-right">
      <div class="footer-home__pipe"></div>
      <p class="footer-home__description-right">Application refresh in</p>
      <article class="footer-home__timer">
        <p class="footer-home__number">{{ number }}</p>
        <p class="footer-home__unit">{{ unit }}</p>
      </article>
    </section>
    <section class="footer-home__group-button">
      <button class="footer-home__button-nav">Continuar Navegando</button>
      <button
        data-testid="logout-button"
        class="footer-home__button-logout"
        title="Logout"
        @click="logout()"
      >
        Logout
      </button>
    </section>
  </footer>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default:
        'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.',
    },
  },
  data() {
    return {
      number: 180,
    }
  },
  computed: {
    unit() {
      const { number } = this
      return number > 1 ? 'seconds' : 'second'
    },
  },
  methods: {
    logout() {
      this.$store.commit('loginManager/setLogin', {})
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-home {
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: -1px;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__card-left,
  &__card-right {
    display: none;
  }

  &__form {
    margin: 0 1rem;
    max-width: 453px;
    width: 100%;
  }

  &__input {
    width: 100%;
    height: 45px;
    background: #26292c;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50px;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    text-align: center;
    color: #ffffff;

    &--user {
      background: url('/img/icons/user.png') no-repeat 10%;
      background-size: 15px;
    }
  }

  &__group-button {
    display: flex;
    align-items: center;
  }

  &__button-nav {
    border: none;
    max-width: 131px;
    width: 100%;
    height: 99px;
    background: #ffffff;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.938rem;
    text-align: center;
    color: #c13216;
  }

  &__button-logout {
    background: transparent;
    border: none;
    max-width: 119px;
    width: 100%;
    height: 55px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.938rem;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
}

@media (min-width: 1024px) {
  .footer-home {
    &__pipe {
      max-width: 61px;
      width: 100%;
      height: 0px;
      border: 1px solid #ffffff;
      transform: rotate(90deg);
      margin: 1rem;
    }

    &__card-left {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      min-width: 380px;
      max-width: 631px;
      width: 100%;
      text-align: right;
      color: #ffffff;
    }

    &__description-left {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 0.938rem;
    }

    &__card-right {
      display: flex;
      align-items: center;
      padding-right: 1rem;
      min-width: 260px;
      max-width: 280px;
      width: 100%;
      text-align: right;
      color: #ffffff;
    }

    &__description-right {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }

    &__timer {
      padding-left: 1rem;
      max-width: 81px;
      width: 100%;
      text-align: center;
    }

    &__number {
      margin: 0;
      font-weight: 400;
      font-size: 3rem;
      line-height: 3.5rem;
    }

    &__unit {
      margin: 0;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
}
</style>
