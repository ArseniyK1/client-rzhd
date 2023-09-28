<template>
  <main>
    <div class="container">
      <my-filters />
      <travel-list :travels="travelStore.filtersTravelsCostDown" />
    </div>
  </main>
</template>

<script>
import MyFilters from "@/components/MyFilters.vue";
import TravelList from "./components/TravelList.vue";
import { useTravelStore } from "./store/TravelStore";
export default {
  components: { MyFilters, TravelList },

  data() {
    return {
      travelStore: useTravelStore(),
    };
  },
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  --gray-primary: #69626d;
  --purple-primary: rgb(147, 129, 255, 1);
  --purple-secondary: rgb(147, 129, 255, 0.5);
  --white-primary: #f1f7ee;
  --yellow-primary: #f6ae2d;
  --red-orange: #e94f37;
  color: #fff;
  font-family: "Roboto", sans-serif;
}
input {
  outline: none;
}

select:focus {
  outline: none;
}

select,
option {
  cursor: pointer;
}

main {
  width: 100vw;
  height: 100vh;
  background: var(--gray-primary);
}

.container {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex: 1 0;
  box-shadow: 0px 2px 19px 0px rgba(34, 60, 80, 0.2);
  overflow: hidden;
}
</style>
