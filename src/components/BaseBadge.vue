<script setup lang="ts">
defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <span
    class="badge rounded-full text-xs px-3 py-1 font-medium bg-blue-50 text-blue-600"
  >
    <slot />
  </span>
</template>
