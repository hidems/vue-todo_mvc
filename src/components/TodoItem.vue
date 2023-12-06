<template>
  <li class="todo" :class="{ completed: todo.done, editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick="editing = true"></label>

      <span class="star" @click="toggleStar(todo)">
        <font-awesome-icon icon="fa-solid fa-star" v-show="todo.star" />
        <font-awesome-icon icon="fa-regular fa-star" v-show="!todo.star" />
      </span>

      <button
        class="destroy"
        @click="removeTodo(todo)"
        v-show="!editing"
      >
        delete
      </button>
      <button
        class="Save"
        v-show="editing"
      >
        Save
      </button>
      
    </div>
    <input class="edit"
      v-show="editing"
      :value="todo.text"
      ref="input"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  setup (props) {
    const input = ref(null)

    const editing = ref(false)

    watch(editing, (v) => {
      v && nextTick(() => { input.value.focus() })
    })

    const store = useStore()

    const editTodo = (todo, value) => store.dispatch('editTodo', { todo, value })
    const toggleTodo = (todo) => store.dispatch('toggleTodo', todo)
    const toggleStar = (todo) => store.dispatch('toggleStar', todo)
    const removeTodo = (todo) => store.dispatch('removeTodo', todo)

    function doneEdit (e) {
      const value = e.target.value.trim()
      if (!value) {
        removeTodo(props.todo)
      } else if (editing.value) {
        editTodo(props.todo, value)
      }
      editing.value = false
    }

    function cancelEdit(e) {
      console.log('cancelEdit')
      console.log(e)
      e.target.value = props.todo.text
      editing.value = false
    }

    return {
      input,
      editing,
      toggleTodo,
      toggleStar,
      doneEdit,
      cancelEdit,
      removeTodo
    }
  }
}
</script>