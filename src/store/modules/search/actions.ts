/* eslint-disable prettier/prettier */
import { API_URL, bearerToken, musicType } from "@/helpers/constants";
import axios from "axios";
import * as qs from "qs";

export default {
  async performSearch(context: any, payload: any, limit = 4, offset = 0) {
    const q = payload.query;
    const type = [musicType.ALBUM, musicType.ARTIST, musicType.TRACK];

    const result = await axios.get(`${API_URL}/search`, {
      headers: { Authorization: `Bearer ${bearerToken}` },
      params: { q, type, limit, offset },
      paramsSerializer: (params) => {
        return qs.stringify(params, {arrayFormat: "comma"});
      },
    });

    const searchResult: any = [];

    if (result) {
      Object.values(result.data).forEach(val => {
        searchResult.push(val);
      });
    }
    console.log("search", searchResult);
    context.commit("setSearchResults", searchResult);
  },
};
