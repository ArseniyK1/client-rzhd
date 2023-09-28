<template>
  <main>
    <div class="container">
      <my-filters />
      <main-body />
    </div>
  </main>
</template>

<script>
import MyFilters from "@/components/MyFilters.vue";
import MainBody from "@/components/MainBody.vue";
// import PostList from "@/components/PostList.vue";
// import PostForm from "@/components/PostForm.vue";
export default {
  components: { MyFilters, MainBody },
  // components: {
  //   PostList,
  //   PostForm,
  // },
  data() {
    return {
      // posts: [
      //   { id: 1, title: "JavaScript", body: "Описание №1" },
      //   { id: 2, title: "TypeScript", body: "Описание №2" },
      //   { id: 3, title: "ReactJS", body: "Описание №3" },
      // ],
      // dialogVisible: false,
    };
  },
  methods: {
    // createPost(post) {
    //   this.posts.push(post);
    //   this.title = "";
    //   this.body = "";
    //   this.dialogVisible = false;
    // },
    // removePost(post) {
    //   this.posts = this.posts.filter((p) => p.id !== post.id);
    // },
    // showDialog() {
    //   this.dialogVisible = true;
    // },
  },
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
