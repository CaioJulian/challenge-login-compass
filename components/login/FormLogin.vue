<template>
  <section class="form">
    <article class="form__body">
      <h2 class="form__title">Login</h2>
      <form class="form__group" @submit.prevent="handleSubmit">
        <input
          v-model="form.user"
          data-testid="user-input"
          class="form__input form__input--icon-user"
          type="text"
          placeholder="Usuário"
          required
        />
        <input
          v-model.number="form.password"
          data-testid="password-input"
          class="form__input form__input--icon-lock"
          type="password"
          placeholder="Senha"
          required
        />
        <button data-testid="login-button" class="form__button" type="submit">
          Continuar
        </button>
      </form>
    </article>
  </section>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    return {
      form: {
        user: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('loginManager/fetchLogin', this.form)
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__body {
    max-width: 300px;
    width: 100%;
  }
  &__group {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 2.375rem;
  }

  &__input {
    max-width: 379px;
    width: 100%;
    height: 60px;
    background: #26292c;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50px;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #e0e0e0;

    &--icon-user {
      background: url('/img/icons/user.png') no-repeat 95%;
      background-size: 15px;
    }

    &--icon-lock {
      background: url('/img/icons/lock.png') no-repeat 95%;
      background-size: 15px;
    }
  }

  &__button {
    margin: 5rem 0;
    max-width: 379px;
    width: 100%;
    height: 67px;
    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.438rem;
    color: #ffffff;
  }
}
</style>
