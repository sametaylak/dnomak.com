import { store } from '@/components/global/mixins';
import { graph } from '@/graph';

const allTimes = graph.query(`($username: String!) {
  allTimes(filter: {hero: {username: $username}}) {
    second
    hero {
      username
    }
    question {
      name
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    times: [],
  },
  getters: {
    times: state => state.times,
  },
  actions: {
    async allTimes({ commit }, username) {
      const times = await allTimes({ username });
      commit('SET_TIMES', times.allTimes);
    },
  },
  mutations: {
    SET_TIMES(state, result) {
      state.times = result;
    },
  },
});
