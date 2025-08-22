<script setup lang="ts">
import { computed } from "vue";
import CloseIcon from "@/assets/images/plus.svg";
import CheckIcon from "@/assets/images/check.svg";

defineSlots<{
  default?: (props: {}) => any;
}>();

const props = defineProps<{ active?: boolean }>();

const icon = computed(() => {
  return props.active ? CheckIcon : CloseIcon;
});
</script>

<template>
  <button
    class="rounded-full px-3 py-1 text-sm leading-none transition-all duration-300 ease-out flex items-center gap-1 transform hover:scale-105 active:scale-95 hover:-translate-y-0.5 will-change-transform"
    :class="{
      'bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg':
        active,
      'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm': !active,
    }"
  >
    <slot />
    <img
      :src="icon"
      :alt="active ? 'Выбрано' : 'Убрать'"
      class="w-3 h-3 transition-transform duration-300 ease-out"
      :class="{
        'rotate-45 transition-transform duration-200 ease-out': !active,
        'rotate-0 transition-transform duration-200 ease-out': active,
      }"
    />
  </button>
</template>
