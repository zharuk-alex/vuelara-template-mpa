<template>
    
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Reports Pages Component</div>
                <div class="card-body">
                    <v-data-table
                        :headers="headers"
                        :items="peopleArray"
                        :items-per-page="5"
                        class="elevation-1"
                    ></v-data-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import faker from 'faker';

    class Person {
        constructor() {
            this.firstName = faker.name.firstName();
            this.lastName = faker.name.lastName();
            this.phoneNumber = faker.phone.phoneNumber();
            this.email = faker.internet.email();
        }
    }

    export default {
        props: {
            initialProps: [Array, Object],
        },
       data() {
            return {
                peopleArray: [],
                headers: [
                    {
                        text: 'firstName',
                        align: 'start',
                        sortable: false,
                        value: 'firstName',
                    },
                    { text: 'lastName', value: 'lastName' },
                    { text: 'phoneNumber', value: 'phoneNumber' },
                    { text: 'email', value: 'email' }
                ]
            }
        },
        computed:{
            tableHeaders(){
                return Object.keys(this.peopleArray[0]).map(key=>{
                    console.log(key);
                    return key;
                })
            }
        },
        methods:{
            testFetch(){
                for (let index = 0; index < 10; index++) {
                    let person = new Person();
                    this.peopleArray.unshift(person);
                    console.log(this.peopleArray);
                }
                
                // axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
                //     .then(function (response) {
                //         // handle success
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         // handle error
                //         console.log(error);
                //     })
                //     .then(function () {
                //         // always executed
                //     });
            }
        },
        mounted() {
            console.log('Page About component mounted.');
            this.testFetch()
        }
    }
</script>