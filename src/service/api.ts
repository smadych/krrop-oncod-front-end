import axios from 'axios';

export default axios.create({
  baseURL: 'http://krrop-oncod-server-api.test/',
  // headers: {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  //   Authorization: 'Bearer {token}',
  //   'X-localization': 'uk',
  // }
});
