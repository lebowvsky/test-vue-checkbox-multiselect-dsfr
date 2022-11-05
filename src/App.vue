<template>
  <h1>DSFR checkbox</h1>
  <div class="container">
    <section class="dsfr-section">
      <DsfrCheckbox label="ALL" name="all" @change="lord(allChecked)" v-model="allChecked" />
      <template v-for="(data, index) in datas" :key="data">
        <DsfrCheckbox
          :label="data"
          :value="data"
          :name="data"
          :checked="isChecked[index]"
          @change="($event) => youpi($event.target.value, index)"
          v-model="isChecked[index]"
        />
      </template>
      <p>{{ modelValue }}</p>
      <p>{{ isChecked }}</p>
      <p>{{ allChecked }}</p>
    </section>
    <section class="custom-section">
      <DsfrCheckbox label="ALL" name="allcustom" v-model="allCustomChecked" @change="onAllCustomChange" />

      <div class="check-wrapper" v-for="(data, index) in datas" :key="`${data}${index}`">
        <input type="checkbox" name="youpi" id="youpi" :value="data" v-model="customResult" @change="checkboxChange" />
      </div>

      <p>{{ customResult }}</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const modelValue = ref<any[]>([]);
const datas = ["truc", "machin", "chose"];

const isChecked = ref<any[]>([]);
const allChecked = ref(false);

const lord = (event: boolean) => {
  datas.forEach((data, index) => {
    isChecked.value[index] = event;
    if (event) {
      modelValue.value[index] = data;
    } else {
      modelValue.value[index] = null;
    }
  });
};

const youpi = (event: string, index: number) => {
  if (!isChecked.value[index]) {
    modelValue.value[index] = null;
    allChecked.value = false;
  } else {
    modelValue.value[index] = event;
  }
};

const customResult = ref<string[]>([]);
const allCustomChecked = ref<boolean>(false);
const onAllCustomChange = () => {
  if (!allCustomChecked.value) {
    customResult.value = [];
  }
  if (allCustomChecked.value) {
    customResult.value = [...datas];
  }
};
const checkboxChange = () => {
  allCustomChecked.value = false;
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .container {
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;

    section {
      border: 1px solid grey;
      padding: 20px;
      margin: 30px 0;
      border-radius: 5px;
    }

    #input {
      /* all: unset !important; */
    }
    .check-wrapper {
      margin: 24px 0;

      #youpi {
        position: relative;
        display: block;
        height: 24px;
        width: 24px;
        border: 1px solid black;
        opacity: 1;
        border-radius: 3px;
        overflow: hidden;

        &:checked {
          &::after {
            content: "";
            position: absolute;
            background-color: blue;
            background-image: url("./assets/check-line.svg");
            background-position: center;
            background-repeat: no-repeat;
            height: 24px;
            width: 24px;
          }
        }
      }
    }
  }
}
</style>
