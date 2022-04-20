import { createRouter, createWebHistory } from 'vue-router'
import home from '@/pages/home.component'
import download from "@/pages/download.component";
import services from "@/pages/services.component";
import partners from "@/pages/partners.component";
import news from "@/pages/news.component";
import faq from "@/pages/faq.component";

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
