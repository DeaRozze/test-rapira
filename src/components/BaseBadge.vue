<script setup lang="ts">
import type { Slot } from "vue";

defineSlots<{
  default?: Slot;
}>();
</script>

<template>
  <span
    class="badge rounded-full text-xs px-3 py-1 font-medium bg-blue-50 text-blue-600"
  >
    <slot />
  </span>
</template>
