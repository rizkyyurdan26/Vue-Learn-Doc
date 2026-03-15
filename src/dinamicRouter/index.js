import { createRouter, createWebHistory } from "vue-router";
import DinamicHome from "../dinamicRouterView/DinamicHome.vue";
import DinamicUser from "../dinamicRouterView/DinamicUser.vue";

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: DinamicHome
    },
    {
        path: '/users',
        name: 'userpage',
        component: DinamicUser
    },
    {
        path: '/users/:id',
        name: 'userdetail',
        component: () => import('../dinamicRouterView/DinamicUserDetail.vue')
    },

]

const dinamicRouter = createRouter({
    history: createWebHistory(),
    routes
})

export default dinamicRouter;