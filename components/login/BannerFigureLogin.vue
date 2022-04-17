<template>
  <figure class="banner-figure-login">
    <img
      class="banner-figure-login__img"
      :src="src"
      alt="banner notebook"
      width="960"
      height="1080"
    />
  </figure>
</template>

<script>
export default {
  name: 'BannerFigureLogin',
  props: {
    src: {
      type: String,
      default: '/img/banner-notebook.png',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-figure-login {
  display: none;
  margin: 0;
}
@media (min-width: 1024px) {
  .banner-figure-login {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;

    &__img {
      max-width: 400px;
      height: auto;
      object-fit: cover;
      object-position: left;
    }
  }
}
@media (min-width: 1280px) {
  .banner-figure-login__img {
    max-width: 100%;
  }
}
</style>
