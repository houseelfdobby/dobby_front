import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn'
import SignUpTenant from './views/SignUpTenant'
import SignUpHouseOwner from './views/SignUpHouseOwner'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignIn
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
    }
  ]
})
