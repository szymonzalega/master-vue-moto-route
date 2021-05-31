<template>
  <div class="map-section">
    <iframe
      title="map"
      class="map-section__iframe"
      v-bind:src="url"
      frameBorder="0"
      aria-hidden="false"
      tabIndex="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MapSection",
  props: ["url"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
:host {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 100ms ease-in;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 1px 38px 29px 6px #f7f8fc;
}

.map-section {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 100ms ease-in;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 1px 38px 29px 6px #f7f8fc;

  > .MuiCircularProgress-colorPrimary {
    color: #f10404;
  }

  &__iframe {
    border: 0;
    width: 100%;
    height: 100%;

    &--hidden {
      display: none;
    }
  }
}
</style>
