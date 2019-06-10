import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import infiniteScroll from 'vue-infinite-scroll';
import store from './store';

// eslint-disable-next-line import/order
import Vant from 'vant';
import 'vant/lib/index.css';

import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/order

Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(Vuex);
Vue.use(infiniteScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
