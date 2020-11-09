// require('./bootstrap');
import Vue from 'vue' 
import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib'
import Vuex from 'vuex';
// import '@mdi/font/css/materialdesignicons.css';
// import 'vuetify/dist/vuetify.css';

Vue.use(Vuetify,{
    theme: {
        light: true
    }
});
Vue.use(Vuex);

// vue app 
import App from './App.vue'
const store = new Vuex.Store({ /* options */ })


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    store: store,
    components: { 
        App,
        LeftAsideDrawer: require('./parts/LeftAsideDrawer.vue').default,
        Navbar: require('./parts/Navbar.vue').default,

        /* Dynamically loading components  */
        /* Имя vue скрипта должно быть идентичным роуту  */
        //  CamelCase or Kebab: AboutPageContent / 'about-page-content'

        // Main Menu creator
        MenuTreePageContent: () => import(
            /* webpackChunkName: "js/login" */
            './pages/MenuTree.vue'
        ),
        LoginPageContent: () => import(
            /* webpackChunkName: "js/login" */
            './pages/auth/Login.vue'
        ),
        AboutPageContent: () => import(
            /* webpackChunkName: "js/about" */
            './pages/About.vue'
        ),
        DashboardPageContent: () => import(
            /* webpackChunkName: "js/dashboard" */ 
            './pages/Dashboard.vue'
        ),
        AxiosExamplePageContent: () => import(
            /* webpackChunkName: "js/axios-example" */ 
            './pages/AxiosExample.vue'
        ),
        
        
        WelcomePageContent: () => import(
            /* webpackChunkName: "js/welcome" */ 
            './pages/Welcome.vue'
        ),
        ReportsPageContent: () => import(
            /* webpackChunkName: "js/reports" */ 
            './pages/Reports.vue'
        ),
    },
    
});