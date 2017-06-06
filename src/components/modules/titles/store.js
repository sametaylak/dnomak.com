import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allTitles = graph.query(`{
  allTitles {
    url
    name
    heroes {
      name
      username
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    titles: [],
  },
  getters: {
    titles: state => state.titles,
  },
  actions: {
    async allTitles({ commit }) {
      const titles = await allTitles();
      commit('SET_TITLES', titles.allTitles);
    },
  },
  mutations: {
    SET_TITLES(state, result) {
      state.titles = result;
    },
  },
});
