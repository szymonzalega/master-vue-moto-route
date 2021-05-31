<template>
  <div class="description-section">
      <div class="description-section__text">{{text}}</div>
    </div>
</template>

<script>
export default {
  name: "DescriptionSection",
  props: ['text']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description-section {
  margin-top: 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8em 1.1em;
  margin-bottom: 1.5em;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 38px 29px 6px #f7f8fc;

  &__text {
    max-height: 150px;
    overflow-y: auto;
    font-size: 1.1em;

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
}

</style>
