<template>
  <div class="list">
    <travel-item v-for="travel in travels" :key="travel.id" :travel="travel" />
  </div>
</template>

<script>
import TravelItem from "./TravelItem.vue";
export default {
  components: { TravelItem },
  props: {
    travels: {
      type: Array,
    },
  },
};
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
