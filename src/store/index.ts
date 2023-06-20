import { createStore } from "vuex";

import albumsModule from "./modules/albums/index";
import artistsModule from "./modules/artists/index";
import tracksModule from "./modules/tracks/index";
import searchModule from "./modules/search/index";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    albums: albumsModule,
    artists: artistsModule,
    search: searchModule,
    tracks: tracksModule,
  },
});

export default store;
