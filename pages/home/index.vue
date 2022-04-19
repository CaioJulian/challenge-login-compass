<template>
  <section class="home">
    <HeaderHome />
    <main>
      <section class="home__section-left">
        <FigureHome />
      </section>
      <section class="home__section-right">
        <CardHome />
      </section>
    </main>
    <FooterHome />
  </section>
</template>

<script>
import HeaderHome from '~/components/home/HeaderHome.vue'
import FigureHome from '~/components/home/FigureHome.vue'
import FooterHome from '~/components/home/FooterHome.vue'
import CardHome from '~/components/home/CardHome.vue'
export default {
  name: 'IndexHomePage',
  components: { HeaderHome, FigureHome, FooterHome, CardHome },
}
</script>
<style lang="scss" scoped>
.home {
  background: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  min-height: 100vh;
  font-family: 'Mark Pro', sans-serif;
  position: relative;

  &___section-left {
    width: 100%;
  }
}
</style>
