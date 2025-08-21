<script setup lang="ts">
import { onMounted } from "vue";

const emit = defineEmits<{ (e: "close"): void }>();

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") emit("close");
}

onMounted(() => document.addEventListener("keydown", onKey));
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 bg-black/70" @click="$emit('close')" />
    <div
      class="relative z-10 bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
    >
      <header class="flex items-start justify-between gap-4 mb-4">
        <h3 class="text-2xl font-semibold text-gray-900">
          <slot name="title" />
        </h3>
        <button
          class="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          @click="$emit('close')"
          aria-label="Закрыть"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>
      <div class="modal__body">
        <slot />
      </div>
      <footer class="mt-6 flex justify-end">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>
