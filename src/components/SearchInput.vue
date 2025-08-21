<script setup lang="ts">
const model = defineModel<string>();

function handleInput(event: Event) {
  model.value = (event.target as HTMLInputElement).value;
}
</script>

<template>
  <div class="relative flex items-center w-full sm:w-[400px]">
    <img
      src="@/assets/images/magnifier.svg"
      class="absolute left-2.5 z-10 text-gray-400 pointer-events-none w-4 h-4"
    />
    <input
      class="w-full h-10 rounded-xl bg-gray-50 pl-9 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type="search"
      :value="model"
      @input="handleInput($event)"
      placeholder="Поиск"
    />
  </div>
</template>