import { Artist } from "./artist";
import { Album } from "./album";

export class Track {
  album?: Album;
  artist?: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: object[];
  external_urls?: object[];
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: object;
  restrictions?: object[];
  name?: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
}
