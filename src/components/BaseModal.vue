<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits<{ (e: 'close'): void }>()

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => document.addEventListener('keydown', onKey))
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
    <div class="absolute inset-0 bg-black/70" @click="$emit('close')" />
    <div class="relative z-10 bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
      <header class="flex items-start justify-between gap-4 mb-4">
        <h3 class="text-2xl font-semibold text-gray-900"><slot name="title" /></h3>
        <button class="rounded-lg px-2 py-1 border border-gray-300" @click="$emit('close')">✕</button>
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