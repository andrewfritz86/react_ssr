import fetch from "isomorphic-fetch";

export function fetchStores() {
  return fetch("https://www.warbyparker.com/api/v2/nearby_stores/11215")
    .then(res => res.json())
    .then(res => res.nearby_stores);
}
