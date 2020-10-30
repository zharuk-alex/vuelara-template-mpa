<template>
  <v-container>
	<v-row justify="center">
	  <v-col cols="12">
		<h2 class="scoped-scss">Test Scoped SCSS style</h2>
	  </v-col>
	  
	  <v-col
		v-for="n in 25"
		:key="n"
		cols="auto"
	  >
		<v-card
		  :elevation="n - 1"
		  height="100"
		  width="100"
		  class="secondary"
		>
		  <v-row
			class="fill-height"
			align="center"
			justify="center"
			v-text="n - 1"
		  ></v-row>
		</v-card>
	  </v-col>
	</v-row>
  </v-container>
</template>
<script>
	export default {
		mounted() {
			console.log('Page Dashboard component mounted.')
		}
	}
</script>
<style lang="scss" scoped>
  .scoped-scss{
	font-size: 2rem;
	font-weight: 600;
	color: lighten($color: #000000, $amount: 20);
	text-align: center;
  }
</style>