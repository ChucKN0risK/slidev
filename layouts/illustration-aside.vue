<template>
  <div class="slidev-layout illustration-aside">
    <div class="illustration-aside__content">
      <slot />
    </div>
    <div class="illustration-aside__cover" :style="style"></div>
  </div>
</template>

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

<style lang="postcss">
  .slidev-layout.illustration-aside {
    display: flex;

    .illustration-aside__content {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: var(--padding-section);
      background-color: white;
    }

    .illustration-aside__cover {
      height: 100%;
      width: 40%;
    }

    :is(ul, p) {
      @apply text-darkgray;
    }

    h1:only-child {
      position: absolute;
      top: 50%;
      left: var(--padding-section);
      transform: translateY(-50%);
    }

    h1 + * {
      margin-top: 48px;
    }

    .role-at-specify {
      --padding: 40px;

      display: flex;
      align-items: center;
      padding: calc(var(--padding) / 2) var(--padding) calc(var(--padding) / 2) 50%;
      background-image: url('assets/img/specify-logo.svg');
      background-position: var(--padding) center;
      background-repeat: no-repeat;
      background-size: 125px;
      border-radius: 12px;
      @apply bg-blueSky text-darkgray;
    }

    .role-at-specify + * {
      margin-top: 16px;
    }

    p, ul {
      line-height: 1.6;
      font-size: 1rem;
      @apply font-body;
    }
  }
</style>