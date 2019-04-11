import Vue from 'vue';
import '../public/assets/css/customStyle.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
new Vue({
    render: h => h(App),
}).$mount('#app')
