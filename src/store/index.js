import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileMenu: false,
    videoModal: false,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.mobileMenu = !state.mobileMenu;
    },
    TOGGLE_VIDEO(state) {
      state.videoModal = !state.videoModal;
    },
  },
  actions: {
    toggleMenu({ commit }) {
      commit('TOGGLE_MENU');
    },
    toggleVideoModal({ commit }) {
      commit('TOGGLE_VIDEO');
    },
  },
});
