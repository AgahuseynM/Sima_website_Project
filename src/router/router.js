import { createRouter, createWebHistory } from 'vue-router'
import home from '@/pages/home'
import download from "@/pages/download";
import services from "@/pages/services";
import partners from "@/pages/partners";
import news from "@/pages/news";
import faq from "@/pages/faq";

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/download',
        name: 'download',
        component: download
    },
    {
        path: '/services',
        name: 'services',
        component: services
    },
    {
        path: '/partners',
        name: 'partners',
        component: partners
    },
    {
        path: '/news',
        name: 'news',
        component: news
    },
    {
        path: '/faq',
        name: 'faq',
        component: faq
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
