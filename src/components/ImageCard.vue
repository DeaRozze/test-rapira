<script setup lang="ts">
import { computed } from "vue";
import type { Image } from "@/types";
import BaseBadge from "./BaseBadge.vue";
import ClockIcon from "@/assets/images/clock.svg";
import CommentIcon from "@/assets/images/comment.svg";

const props = defineProps<{
  item: Image;
}>();

const emit = defineEmits<{ (e: "open", item: Image): void }>();

const formattedDate = computed(() => {
  const d = new Date(props.item.date);
  const day = d.getDate();
  const month = d.toLocaleDateString("ru-RU", {
    month: "short",
  });

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1, -1);
  return `${day} ${capitalizedMonth}`;
});
</script>

<template>
  <article
    class="w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
  >
    <div
      class="relative overflow-hidden h-64 cursor-pointer"
      @click="$emit('open', item)"
    >
      <img
        class="w-full h-full object-cover"
        :src="item.imageUrl"
        :alt="item.title"
        loading="lazy"
      />
    </div>
    <div class="p-4 flex flex-col">
      <div
        class="separator-dots items-center text-xs text-gray-500 gap-2 mb-3 flex-wrap"
      >
        <span>{{ formattedDate }}</span>
        <div class="flex items-center gap-1">
          <img :src="ClockIcon" alt="Время чтения" class="w-4 h-4" />
          <span>{{ item.readTimeMin }} мин</span>
        </div>
        <div class="flex items-center gap-1">
          <img :src="CommentIcon" alt="Комментарии" class="w-4 h-4" />
          <span>{{ item.comments }}</span>
        </div>
      </div>
      <h3
        class="font-semibold text-lg text-gray-900 leading-snug mb-2 line-clamp-2"
      >
        <button
          class="text-left hover:no-underline focus:outline-none"
          @click="$emit('open', item)"
        >
          {{ item.title }}
        </button>
      </h3>
      <p
        class="text-sm text-gray-700 line-clamp-2 mb-4 leading-relaxed min-h-[40px]"
      >
        {{ item.description }}
      </p>
      <div class="flex gap-2 flex-wrap mt-auto">
        <BaseBadge v-for="tag in item.categories" :key="tag">
          {{ tag }}
        </BaseBadge>
      </div>
    </div>
  </article>
</template>
