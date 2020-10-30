<template>    
    <v-app>
        <slot name="aside"></slot>
        <slot name="navbar"></slot>
        <v-main>
            <v-container fluid>
                <slot name="content"></slot>
            </v-container>
        </v-main>
        <v-footer app>
            <slot name="footer"></slot>
        </v-footer>
    </v-app>
</template>
<script>
export default {
  computed: {},
  data() {
      return {
          message:'App.vue'
      }
  }
};
</script>