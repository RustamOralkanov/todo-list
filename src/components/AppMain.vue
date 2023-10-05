<template>
    <main class="app-main">
        <ul class="todo-list">
            <AppTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-todo="toggleTodo"
                @remove-todo="removeTodo" />
        </ul>
    </main>
</template>

<script setup lang="ts">
import AppTodoItem from './AppTodoItem.vue';
import type { Todos } from '../types/Types'

interface Props {
    todos: Todos[]
}

defineProps<Props>()
const emit = defineEmits<{ toggleTodo: [id: number], removeTodo: [id: number] }>()

const toggleTodo = (id: number) => {
    emit('toggleTodo', id)
}

const removeTodo = (id: number) => {
    emit('removeTodo', id)
}
</script>

<style scoped></style>