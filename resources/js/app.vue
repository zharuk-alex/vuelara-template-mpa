<template>    
    <v-app>
        <slot name="navbar"></slot>
        <slot name="aside"></slot>
        <v-main>
            <v-container fluid>
                <slot name="content" class="text-center"></slot>
            </v-container>
        </v-main>
        <v-footer app inset>
            <slot name="footer"></slot>
        </v-footer>
    </v-app>
</template>
<script>
export default {
  computed: {},
  data() {
      return {
          message:'App.vue',
      }
  },
  beforeMount(){
      console.log(this.$refs)
  }
};
</script>