import { ref, watch, onUnmounted } from "vue";

export function useDebounce(initialValue: string = "", delay: number = 300) {
  const value = ref(initialValue);
  const debouncedValue = ref(initialValue);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  watch(value, (newValue) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  });

  function clear() {
    value.value = "";
    debouncedValue.value = "";
  }

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });

  return {
    value,
    debouncedValue,
    clear
  };
}