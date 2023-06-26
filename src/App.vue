<template>
  <nav>
    <h1>
      <router-link to="/">SpotiFriend</router-link>
    </h1>

    <basic-button id="show-modal" @click="toggleShowModal = true">
      Search For Artists
    </basic-button>

    <Teleport to="body">
      <basic-modal :show="toggleShowModal" @close="toggleShowModal = false">
        <template #header>
          <h2>Search for Music</h2>
        </template>
        <template #body>
          <search-bar></search-bar>
        </template>
      </basic-modal>
    </Teleport>
  </nav>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      toggleShowModal: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin: auto;
  align-items: center;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
}

h1 {
  margin: 0;
}
</style>
