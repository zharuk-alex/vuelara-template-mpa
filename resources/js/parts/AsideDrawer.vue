<template>
    <v-navigation-drawer 
      app
      ref="aside"
      v-model="drawerState"
      hide-overlay
      :mini="mini"
      class="elevation-1 aside-menu"
      dark
    >
    <v-toolbar dark flat tile class="flex-wrap">
      <v-toolbar-title>AuditSoft</v-toolbar-title>
      <!-- <v-subheader class="p-1">Field Data Collection & Management System</v-subheader> -->
    </v-toolbar>
      <v-divider></v-divider>
       <perfect-scrollbar
          class="scroll"
          style="max-height: 80vh; position: relative;"
        >
        
          <v-list>
            <v-list-item-group v-model="selectedItem" multiple>
              <template
                v-for="(menu, index) in initialProps"
              >
                
                  <v-list-group
                  :key="index"
                    :value="false"
                    :prepend-icon="menu.icon"
                    v-if="menu.children.length"
                  >
                    <template v-slot:activator>
                      <v-list-item-title v-text="menu.title"></v-list-item-title>
                    </template>
                      <v-list-item
                        v-for="(children, i) in menu.children"
                        :key="i"
                        link
                        :href="children.path"
                      >
                        <i class="menu-bullet menu-bullet-dot"><span></span></i>
                        <v-list-item-title v-text="children.title"></v-list-item-title>

                        <v-list-item-icon>
                          <v-icon v-text="children.icon"></v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                  </v-list-group>
                
                <!-- Nested END -->
                
                  <v-list-item
                      v-else
                      link
                      :key="index"
                      :href="menu.path"
                      class="menu-item mb-0"
                    >
                    <v-list-item-icon>
                      <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                
              </template>
            </v-list-item-group>
          </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>
</template>

<script>
  import drawerStore from "../store/AsideDrawer";
  import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

  export default {
    components: {
        PerfectScrollbar
    },
    props: {
      initialProps: {
        type: Array,
        default: [],
        required: true,
      },
    },
    data () {
      return {
        selectedItem: null,
        cruds: [
          ['Create', 'mdi-plus-outline'],
          ['Read', 'mdi-file-outline'],
          ['Update', 'mdi-update'],
          ['Delete', 'mdi-delete'],
        ],
        admins: [
          ['Management', 'mdi-account-multiple-outline'],
          ['Settings', 'mdi-cog-outline'],
        ],
      }
    },
    computed:{
      mini() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return true
          case 'lg': return false
          case 'xl': return false
        }
      },
      miniVariant(){
        return this.mini && this.drawerState
      },
      drawerState: {
        get(){
          return this.$store.getters.drawerState
        },
        set(v){
          return this.$store.commit('setDrawer', v)
        }
      }
    },
    
    methods: {
      preventDocumentScroll(){
        let asideContainer = this.$refs.aside.$el;
        asideContainer.addEventListener(
            "wheel",
            (event) => {
                event.preventDefault();
                asideContainer.scrollLeft += event.deltaY;
            },
            {
                // allow preventDefault()
                passive: false
            }
        );
      }
    },
    beforeMount() {
      this.selectedItem = +this.initialProps.map((v,i) => v.active ? i : -1).filter(v => v > -1).join();
    },
    mounted(){
      console.log(this.initialProps)
      this.preventDocumentScroll();
    },
    created() {
      this.$store.registerModule("asideDrawer", drawerStore);
      
    }
  }
</script>
