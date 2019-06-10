import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isShowFooter: true,
    setActive: 0,
  },
  mutations: {
    setFooterToggle(state, isShow) {
      // eslint-disable-next-line no-param-reassign
      state.isShowFooter = isShow;
    },
    SetActive(state, active) {
      // eslint-disable-next-line no-param-reassign
      state.setActive = active;
    },
  },
});

export default store;
