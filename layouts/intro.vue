<template>
  <div class="slidev-layout intro" :style="style">
    <slot />
    <footer class="intro__footer">
      <p class="intro__author">{{ author }}</p>
      <p class="intro__company">Specify</p>
      <p class="intro__event-name">{{ eventName }}</p>
      <p class="intro__event-date">{{ eventDate }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
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
.slidev-layout.intro {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr max-content;
  padding: var(--padding-section);
  @apply text-white;

  /* &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/fake.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: opacity(0.5);
  } */

  h1 {
    /* @apply text-headline-1; */
    font-size: 3.05rem;
    line-height: 1.2;
    align-self: center;
  }

  footer {
    position: relative;
    display: grid;
    padding-top: 24px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "author event-name"
      "company event-date";
    grid-auto-rows: minmax(min-content, max-content);
    align-items: start;
    gap: 4px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 40px;
      max-width: 40px;
      height: 6px;
      max-height: 6px;
      @apply bg-blue;
    }
  }

  .intro__author {
    grid-area: author;
  }

  .intro__company {
    grid-area: company;
  }

  .intro__event-name {
    grid-area: event-name;
    text-align: right;
  }

  .intro__event-date {
    grid-area: event-date;
    text-align: right;
  }
}
</style>