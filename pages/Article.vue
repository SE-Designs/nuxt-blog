<script setup lang="ts">
import { useRoute } from "vue-router";
import { useBlog } from "~/composables/useBlog";
import { fallbackImg } from "~/const/fallback";
import PATHS from "~/const/paths";
import type { BlogPost } from "~/types/app.interface";

definePageMeta({
  name: "article",
  path: PATHS.article,
});

const { fetchOnePost } = useBlog();
const route = useRoute();
const blogId = computed(() => route.params.id);
const post = ref<BlogPost | null>(null);

onMounted(async () => {
  if (blogId.value) {
    post.value = await fetchOnePost(blogId.value as string);
  }
});
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <article v-if="post">
      <section class="mb-6">
        <h2 class="text-4xl font-bold">{{ post.title }}</h2>
        <p class="text-gray-500 mt-2">
          Published on
          <time :datetime="post.createdAt">{{
            new Date(post.createdAt).toLocaleDateString()
          }}</time>
        </p>
      </section>

      <figure class="relative w-full h-fit my-12">
        <img
          :src="post.image || fallbackImg"
          :alt="post.title"
          class="w-full h-full object-cover rounded-md"
          @error="(e) => (e.target.src = fallbackImg)"
        />
      </figure>

      <section class="text-gray-700 leading-relaxed">
        <p>{{ post.description }}</p>
      </section>
    </article>

    <section v-else class="text-center text-gray-500">
      <p>Loading article...</p>
    </section>
  </div>
</template>

<style scoped></style>
