<template>
  <basic-card>
    <div class="container">
      <div class="row">
        <router-link
          :to="{
            name: 'music-view',
            params: { id: item.id },
          }"
        >
          <img v-bind:src="item?.images[1]?.url" v-bind:alt="item.name" />
        </router-link>
      </div>
      <div class="row description">
        <p>{{ item.name }}</p>
        <p>{{ artists }}</p>
      </div>
    </div>
  </basic-card>
</template>

<script lang="ts">
export default {
  props: ["item"],
  data() {
    return {
      artists: "",
    };
  },
  created() {
    this.getFullArtists();
  },
  methods: {
    getFullArtists() {
      const artistArray: string[] = [];
      this.item.artists.forEach((ar: any) => {
        artistArray.push(ar.name);
      });
      this.artists = artistArray.join(", ");
    },
  },
};
</script>

<style scoped>
.container img {
  max-height: 100%;
  max-width: 100%;
}

.description {
  margin-top: 8px;
  text-align: left;
  align-items: start;
}
.description p {
  margin-top: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
