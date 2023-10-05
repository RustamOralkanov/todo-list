<template>
    <li class="todo-item" :class="{ 'todo-item--done': todo.completed }" @click="toggleTodo">
        <div class="todo-item__status">
            <i class="bi bi-check2"></i>
        </div>
        <span class="todo-item__text">{{ todo.text }}</span>
        <button class="todo-item__remove-button">
            <i class="bi bi-trash3" @click.stop="removeTodo"></i>
        </button>
    </li>
</template>

<script setup lang="ts">
import type { Todos } from '../types/Types'

interface Props {
    todo: Todos
}

const props = defineProps<Props>()
const emit = defineEmits<{ toggleTodo: [id: number], removeTodo: [id: number] }>()

const toggleTodo = () => {
    emit('toggleTodo', props.todo.id)
}

const removeTodo = () => {
    emit('removeTodo', props.todo.id)
}
</script>
