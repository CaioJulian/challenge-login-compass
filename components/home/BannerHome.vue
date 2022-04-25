<template>
  <section
    :style="`background-image: url(${src})`"
    class="banner-home"
  ></section>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/img/ball-logo-compass-desktop.png',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-home {
  display: flex;
  width: 100%;
  height: 676px;
  background-repeat: no-repeat;
  background-size: auto 576px;
  background-position: left bottom;
  position: absolute;
  bottom: 0;
}
@media (min-width: 426px) {
  .banner-home {
    background-size: auto 676px;
  }
}
@media (min-width: 1024px) {
  .banner-home {
    height: 725px;
    background-size: auto 725px;
  }
}
</style>
