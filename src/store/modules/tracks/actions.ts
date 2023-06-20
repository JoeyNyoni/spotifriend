import { API_URL, bearerToken } from "@/helpers/constants";
import axios from "axios";

export default {
  async getTrack(context: any, payload: any) {
    const result = await axios.get(`${API_URL}/tracks/${payload.trackId}`, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });
    const track = result ? result.data : null;
    console.log("track", track);
    context.commit("setTrack", track);
  },
};
