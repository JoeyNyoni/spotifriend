<template>
  <nav>
    <h1>
      <router-link to="/">SpotiFriend</router-link>
    </h1>

    <basic-button id="show-modal" @click="showModal = true">
      Search For Artists
    </basic-button>

    <Teleport to="body">
      <basic-modal :show="showModal" @close="showModal = false">
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
  background-color: #1db954;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
}

h1 {
  margin: 0;
}
</style>
