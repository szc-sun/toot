import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './icons' // icon
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' // 引入echarts
import 'echarts/extension/bmap/bmap.js'
import 'echarts/echarts.common.js'
Vue.prototype.$echarts = echarts // 引入组件

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
