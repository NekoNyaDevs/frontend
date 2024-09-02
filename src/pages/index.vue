<script setup lang="ts">
import download from '~/utils/download';

const imageUrl = ref<string>('');
const type = "neko";

const fetchImage = async () => {
  const res = await $fetch(`/api/v1/random/${type}`).catch(() => null);
  if (!res) imageUrl.value = 'https://http.cat/404';
  else imageUrl.value = res.url;
};

const embeddedDownload = () => {
  download(imageUrl.value);
};

onMounted(() => {
  fetchImage();
});
</script>

<template>
  <main class="container main">
    <div class="row my-3">
      <div class="col">
        <h1 class="text-center fs-1 fw-bold">Welcome to <span class="text-primary">Neko</span><span class="text-success">Nya</span>!</h1>
      </div>
    </div>
    <div class="row center">
      <div class="rounded p-0 border border-3 border-primary ratio ratio-1x1 image-main-frame">
        <img :src="imageUrl" alt="neko" class="object-fit-cover" @error="$event.target.src='https://http.cat/404'" />
      </div>
      <div class="btn-toolbar justify-content-center gap-2 mt-2 width-main" role="group">
        <button @click="fetchImage" role="button" class="btn btn-primary">New one!</button>
        <NuxtLink role="button" class="btn btn-primary" to="/random/neko">Better experience in the random page!</NuxtLink>
        <button @click="embeddedDownload" role="button" class="btn btn-primary">Download image!</button>
      </div>
    </div>
  </main>
  <section class="container py-5">
    <div class="row" id="about">
      <div class="col-md-12 d-flex flex-column justify-content-center text-center">
        <h2 class="fw-bold">About</h2>
        <p class="mb-0">NekoNya was originally made by TheDogHusky, as a small useless project about anime and nekos. However, he kept developing it and want it to become a big website about anime and nekos.</p>
        <p class="mb-0">Now, the website is open-source and maintained by NekoNyaDevs, a small group of developers that want to make the website better and better.</p>
        <p class="mb-0">Our goal is to make the website the best utility anime and neko themed website, with an API and some other cool features.</p>
      </div>
    </div>
    <div class="row">
      <h2 class="text-center fw-bold mt-3">Why us?</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col py-5">
        <div class="card h-100 text-center opacity-75 shadow-lg">
          <i class="bi bi-file-earmark-code-fill header-icon"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Lots of images</h5>
            <p class="card-text">We try our best at uploading more and more pictures to NekoNya, by downloading randomly from the internet.</p>
          </div>
          <div class="card-footer text-center">
            <NuxtLink to="/random" class="btn btn-success opacity-100">Try out</NuxtLink>
          </div>
        </div>
      </div>
      <div class="col py-5">
        <div class="card h-100 text-center opacity-75 shadow-lg">
          <i class="bi bi-lightning-charge-fill header-icon"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Fast</h5>
            <p class="card-text">The website is made on ExpressJS, and constantly optimized, to bring you the fastest API and deliver you some images fast.</p>
          </div>
          <div class="card-footer text-center">
            <NuxtLink to="/random" class="btn btn-success opacity-100">Try out</NuxtLink>
          </div>
        </div>
      </div>
      <div class="col py-5">
        <div class="card h-100 text-center opacity-75 shadow-lg">
          <i class="bi bi-braces-asterisk header-icon"></i>
          <div class="card-body text-center">
            <h5 class="card-title">API</h5>
            <p class="card-text">This website also has an API for developers to use, you can use the API to get random images.</p>
          </div>
          <div class="card-footer text-center">
            <a href="/api/v1/endpoints" class="btn btn-success opacity-100">Look at the endpoints</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex flex-column justify-content-center text-center">
        <h2 class="fw-bold">How it works</h2>
        <p>This website will give you a random anime image following the category you chose when you reload the category's page or click on the button.</p>
      </div>
      <NuxtLink class="btn btn-primary" to="/random">Get in da nekos!</NuxtLink>
    </div>
  </section>
</template>