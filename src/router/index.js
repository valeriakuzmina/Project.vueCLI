import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '@/components/HomePage.vue'
// import ProjectPage from '@/components/ProjectPage.vue'
// import PageBlog from '@/components/PageBlog.vue'

Vue.use(Router)

export default new Router ({
    routes: [
            {
                path: "/",
                name: "home",
                component: () => import('@/components/HomePage.vue')

            },
            {
                path: "/project",
                name: "project",
                component: () => import('@/components/ProjectPage.vue')

            },
            {
                path: "/blog",
                name: "blog",
                component: () => import('@/components/PageBlog.vue')

            },
            {
                path: '/projectdetails',
                name: "projectdetails",
                component: () => import('@/components/ProjectDetails.vue')
            },
            {
                path: '/blogdetails',
                name: "blogdetails",
                component: () => import('@/components/BlogDetails.vue')
            }
        ]
    }
)