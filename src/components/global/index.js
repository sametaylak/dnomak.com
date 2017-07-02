import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';
import Header from './modules/Header';
import Footer from './modules/Footer';
import LocaleSwitcher from './modules/LocaleSwitcher';
import SubscribeForm from './modules/SubscribeForm';

Vue.use(VueYouTubeEmbed);
Vue.component('c-header', Header);
Vue.component('c-footer', Footer);
Vue.component('locale-switcher', LocaleSwitcher);
Vue.component('subscribe-form', SubscribeForm);
