<template>
    <div>
        <h1 v-text="initialProps.title"></h1>
        <p v-text="initialProps.subtitle"></p>
        <small><a href="https://www.positronx.io/php-laravel-crud-operations-mysql-tutorial/">
        php-laravel-crud-operations-mysql-tutorial</a></small>
    </div>
</template>
<script>

    export default {
        props: {
            initialProps: [Array, Object],
        },
        mounted() {
            console.log(this.initialProps)
        }
    }
</script>