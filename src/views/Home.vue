<template>
  <div class="home-view">
      <div class="home-view__section">
        <div class="home-view__buttons">
          <div class="buttons__text">Select route from list or</div>
          <button>
            Add new route
          </button>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped lang="scss">
.home-view {
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5em;
  background-color: #ffffff;

  &__section {
    display: flex;
    padding: 1.8em 2.1em;
    margin-bottom: 1.5em;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 1px 38px 29px 6px #f7f8fc;
    -webkit-box-shadow: 1px 38px 29px 6px #f7f8fc;
  }

  .buttons {
    &__text {
      font-size: 1.6em;
      font-weight: 700;
      padding-bottom: 8px;
      display: flex;
      align-items: center;
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    flex-direction: row;

    .MuiButton-root {
      border-radius: 15px;
      margin-left: 1em;
    }

    &--red.MuiButton-outlinedSecondary {
      color: #f10404;
      border: 1px solid #f10404;
    }
  }
}


</style>
