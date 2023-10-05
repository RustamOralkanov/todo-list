<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button v-for="filter in filters" :key="filter" class="button"
        :class="{ 'button--primary': activeFilter === filter }" @click="setFilter(filter)">{{ filter }}</button>
    </section>
  </aside>
</template>

<script setup lang="ts">
import type { ActiveFilter } from '@/types/Types';
import { ref } from 'vue';

interface Props {
  activeFilter: ActiveFilter
}

defineProps<Props>()

const filters = ref<ActiveFilter[]>(['All', 'Active', 'Done'])
const emit = defineEmits<{ setFilter: [filter: ActiveFilter] }>()
const setFilter = (filter: ActiveFilter) => {
  emit('setFilter', filter)
}
</script>

<style scoped></style>
