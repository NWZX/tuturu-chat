import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Chat from '../views/Chat.vue';
import Login from '../views/Login.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Chat',
        component: Chat,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        props: { username: 'NWZX' },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
