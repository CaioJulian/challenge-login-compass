<template>
  <section class="card-custom">
    <h1 class="card-custom__title">I have bad news for you</h1>
    <p class="card-custom__description">
      The page you are looking for might be removed or is temporarily
      unavailable
    </p>
    <button class="card-custom__button">
      <span class="card-custom__button-title">Back to homepage</span>
    </button>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-custom {
  font-family: 'Space Mono', monospace;
  &__title {
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.438rem;
    letter-spacing: -0.035em;
    color: #333333;
  }
  &__description {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.688rem;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  }
  &__button {
    margin-top: 3rem;
    width: 13.5rem;
    height: 4.25rem;
    background: #333333;
  }
  &__button-title {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.313rem;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    color: #ffffff;
  }
}
</style>
