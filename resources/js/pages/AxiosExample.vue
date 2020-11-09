<template>
    <div>
        <h1 v-text="initialProps.title"></h1>
        <p v-text="initialProps.subtitle"></p>
        <small><a href="https://www.positronx.io/php-laravel-crud-operations-mysql-tutorial/">
        php-laravel-crud-operations-mysql-tutorial</a></small>
        <hr>
        {{initialProps}}
        <v-container fluid>
            <v-row>
                <v-col md="4">
                    <v-card
                        elevation="2"
                        class="pa-2"
                    >
                        <axiosUserForm/>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    import axiosUserForm from '../components/axiosUserForm'

    export default {
        props: {
            initialProps: [Array, Object],
        },
        components: {
            axiosUserForm
        },
        mounted() {
            console.log('Page About component mounted.')
        }
    }
</script>