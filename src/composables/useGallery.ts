import { computed, ref } from "vue";
import type { Category, ImageItem } from "@/types";

const ALL_CATEGORIES: Category[] = [
  "Город",
  "Природа",
  "Люди",
  "Животные",
  "Еда",
  "Напитки",
  "Архитектура",
  "Искусство",
];

export function useGallery(allItems: ImageItem[]) {
  const query = ref("");
  const activeCategories = ref<Set<Category>>(new Set());
  const selected = ref<ImageItem | null>(null);
  const isOpen = ref(false);

  function toggleCategory(cat: Category) {
    if (activeCategories.value.has(cat)) {
      activeCategories.value.delete(cat);
    } else {
      activeCategories.value.add(cat);
    }
  }

  function clearCategories() {
    activeCategories.value.clear();
  }

  function open(item: ImageItem) {
    selected.value = item;
    isOpen.value = true;
    document.documentElement.style.overflow = "hidden";
  }

  function close() {
    isOpen.value = false;
    selected.value = null;
    document.documentElement.style.overflow = "";
  }
  const categories = computed<Category[]>(() => {
    return ALL_CATEGORIES;
  });

  const filtered = computed<ImageItem[]>(() => {
    const q = query.value.trim().toLowerCase();
    const cats = activeCategories.value;

    return allItems.filter((item) => {
      const byText = !q || item.title.toLowerCase().includes(q);

      const byCats =
        !cats.size || item.categories.some((c) => cats.has(c as Category));

      return byText && byCats;
    });
  });

  return {
    query,
    activeCategories,
    categories,
    filtered,
    selected,
    isOpen,
    toggleCategory,
    clearCategories,
    open,
    close,
  };
}
