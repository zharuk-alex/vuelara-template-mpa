<template>    
    <v-app>
        <slot name="navbar"></slot>
        <slot name="aside"></slot>
        <v-main>
            <slot name="content"></slot>
        </v-main>
        <v-footer app inset>
            <slot name="footer"></slot>
        </v-footer>
    </v-app>
</template>
<script>
export default {
  data() {
      return {
          brand:'Auditsoft',
      }
  }
};
</script>