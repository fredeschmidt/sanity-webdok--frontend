<template>
  <div>
    <main>
      <ul v-if="data?.length">
        <li v-for="webdokStandard in data" :key="webdokStandard._id">
          <!-- Brug router-link, hvis du bruger Vue Router -->
          <router-link :to="`/webdok/${webdokStandard.slug.current}`">
            {{ webdokStandard.heading }}
          </router-link>
          <!-- Eller brug en almindelig a-tag for hyperlink -->
          <!-- <a :href="`/webdokStandard/${webdokStandard.slug.current}`">{{ webdokStandard.heading }}</a> -->
        </li>
      </ul>
      <p v-else>No webdokStandards to show</p>
      <!-- Resten af din template... -->
    </main>
  </div>
</template>

<script setup>
const query = groq`*[_type == "webdokStandard"]`;
const { data } = useSanityQuery(query);
</script>
