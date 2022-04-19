<template>
  <section :style="`background-image: url(${bannerSrc})`" class="banner-login">
    <figure class="banner-login__logo">
      <img :src="logoSrc" alt="logo compass white" width="306" height="69" />
    </figure>
  </section>
</template>

<script>
export default {
  name: 'BannerFigureLogin',
  props: {
    bannerSrc: {
      type: String,
      default: '/img/banner-notebook.png',
    },
    logoSrc: {
      type: String,
      default: '/img/logo-compass-white.png',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-login {
  display: none;
}
@media (min-width: 1024px) {
  .banner-login {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1080px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
