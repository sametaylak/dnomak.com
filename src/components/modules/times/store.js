import { store } from '@/components/global/mixins';
import { graph } from '@/graph';
import { sortBy } from 'lodash';

const allTimes = graph.query(`($username: String!) {
  allTimes(filter: {hero: {username: $username}}) {
    second
    hero {
      username
    }
    question {
      name
      nameEnglish
    }
  }
}`);

/* eslint-disable no-param-reassign */
export default store({
  state: {
    times: [],
  },
  getters: {
    times: state => sortBy(state.times, ['second']),
    timeByQuestionId: state => questionId => state.times.filter(
      times => times.id === questionId,
    )[0],
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
