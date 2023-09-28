<template>
  <div class="list">
    <travel-item v-for="travel of travels" :key="travel.id" :travel="travel" />
  </div>
</template>

<script setup>
import TravelItem from "./TravelItem.vue";
const props = defineProps({
  travels: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  /* overflow: auto; */
}
</style>
