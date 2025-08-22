<script setup lang="ts">
import ImageCard from "./ImageCard.vue";
import type { Image } from "@/types";

defineSlots<{
  default?: (props: {}) => any;
}>();

defineProps<{ items: Image[] }>();
const emit = defineEmits<{ (e: "open", item: Image): void }>();
</script>

<template>
  <section class="bg-white rounded-xl min-h-screen">
    <div class="container mx-auto px-4 sm:py-5">
      <div
        v-if="items.length === 0"
        class="flex flex-col items-center justify-center text-center min-h-96 py-10 px-5"
      >
        <img
          src="@/assets/images/search-list.svg"
          alt="Ничего не найдено"
          class="w-12 h-12 mb-4"
        />
        <h3 class="text-xl font-semibold text-gray-500 mb-2">
          Поиск не дал результатов
        </h3>
        <p class="text-gray-500 max-w-xs leading-relaxed">
          Повторите поиск или используйте фильтр для структуризации контента
        </p>
      </div>

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
      >
        <ImageCard
          v-for="it in items"
          :key="it.id"
          :item="it"
          @open="emit('open', it)"
        />
      </div>
    </div>
  </section>
</template>
