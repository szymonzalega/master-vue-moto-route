<template>
  <div id="app" class="App">
    <div class="containerr">
      <RouteListView />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import RouteListView from "@/components/routeListView/RouteListView.vue";

export default {
  name: "App",
  components: {
    RouteListView,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
