import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/Work.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router