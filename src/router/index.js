import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/modules/Index';
import SvgTurkiyeHaritasi from '@/components/modules/SvgTurkiyeHaritasi';
import NotFound from '@/components/modules/NotFound';

import Titles from '@/components/modules/titles/Titles';
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
      name: 'SvgTurkiyeHaritasi',
      component: SvgTurkiyeHaritasi,
    },
    {
      path: '/youtube',
      name: 'Titles',
      component: Titles,
    },
    {
      path: '/:heroUsername',
      name: 'hero',
      component: Hero,
    },
    { path: '*', component: NotFound },
  ],
});
