import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue'
import {routes} from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.http.options.root = 'http://3.22.43.19:8080/'; //insert root URL here

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  render: h => h(App)
})
