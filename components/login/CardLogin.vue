<template>
  <section class="card-login">
    <article class="card-login__header">
      <h1 class="card-login__title">{{ title }}</h1>
      <p class="card-login__description">
        {{ description }}
      </p>
    </article>
  </section>
</template>

<script>
export default {
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
.card-login {
  display: flex;
  flex-direction: column;
  align-items: center;

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
@media (min-width: 1024px) {
  .card-login {
    margin-top: 7rem;
  }
}
</style>
