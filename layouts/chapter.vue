<template>
  <div class="slidev-layout chapter" :style="style">
    <span class="chapter__number">{{ chapterNumber }}.</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  chapterNumber: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    default: '',
  },
})
const style = computed(() => handleBackground(props.background))
</script>

<style lang="postcss">
.slidev-layout.chapter {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: var(--padding-section);
  @apply text-white;

  h1 {
    /* @apply text-headline-1; */
    font-size: 3.05rem;
    line-height: 1.2;
    align-self: center;
  }

  .chapter__number {
    position: absolute;
    top: var(--padding-section);
    left: var(--padding-section);
    font-family: 'Inter-SemiBold';
    font-size: 2.5rem;
 
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      display: block;
      width: 40px;
      max-width: 40px;
      height: 6px;
      max-height: 6px;
      @apply bg-blue;
    }
  }
}
</style>