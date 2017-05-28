import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/modules/Index';
import SvgTurkeyMap from '@/components/modules/SvgTurkeyMap';
import NotFound from '@/components/modules/NotFound';

import Titles from '@/components/modules/titles/Titles';
import Heroes from '@/components/modules/heroes/Heroes';
import Hero from '@/components/modules/heroes/Hero';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/svg-turkiye-haritasi',
      name: 'SvgTurkeyMap',
      component: SvgTurkeyMap,
    },
    {
      path: '/titles',
      name: 'Titles',
      component: Titles,
    },
    {
      path: '/:titleUrl',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/:heroUsername',
      name: 'hero',
      component: Hero,
    },
    { path: '*', component: NotFound },
  ],
});
