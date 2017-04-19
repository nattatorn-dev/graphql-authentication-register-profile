import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './components/auth/login.vue'
import register from './components/auth/register.vue'
import profile from  './components/profile/profile.vue'
import settings from  './components/profile/settings.vue'
import error from  './components/error.vue'

import auth from './auth'
import localStorage from 'localStorage'

Vue.use(VueRouter)

const routes = [
    {path: '/id:id', component: profile, meta: {requiresAuth: true}},
    {path: '/settings', component: settings, meta: {requiresAuth: true}},
    {path: '/auth', component: login},
    {path: '/register', component: register},
    {path: '/logout', component: register},
    {path: '*', component: error},
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        if (!auth.login()) {
            next('/auth')
        } else {
            next('/id' + localStorage.getItem('id'))
        }
    } else if (to.meta.requiresAuth === true) {
        if (!auth.login()) {
            next('/auth')
        } else {
            next()
        }
    } else if (to.meta.requiresAuth === undefined) {
        if (!auth.login()) {
            next()
        } else {
            next('/id' + localStorage.getItem('id'))
        }
    }
    next()
})

export default router
