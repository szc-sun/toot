import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from '@/views/home/index'
import Layout from '@/components/Layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Layout
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      redirect: '/aboutUs/about1',
      component: Layout,
      children: [
        {
          path: 'about1',
          name: 'about1',
          component: () => import(/* webpackChunkName: "about" */ './views/aboutUs/index.vue')
        },
        {
          path: 'about2',
          name: 'about2',
          component: () => import(/* webpackChunkName: "about" */ './views/aboutUs/index1.vue')
        }
      ]
    },
    {
      path: '/monitor',
      name: 'monitor',
      redirect: '/monitor/echartsMap',
      component: Layout,
      children: [
        {
          path: 'echartsMap',
          name: 'echartsMap',
          component: () => import(/* webpackChunkName: "about" */ '@/views/monitor/echartsMap.vue')
        }
      ]
    }
  ]
})
