<template>
  <section class="login">
    <LogoFigureLogin />

    <section class="login__card">
      <article class="login__header">
        <h1 class="login__title">{{ title }}</h1>
        <p class="login__description">
          {{ description }}
        </p>
      </article>
      <FormLogin />
    </section>
  </section>
</template>

<script>
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'
import FormLogin from '~/components/login/FormLogin.vue'
export default {
  name: 'IndexLoginPage',
  components: { LogoFigureLogin, FormLogin },
  props: {
    title: {
      type: String,
      default: 'Olá,',
    },
    description: {
      type: String,
      default:
        'Para continuar navegando de forma segura, efetue o login na rede.',
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  min-height: 100vh;

  padding: 1rem;
  color: #e0e0e0;
  font-family: 'Mark Pro', sans-serif;

  &__card {
    padding: 1rem 2rem;
  }

  &__header {
    max-width: 301px;
    width: 100%;
  }

  &__title {
    margin: 0;
    font-weight: 400;
    font-size: 3.75rem;
    line-height: 4.75rem;
  }

  &__description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
  }
}
</style>
