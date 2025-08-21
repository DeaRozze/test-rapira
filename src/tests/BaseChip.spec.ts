import { mount } from "@vue/test-utils";
import BaseChip from "@/components/BaseChip.vue";

describe("BaseChip", () => {
  it("рендерит иконку check, если active=true", () => {
    const wrapper = mount(BaseChip, {
      props: { active: true },
      slots: { default: "Категория" },
    });
    const img = wrapper.find("img");
    expect(img.attributes("alt")).toBe("Выбрано");
  });

  it("рендерит иконку close, если active=false", () => {
    const wrapper = mount(BaseChip, { props: { active: false } });
    const img = wrapper.find("img");
    expect(img.attributes("alt")).toBe("Убрать");
  });
});