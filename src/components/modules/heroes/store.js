import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allHeroes = graph.query(`{
  allHeroes {
    id
    name
    title
    username
    videoId
    tags {
      name
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
    async allHeroes({ commit }) {
      const heroes = await allHeroes();
      commit('SET_HEROES', heroes.allHeroes);
    },
  },
  mutations: {
    SET_HEROES(state, result) {
      state.heroes = result;
    },
  },
});
