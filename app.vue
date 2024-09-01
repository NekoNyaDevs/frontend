<template>
  <div>
    <NuxtLoadingIndicator color="#eb7763" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - NekoNya` : 'NekoNya, website for nekos';
  },
  ogTitle: 'NekoNya, website for nekos',
  keywords: 'neko, anime, utility, api, nekonya',
  themeColor: "#9bdbff",
  description: 'Utility anime and neko themed website, with an API and some other cool features.',
  ogDescription: 'Utility anime and neko themed website, with an API and some other cool features.',
  ogImage: 'https://nekonya.classydev.fr/img/logo_rounded.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://nekonya.classydev.fr/img/logo_rounded.png',
  twitterTitle: 'NekoNya, website for nekos',
  twitterDescription: 'Utility anime and neko themed website, with an API and some other cool features.',
  twitterUrl: 'https://nekonya.classydev.fr',
  ogUrl: 'https://nekonya.classydev.fr',
  ogType: 'website',
  ogSiteName: 'NekoNya',
  ogLocale: 'en_US'
});
</script>