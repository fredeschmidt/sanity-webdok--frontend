<template>
  <div>
    <div v-if="webdokStandard">
      <h1>{{ webdokStandard.heading }}</h1>
      <div v-html="webdokStandard.content"></div> 
    </div>
    <p v-else-if="error">Der opstod en fejl: {{ error }}</p>
    <p v-else>Ingen webdok fundet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import sanityClient from '@/plugins/sanity';

const route = useRoute();
const webdok = ref(null);
const error = ref(null);

const slug = route.params.slug;
const query = `*[_type == "webdokStandard" && slug.current == $slug][0]`;

onMounted(async () => {
  try {
    webdok.value = await sanityClient.fetch(query, { slug });
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<style>
/* Tilføj CSS-styling her */
</style>
