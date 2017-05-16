import Vue from 'vue';
import Router from 'vue-router';

import Titles from '@/components/modules/titles/Titles';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Titles',
      component: Titles,
    },
  ],
});
