import { mount } from "@vue/test-utils";
import BaseBadge from "@/components/BaseBadge.vue";

describe("BaseBadge", () => {
  it("отрисовывает текст из слота", () => {
    const wrapper = mount(BaseBadge, {
      slots: { default: "Тест" },
    });
    expect(wrapper.text()).toContain("Тест");
  });
});