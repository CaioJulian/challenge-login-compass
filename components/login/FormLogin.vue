<template>
  <section class="form">
    <article class="form__body">
      <h2 class="form__title">Login</h2>
      <form class="form__group" @submit.prevent="handleSubmit">
        <input
          v-model.trim="form.user"
          data-testid="user-input"
          class="form__input form__input--icon-user"
          :class="{ 'form__input--error': !isValid }"
          type="text"
          placeholder="Usuário"
          required
        />
        <input
          v-model.number="form.password"
          data-testid="password-input"
          class="form__input form__input--icon-lock"
          :class="{ 'form__input--error': !isValid }"
          type="password"
          placeholder="Senha"
          inputmode="numeric"
          required
        />
        <p v-show="!isValid" class="form__message-error">
          Ops, usuário ou senha inválidos. Tente novamente!
        </p>
        <button
          data-testid="login-button"
          class="form__button"
          :class="{ 'form__button--small-margin': !isValid }"
          type="submit"
        >
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
  computed: {
    isValid() {
      return this.$store.state.loginManager.isValid
    },
  },
  methods: {
    handleSubmit() {
      const handleValid = this.handleValidation()

      if (handleValid)
        this.$store.dispatch('loginManager/fetchLogin', this.form)
    },

    handleValidation() {
      // eslint-disable-next-line prefer-const
      let { user, password } = this.form
      user = user.toLowerCase()
      this.form.user = user

      const resultUser = /^[a-z.]+$/.test(user)

      const passLength = password.toString().length

      const resultNumberPassword = /^[0-9]+$/.test(password)

      const resultLengthPassword = passLength >= 6 && passLength < 9

      const result = resultUser && resultLengthPassword && resultNumberPassword

      this.$store.commit('loginManager/setIsValid', result)

      return result
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

    &--error {
      border: 1px solid #e9b425;
    }
  }

  &__message-error {
    margin: 0 1.5rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #e9b425;
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
    cursor: pointer;

    &--small-margin {
      margin-top: 2.5rem;
    }
  }
}
</style>
