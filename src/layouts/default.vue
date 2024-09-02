<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-secondary">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>