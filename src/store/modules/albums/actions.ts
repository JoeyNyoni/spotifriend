import { API_URL, bearerToken } from "@/helpers/constants";
import axios from "axios";

export default {
  async getAlbum(context: any) {
    const result = await axios.get(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });
    const album = result ? result.data : null;
    context.commit("setAlbum", album);
  },

  async getNewAlbums(context: any, limit = 8, offset = 0) {
    const result = await axios.get(`${API_URL}/browse/new-releases`, {
      headers: { Authorization: `Bearer ${bearerToken}` },
      params: { limit, offset },
    });
    const newAlbums = result ? result.data?.albums.items : [];
    context.commit("setNewAlbums", newAlbums);
  },
};
