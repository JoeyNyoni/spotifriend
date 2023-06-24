<template>
  <div class="container">
    <div class="row">
      <form v-on:submit.prevent="performSearch">
        <input
          type="text"
          v-model="query"
          placeholder="Search..."
          @keyup="performSearch"
        />
      </form>
    </div>
    <div class="row" v-if="searchResults.length > 0">
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <basic-card>
            <div class="container">
              <div class="row">
                <router-link
                  :to="{
                    name: 'music-view',
                    params: { id: result.id },
                  }"
                >
                <div class="row">
                  <div class="col-xs-4 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img
                      v-if="result?.type === `album`"
                      v-bind:src="result.images[2].url"
                    />
                    <img v-else v-bind:src="result.album.images[2].url" />
                  </div>
                  <div class="col-xs-8 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <span class="row desc">Title: {{ result.name }}</span>
                    <span class="row desc">Artist: {{ getFullArtists(result) }}</span>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
          </basic-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      query: "",
      searchResults: [],
    };
  },
  methods: {
    async performSearch() {
      try {
        if (this.query) {
          await this.$store.dispatch("search/performSearch", this.query);
          this.searchResults = this.$store.getters["search/searchResults"];
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    getFullArtists(obj: any) {
      const artistArray: string[] = [];
      obj.artists.forEach((ar: any) => {
        artistArray.push(ar.name);
      });
      return artistArray.join(", ");
    },
  },
};
</script>

<style scoped>
.container img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 20px;
}
input {
  min-width: 100%;
  border-radius: 10px;
}
li {
  list-style: none;
}
</style>
