<template>
  <div class="home">
    <basic-card>
      <div v-if="isLoading">
        <basic-card>
          <basic-spinner></basic-spinner>
        </basic-card>
      </div>

      <div class="container" v-if="!isLoading && newAlbums.length > 0">
        <h2>Check out new releases for you!</h2>
        <div class="row">
          <div v-for="item in newAlbums" :key="item"
            class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <music-tile :item="item"></music-tile>
          </div>
        </div>
      </div>
      
      <div v-else>
        <h2 v-if="error" class="error-message">Error: {{ error }}</h2>
        <h2 v-else-if="newAlbums.length <= 0" class="error-message">No results found</h2>
      </div>
    </basic-card>
  </div>
</template>

<script lang="ts">
import MusicTile from "../components/ui/MusicTile.vue";
export default {
  components: {
    MusicTile,
  },
  data() {
    return {
      newAlbums: [],
      error: "",
      isLoading: false,
    };
  },
  created() {
    this.getNewAlbums();
  },
  methods: {
    async getNewAlbums() {
      this.isLoading = true;
      this.error = "";
      try {
        await this.$store.dispatch("albums/getNewAlbums");
        this.newAlbums = this.$store.getters["albums/newAlbums"];
      } catch (error: any) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
};
</script>
