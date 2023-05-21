<template>
  <div class="notification">
    <Item v-for="(single, index) in item" :single='single' :index="index"></Item>
  </div>
</template>

<script>
import Item from "./item.vue";
export default {
  components: { Item },
  props: {
    item: { type: Array, required: true },
  }
};
</script>

<style>
@import '../assets/css/main.css';
</style>
