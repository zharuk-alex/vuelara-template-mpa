<template>
    <v-app-bar
      app
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon
        @click="toggleAsideDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title v-text="initialProps.brandName"></v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    props: ["initialProps"],
    data:()=>({
        // drawer: null
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