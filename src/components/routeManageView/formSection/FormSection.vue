<template>
  <div class="form-section">
    <label for="routeName">Name</label>
    <input v-model="name" placeholder="Name" id="routeName" />

    <label for="description">Description</label>
    <textarea
      v-model="description"
      id="description"
      placeholder="Description"
    ></textarea>

    <label for="length">Length in kilometers</label>
    <input
      type="number"
      v-model="length"
      placeholder="Length in kilometer"
      id="length"
    />

    <label for="level">An advanced level</label>
    <select id="level" v-model="level">
      <option disabled value="">Please select one</option>
      <option>Easy</option>
      <option>Hard</option>
      <option>Medium</option>
      <option>Ninja</option>
    </select>

    <label for="type">Type</label>
    <select id="type" v-model="type">
      <option disabled value="">Please select one</option>
      <option>Tourist</option>
      <option>Sport</option>
      <option>Enduro</option>
    </select>

    <label for="routeName">Link to map</label>
    <input v-model="url" placeholder="Link to map" id="url" />

    <button>Zapisz</button>
    <button>Anuluj</button>
  </div>
</template>

<script>
export default {
  name: "FormSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3em;

  .form-group {
    margin-bottom: 1.5em;
  }

  .form-control {
    border-radius: 15px;

    &:focus {
      border-color: #f10404;
      box-shadow: 0 0 0 0.2rem #f1040405;
    }
  }

  label {
    margin-left: 1em;
    font-weight: 500;
  }

  .invalid-feedback {
    margin-left: 1em;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 3em;

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
