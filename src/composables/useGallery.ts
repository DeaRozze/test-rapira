import { computed, ref } from "vue";
import type { Category, Image } from "@/types";

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

export function useGallery(allItems: Image[]) {
  const query = ref("");
  const activeCategories = ref<Set<Category>>(new Set());
  const selected = ref<Image | null>(null);
  const isOpen = ref(false);

  function toggleCategory(cat: Category) {
    if (activeCategories.value.has(cat)) {
      activeCategories.value.delete(cat);
      return;
    }
    activeCategories.value.add(cat);
  }

  function clearCategories() {
    activeCategories.value.clear();
  }

  function open(item: Image) {
    selected.value = item;
    isOpen.value = true;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function close() {
    isOpen.value = false;
    selected.value = null;
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  const filtered = computed<Image[]>(() => {
    const q = query.value.trim().toLowerCase();
    const cats = activeCategories.value;

    return allItems.filter((item) => {
      const byText = !q || item.title.toLowerCase().includes(q);

      const byCats = !cats.size || item.categories.some((c) => cats.has(c));

      return byText && byCats;
    });
  });

  return {
    query,
    activeCategories,
    categories: ALL_CATEGORIES,
    filtered,
    selected,
    isOpen,
    toggleCategory,
    clearCategories,
    open,
    close,
  };
}
