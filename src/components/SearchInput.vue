<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";

const model = defineModel<string>();
const searchValue = ref(model.value ?? ""); 
let timeoutId: ReturnType<typeof setTimeout> | null = null;

watch(searchValue, (newValue) => {
  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    model.value = newValue;
  }, 300);
});

watch(model, (newValue) => {
  if (newValue !== searchValue.value) {
    searchValue.value = newValue ?? "";
  }
});

function clearSearch() {
  searchValue.value = "";
  model.value = "";
}

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <div class="relative flex items-center w-full sm:w-[400px]">
    <img
      src="@/assets/images/magnifier.svg"
      class="absolute left-2.5 z-10 text-gray-400 pointer-events-none w-4 h-4"
    />
    <input
      v-model="searchValue"
      class="w-full h-10 rounded-xl bg-gray-50 pl-9 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type="text" 
      autocomplete="off"
      placeholder="Поиск"
    />
    <button
      v-if="searchValue"
      @click="clearSearch"
      class="absolute right-2.5 z-10 text-gray-400 hover:text-gray-600 transition-colors"
      aria-label="Очистить поиск"
    >
      <svg
        class="w-4 h-4"
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
  </div>
</template>