import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';
import LocaleSwitcher from './modules/LocaleSwitcher';
import SubscribeForm from './modules/SubscribeForm';

Vue.use(VueYouTubeEmbed);
Vue.component('locale-switcher', LocaleSwitcher);
Vue.component('subscribe-form', SubscribeForm);
