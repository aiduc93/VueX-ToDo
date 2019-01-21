<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CreateToDo v-bind:todos="todoList" v-on:create-todo="addTodo"></CreateToDo>
    <ul class="list-item">
      <li v-for="item in todoList" v-bind:key="item.id">
        <p>{{item.id}}---{{item.title}}</p>
        <button>Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import CreateToDo from "./CreateTodo";
export default {
  components: {
    CreateToDo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo A"
        },
        {
          id: 2,
          title: "Todo B"
        },
        {
          id: 3,
          title: "Todo C"
        },
        {
          id: 4,
          title: "Todo D"
        }
      ]
    };
  },
  computed: {
    todoList() {
      return this.$store.getters.todos;
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch("addTodo", todo);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
  display: block;
  margin-bottom: 15px;
}
p,
button {
  display: inline;
  margin-right: 15px;
}
</style>


