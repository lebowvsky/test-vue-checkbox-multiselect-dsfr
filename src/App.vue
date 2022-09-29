<template>
  <h1>DSFR checkbox</h1>
  <DsfrCheckbox
    label="ALL"
    name="all"
    @change="($event) => lord(allChecked)"
    v-model="allChecked"
  />
  <div class="container">
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
    <p>{{modelValue}}</p>
    <p>{{isChecked}}</p>
    <p>{{allChecked}}</p>

  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const modelValue = ref<any[]>([]);
const datas = ["truc", "machin", "chose"]

const isChecked = ref<any[]>([])
const allChecked = ref(false)

const lord = (event: boolean) => {
  datas.forEach((data, index) => {
    isChecked.value[index] = event
    if(event){
      modelValue.value[index] = data
    } else {
      modelValue.value[index] = null
    }
  })
}

const youpi = (event: string, index: number) => {
  if(!isChecked.value[index] ) {
    modelValue.value[index] = null
    allChecked.value = false
  } else {
    modelValue.value[index] = event;
  }
}
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

    #input {
      all: unset !important;
    }
  }
}
</style>
