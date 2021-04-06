import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ContactPage from '../components/ContactPage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import GalleryPage from '../components/GalleryPage.vue'
import PartnersPage from '../components/PartnersPage.vue'
import ServicesPage from '../components/ServicesPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/products', component: ProductsPage },
    { path: '/gallery', component: GalleryPage },
    { path: '/partners', component: PartnersPage },
    { path: '/services', component: ServicesPage }
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export {
    router
}