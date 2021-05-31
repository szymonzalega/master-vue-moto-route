<template>
  <div class="route-details-view">
    <TitleSection v-bind:text="`${route.name} details`" />

    <DescriptionSection v-bind:text="route.description" />
    <DetailsSection
      v-bind:level="route.level"
      v-bind:type="route.type"
      v-bind:length="route.length"
    />
    <MapSection v-bind:url="route.url" />
  </div>
</template>

<script>
import TitleSection from "@/components/titleSection/TitleSection.vue";
import DescriptionSection from "@/components/routeDetailsView/descriptionSection/DescriptionSection.vue";
import DetailsSection from "@/components/routeDetailsView/detailsSection/DetailsSection.vue";
import MapSection from "@/components/routeDetailsView/mapSection/MapSection.vue";

export default {
  name: "Details",
  components: {
    TitleSection,
    DescriptionSection,
    DetailsSection,
    MapSection,
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
.route-details-view {
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.5em;
  background-color: #ffffff;

  > .MuiCircularProgress-colorPrimary {
    color: #f10404;
  }

  &--info {
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.6em;
      color: #f10404;
    }
  }

  &__buttons {
    .MuiButton-root {
      border-radius: 15px;
      margin-left: 1em;
    }

    &--green.MuiButton-outlinedSecondary {
      color: #009a00;
      border: 1px solid #009a00;

      &:hover {
        border: 1px solid #009a00;
        background-color: #00800017;
      }
    }

    &--red.MuiButton-outlinedSecondary {
      color: #f10404;
      border: 1px solid #f10404;
    }
  }
}
</style>