<template>
  <div class="add-item">
    <input class="title" v-model="title">
    <button class="btn" @click="addItem">Add</button>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      id: 0,
      title: ""
    };
  },
  methods: {
    addItem() {
      if (this.title.length > 0) {
        const id =
          this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
        const title = this.title;
        this.$emit("create-todo", {
          id,
          title
        });
        this.title = "";

      }
    }
  }
};
</script>

<style scoped>
</style>
