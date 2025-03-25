<script setup lang="ts">
import PATHS from "~/const/paths";
import type { BlogPost } from "~/types/app.interface";

definePageMeta({
  name: "home",
  path: PATHS.home,
});

const { fetchAllPosts } = useBlog();
const page = ref<number>(1);
const limit = ref<number>(8);
const totalRecords = ref<number>(84);
const posts = ref<BlogPost[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const loadPosts = async () => {
  loading.value = true;
  error.value = null;

  try {
    const result = await fetchAllPosts(page.value, limit.value);

    console.log(result);
    posts.value = result;
  } catch (err) {
    error.value = "Failed to load articles. Please try again.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => loadPosts());

const onPageChange = (event: { page: number }) => {
  page.value = event.page + 1;
  loadPosts();
};
</script>

<template>
  <main class="flex flex-col gap-y-8">
    <h1 class="text-5xl">Articles: {{ posts?.length || 0 }}</h1>

    <div v-if="loading" class="text-center text-gray-500">
      <p>Loading articles...</p>
    </div>

    <div v-else-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="!posts.length" class="text-center text-gray-500">
      <p>No articles found.</p>
    </div>

    <div v-else class="flex flex-wrap gap-8">
      <HomeCard v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <div class="w-fit mx-auto mt-8">
      <Paginator
        :rows="limit"
        :totalRecords="totalRecords"
        @page="onPageChange"
      />
    </div>
  </main>
</template>

<style scoped></style>
