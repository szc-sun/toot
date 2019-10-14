import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally 注册到全局
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
