import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import CryptoTable from './components/CryptoTable.vue'
import CryptoPanel from './components/CryptoPanel.vue'
import Home from './components/Home.vue'
import './tailwind.css'
import axios from "axios";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/home', component:Home, props: true },
        { path:'/table', component: CryptoTable, props: true},
        { path: '/panel', component:CryptoPanel, props: true }
    ],
    linkActiveClass: 'active'    
});



const app = createApp(App);
app.use(router);
app.mount('#app'); 
