<template>
  <div class="route-manage-view">
    <TitleSection v-bind:text="`add new route`" />
    <FormSection />
  </div>
</template>

<script>
import FormSection from "@/components/routeManageView/formSection/FormSection.vue";

export default {
  name: "Details",
  components: {
    FormSection,
  },
  watch: {
    $route() {
      this.getRoute(this.$route.params.id);
    },
  },
  data: () => {
    return {
      route: {},
    };
  },
  methods: {
    async getRoute(routeId) {
      const route = this.$store.getters.getRouteById(routeId);
      this.route = route;
    },
  },
};
</script>

<style scoped lang="scss">
.route-manage-view {
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.5em;
  background-color: #ffffff;
}

</style>