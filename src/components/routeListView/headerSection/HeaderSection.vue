<template>
  <div data-testid="header-section" class="header-section">
    <!-- <Button
        data-testid="add-new-route-button"
        onClick={handleAddNewRoute}
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<AddIcon />}
      >
      
        Add new route
      </Button> -->
    <button v-on:click="addNewRoute">Add new route</button>
  </div>
</template>

<script>
import router from "../../../router";

export default {
  name: "HeaderSection",
  methods: {
    addNewRoute() {
      router.push({ path: `/add` });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3em;

  .MuiButton-root {
    border-radius: 15px;
  }

  .MuiButton-outlinedSecondary {
    color: #f10404;
    border: 1px solid #f10404;
  }
}
</style>
