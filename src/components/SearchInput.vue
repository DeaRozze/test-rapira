<script setup lang="ts">
const model = defineModel<string>({ required: true });
</script>

<template>
  <div class="relative flex items-center w-full max-w-sm">
    <img
      src="@/assets/images/magnifier.svg"
      class="absolute left-3 z-10 text-gray-400 pointer-events-none"
    />
    <input
      class="w-[400px] h-10 rounded-xl bg-white pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type="search"
      :value="model"
      @input="model = ($event.target as HTMLInputElement).value"
      placeholder="Поиск"
    />
  </div>
</template>
