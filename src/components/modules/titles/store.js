import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allTitles = graph.query(`{
  allTitles {
    name
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
    getAllTitles({ commit }) {
      return allTitles().then((result) => {
        commit('SET_TITLES', result.allTitles);
        return result;
      });
    },
  },
  mutations: {
    SET_TITLES(state, result) {
      state.titles = result;
    },
  },
});
