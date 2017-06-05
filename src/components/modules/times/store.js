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
    allTimes({ commit }, username) {
      return allTimes({ username }).then((result) => {
        commit('SET_TIMES', result.allTimes);
        return result;
      });
    },
  },
  mutations: {
    SET_TIMES(state, result) {
      state.times = result;
    },
  },
});
