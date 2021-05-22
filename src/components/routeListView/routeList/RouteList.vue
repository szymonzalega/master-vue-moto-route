<template>
  <div data-testid="route-list" class="route-list">
    <!-- <pre>{{routes}}</pre> -->
    <ListElement v-for="route in routes" :key="route.id" v-bind:route="route" />
  </div>
</template>

<script>
import ListElement from "@/components/routeListView/listElement/ListElement.vue";

export default {
  name: "RouteList",
  props: ["routes"],
  components: {
    ListElement,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.route-list {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;

  > .MuiCircularProgress-colorPrimary {
    color: #f10404;
  }
}
</style>
