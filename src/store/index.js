import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileMenu: false,
    videoModal: false,
    navigationScrollBehavior: true,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.mobileMenu = !state.mobileMenu;
    },
    TOGGLE_VIDEO(state) {
      state.videoModal = !state.videoModal;
    },
    SET_NAVIGATION_SCROLL_BEHAVIOR(state, payload) {
      state.navigationScrollBehavior = payload;
    },
  },
  actions: {
    toggleMenu({ commit }) {
      commit('TOGGLE_MENU');
    },
    toggleVideoModal({ commit }) {
      commit('TOGGLE_VIDEO');
    },
    enableNavigation({ commit }) {
      commit('SET_NAVIGATION_SCROLL_BEHAVIOR', true);
    },
    disableNavigation({ commit }) {
      commit('SET_NAVIGATION_SCROLL_BEHAVIOR', false);
    },
  },
});
