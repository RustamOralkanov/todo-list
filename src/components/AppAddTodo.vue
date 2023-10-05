<template>
    <section class="add-todo">
        <form class="add-todo__form" v-if="isFormVisible" @submit.prevent="addTodo">
            <button class="close-button" type="button" @click="closeForm">
                <i class="bi bi-x"></i>
            </button>
            <div class="text-input text-input--focus">
                <input class="input" v-model="todoText" />
            </div>
            <button class="button button--filled">Add task</button>
        </form>
        <button class="add-todo__show-form-button" v-else @click="showForm">
            <i class="bi bi-plus-lg"></i>
        </button>
    </section>
</template>

<script setup lang="ts">
import type { Todos } from '@/types/Types';
import { ref } from 'vue';

const isFormVisible = ref<Boolean>(false)
const todoText = ref<String>('')

const showForm = () => {
    isFormVisible.value = true
}

const closeForm = () => {
    isFormVisible.value = false
}

const emit = defineEmits<{ addTodo: [todo: Todos] }>()
const addTodo = () => {
    emit('addTodo', {
        id: Date.now(),
        text: `${todoText.value}`,
        completed: false
    })

    todoText.value = ''
}
</script>