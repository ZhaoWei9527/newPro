import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import FirstPage from '../components/firstPage.vue'
import NewProduct from '../components/newProduct.vue'
import Items from '../components/Items.vue'

import AllProduct from '../components/AllProduct.vue'
import HangOut from '../components/hangOut.vue'
import ShopCart from '../components/shopcart.vue'
import UserCenter from '../components/userCenter.vue'
import Login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  history: true,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'first'
        },
        {
          path: 'first',
          component: FirstPage
        },
        {
          path: 'newproduct',
          component: NewProduct
        },
        {
          path: 'items/:id',
          component: Items
        }
      ]
    },
    {
      path: '/allproduct',
      component: AllProduct
    },
    {
      path: '/hangout',
      component: HangOut
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/usercenter',
      component: UserCenter
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
