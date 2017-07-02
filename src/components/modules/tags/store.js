import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allTags = graph.query(`{
  allTags {
    name
    heroes(orderBy: createdAt_DESC) {
      name
      title
      username
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    tags: [],
  },
  getters: {
    tags: state => state.tags,
  },
  actions: {
    async allTags({ commit }) {
      const tags = await allTags();
      commit('SET_TAGS', tags.allTags);
    },
  },
  mutations: {
    SET_TAGS(state, result) {
      state.tags = result;
    },
  },
});
