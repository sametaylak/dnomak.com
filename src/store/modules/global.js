/* eslint-disable no-param-reassign */
export default {
  namespaced: true,
  state: {
    title: '',
    subTitle: '',
  },
  getters: {
    title: state => state.title,
    subTitle: state => state.subTitle,
    fullTitle(state) {
      return [state.subTitle, state.title].filter(Boolean).join(' | ');
    },
    breadcrumbs() {
      return [
        { text: '' },
      ];
    },
  },
  actions: {
    setTitle: ({ commit }, title) => commit('SET_TITLE', title),
    setSubtitle: ({ commit }, subTitle) => commit('SET_SUBTITLE', subTitle),
  },
  mutations: {
    SET_TITLE(state, title) {
      state.title = title;
    },
    SET_SUBTITLE(state, subTitle) {
      state.subTitle = subTitle;
    },
  },
};
