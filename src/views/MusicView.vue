<template>
  <Teleport to="body">
    <basic-modal :show="toggleShowModal" @close="toggleShowModal = false">
      <template #header>
        <h2>Share Music</h2>
      </template>
      <template #body>
        <share-form @on-submit="sendEmail"></share-form>
      </template>
    </basic-modal>
  </Teleport>
  <basic-card>
    <div class="container">
      <div v-if="item" class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 album-art">
          <img v-bind:src="item?.images[0]?.url" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <span>Artist: <p>{{ fullArtists }}</p></span>
            <span>Name: <p>{{ item.name }}</p></span>
            <span>Release Date: <p>{{ item.release_date }}</p></span>
            <div class="row">
              <basic-button link @click="goToLink(item.external_urls.spotify)">View in Spotify</basic-button>
              <basic-button @click="toggleShowModal = true">Share The Music</basic-button>
            </div>
          </div>
        </div>
      </div>

      <div v-else>An error has occurred or the item does not exist</div>
    </div>
  </basic-card>
</template>

<script lang="ts">
import ShareForm from "../components/forms/ShareForm.vue";
export default {
  components: {
    ShareForm
  },
  props: ["id"],
  data() {
    return {
      item: null,
      selectedType: "",
      toggleShowModal: false,
    };
  },
  created() {
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
  methods: {
    goToLink(link: string) {
      window.open(link, '_blank', 'noreferrer');
    },
    sendEmail(data) {
      console.log(data);
      this.toggleShowModal = false;
    }
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
