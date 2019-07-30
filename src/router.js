import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    // 路由的->组建的懒加载
    component: () =>
        import('@/views/home/index.vue')
  }
  ]
})
