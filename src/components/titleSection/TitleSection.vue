

<template>
  <div class="title-section">
      <span class="title-section__title">{{text}}</span>
    </div>
</template>

<script>
export default {
  name: "TitleSection",
  props: ['text']
};
</script>

<style scoped lang="scss">
.title-section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  &__title {
    font-size: 1.6em;
    font-weight: 700;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  }
}
</style>



