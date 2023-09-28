<template>
  <travel-list :travels="travelStore.travels" />
</template>

<script>
import { useTravelStore } from "@/store/TravelStore";
import TravelList from "./TravelList.vue";

export default {
  components: { TravelList },
  data() {
    return {
      travelStore: useTravelStore(),
    };
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  border-left: 1px solid var(--purple-secondary);
}
</style>
