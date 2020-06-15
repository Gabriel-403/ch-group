import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@views/Login/login"
import Home from "@views/Home"
import workspace from "@components/information-model/Workspace"
import summary from "@components/information-model/Summary"



Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home,
        children: [{
            path: '/workspace/:id',
            component: workspace,

        }, {
            path: '/summary',
            component: summary,

        }]


    }

]

const router = new VueRouter({
    routes,
})

let isLogin = false;
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)
    if (from.path === '/login') {
        isLogin = true;
    }
    if (to.path !== '/login') {
        console.info('to', to);
        if (!isLogin) {
            next('/login');
        }
    }
    next();
})


export default router