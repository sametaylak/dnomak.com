// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import '@/components/global';

import App from './App';
import i18n from './i18n';
import router from './router';
import store from './store';
import { graph } from './graph';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  graph,
  template: '<App/>',
  components: { App },
});
