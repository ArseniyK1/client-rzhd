<template>
  <div class="post" v-if="posts.length > 0">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <div style="color: red" v-else>Список постов пуст!</div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.post {
  margin: 15px;
  padding: 10px;
}
</style>
