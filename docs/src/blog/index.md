<script setup>
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
</script>

<template>
  <span v-for="i in 3">{{ i }}</span>
</template>
<span v-for="i in 3">{{ i }}</span>
<div v-if="hasSidebar">Only show when sidebar exists</div>
