<script setup lang="ts"></script>
<template>
  <header>
    <LayoutNav />
  </header>
  <main>
    <div class="max-w-[1280px] mx-auto px-8">
      <NuxtPage />
    </div>
  </main>
  <footer>
    <LayoutFooter />
  </footer>
</template>
<style>
header {
  /*  */
}

main {
  margin: 60px 0;

  min-height: calc(100dvh - 60px);
}

footer {
  height: fit-content;
}
</style>
