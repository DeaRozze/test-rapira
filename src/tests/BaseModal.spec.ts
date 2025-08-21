import { mount } from "@vue/test-utils";
import BaseModal from "@/components/BaseModal.vue";

describe("BaseModal", () => {
  it("эмитит событие close при клике на backdrop", async () => {
    const wrapper = mount(BaseModal, {
      slots: { default: "<p>Контент</p>" },
    });
    await wrapper.find(".absolute.inset-0").trigger("click");
    expect(wrapper.emitted().close).toBeTruthy();
  });
});