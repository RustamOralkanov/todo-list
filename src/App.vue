<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFilters from './components/AppFilters.vue'
import AppMain from './components/AppMain.vue'
import AppAddTodo from './components/AppAddTodo.vue'
import AppFooter from './components/AppFooter.vue'
import type { Todos, ActiveFilter } from './types/Types'
import { computed, ref } from 'vue';

const addTodo = (todo: Todos) => {
  todos.value.push(todo)
}

const todos = ref<Todos[]>([
  {
    id: 1,
    text: "delectus aut autem",
    completed: false
  },
  {
    id: 2,
    text: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    id: 3,
    text: "fugiat veniam minus",
    completed: false
  },
  {
    id: 4,
    text: "et porro tempora",
    completed: true
  },
  {
    id: 5,
    text: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    id: 6,
    text: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
])

const toggleTodo = (id: number) => {
  const targetTodo = todos.value.find(todo => todo.id === id)

  if (targetTodo) {
    targetTodo.completed = !targetTodo.completed
  }
}

const removeTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const activeFilter = ref<ActiveFilter>('All')
const setFilter = (filter: ActiveFilter) => {
  activeFilter.value = filter
}

const filteredTodos = computed((): Todos[] => {
  switch (activeFilter.value) {
    case 'Active':
      return todos.value.filter(todo => !todo.completed)
    case 'Done':
      return todos.value.filter(todo => todo.completed)
    case 'All':
    default:
      return todos.value
  }
})

const stats = computed(() => {
  return {
    active: todos.value.filter(todo => !todo.completed).length,
    done: todos.value.filter(todo => todo.completed).length
  }
})
</script>

<template>
  <div id="app">
    <AppHeader />
    <AppFilters :active-filter="activeFilter" @set-filter="setFilter" />
    <AppMain :todos="filteredTodos" @toggle-todo="toggleTodo" @remove-todo="removeTodo" />
    <AppAddTodo @add-todo="addTodo" />
    <AppFooter :stats="stats" />
  </div>
</template>

<style scoped></style>
