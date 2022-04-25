<template>
  <section class="login">
    <section class="login__card-left">
      <LogoFigureLogin />
      <CardLogin />
      <FormLogin />
    </section>
    <section class="login__card-right">
      <BannerFigureLogin />
    </section>
  </section>
</template>

<script>
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'
import CardLogin from '~/components/login/CardLogin.vue'
import BannerFigureLogin from '~/components/login/BannerFigureLogin.vue'
import FormLogin from '~/components/login/FormLogin.vue'
import CheckUserLoginLocalStorageMixins from '@/mixins/CheckUserLoginLocalStorage'
export default {
  name: 'IndexLoginPage',
  components: { LogoFigureLogin, CardLogin, BannerFigureLogin, FormLogin },
  mixins: [CheckUserLoginLocalStorageMixins],
}
</script>

<style lang="scss" scoped>
.login {
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  min-height: 100vh;
  position: relative;

  color: #e0e0e0;
  font-family: 'Mark Pro', sans-serif;

  display: flex;
  justify-content: space-around;

  &__card-left {
    width: 100%;
  }
  &__card-right {
    display: none;
  }
}
@media (min-width: 1024px) {
  .login__card-right {
    display: block;
    width: 100%;
  }
}
</style>
