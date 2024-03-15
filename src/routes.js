import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue';
import Login from './components/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
    ]
});

router.beforeEach((to, _, next) => {
    const userData = localStorage.getItem('userData');
    if (!userData && to.path !== '/login') {
        next('/login');
    } else {
        next(); 
    }
});

export default router;
