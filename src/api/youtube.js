// import axios from 'axios';

// export async function search(keyword) {
//   return axios.get(`/data/${keyword ? 'search' : 'popular'}.json`).then((res) => res.data.items);
// }

import axios from 'axios';

export async function search(keyword) {
  return axios
    .get(`/data/${keyword ? 'search' : 'react-data'}.json`)
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
}
