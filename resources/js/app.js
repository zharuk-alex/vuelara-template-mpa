require('./bootstrap');

import vuetify from './plugins/vuetify' // path to vuetify export
import Vuex from 'vuex';
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import VuetifyDraggableTreeview from 'vuetify-draggable-treeview'
import VuetifyConfirm from 'vuetify-confirm'


Vue.use(VuetifyConfirm, {
    vuetify,
    buttonTrueText: 'Accept',
    buttonFalseText: 'Discard',
    buttonTrueColor: 'primary',
    buttonFalseColor: 'grey',
    buttonTrueFlat: false,
    buttonFalseFlat: true,
    color: 'warning',
    icon: 'warning',
    title: 'Warning',
    width: 350,
    property: '$confirm'
  })
Vue.use(VuetifyDraggableTreeview)
Vue.use(PerfectScrollbar)
Vue.use(Vuex)

// vue app 
import App from './App.vue'

const app = new Vue({
    vuetify,
    store: new Vuex.Store({ /* options */ }),
    components: { 
        App,
        AsideDrawer: require('./parts/AsideDrawer.vue').default,
        Navbar: require('./parts/Navbar.vue').default,

        /* Dynamically loading components  */
        /* Имя vue скрипта должно быть идентичным роуту  */
        //  CamelCase or Kebab: AboutPageContent / 'about-page-content'

        // Main Menu creator
        MenuTreePageContent: () => import(
            /* webpackChunkName: "js/menuTree" */
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
    
}).$mount('#app');