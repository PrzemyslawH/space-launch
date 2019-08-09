const CORS_UNLOCK = `https://cors-anywhere.herokuapp.com/`;
const BASE_API = `https://spacelaunchnow.me/api/3.3.0/`;
const ORDER_BY_NAME = '/?ordering=name';

export const offset = (offset) => `&offset=${offset}`;
export const limit = (limit) => `&limit=${limit}`;

export default {
  agencies: CORS_UNLOCK + BASE_API + 'agencies' + ORDER_BY_NAME,
  astronauts: CORS_UNLOCK + BASE_API + 'astronaut' + ORDER_BY_NAME,
  launches: CORS_UNLOCK + BASE_API + 'launch/upcoming/?ordering=net'
};
