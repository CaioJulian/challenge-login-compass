<template>
  <figure class="figure-home">
    <img
      src="/img/ball-logo-compass.png"
      alt="ball logo compass"
      width="446"
      height="676"
    />
  </figure>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.figure-home {
  margin: 0;
  position: relative;
  left: -20%;
}
@media (min-width: 768px) {
  .figure-home {
    position: absolute;
    left: auto;
    top: 30%;
  }
}
</style>
