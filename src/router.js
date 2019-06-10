import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Home from './views/data/Home.vue';
import list from './views/data/list.vue';
import Cart from './views/Cart/index.vue';
import user from './views/data/user.vue';
// 消息页面

// 二级页面
import sofa from './views/Twopage/Sofa.vue'; // 沙发页面
import bedclothes from './views/Twopage/bedclothes.vue'; // 床具页面
import stool from './views/Twopage/stool.vue'; // 凳子页面
import Table from './views/Twopage/Table.vue'; //  桌子页面
import cabinet from './views/Twopage/cabinet.vue'; // 柜子页面
import lamp from './views/Twopage/lamp.vue'; // 灯 页面
import tableware from './views/Twopage/tableware.vue'; // 餐具页面
import more from './views/Twopage/More.vue'; // 更多页面
import OrderList from './views/Cart/OrderList.vue';
import Pay from './views/Cart/Pay.vue';
import xiangqing1 from './views/Twopage/xiangqing.vue';
import pinjia from './views/Twopage/pinjia.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      isshow: true,
    },
    active: 0,
  },
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: () => import('./views/Twopage/xiaoxi.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/data/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./views/data/register.vue'),
  },
  {
    path: '/sofa',
    name: 'sofa',
    component: sofa,
  },
  {
    path: '/list',
    name: 'list',
    component: list,
    meta: {
      isshow: true,
      active: 1,
    },
  },

  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      isshow: true,
      needLogin: true,
      active: 3,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      isshow: true,
      needLogin: true,
      active: 2,
    },
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList,
    meta: {
      needLogin: true,
    },
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay,
    meta: {
      needLogin: true,
    },
  },
  {
    path: '/bedclothes',
    name: 'bedclothes',
    component: bedclothes,
  },
  {
    path: '/stool',
    name: 'stool',
    component: stool,
  },
  {
    path: '/Table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/cabinet',
    name: 'cabinet',
    component: cabinet,
  },
  {
    path: '/lamp',
    name: 'lamp',
    component: lamp,
  },
  {
    path: '/tableware',
    name: 'tableware',
    component: tableware,
  },
  { path: '/dindan', name: 'dindan', component: () => import('./views/data/dindgan.vue') },
  {
    path: '/more',
    name: 'more',
    component: more,
  },
  {
    path: '/xiangqing/:id',
    name: 'xiangqing',
    component: () => import('./views/Threepage/xiangqing1.vue'),
  },
  {
    path: '/xiangqing1/:id',
    name: 'xiangqing1',
    component: xiangqing1,
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('./views/Threepage/address.vue'),
  },
  {
    path: '/adddzhi',
    name: 'adddzhi',
    component: () => import('./views/Threepage/adddzhi.vue'),
  },
  {
    path: '/addxiugai/:id',
    name: 'addxiugai',
    component: () => import('./views/Threepage/addxiugai.vue'),
  },
  {
    path: '/pinjia',
    component: pinjia,
    name: 'pinjia',
  },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.isshow) {
    store.commit('setFooterToggle', true);
    store.commit('setFooterToggle', true);
    store.commit('SetActive', to.meta.active);
  } else {
    store.commit('setFooterToggle', false);
  }
  if (to.meta.needLogin) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }
});

export default router;
