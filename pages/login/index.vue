<template>
  <section class="login">
    <LogoFigureLogin />
    <CardLogin />
  </section>
</template>

<script>
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'
import CardLogin from '~/components/login/CardLogin.vue'
export default {
  name: 'IndexLoginPage',
  components: { LogoFigureLogin, CardLogin },
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
}
</style>
