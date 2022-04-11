<template>
  <section class="container">
    <HeaderCustom />
  </section>
</template>

<script>
import HeaderCustom from '~/components/HeaderCustom.vue'
export default {
  name: 'IndexPage',
  components: { HeaderCustom },
}
</script>
<style lang="scss" scoped>
.container {
  padding: 1rem;
}
</style>
