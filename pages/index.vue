<template>
  <section class="container">
    <HeaderCustom />
    <FooterCustom />
  </section>
</template>

<script>
import FooterCustom from '~/components/FooterCustom.vue'
import HeaderCustom from '~/components/HeaderCustom.vue'
export default {
  name: 'IndexPage',
  components: { HeaderCustom, FooterCustom },
}
</script>
<style lang="scss" scoped>
.container {
  padding: 1rem;
}
</style>
