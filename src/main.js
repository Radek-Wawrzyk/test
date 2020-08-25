// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Fragment from 'vue-fragment';
import DefaultLayout from '~/layouts/Default.vue';
import VueDatamaps from 'vue-datamaps';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from '@/store/index';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import './helpers/videoAutoplayDirective'
// import VueTouch from 'vue-touch';
import 'swiper/css/swiper.css'
import '~/assets/sass/main.sass'

export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.store = store;
  Vue.component('Layout', DefaultLayout)
  Vue.use(Fragment.Plugin)
  // Vue.use(VueTouch, { name: 'v-touch' })
  Vue.use(VueDatamaps)
  Vue.use(VueAwesomeSwiper)

  // Dynamic import of our base components
  const components = require.context('@/components/', true);
  components.keys().map((component) => {
    if (!component.endsWith('.vue')) {
      return;
    }

    const componentName = component.split('/').pop().replace(/\.vue$/, '');
    Vue.component(componentName, components(component).default);
  });

  // Components from libraries
  Vue.component('validation-provider', ValidationProvider);
  Vue.component('validation-observer', ValidationObserver);
}
