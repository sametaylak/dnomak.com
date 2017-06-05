import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allHeroes = graph.query(`{
  allHeroes {
    id
    name
    title
    username
    videoId
    titles {
      name
      url
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    heroes: [],
  },
  getters: {
    heroes: state => state.heroes,
    heroByUsername: state => username => state.heroes.filter(
      heroes => heroes.username === username,
    )[0],
  },
  actions: {
    allHeroes({ commit }) {
      return allHeroes().then((result) => {
        commit('SET_HEROES', result.allHeroes);
        return result;
      });
    },
  },
  mutations: {
    SET_HEROES(state, result) {
      state.heroes = result;
    },
  },
});
