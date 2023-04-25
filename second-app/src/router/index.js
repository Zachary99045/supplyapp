import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [

    {
        path:'/',
        name:'about',
        component: ()=>import ('../views/AboutView.vue')
    },
    {
        path:'/signup',
        name:'signup',
        component: ()=>import ('../views/signup.vue')
    },
    {
        path:'/login',
        name:'login',
        component: ()=>import ('../views/login.vue')
    },
    {
        path:'/userUpdata',
        name: 'userUpdata',
        component: ()=>import ('../views/updateUser.vue')
    },
    {
        path:'/getAllToy',
        name:'getAllToy',
        component: ()=>import ('../views/getAllToy.vue')
    },
    {
        path:'/createToyData',
        name:'createToyData',
        component: ()=>import ('../views/createToyData.vue')
    },
    {
        path:'/getToyData',
        name:'getToyData',
        component: ()=>import ('../views/getToyData.vue')
    },
    {
        path:'/GetOneToy',
        name:'GetOneToy',
        component:()=>import ('../views/GetOneToy.vue')
    },
    {
        path:'/DeleteToy',
        name:'DeleteToy',
        component:()=>import ('../views/DeleteToy.vue')
    },
    {
        path:'/UpdateToy',
        name:'UpdateToy',
        component:()=>import ('../views/UpdateToy.vue')
    },
    {
        path:'/getUserdata',
        name:'getUserdata',
        component:()=>import ('../views/getUserdata.vue')
    },
    {
        path:'/GetOneUserData',
        name:'GetOneUserData',
        component: ()=>import ('../views/GetOneUserData.vue')
    },
    {
        path:'/deleteUserData',
        name:'deleteUserData',
        component: ()=>import ('../views/deleteUserData.vue')
    },
    {
        path:'/Userlogout',
        name:'Userlogout',
        component: ()=>import ('../views/Userlogout.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router 