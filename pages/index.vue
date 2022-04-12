<template>
  <section class="container">
    <HeaderCustom />
    <main class="page-error">
      <BannerCustom />
      <CardCustom />
    </main>
    <FooterCustom />
  </section>
</template>

<script>
import BannerCustom from '~/components/BannerCustom.vue'
import CardCustom from '~/components/CardCustom.vue'
import FooterCustom from '~/components/FooterCustom.vue'
import HeaderCustom from '~/components/HeaderCustom.vue'
export default {
  name: 'IndexPage',
  components: { HeaderCustom, FooterCustom, BannerCustom, CardCustom },
}
</script>
<style lang="scss" scoped>
.container {
  padding: 1rem;
  max-width: 100%;
  .page-error {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 64rem;
    margin: auto;
    .page-error {
      flex-direction: row;
      height: 80vh;
    }
  }
}
</style>
