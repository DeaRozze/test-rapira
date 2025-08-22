<script setup lang="ts">
import { ref } from "vue";
import type { Image } from "@/types";
import type { Slot } from "vue";
import BaseModal from "./BaseModal.vue";
import BaseBadge from "./BaseBadge.vue";
import ClockIcon from "@/assets/images/clock.svg";
import CommentIcon from "@/assets/images/comment.svg";
import UserIcon from "@/assets/images/Ellipse 1.png";
import { formatDate } from "@/utils/dateFormatter";
import { formatCommentDate } from "@/utils/commentDateFormatter";

defineSlots<{
  default?: Slot;
  title?: Slot;
  footer?: Slot;
}>();

defineProps<{
  item: Image | null;
}>();

const emit = defineEmits<{ (e: "close"): void }>();

interface Comment {
  id: number;
  text: string;
  author: string;
  date: string;
}

const comments = ref<Comment[]>([
  {
    id: 1,
    text: "Эти мгновения наполняют наши сердца радостью и любовью.",
    author: "Мира Гусева",
    date: "09.04.2024 14:54",
  },
]);

const newComment = ref("");
const MAX_LENGTH = 250 as const;
const isFocused = ref(false);

function publishComment() {
  const trimmedComment = newComment.value.trim();

  if (trimmedComment) {
    comments.value.push({
      id: Date.now(),
      text: trimmedComment,
      author: "Вы",
      date: formatCommentDate(new Date()),
    });
    newComment.value = "";
  }
}

function clearComment() {
  newComment.value = "";
}
</script>

<template>
  <BaseModal v-if="item" @close="emit('close')">
    <template #title>{{ item.title }}</template>

    <div class="space-y-4">
      <div
        class="separator-dots items-center text-sm text-gray-500 gap-2 flex-wrap"
      >
        <span>{{ formatDate(item.date) }}</span>
        <div class="flex items-center gap-1">
          <img :src="ClockIcon" alt="Время чтения" class="w-4 h-4" />
          <span>{{ item.readTimeMin }} мин</span>
        </div>
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
          Комментариев {{ comments.length }}
        </h4>

        <div class="max-h-60 overflow-y-auto">
          <div
            v-for="comment in comments"
            :key="comment.id"
            class="flex items-start gap-2 mb-4"
          >
            <img :src="UserIcon" alt="Аватар" class="w-8 h-8 rounded-full" />
            <div class="min-w-0 flex-1">
              <p class="text-sm text-gray-800 break-words">
                <b>{{ comment.author }}</b
                >: {{ comment.text }}
              </p>
              <span class="text-xs text-gray-400">{{ comment.date }}</span>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="relative">
            <textarea
              v-model="newComment"
              :maxlength="MAX_LENGTH"
              rows="3"
              placeholder="Текст комментария"
              @focus="isFocused = true"
              @blur="isFocused = false"
              :class="[
                'w-full rounded-lg p-2 outline-none transition border resize-none pr-10',
                newComment.length > MAX_LENGTH
                  ? 'border-red-500'
                  : isFocused
                  ? 'border-blue-500 ring-1 ring-blue-500'
                  : 'border-gray-300',
              ]"
              style="min-height: 80px; max-height: 120px"
            ></textarea>

            <button
              v-if="newComment"
              @click="clearComment"
              class="absolute right-3 top-2 z-10 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Очистить комментарий"
              type="button"
            >
              <svg
                class="w-5 h-5"
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
          </div>

          <div class="flex justify-between items-center text-sm mt-1">
            <span
              :class="
                newComment.length > MAX_LENGTH
                  ? 'text-red-500'
                  : 'text-gray-500'
              "
            >
              {{ newComment.length }} / {{ MAX_LENGTH }}
            </span>
            <div class="flex gap-2">
              <button
                class="px-3 py-1 rounded-lg transition bg-[#EEF6FF] text-[#3E97FF] hover:bg-[#e0edff]"
                @click="clearComment"
              >
                Отмена
              </button>
              <button
                class="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                :disabled="!newComment.trim() || newComment.length > MAX_LENGTH"
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
