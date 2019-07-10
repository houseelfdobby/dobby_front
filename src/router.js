import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn'
import MainOwner from './views/MainOwner'
import SignUpTenant from './views/SignUpTenant'
import SignUpHouseOwner from './views/SignUpHouseOwner'
import Certificate from './views/Certificate'
import Communication from './views/Communication'
import Enroll from './views/Enroll'
import TenantMain from './views/TenantMain'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: SignIn
    },
    {
      path: '/mainowner',
      name: 'mainowner',
      component: MainOwner
    },
    {
      path: '/signup_tenant',
      name: 'signup_tenant',
      component: SignUpTenant
    },     
    {
      path: '/signup_houseowner',
      name: 'signup_houseowner',
      component: SignUpHouseOwner

    },
    {
      path: '/enroll',
      name: 'enroll',
      component: Enroll

    },
    {
      path: '/tenant_main',
      name: 'tenant_main',
      component: TenantMain
    },
    {
      path: '/certificate',
      mame: 'certificate',
      component: Certificate
    },
    {
      path: '/communication',
      name: 'communication',
      component: Communication

    }
  ]
})