import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Admin from '@/views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path:'/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path:'/admin',
      component: Admin,
      children: [
        {
          path: 'search',
          component: () => import('@/components/Search.vue')
        },
        {
          path: 'detail/:id',
          name:'detail',
          components: {
            detail: () => import('@/components/Detail.vue')
          }
        },
        {
          path: '/admin',
          redirect: '/admin/search'
        }
      ]
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          component: () => import('@/views/Home.vue')
        },
        {
          path: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path:'apply',
          component:() => import('@/views/Apply.vue')
        },
        {
          path:'about',
          component:() => import('@/views/About.vue')
        }
      ]
    },
    {
      path: '/*',
      redirect: '/index'
    },
  ]
})
