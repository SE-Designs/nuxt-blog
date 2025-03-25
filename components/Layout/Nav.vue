<script setup lang="ts">
import logo from "~/assets/logo.svg";
import en from "~/assets/en.svg";
</script>
<template>
  <nav class="w-full h-[60px] flex items-center justify-center">
    <div class="max-w-[1280px] w-full flex items-center justify-between px-8">
      <NuxtLink to="/">
        <img :src="logo" alt="QTIM" />
      </NuxtLink>
      <div class="flex items-center gap-x-4">
        <div class="flex items-center gap-x-2">
          <Button label="Work" link />
          <Button label="About" link />
        </div>
        <div class="flex items-center gap-x-2">
          <Button rounded outlined>
            <img :src="en" alt="EN" />
          </Button>
          <NuxtLink to="https://github.com/se-designs">
            <Button rounded>
              <span>Let's work</span>
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
