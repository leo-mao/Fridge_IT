/* eslint-disable linebreak-style */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Settings from '@/components/Settings';
import Slots from '@/components/Slots';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/slots',
      name: 'Slots',
      component: Slots,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
