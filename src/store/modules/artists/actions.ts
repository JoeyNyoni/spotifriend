import { API_URL, bearerToken } from "@/helpers/constants";
import axios from "axios";

export default {
  async getArtist(context: any, payload: any) {
    const result = await axios.get(`${API_URL}/artists/${payload.artistId}`, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });
    const artist = result ? result.data : null;
    console.log("artist", artist);
    context.commit("setArtist", artist);
  },
};
