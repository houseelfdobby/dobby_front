import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUpTenant from './views/SignUpTenant'
import SignUpHouseOwner from './views/SignUpHouseOwner'
import Certificate from './views/Certificate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/certificate',
      name: 'certificate',
      component: Certificate
    }
  ]
})
