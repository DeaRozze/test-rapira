<script setup lang="ts">
import BaseChip from "./BaseChip.vue";
import { ref, computed} from "vue";
import type { Category } from "@/types";

defineSlots<{
  search?: (props: {}) => any;
}>();

const props = defineProps<{
  categories: Category[];
  active: Set<Category>;
  hasSearchQuery: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle", cat: Category): void;
  (e: "clear"): void;
  (e: "clear-search"): void;
}>();

const isExpanded = ref(false);
const isAnimating = ref(false);

const hasActiveFilters = computed(() => {
  return props.active.size > 0 || props.hasSearchQuery;
});

function toggleExpanded() {
  if (isAnimating.value) return;

  isExpanded.value = !isExpanded.value;
  isAnimating.value = true;

  setTimeout(
    () => {
      isAnimating.value = false;
    },
    isExpanded.value ? 500 : 300
  );
}
</script>

<template>
  <div class="bg-white">
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
            v-if="hasActiveFilters"
            class="rounded-full px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-300"
            @click="
              $emit('clear');
              $emit('clear-search');
            "
          >
            Очистить
          </button>
          <button
            class="px-3 py-1 text-sm transition-all duration-300 flex items-center gap-1 hover:text-blue-600"
            @click="toggleExpanded"
            :disabled="isAnimating"
          >
            {{ isExpanded ? "Скрыть фильтр" : "Фильтр" }}
            <span
              class="transition-transform duration-300 ease-out"
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
        @before-enter="isAnimating = true"
        @after-enter="isAnimating = false"
        @before-leave="isAnimating = true"
        @after-leave="isAnimating = false"
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 max-h-0 -translate-y-2"
        enter-to-class="opacity-100 max-h-96 translate-y-0"
        leave-active-class="transition-all duration-400 ease-in"
        leave-from-class="opacity-100 max-h-96 translate-y-0"
        leave-to-class="opacity-0 max-h-0 translate-y-2"
      >
        <div
          v-if="isExpanded"
          class="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
        >
          <TransitionGroup
            tag="div"
            class="flex flex-wrap gap-2 relative"
            name="chip-fade"
          >
            <BaseChip
              v-for="cat in categories"
              :key="cat"
              :active="active.has(cat)"
              @click="$emit('toggle', cat)"
              class="transform transition-all duration-400 ease-out hover:scale-105"
            >
              {{ cat }}
            </BaseChip>
          </TransitionGroup>
        </div>
      </Transition>
    </div>
  </div>
</template>
