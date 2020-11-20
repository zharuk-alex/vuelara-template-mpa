<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          {{ initialProps.title }}
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>
<script>
    export default {
        props: {
            initialProps: [Array, Object],
            fullSizeContainer: {
              type: Boolean,
              default: false
            }
        },
        mounted() {
          console.log('Page About component mounted.')
          console.log(this.fullSizeContainer)
        }
    }
</script>
<style>
/* .v-main__wrap .container {
  padding: 0!important;
} */
</style>