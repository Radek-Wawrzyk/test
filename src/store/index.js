import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileMenu: false,
    videoModal: false,
    videoModalPath: '@/assets/videos/video.mp4',
    navigationScrollBehavior: true,
  },
  getters: {
    'getVideoModalPath': state => state.videoModalPath
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
    /**
     * 
     * @param {Object} state
     * @param {String} payload
     */
    SET_VIDEO_MODAL_PATH(state, payload = '') {
      state.videoModalPath = payload;
    }
  },
  actions: {
    toggleMenu({ commit }) {
      commit('TOGGLE_MENU');
    },
    toggleVideoModal({ commit }) {
      commit('TOGGLE_VIDEO');
    },
    setVideoModalPath({ commit }, payload) {
      commit('SET_VIDEO_MODAL_PATH', payload)
    },
    enableNavigation({ commit }) {
      commit('SET_NAVIGATION_SCROLL_BEHAVIOR', true);
    },
    disableNavigation({ commit }) {
      commit('SET_NAVIGATION_SCROLL_BEHAVIOR', false);
    },
  },
});
