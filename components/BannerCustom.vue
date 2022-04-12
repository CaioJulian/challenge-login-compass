<template>
  <section class="banner-custom">
    <figure class="banner-custom__figure">
      <img
        class="banner-custom__img"
        src="/img/image-error-404.png"
        alt="error 404"
        width="287"
        height="240"
      />
    </figure>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner-custom {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .banner-custom {
    &__figure {
      margin-left: 0;
    }
    &__img {
      width: 540px;
      height: 452px;
    }
  }
}
</style>
