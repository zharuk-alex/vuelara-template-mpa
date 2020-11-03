// require('./bootstrap');
import Vue from 'vue' 
import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib'
import Vuex from 'vuex';
// import '@mdi/font/css/materialdesignicons.css';
// import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);
Vue.use(Vuex);

// vue app 
import App from './app.vue'
const store = new Vuex.Store({ /* options */ })


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#3f51b5',
                    secondary: '#b0bec5',
                    accent: '#8c9eff',
                    error: '#b71c1c',
                },
            },
        },
    }),
    store: store,
    components: { 
        App,
        LeftAsideDrawer: require('./parts/LeftAsideDrawer.vue').default,
        Navbar: require('./parts/Navbar.vue').default,

        /* Dynamically loading components  */
        /* Имя vue скрипта должно быть идентичным роуту  */
        //  CamelCase or Kebab: AboutPageContent / 'about-page-content'
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