<!-- eslint-disable prettier/prettier -->
<template>
  <basic-card>
    <div class="container">
      <div v-if="item" class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 album-art">
          <img v-bind:src="item?.images[0]?.url" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <span>
              Artist:
              <p>{{ fullArtists }}</p>
            </span>
            <span>
              Name:
              <p>{{ item.name }}</p>
            </span>
            <span>
              Release Date:
              <p>{{ item.release_date }}</p>
            </span>
            <div class="row">
              <basic-button link :to="item.external_urls.spotify"
                >View in Spotify</basic-button
              >
              <basic-button link :to="item.external_urls.spotify"
                >Share The Music</basic-button
              >
            </div>
          </div>
        </div>
      </div>

      <div v-else>An error has occurred or the item does not exist</div>
    </div>
  </basic-card>
</template>

<script lang="ts">
import { musicType } from "@/helpers/constants";
export default {
  props: ["id"],
  data() {
    return {
      item: null,
      selectedType: "",
    };
  },
  created() {
    console.log(this.id);
    if (this.item && !this.$store.getters["search/selectedItem"]) {
      this.item = this.$store.getters["search/searchResults"].find(
        (item: any) => item.id === this.id
      );
    } else {
      this.item = this.$store.getters["albums/newAlbums"].find(
        (item: any) => item.id === this.id
      );
    }
    console.log(this.item);
    this.$store.dispatch("search/changeSelectedItem", this.item);
  },
  computed: {
    fullArtists() {
      const artistArray: string[] = [];
      this.item.artists.forEach((ar: any) => {
        artistArray.push(ar.name);
      });
      return artistArray.join(", ");
    },
  },
};
</script>

<style scoped>
.album-art img {
  border-radius: 25px;
  max-height: 100%;
  max-width: 100%;
}
</style>
