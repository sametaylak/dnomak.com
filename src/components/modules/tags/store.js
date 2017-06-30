import { store } from '@/components/global/mixins';
import { graph } from '@/graph';
import { cloneDeep } from 'lodash';

const allTags = graph.query(`{
  allTags {
    name
    heroes {
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
    allTags: [],
  },
  getters: {
    tags: state => state.tags,
  },
  actions: {
    async allTags({ commit }) {
      const tags = await allTags();
      commit('SET_TAGS', tags.allTags);
      commit('SET_ALLTAGS', tags.allTags);
    },
    async searchInTags($store, value) {
      value = value.toLowerCase();
      let filteredTags = [];
      if (value) {
        $store.state.allTags.forEach((tag) => {
          const tempTag = cloneDeep(tag);
          tempTag.heroes = tempTag.heroes.filter(s =>
            s.name.toLowerCase().includes(value) ||
            s.title.toLowerCase().includes(value));
          filteredTags.push(tempTag);
        }, this);
      } else {
        filteredTags = $store.state.allTags;
      }

      $store.commit('SET_TAGS', filteredTags);
    },
  },
  mutations: {
    SET_TAGS(state, result) {
      state.tags = result;
    },
    SET_ALLTAGS(state, result) {
      state.allTags = result;
    },
  },
});
