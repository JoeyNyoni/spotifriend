import { Artist } from "./artist";

export class Album {
  id?: string;
  name?: string;
  album_type?: string;
  total_tracks?: number;
  type?: string;
  available_markets?: string[];
  images?: object[];
  href?: string;
  release_date?: string;
  release_date_precision?: string;
  restrictions?: object;
  uri?: string;
  copyright?: object[];
  external_urls?: object;
  external_ids?: object;
  genres?: string[];
  label?: string;
  popularity?: number;
  artists?: Artist[];
  tracks?: object;
}
