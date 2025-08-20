<script setup lang="ts">
import { computed } from "vue";
import CloseIcon from "@/assets/images/plus.svg";
import CheckIcon from "@/assets/images/check.svg";

const props = defineProps<{ active?: boolean }>();

const icon = computed(() => {
  return props.active ? CheckIcon : CloseIcon;
});
</script>

<template>
  <button 
    class="chip rounded-full px-3 py-1 text-sm leading-none transition flex items-center gap-1"
    :class="{
      'bg-blue-500 text-white': active,
      'bg-blue-50 text-blue-600': !active
    }"
  >
    <slot />
    <img :src="icon" :alt="active ? 'Выбрано' : 'Убрать'" class="w-3 h-3" />
  </button>
</template>