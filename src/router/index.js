import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import DetailInfo from '@/components/DetailInfo'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '首页',
      component: App,
      children: [
        {
          path: '/userInfo/:id',
          name: '用户详情页',
          component: DetailInfo,
          children: [
            {
              path: '/userInfo1',
              name: '开心',
              component: DetailInfo
            }
          ]
        },
        {
          path: '/psd',
          name: '密码管理',
          component: DetailInfo
        },
        {
          path: '/salary',
          name: '工资管理',
          component: DetailInfo
        },
        {
          path: '/attendence',
          name: '考勤管理',
          component: DetailInfo
        },
        {
          path: '/perform',
          name: '绩效管理',
          component: DetailInfo
        },
        {
          path: '/admin',
          name: '系统管理',
          component: DetailInfo
        },
        {
          path: '/feedback',
          name: '意见反馈',
          component: DetailInfo
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
