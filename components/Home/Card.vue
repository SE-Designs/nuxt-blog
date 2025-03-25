<script setup lang="ts">
import { fallbackImg } from "~/const/fallback";
import type { BlogPost } from "~/types/app.interface";

// Define props
defineProps<{
  post: BlogPost;
}>();
</script>

<template>
  <NuxtLink
    class="flex flex-col gap-4 max-w-[272px] text-black no-underline"
    :to="`/article/${post.id}`"
  >
    <figure class="relative w-full h-[272px]">
      <img
        :src="post.image || fallbackImg"
        alt=""
        class="absolute left-0 top-0 w-full object-cover rounded-md z-2"
      />
      <img
        :src="fallbackImg"
        :alt="post.title"
        class="absolute left-0 top-0 w-full object-cover rounded-md z-1"
      />
    </figure>
    <h3 class="text-xl font-bold">{{ post.title }}</h3>
    <p class="text-gray-400">{{ post.preview }}</p>
  </NuxtLink>
</template>

<style scoped></style>
