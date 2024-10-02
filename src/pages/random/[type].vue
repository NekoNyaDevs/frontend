<script setup lang="ts">
import download from '~/utils/download';

definePageMeta({
  middleware: 'random'
});

const route = useRoute();

const imageUrl = ref<string>('');
const type = ref<string>(route.params.type);
const isLoading = ref<boolean>(false);

const fetchImage = async () => {
  isLoading.value = true;
  const res = await $fetch(`/api/v1/random/${type.value}`).catch(() => null);
  if (!res) imageUrl.value = 'https://http.cat/404';
  else imageUrl.value = res.url;
  isLoading.value = false;
};

const embeddedDownload = () => {
  download(imageUrl.value);
};

onMounted(() => {
  fetchImage();
});
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Random {{ $route.params.type }}</h1>
        <div class="btn-toolbar justify-content-center gap-2 mt-2 width-normal" role="group">
          <button @click="fetchImage" class="btn btn-primary" :disabled="isLoading">
                    <span id="text">New {{ $route.params.type }} pls</span>
          </button>
          <button class="btn btn-primary" @click="embeddedDownload">Download this one!</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="d-flex justify-content-center">
        <img class="img-fluid mt-3 mx-auto" loading="lazy" v-if="imageUrl" @error="$event.target.src='https://http.cat/404'" :alt="$route.params.type" :src="imageUrl">
      </div>
    </div>
  </main>
</template>