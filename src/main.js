
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import Main from './Main.vue';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';
import router from './resources/js/routes.js'; 
import Sidebar from './pages/layouts/sidebar.vue';
import Navbar from './pages/layouts/navbar.vue';
import Footer from './pages/layouts/footer.vue';
import Content from './components/content.vue';
import MobileMenu from './pages/layouts/MobileMenu.vue';


const app = createApp(Main);

app.component('sidebar', Sidebar)
app.component('navbar', Navbar)
app.component('content', Content)
app.component('dashboard-footer', Footer)
app.component('mobilemenu', MobileMenu)

app.use(router);

app.mount('#app');

