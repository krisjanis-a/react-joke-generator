import url from "./endpointURL";
import userAgent from "./userAgent";

export default function fetchJoke() {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": userAgent,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}
