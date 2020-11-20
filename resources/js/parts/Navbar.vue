<template>
  <v-app-bar 
    app
    light
    dense
    extended
  >
    <v-app-bar-nav-icon
      @click="toggleAsideDrawer"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <navbar-menu v-if="false"></navbar-menu>
    </v-toolbar-items>
    <template v-slot:extension>
      <h2 v-text="pageTitle"></h2>
      <v-breadcrumbs :items="breadcrumbs" class="py-2">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </template>
  </v-app-bar>
</template>

<script>
import NavbarMenu from './NavbarMenu.vue'
export default {
    props: ["initialProps", "pageTitle"],
    components: {
        NavbarMenu
    },
    data:()=>({
        // drawer: null
        breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ]
    }),
    methods:{
      toggleAsideDrawer(){
        this.$store.dispatch('toggleDrawerState');
      }
    },
    created() {
      console.log(this.$store);
    }
}
</script>

<style>

</style>