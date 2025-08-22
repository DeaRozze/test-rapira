import { IMAGES } from "@/data/images"; 
import { useGallery } from "@/composables/useGallery";

describe("useGallery", () => {
  it("фильтрует по поисковому запросу", () => {
    const g = useGallery(IMAGES); 
    g.query.value = "тишины";
    expect(g.filtered.value.length).toBe(1);
    expect(g.filtered.value[0].title).toContain("тишины");
  });

  it("добавляет и убирает категорию", () => {
    const g = useGallery(IMAGES); 
    g.toggleCategory("Природа");
    expect(g.activeCategories.value.has("Природа")).toBe(true);
    g.toggleCategory("Природа");
    expect(g.activeCategories.value.has("Природа")).toBe(false);
  });
});