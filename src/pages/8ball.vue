<script setup lang="ts">
const eightballResult = ref<string>('');
const cute = ref<boolean>(false);

const getAnswer = async () => {
  const res = await $fetch("/api/v1/8ball?cute=" + cute.value).catch(() => null);

  if (!res) return "An error occurred while getting the answer";

  eightballResult.value = res.answer;
}
</script>

<template>
  <main class="container main">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">8ball</h1>
        <div class="col-1 col-sm-3 mx-auto">
          <div class="form-check">
            <input v-model="cute" type="checkbox" class="form-check-input" id="cute" />
            <label class="form-check-label" for="cute">Cute?</label>
          </div>
          <button class="btn btn-primary" role="button" @click="getAnswer">Get an answer</button>
        </div>
      </div>
    </div>
    <div class="row px-3">
      <div class="col-12 p-0">
        <h2 v-if="eightballResult" class="text-center">Result</h2>
        <p v-if="eightballResult" class="bg-light rounded py-2 px-3 whitespace-pre">{{ eightballResult }}</p>
      </div>
    </div>
  </main>
</template>