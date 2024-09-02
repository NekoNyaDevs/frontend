<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <main class="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-secondary">
    <div class="text-center">
      <h1 class="big-text">{{ error.statusCode }}</h1>
      <h2>Oops, something bad happened!</h2>
      <p class="mb-4 fst-italic">{{ error.message }}</p>
      <button class="btn btn-primary" @click="handleError">Clear errors</button>
    </div>
  </main>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>