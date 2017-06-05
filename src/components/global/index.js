import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';
import LocaleSwitcher from './modules/LocaleSwitcher';

Vue.use(VueYouTubeEmbed);
Vue.component('locale-switcher', LocaleSwitcher);
