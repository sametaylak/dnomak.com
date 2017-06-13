import { store } from '@/components/global/mixins';
import { graph } from '@/graph';
import { sortBy } from 'lodash';

const allLinks = graph.query(`($username: String!) {
  allLinks(filter: {hero: {username: $username}}) {
    username
    hero {
      username
    }
    socialMedia {
      baseUrl
      name
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    links: [],
  },
  getters: {
    links: state => sortBy(state.links, ['second']),
  },
  actions: {
    async allLinks({ commit }, username) {
      const links = await allLinks({ username });
      commit('SET_LINKS', links.allLinks);
    },
  },
  mutations: {
    SET_LINKS(state, result) {
      state.links = result;
    },
  },
});
