<script setup lang="ts"></script>
<template>
  <div class="bg-purple-400 w-full pt-48 overflow-hidden">
    <div class="flex flex-col justify-between max-w-[1280px] px-8 mx-auto">
      <div class="flex flex-wrap gap-x-12">
        <div class="flex flex-col gap-y-12 w-1/2">
          <p>Is there a project?</p>
          <h4 class="text-8xl underline">Let's work together</h4>
        </div>
        <div class="flex flex-col mx-auto gap-y-12 w-fit">
          <div class="space-y-2">
            <h2 class="text-lg font-semibold">For all questions</h2>
            <p class="text-md">+7 (920) 278—00—68</p>
            <a href="mailto:qtim@agency.com" class="text-md underline"
              >qtim@agency.com</a
            >
          </div>

          <address class="not-italic space-y-2">
            <h3 class="text-lg font-semibold">Office in Russia</h3>
            <p class="text-md">139 Ruben Station Lake<br />Drew, NM 52678</p>
            <Button rounded class="w-[48px] h-[48px]">
              <Icon name="ph:airplane-tilt-bold" />
            </Button>
          </address>

          <address class="not-italic space-y-2">
            <h3 class="text-lg font-semibold">Office in Dubai</h3>
            <p class="text-md">139 Ruben Station Lake<br />Drew, NM 52678</p>
            <Button rounded class="w-[48px] h-[48px]">
              <Icon name="ph:airplane-tilt-bold" />
            </Button>
          </address>
        </div>
      </div>
      <div class="flex flex-wrap justify-between mt-48">
        <div class="flex gap-x-8 mb-8">
          <Button label="Facebook" link />
          <Button label="Instagram" link />
          <Button label="Telegram" link />
        </div>
        <div class="relative flex justify-center items-center">
          <div class="sphere">Go</div>
        </div>
        <div class="flex gap-x-8 mb-8">
          <Button label="Behance" link />
          <Button label="LinkedIn" link />
          <Button label="Terms Policy" link />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sphere {
  width: 200px;
  height: 200px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: start;
  border-radius: 50%;
  position: absolute;
  padding: 48px;
  bottom: -50%;
  font-weight: bold;
  transform: translateY(35%);
}
</style>
