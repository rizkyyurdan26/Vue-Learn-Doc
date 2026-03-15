import { createRouter, createWebHistory } from "vue-router";
import FUserDetail from "../FUserDetail.vue";
import FUserView from "../FUserView.vue";

const routes = [
    {
        path: '/user',
        name: 'user',
        component: FUserView
    },
    {
        path: '/user/:id',
        name: 'userDetail',
        component: FUserDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router