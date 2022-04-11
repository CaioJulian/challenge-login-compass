<template>
  <section class="container">
    <HeaderCustom />
    <main>
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
}
</style>
