<template>
  <section class="home">
    <HeaderHome />
  </section>
</template>

<script>
import HeaderHome from '~/components/home/HeaderHome.vue'
export default {
  name: 'IndexPage',
  components: { HeaderHome },
}
</script>
<style lang="scss" scoped>
.home {
  font-family: 'Mark Pro', sans-serif;
  max-width: 100%;
  min-height: 100vh;
  background: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
}
</style>
