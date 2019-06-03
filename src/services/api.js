const CORS_UNLOCK = `https://cors-anywhere.herokuapp.com/`;
const BASE_API = `https://spacelaunchnow.me/api/3.3.0/`;
const ORDER_BY_NAME = '/?ordering=name';

export default {
  agencies: CORS_UNLOCK + BASE_API + 'agencies' + ORDER_BY_NAME,
  astronauts: CORS_UNLOCK + BASE_API + 'astronaut' + ORDER_BY_NAME
};
