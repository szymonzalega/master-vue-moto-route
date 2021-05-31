<template>
  <div class="details-section">
    <div class="details-item details-item--red">
      <equalizer-icon :size="30" />
      <div class="details-item__name">Level</div>
      <div class="details-item__value">{{ level.toUpperCase() }}</div>
    </div>

    <div class="details-item details-item--green">
      <chart-timeline-variant-icon :size="30" />
      <div class="details-item__name">Length</div>
      <div class="details-item__value">
        <span>{{ length }}</span>
        <span>km</span>
      </div>
    </div>

    <div class="details-item details-item--blue">
      <panorama-icon :size="30" />
      <div class="details-item__name">Type</div>
      <div class="details-item__value">{{ type.toUpperCase() }}</div>
    </div>
  </div>
</template>

<script>
import EqualizerIcon from "vue-material-design-icons/Equalizer.vue";
import ChartTimelineVariantIcon from "vue-material-design-icons/ChartTimelineVariant.vue";
import PanoramaIcon from "vue-material-design-icons/Panorama.vue";

export default {
  name: "DetailsSection",
  components: {
    EqualizerIcon,
    ChartTimelineVariantIcon,
    PanoramaIcon,
  },
  props: ["level", "length", "type"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
:host {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 2em;
}

.details-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 2em;

  &__item {
    margin-right: 1.5em;
    display: flex;
    align-items: center;
    flex-direction: row;

    &:last-child {
      margin-right: 0;
    }

    .item {
      &__label {
        margin-left: 0.3em;
      }
    }
  }
}

.details-item {
  margin-right: 1.5em;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 0.8em 1.1em;
  margin-bottom: 1.5em;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 38px 29px 6px #f7f8fc;

  &:last-child {
    margin-right: 0;
  }

  .mat-icon {
    font-size: 1.5rem;
    padding: 12px;
    border-radius: 50%;
    height: unset;
    width: unset;
  }

  &--red {
    .mat-icon {
      color: #f10404;
      background-color: #ff000017;
    }
  }

  &--green {
    .mat-icon {
      color: #009a00;
      background-color: #00800017;
    }
  }

  &--blue {
    .mat-icon {
      color: #04a9ff;
      background-color: #04a9ff17;
    }
  }

  &__name {
    font-size: 1.1em;
    font-weight: 300;
    text-transform: uppercase;
    color: #7b7b7b;
    padding-top: 1.3em;
  }

  &__value {
    font-size: 2.3em;
    font-weight: 500;

    span:nth-child(2) {
      font-size: 0.6em;
    }
  }
}
</style>
