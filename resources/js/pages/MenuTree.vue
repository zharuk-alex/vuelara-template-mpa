<template>
    <v-row>
        <v-col md="10" xl="8" class="mx-auto">
            <v-card elevation="4">
                <v-app-bar flat color="purple">
                    <v-toolbar-title class="title white--text pl-0">
                        Menus Admin
                    </v-toolbar-title>
                </v-app-bar>
                <v-card-text>
                    <!-- {{initialProps}} -->
                    <v-row>
                        <v-col>
                            <div class="green darken-2 py-2 text-center">
                                <h3 class="white--text" v-text="ActiveMenuItem"></h3>
                            </div>

                            <template>
                                <v-expansion-panels>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header>
                                            <template v-slot:actions>
                                                <v-icon color="info">
                                                mdi-information-outline
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                        <p><strong>action url:</strong>{{actionRoute}}</p>
                                        <p><strong>data to url:</strong>{{formModel}}</p>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                                <v-form 
                                    ref="form" 
                                     
                                    :action="actionRoute" 
                                    v-model="formIsValid"
                                    lazy-validation
                                    method="post"
                                    enctype="multipart/form-data"
                                >
                                    <input type="hidden" name="_token" :value="csrf"  />
                                    <input v-if="formModel.id" type="hidden" name="id" :value="formModel.id" />

                                    <v-text-field v-model="formModel.title" name="title"
                                        :error-messages="titleErrors"
                                        :counter="10"
                                        label="Title"
                                        required
                                        @input="$v.formModel.title.$touch()"
                                        @blur="$v.formModel.title.$touch()"
                                        >
                                    </v-text-field>

                                    <v-text-field 
                                        v-model="formModel.path" 
                                        name="path" 
                                        :error-messages="pathErrors"
                                        :counter="10"
                                        label="Path"
                                        required
                                        @input="$v.formModel.path.$touch()"
                                        @blur="$v.formModel.path.$touch()">
                                    </v-text-field>

                                    <v-select v-model="formModel.parent_id" name="parent_id" :items="ParentOnly"
                                        item-value="id" label="Parent">
                                    </v-select>

                                    <v-btn elevation="4" height="50" width="50" @click.stop="showIconDialog=true">
                                        <v-icon x-large v-text="formModel.icon" color="blue-grey darken-2">
                                        </v-icon>
                                    </v-btn>
                                    <input type="hidden" name="icon" :value="formModel.icon" />
                                    <!-- {{showIconDialog}} -->

                                    <dialog-icon-grid 
                                        :icon="formModel.icon"
                                        v-model="showIconDialog"  
                                        @close="showIconDialog=false"  
                                        @saveIcon="onIconSelect"
                                    ></dialog-icon-grid>

                                    <v-checkbox v-model="formModel.isBlocked" name="isblocked" label="Is blocked">
                                    </v-checkbox>
                                    <!-- {{formModel}} -->
                                    <v-btn :disabled="!formIsValid" color="success" class="mr-4" @click="handleSubmit">
                                        Save
                                    </v-btn>
                                </v-form>
                            </template>
                        </v-col>
                        <v-col>
                            <div class="blue darken-2 py-2 text-center">
                                <h3 class="white--text">Menu List</h3>
                            </div>
                            <p>*<small> select item to edit</small></p>
                            <v-treeview v-model="selectedMenu" :items="menu" selection-type="leaf" selectable hoverable
                                return-object open-all item-key="id" item-text="title" activatable color="accent"
                                @update:active="onUpdateMenuItem" v-click-outside="onUpdateMenuItem">
                            </v-treeview>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    import _ from "lodash";
    import { validationMixin } from 'vuelidate'
    import { required, maxLength } from 'vuelidate/lib/validators'
    import dialogIconGrid from '../components/dialogIconsGrid';

    export default {
        props: {
            homeRoute: String,
            initialProps: [Array, Object],
        },
        mixins: [validationMixin],

        validations: {
            formModel:{
                title: { required, maxLength: maxLength(24) },
                path: { required }
            }
            
        },
        components: {
            dialogIconGrid
        },
        data() {
            return {
                currentActiveMenuItem: null,
                actionsTypes: {
                    edit: {
                        title: "Edit menu item",
                    },
                    add: {
                        title: "Add NEW menu item",
                    }
                },
                csrf: document.head.querySelector('meta[name="csrf-token"]').content,
                menu: [],
                formIsValid: true,
                // defaultFormModel: _.clone(this.formModel),
                formModel: {
                    id: null,
                    title: "",
                    path: "",
                    parent_id: 0,
                    icon: "",
                    isBlocked: false
                },
                
                selectedMenu: [],
                showIconDialog: false
            }
        },
        computed: {
            actionRoute(){
                let actionurl = this.homeRoute
                if(this.formModel.id){
                    actionurl = this.homeRoute+"/update/"+this.formModel.id+""
                }
                return actionurl;
            },
            submitMethod(){
                let method = "POST";
                if(this.formModel.id) {
                    method = "PUT";
                }
            },
            menuTitle(){
                return formModel.title
            },
            menuPath(){
                return formModel.path
            },
            ActiveMenuItem() {
                let title = this.actionsTypes.add.title;
                if (this.currentActiveMenuItem) {
                    title = this.actionsTypes.edit.title + ` "${this.currentActiveMenuItem.title.toUpperCase()}"`;
                }
                return title;
            },
            ParentOnly() {
                return this.menu.filter(m => !m.parent_id).map(m => ({
                    id: m.id,
                    text: m.title
                }));
            },
            titleErrors () {
                const errors = []
                if (!this.$v.formModel.title.$dirty) return errors
                !this.$v.formModel.title.maxLength && errors.push('Title must be at most 10 characters long')
                !this.$v.formModel.title.required && errors.push('Title is required.')
                return errors
            },
            pathErrors () {
                const errors = []
                if (!this.$v.formModel.path.$dirty) return errors
                // !this.$v.menuTitle.email && errors.push('Must be valid e-mail')
                !this.$v.formModel.path.required && errors.push('Path is required')
                return errors
            },
        },
        methods: {
            onUpdateMenuItem(value) {
                if (value.length) {
                    this.currentActiveMenuItem = value[0];
                    Object.keys(this.currentActiveMenuItem).forEach(key => {
                        if (key in this.formModel) {
                            this.formModel[key] = this.currentActiveMenuItem[key];
                        }
                    });
                } else {
                    this.currentActiveMenuItem = null;
                    this.formIsValid = true;
                }
            },
            onIconSelect(icon) {
                this.formModel.icon = icon;
                this.showIconDialog = false;
                console.log(this.formModel);
            },
            handleSubmit () {
                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                } else {
                    this.$refs.form.$el.submit();
                }
            },
            clear () {
                // this.$v.$reset()
                // this.formModel.title = ''
                // this.formModel.email = ''
                // this.formModel.parent_id = 0
                // this.formModel.isBlocked = false
            },
        },
        mounted() {
            this.menu = this.initialProps;
        }
    }

</script>
