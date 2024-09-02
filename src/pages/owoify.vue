<script setup lang="ts">
const owoifyResult = ref<string>('');

const owoify = async () => {
  const text = document.querySelector('textarea')?.value;
  if (!text) return;
  owoifyResult.value = await owoifyText(text);
};

const owoifyText = async (text: string) => {
  const res = await $fetch("/api/v1/owoify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  }).catch(() => null);

  if (!res) return "An error occurred while owoifying your text";

  return res.result;
}
</script>

<template>
  <main class="container main">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Owoify - Make your text cute</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 px-3">
        <textarea type="text" class="form-control" placeholder="Your text here"></textarea>
        <button class="btn btn-primary mt-3" type="button" @click="owoify">Owoify!</button>
      </div>
    </div>
    <div class="row px-3 mt-3">
      <div class="col-12 p-0">
        <h2 v-if="owoifyResult" class="text-center">Result</h2>
        <p v-if="owoifyResult" class="bg-light rounded py-2 px-3 whitespace-pre">{{ owoifyResult }}</p>
      </div>
    </div>
  </main>
</template>