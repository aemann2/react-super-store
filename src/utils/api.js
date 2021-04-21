import axios from 'axios';

// Configure the axios instance to be used with a predifined baseURL so you don't have to require it every time
const axiosInstance = axios.create({
  baseURL: 'https://gp-super-store-api.herokuapp.com',
});

export function fetchItemList({ from, size, isOnSale, q }) {
  return axiosInstance
    .get('/item/list', {
      // Axios will handle putting query params on the request url so you don't have to worry about
      // doing any string building. Makes things a lot nicer.
      params: {
        from,
        size,
        isOnSale,
        q,
      },
    })
    .then((response) => response.data);
}

// additional api util functions can go down here.
