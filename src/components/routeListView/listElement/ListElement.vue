<template>
  <div
    class="list-element"
    activeclass="list-element--selected"
    data-testid="list-element"
    v-on:click="selectRoute"
  >
    <div class="list-element__title">
      <span data-testid="route-name">{{ route.name }}</span>
    </div>
    <div class="list-element__details-row">
      <div class="details-row__item details-row__item--red">
        <equalizer-icon :size="30" />
        <span data-testid="route-level-details" class="item__details">
          <span class="item__label">Level</span>
          <span class="item__value">{{ route.level }}</span>
        </span>
      </div>
      <div class="details-row__item details-row__item--green">
        <chart-timeline-variant-icon :size="30" />
        <span data-testid="route-length-details" class="item__details">
          <span class="item__label">Length</span>
          <span class="item__value">{{ route.length }}km</span>
        </span>
      </div>
      <div class="details-row__item details-row__item--blue">
        <panorama-icon :size="30" />
        <span data-testid="route-type-details" class="item__details">
          <span class="item__label">Type</span>
          <span class="item__value">{{ route.type }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import EqualizerIcon from "vue-material-design-icons/Equalizer.vue";
import ChartTimelineVariantIcon from "vue-material-design-icons/ChartTimelineVariant.vue";
import PanoramaIcon from "vue-material-design-icons/Panorama.vue";
import router from "../../../router";

export default {
  name: "ListElement",
  props: ["route"],
  components: {
    EqualizerIcon,
    ChartTimelineVariantIcon,
    PanoramaIcon,
  },
  methods: {
    selectRoute() {
    //   console.log(this.route.id);
      router.push({ path: `/details/${this.route.id}` });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: unset !important;
  text-decoration: none !important;
}

a:hover {
  color: unset !important;
  text-decoration: none !important;
}

.list-element {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8em 1.1em;
  margin-bottom: 1.5em;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 38px 29px 6px rgb(247, 248, 252);
  -webkit-box-shadow: 1px 38px 29px 6px rgb(247, 248, 252);
  -moz-box-shadow: 1px 38px 29px 6px rgb(247, 248, 252);

  &--selected {
    background: #f10404;
    background: linear-gradient(
      128deg,
      rgba(241, 4, 4, 0.14889705882352944) 4%,
      rgba(255, 255, 255, 1) 53%
    );
    box-shadow: 1px 38px 29px 6px #f1040403;

    .list-element__title {
      color: #f10404;
    }
  }

  &__title {
    font-size: 19px;
    font-weight: 600;
    text-transform: uppercase;
    color: #7b7b7b;
  }

  &__details-row {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .material-design-icon {
    margin-top: 3px;
  }

  .material-design-icon__svg {
    font-size: 2rem;
    padding: 6px;
    border-radius: 50%;
  }

  .details-row {
    &__item {
      margin-right: 2.5em;
      display: flex;
      align-items: center;
      flex-direction: row;

      &--red {
        .material-design-icon__svg {
          fill: #f10404;
          background-color: #ff000017;
        }
      }

      &--green {
        .material-design-icon__svg {
          fill: #009a00;
          background-color: #00800017;
        }
      }

      &--blue {
        .material-design-icon__svg {
          fill: #04a9ff;
          background-color: #04a9ff17;
        }
      }

      &:last-child {
        margin-right: 0;
      }

      .item {
        &__details {
          margin-left: 0.8em;
          font-size: 0.9em;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &__label {
          font-size: 0.8em;
          font-weight: 500;
        }

        &__value {
          margin-top: -0.2em;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
