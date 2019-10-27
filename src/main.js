// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import axios from 'axios'

import {
  Toast
} from 'vant'

axios.defaults.baseURL = "http://127.0.0.1:3000"


//拦截器
axios.interceptors.response.use((res) => {
  const {
    message,
    statusCode
  } = res.data
  if (message && statusCode == 401) {
    Toast.fail(message)
  }
  return (res)
})



Vue.prototype.$axios = axios


Vue.config.productionTip = false

Vue.use(Vant)

import 'vant/lib/index.css';
import Axios from 'axios'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
