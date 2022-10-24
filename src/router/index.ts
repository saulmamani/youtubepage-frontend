import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/404',
        name: 'error',
        component: () => import('../components/Error.vue'),
    },
    {
        path: '/403',
        name: 'error_permisos',
        component: () => import('../components/ErrorPermisos.vue'),
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/VideoDetail.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
