<template>
  <div class="one-post">
    <div class="post-body">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <my-button @click="$emit('remove', post)">Удалить</my-button>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style>
.one-post {
  margin: 15px;
  padding: 10px;
  border: 5px solid orange;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
