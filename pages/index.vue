<template>
  <div>
    <header>
      <h1>Fredes webdoks</h1>
    </header>

    <main>
      <h2>webdoks</h2>
      <ul v-if="data?.length">
        <li v-for="webdok in data" v-bind:key="webdok._id">
          {{ webdok.title }}
        </li>
      </ul>
      <p v-else>No webdoks to show</p>
      <h2>Data</h2>
      <div v-if="data">
        <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
      <div v-else>
        <div>¯\_(ツ)_/¯</div>
        <p>
          Your data will show up here when you've configured everything
          correctly
        </p>
      </div>
    </main>
    
  </div>
</template>

<script setup>
const query = groq`*[_type == "webdok"]`;
const { data } = useSanityQuery(query);
</script>