<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <basic-card>
      <div class="container" v-if="!isLoading">
        <h2>Check out new releases for you!</h2>
        <div class="row">
          <div v-for="item in newAlbums" :key="item" class="col-xs-4 col-xl-4">
            <music-tile :item="item"></music-tile>
          </div>
        </div>
      </div>
      <div v-else>
        <h2 v-if="errorMsg">Error: {{ errorMsg }}</h2>
        <h2 v-else>No results found</h2>
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
      errorMsg: "",
      isLoading: false,
    };
  },
  created() {
    this.getNewAlbums();
  },
  methods: {
    async getNewAlbums() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("albums/getNewAlbums");
        this.newAlbums = this.$store.getters["albums/newAlbums"];
        console.log(typeof this.newAlbums);
        this.isLoading = false;
      } catch (error: any) {
        this.errorMsg = error.message;
        this.isLoading = false;
      }
    },
  },
};
</script>
