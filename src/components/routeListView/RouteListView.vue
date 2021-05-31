<template>
  <div class="route-list-view">
    <TitleSection text="Route list" />
    <HeaderSection />
    <RouteList v-bind:routes="routes" />
  </div>
</template>

<script>
import TitleSection from "@/components/titleSection/TitleSection.vue";
import HeaderSection from "@/components/routeListView/headerSection/HeaderSection.vue";
import RouteList from "@/components/routeListView/routeList/RouteList.vue";

export default {
  name: "RouteListView",
  components: {
    TitleSection,
    HeaderSection,
    RouteList,
  },
  created() {
    this.fetchData();
  },
  data: () => {
    return {
      loading: false,
      post: null,
      error: null,
      routes: [],
    };
  },
  methods: {
    async fetchData() {
      const routes = await this.$store.dispatch("getRoutes");
      this.routes = routes;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.route-list-view {
  width: 27vw;
  height: 100vh;
  display: flex;
  padding: 2.5em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #f78888 14%, #f10404 64%);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #f78888 14%, #f10404 64%);
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 4px;
  }
}
</style>
