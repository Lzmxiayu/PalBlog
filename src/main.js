// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import axios from 'axios'
import $ from 'jquery'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

//axios全局配置，也可以单独文件配置axios，见https://www.bilibili.com/video/BV11i4y177ku?p=14&spm_id_from=pageDriver
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['Authorization'] = 'Token'
// axios.defaults.headers.post['Content-type'] = ''
// import 'bootstrap/dist/js/bootstrap.min'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/bootstrap.min.css'
import './assets/bootstrap.min'



Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)

//创建路由
const router = new VueRouter({
    routes:Routes,
    mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
