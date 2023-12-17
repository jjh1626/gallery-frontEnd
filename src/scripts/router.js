import { createRouter, createWebHistory } from 'vue-router'
import vueHome from '@/pages/Home'
import vueLogin from '@/pages/Login'
import vueCart from '@/pages/Cart'
import vueOrder from '@/pages/Order'
import vueOrders from '@/pages/Orders'

const routes = [
    {path:'/', component: vueHome},
    {path:'/login', component: vueLogin},
    {path:'/cart', component: vueCart},
    {path:'/order', component: vueOrder},
    {path:'/orders', component: vueOrders}
]

// Path에 따라 RouterView 에 출력할 component 지정
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;