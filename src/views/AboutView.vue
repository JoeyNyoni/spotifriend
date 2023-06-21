<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
export default {
  created() {
    this.getArtist();
    this.getTrack();
    this.search();
  },
  methods: {
    async search() {
      try {
        await this.$store.dispatch("search/performSearch", { query: "drake" });
      } catch (error: any) {
        console.log(error.message);
      }
    },
    async getArtist() {
      try {
        await this.$store.dispatch("artists/getArtist", {
          artistId: "0TnOYISbd1XYRBk9myaseg",
        });
      } catch (error: any) {
        console.log(error.message);
      }
    },
    async getTrack() {
      try {
        await this.$store.dispatch("tracks/getTrack", {
          trackId: "11dFghVXANMlKmJXsNCbNl",
        });
      } catch (error: any) {
        console.log(error.message);
      }
    },
  },
};
</script>
