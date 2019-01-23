// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import SimpleVueValidation from 'simple-vue-validator';
import VueRouter from 'vue-router'





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0ZmMkENfp6PzeBvhJNmvH9Nt5Sb6ZO7k",
    authDomain: "development-ra.firebaseapp.com",
    databaseURL: "https://development-ra.firebaseio.com",
    projectId: "development-ra",
    storageBucket: "development-ra.appspot.com",
    messagingSenderId: "912825104858"
  };
  firebase.initializeApp(config);

  var admin_firebase = require("firebase-admin");
var serviceAccount = require("../config/serviceAccountKey.json");
admin_firebase.initializeApp({
    credential: admin_firebase.credential.cert(serviceAccount),
    databaseURL: require('../config/private.json').config_fb.databaseURL
});

// todo
// cssVars()

Vue.use(BootstrapVue)
Vue.use(SimpleVueValidation);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
