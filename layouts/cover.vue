<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  background: {
    default: '',
  },
})
const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>