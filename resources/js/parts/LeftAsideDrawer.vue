<template>
    <v-navigation-drawer 
      app
      v-model="drawerState"
      :clipped="$vuetify.breakpoint.mobile"      
      hide-overlay
      class="elevation-1"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            AuditSoft
          </v-list-item-title>
          <v-list-item-subtitle>
            Field Data Collection & Management System
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        class="pa-0"
      >
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
          <v-list-item
            v-for="(item, i) in initialProps"
            :key="i"
            link
            :href="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import drawerStore from "../store/LeftAsideDrawer";

  export default {
    props: {
      initialProps: {
        type: Array,
        default: [],
        required: true,
      },
    },
    computed:{
      drawerState: {
        get(){
          return this.$store.getters.drawerState
        },
        set(v){
          return this.$store.commit('setDrawer', v)
        }
        
      }
    },
    data () {
      return {
        selectedItem: null,
      }
    },
    beforeMount() {
      this.selectedItem = +this.initialProps.map((v,i) => v.active ? i : -1).filter(v => v > -1).join();
    },
    mounted(){
      console.log(this.initialProps)
      console.log('this store', this.$store);
    },
    created() {
      this.$store.registerModule("leftAsideDrawer", drawerStore);
      
    }
  }
</script>