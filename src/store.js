import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      state.todos.filter((todo, index) => {
        if (todo.id === id) {
          return state.todos.splice(index, 1);
        }
      })
    }
  },
  actions: {
    getTodo({
      commit
    }, todo) {
      commit('GET_TODO', todo);
    },
    addTodo({
      commit
    }, todo) {
      commit('ADD_TODO', todo);
    },
    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id);
    }
  },
  getters: {
    todos: state => state.todos
  }
});
