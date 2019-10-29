const API_URL = `https://spacelaunchnow.me/api/3.3.0/`;

export default {
  agencies: API_URL + 'agencies/',
  astronauts: API_URL + 'astronaut/',
  spacestations: API_URL + 'spacestation/',
  launches: {
    all: API_URL + 'launch/',
    upcoming: API_URL + 'launch/upcoming/',
    previous: API_URL + 'launch/previous/',
  },
};

export const order = {
  by_name: '?ordering=name',
  by_net_ascending: '?ordering=net',
  by_net_descending: '?ordering=-net',
};

export const offset = (offset) => `&offset=${offset}`;
