<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
import SearchInput from "@/components/SearchInput.vue";
import FilterBar from "@/components/FilterBar.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";
import GalleryModal from "@/components/GalleryModal.vue";
import { IMAGES } from "@/data/images";
import { useGallery } from "@/composables/useGallery";
import { ref, watch, computed } from "vue";

const gallery = useGallery(IMAGES);
const {
  categories,
  filtered,
  selected,
  isOpen,
  activeCategories,
  query: galleryQuery,
  toggleCategory,
  clearCategories,
  open,
  close,
} = gallery;

const query = ref("");

const hasSearchQuery = computed(() => {
  return query.value.trim().length > 0;
});

watch(query, (newValue) => {
  galleryQuery.value = newValue;
});

function clearSearch() {
  query.value = "";
}
</script>

<template>
  <div class="app min-h-screen bg-gray-50">
    <HeaderNav />
    <FilterBar
      :categories="categories"
      :active="activeCategories"
      :has-search-query="hasSearchQuery"
      @toggle="toggleCategory"
      @clear="clearCategories"
      @clear-search="clearSearch"
    >
      <template #search>
        <SearchInput v-model="query" />
      </template>
    </FilterBar>

    <div class="bg-gray-50 px-4 sm:px-8 lg:px-12 py-5">
      <GalleryGrid :items="filtered" @open="open" />
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <GalleryModal v-if="isOpen" :item="selected" @close="close" />
    </Transition>
  </div>
</template>
