import Vue from 'vue';
import Router from 'vue-router';

import Titles from '@/components/modules/titles/Titles';
import Heroes from '@/components/modules/heroes/Heroes';
import Hero from '@/components/modules/heroes/Hero';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Titles',
      component: Titles,
    },
    {
      path: '/:heroesTitle',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/:heroUsername',
      name: 'hero',
      component: Hero,
    },
  ],
});
