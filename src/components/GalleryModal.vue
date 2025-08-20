<script setup lang="ts">
import { ref } from "vue";
import type { ImageItem } from "@/types";
import BaseModal from "./BaseModal.vue";
import BaseBadge from "./BaseBadge.vue";
import ClockIcon from "@/assets/images/clock.svg";
import CommentIcon from "@/assets/images/comment.svg";
import UserIcon from "@/assets/images/Ellipse 1.png";

defineProps<{
  item: ImageItem | null;
}>();

const emit = defineEmits<{ (e: "close"): void }>();

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
}

const comments = ref<
  { id: number; text: string; author: string; date: string }[]
>([
  {
    id: 1,
    text: "Эти мгновения наполняют наши сердца радостью и любовью.",
    author: "Мира Гусева",
    date: "09.04.2024 14:54",
  },
]);

const newComment = ref("");
const maxLength = 250;
const isFocused = ref(false);

function publishComment() {
  if (newComment.value.trim()) {
    comments.value.push({
      id: Date.now(),
      text: newComment.value.trim(),
      author: "Вы",
      date: new Date().toLocaleString("ru-RU"),
    });
    newComment.value = "";
  }
}
</script>

<template>
  <BaseModal v-if="item" @close="emit('close')">
    <template #title>{{ item.title }}</template>

    <div class="space-y-4">
      <div class="flex items-center text-sm text-gray-500 gap-2 flex-wrap">
        <span>{{ formatDate(item.date) }}</span>
        <span class="mx-1 text-gray-400">•</span>
        <div class="flex items-center gap-1">
          <img :src="ClockIcon" alt="Время чтения" class="w-4 h-4" />
          <span>{{ item.readTimeMin }} мин</span>
        </div>
        <span class="mx-1 text-gray-400">•</span>
        <div class="flex items-center gap-1">
          <img :src="CommentIcon" alt="Комментарии" class="w-4 h-4" />
          <span>{{ comments.length }}</span>
        </div>
      </div>

      <img
        :src="item.imageUrl"
        :alt="item.title"
        class="w-full rounded-xl max-h-96 object-cover"
      />

      <p class="text-gray-700 text-base leading-relaxed">
        {{ item.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <BaseBadge v-for="tag in item.categories" :key="tag">
          {{ tag }}
        </BaseBadge>
      </div>

      <div class="mt-6">
        <h4 class="text-lg font-semibold mb-3">
          Комментарии {{ comments.length }}
        </h4>

        <div
          v-for="c in comments"
          :key="c.id"
          class="flex items-start gap-2 mb-4"
        >
          <img :src="UserIcon" alt="Аватар" class="w-8 h-8 rounded-full" />
          <div>
            <p class="text-sm text-gray-800">
              <b>{{ c.author }}</b
              >: {{ c.text }}
            </p>
            <span class="text-xs text-gray-400">{{ c.date }}</span>
          </div>
        </div>

        <div class="mt-4">
          <textarea
            v-model="newComment"
            :maxlength="maxLength"
            rows="3"
            placeholder="Текст комментария"
            @focus="isFocused = true"
            @blur="isFocused = false"
            :class="[
              'w-full rounded-lg p-2 outline-none transition border',
              newComment.length > maxLength
                ? 'border-red-500'
                : isFocused
                ? 'border-blue-500 ring-1 ring-blue-500'
                : 'border-gray-300',
            ]"
          ></textarea>
          <div class="flex justify-between items-center text-sm mt-1">
            <span
              :class="
                newComment.length > maxLength ? 'text-red-500' : 'text-gray-500'
              "
            >
              {{ newComment.length }} / {{ maxLength }}
            </span>
            <div class="flex gap-2">
              <button
                class="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                @click="newComment = ''"
              >
                Отмена
              </button>
              <button
                class="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                :disabled="!newComment.trim() || newComment.length > maxLength"
                @click="publishComment"
              >
                Опубликовать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>