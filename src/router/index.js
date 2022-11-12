import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from "@/components/pages/Profile";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },

        {
            path: "/pages/profile",
            name: "Profile",
            component: Profile
        },

    ]
})