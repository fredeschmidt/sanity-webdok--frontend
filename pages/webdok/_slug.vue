<template>
  <div>
    <div v-if="webdokStandard">
      <h1>{{ webdokStandard.heading }}</h1>
    </div>
    <p v-else-if="loading">Indlæser...</p>
    <p v-else>Webdokken blev ikke fundet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMySanity } from '@/composables/useMySanity';

const sanityClient = useMySanity();
const route = useRoute();
const webdok = ref(null);
const loading = ref(false);

const slug = route.params.slug; // Henter slug fra URL'en
const query = `*[_type == "webdokStandard" && slug.current == $slug][0]`;

console.log("Slug før mount:", slug);

onMounted(async () => {
  
  console.log("Slug efter mount:", slug);

  loading.value = true;
  try {
    webdok.value = await sanityClient.fetch(query, { slug });
  } catch (err) {
    console.error('Fejl ved hentning af webdok:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<style>
/* Tilføj CSS-styling her */
</style>
