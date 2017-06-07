import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// Module Stores
import TagsStore from '@/components/modules/tags/store';
import HeroesStore from '@/components/modules/heroes/store';
import TimesStore from '@/components/modules/times/store';

// Global Stores
import i18n from './modules/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    i18n,
    // components
    tags: TagsStore,
    heroes: HeroesStore,
    times: TimesStore,
  },
  plugins: [createPersistedState()],
});
