require('./bootstrap');
import Vue from 'vue' 
import Vuetify from 'vuetify'
import Vuex from 'vuex';

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

        AboutPageContent: () => import(
            /* webpackChunkName: "js/about" */
            './pages/about.vue'
        ),
        DashboardPageContent: () => import(
            /* webpackChunkName: "js/dashboard" */ 
            './pages/dashboard.vue'
        ),
        WelcomePageContent: () => import(
            /* webpackChunkName: "js/welcome" */ 
            './pages/welcome.vue'
        ),
        ReportsPageContent: () => import(
            /* webpackChunkName: "js/reports" */ 
            './pages/reports.vue'
        ),
    },
    
});