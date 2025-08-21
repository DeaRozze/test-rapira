<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <header class="bg-black">
    <div class="container mx-auto flex items-center gap-4 py-3 px-4 sm:px-6">
      <button
        class="max-[800px]:block hidden p-2 group relative w-6 h-6"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Меню"
        :aria-expanded="isMenuOpen"
      >
        <span
          class="absolute left-0 w-6 h-0.5 bg-white transition-all duration-300"
          :class="{
            'top-1': !isMenuOpen,
            'top-3 rotate-45': isMenuOpen,
          }"
        ></span>
        <span
          class="absolute left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300"
          :class="{
            'top-3': !isMenuOpen,
            'opacity-0': isMenuOpen,
          }"
        ></span>
        <span
          class="absolute left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300"
          :class="{
            'top-5': !isMenuOpen,
            'top-3 -rotate-45': isMenuOpen,
          }"
        ></span>
      </button>

      <img
        src="@/assets/images/logo.png"
        class="font-semibold text-lg tracking-tight"
      />

      <nav class="max-[800px]:hidden flex ml-2 items-center gap-2">
        <a
          class="rounded-full px-3 py-1 text-sm text-white hover:bg-white/10 transition"
          href="#"
          >Главная</a
        >
        <a
          class="rounded-full px-3 py-1 text-sm bg-white/10 text-blue-500"
          href="#"
          >Блог</a
        >
      </nav>

      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-black/80 z-40 max-[800px]:block hidden"
          @click="isMenuOpen = false"
        >
          <div
            class="absolute top-0 left-0 h-full w-64 bg-black p-6 z-50"
            @click.stop
          >
            <button
              class="absolute top-4 right-4 text-white p-2"
              @click="isMenuOpen = false"
              aria-label="Закрыть меню"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav class="mt-12 space-y-4">
              <a
                class="block rounded-lg px-4 py-3 text-white hover:bg-white/10 transition"
                href="#"
                @click="isMenuOpen = false"
              >
                Главная
              </a>
              <a
                class="block rounded-lg px-4 py-3 bg-white/10 text-blue-500"
                href="#"
                @click="isMenuOpen = false"
              >
                Блог
              </a>
            </nav>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
