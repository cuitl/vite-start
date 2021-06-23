import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import {createApp} from '@vue/composition-api';
import App from './App.vue';

Vue.use(VueCompositionApi);

createApp(App).mount('#app');