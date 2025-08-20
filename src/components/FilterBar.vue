<script setup lang="ts">
import BaseChip from "./BaseChip.vue";
import { ref } from "vue";
import type { Category } from "@/types";

defineProps<{
  categories: Category[];
  active: Set<Category>;
}>();

const emit = defineEmits<{
  (e: "toggle", cat: Category): void;
  (e: "clear"): void;
  (e: "clear-search"): void;
}>();

const isExpanded = ref(false);
</script>

<template>
  <div class="bg-white border-b border-gray-200">
    <div class="container mx-auto py-4 px-4 sm:px-6">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <h2 class="text-xl font-semibold font-gilroy">Блог</h2>
          <div class="hidden md:block">
            <slot name="search" />
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="rounded-full px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 transition"
            @click="
              $emit('clear');
              $emit('clear-search');
            "
          >
            Очистить
          </button>
          <button
            class="px-3 py-1 text-sm transition flex items-center gap-1"
            @click="isExpanded = !isExpanded"
          >
            {{ isExpanded ? "Скрыть фильтр" : "Фильтр" }}
            <span
              class="transition-transform duration-200"
              :class="{ 'rotate-180': isExpanded }"
            >
              <img src="@/assets/images/down.svg" class="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>

      <div class="mt-4 md:hidden">
        <slot name="search" />
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-if="isExpanded"
          class="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
        >
          <div class="flex flex-wrap gap-2">
            <BaseChip
              v-for="cat in categories"
              :key="cat"
              :active="active.has(cat)"
              @click="$emit('toggle', cat)"
            >
              {{ cat }}
            </BaseChip>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
