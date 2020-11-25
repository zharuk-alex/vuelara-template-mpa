<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="peopleArray"
                    :items-per-page="25"
                    :item-class="`${rowClass}`"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import vDataTableDef from '@/mixins/vDataTableDef'
    import { name, phone, internet, address, company } from 'faker'
    
    const fakeRows = 1000;
    class Person {
        constructor() {
            this.firstName = name.firstName();
            this.lastName = name.lastName();
            this.phoneNumber = phone.phoneNumber();
            this.email = internet.email();
            this.latitude = address.latitude();
            this.longitude = address.longitude();
            this.county = address.county();
            this.city = address.city();
            this.companyName = company.companyName();
            this.personRowClass = "v-datatable-tr"
        }
    }

    export default {
        mixins: [
            vDataTableDef
        ],
        props: {
            initialProps: [Array, Object],
        },
        data() {
            return {
                peopleArray: Array.from({ length: fakeRows }).map((v, k) => new Person()),
                headers: [
                    {
                        text: 'firstName',
                        align: 'start',
                        sortable: false,
                        value: 'firstName',
                    },
                    { text: 'lastName', value: 'lastName' },
                    { text: 'phoneNumber', value: 'phoneNumber' },
                    { text: 'email', value: 'email' },
                    { text: 'county', value: 'county' },
                    { text: 'city', value: 'city' },
                    { text: 'companyName', value: 'companyName' },
                    { text: 'latitude', value: 'latitude' },
                    { text: 'longitude', value: 'longitude' }
                ]
            }
        },
    }
</script>