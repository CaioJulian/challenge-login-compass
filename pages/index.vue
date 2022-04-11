<template>
  <section class="container">
    <HeaderCustom />
    <main>
      <BannerCustom />
    </main>
    <FooterCustom />
  </section>
</template>

<script>
import BannerCustom from '~/components/BannerCustom.vue'
import FooterCustom from '~/components/FooterCustom.vue'
import HeaderCustom from '~/components/HeaderCustom.vue'
export default {
  name: 'IndexPage',
  components: { HeaderCustom, FooterCustom, BannerCustom },
}
</script>
<style lang="scss" scoped>
.container {
  padding: 1rem;
}
</style>
