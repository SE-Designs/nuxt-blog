import type { BlogPost } from "~/types/app.interface";

export const useBlog = () => {
  const config = useRuntimeConfig();

  const fetchAllPosts = async (page = 1, limit = 8): Promise<BlogPost[]> => {
    try {
      const url = `${config.public.apiUrl}?page=${page}&limit=${limit}`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }

      return await response.json();
    } catch (err) {
      console.error("Error fetching posts:", err);
      return [];
    }
  };

  const fetchOnePost = async (id: string): Promise<BlogPost | null> => {
    try {
      const url = `${config.public.apiUrl}/${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.statusText}`);
      }

      return await response.json();
    } catch (err) {
      console.error("Error fetching post:", err);
      return null;
    }
  };

  return { fetchAllPosts, fetchOnePost };
};
