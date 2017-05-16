import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// Module Stores
import TitlesStore from '@/components/modules/titles/store';

// Global Stores
import global from './modules/global';
import i18n from './modules/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    i18n,
    // components
    titles: TitlesStore,
  },
  plugins: [createPersistedState()],
});
