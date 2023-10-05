<template>
  <footer class="app-footer">{{ stats.active }} more to do, {{ stats.done }} done</footer>
</template>

<script setup lang="ts">
interface Props {
  stats: {
    active: number,
    done: number
  }
}

defineProps<Props>()
</script>