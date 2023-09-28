<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  background: orange;
  padding: 10px;
  cursor: pointer;
  color: rgb(227, 227, 227);
  border: none;
  border-radius: 15px;
}

.btn:hover {
  background: teal;
  color: orange;
}
</style>
