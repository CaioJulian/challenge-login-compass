<template>
  <section class="login">
    <FigureLogin />

    <section class="login__card">
      <article>
        <h1 class="login__title">{{ title }}</h1>
        <p class="login__description">
          {{ description }}
        </p>
      </article>
    </section>
  </section>
</template>

<script>
import FigureLogin from '~/components/login/FigureLogin.vue'
export default {
  name: 'LoginPage',
  components: { FigureLogin },
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
  background: #292c30;
  max-width: 100%;
  height: 100vh;
  padding: 1rem;
  color: #e0e0e0;
  font-family: 'Mark Pro', sans-serif;

  &__card {
    padding: 1rem 2rem;
  }

  &__title {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 60px;
    line-height: 76px;
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
