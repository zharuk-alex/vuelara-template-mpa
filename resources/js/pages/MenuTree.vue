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
                            
   
                                
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <h3 class="dark--text" v-text="actionTitle"></h3>
                                        <template v-slot:actions>
                                            <v-icon color="info">
                                            mdi-information-outline
                                            </v-icon>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p><a href="https://v-draggable-treeview.netlify.app/" target="_blank">v-draggable-treeview</a></p>
                                        <p><strong>action url:</strong>{{actionRoute}}</p>
                                        <p><strong>data to url:</strong>{{formModel}}</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
   
                            

                            <template>
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
                                        item-value="id" clearable label="Parent">
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
                                        <v-icon left>mdi-check</v-icon>
                                        Save
                                    </v-btn>
                                    <v-btn color="warning" class="mr-4" @click="handleClear">
                                        <v-icon left>mdi-undo</v-icon>
                                        Reset
                                    </v-btn>
                                    <v-btn color="error" class="mr-4" @click="handleDeleteMenu">
                                        <v-icon left>mdi-trash-can-outline</v-icon>
                                        Delete
                                    </v-btn>

                                    <!-- <confirmation-dialog 
                                        activator-text="Удалить"
                                        activator-color="error"
                                        activator-icon="mdi-trash-can-outline"
                                        msg-text="Вы уверены что хотите удалить?"
                                    ></confirmation-dialog> -->
                                </v-form>
                            </template>
                        </v-col>
                        <v-col>
                            <v-sheet dark color="blue darken-2" class="rounded-sm py-2 text-center" elevation="2" >
                                <h3>Menu List</h3>
                            </v-sheet>
                            <p>*<small class="blue--text text--lighten-1"> select item to edit / drag`n`drop for reordering</small></p>
                            <v-draggable-treeview 
                                v-model="menus" 
                                @input="inputDrag"
                            >
                                <!-- eslint-disable-next-line vue/no-unused-vars -->
                                <template v-slot:prepend="{ item }">
                                    <v-icon>{{item.icon}}</v-icon>
                                </template>
                                <template v-slot:label="{ item }">
                                    
                                    <v-hover  v-slot="{ hover }" >
                                        <div 
                                            class="h-100 d-flex align-center ml-3" 
                                            @click.stop="handlerClickOnTreeMenuItem(item)"
                                        >
                                            <span v-text="item.title"></span>
                                            <v-icon v-show="hover" 
                                                class="ml-auto" 
                                                v-text="'mdi-drag-horizontal-variant'"
                                            ></v-icon>
                                        </div>
                                    </v-hover>
                                </template>
                                <template v-slot:append="{ item }">
                                    <template
                                    v-if="item.children != null && item.children.length > 0"
                                    >
                                    has {{ item.children.length }} children
                                    </template>
                                </template>
                            </v-draggable-treeview>
                            <v-divider class="my-3"></v-divider>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength } from 'vuelidate/lib/validators'
    import DialogIconGrid from '../components/DialogIconsGrid';
    import ConfirmationDialog from '../components/ConfirmationDialog'
    import VuetifyDraggableTreeview from 'vuetify-draggable-treeview'
    
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
            DialogIconGrid, 
            ConfirmationDialog,
            VuetifyDraggableTreeview
        },
        data() {
            return {
                currentActiveMenuItem: null,
                alert: true,
                TEXT: {
                    edit: {
                        title: "Edit menu item",
                    },
                    add: {
                        title: "Add NEW menu item",
                    }
                },
                csrf: document.head.querySelector('meta[name="csrf-token"]').content,
                menus: [],
                formIsValid: true,
                formModel: {
                    id: null,
                    title: "",
                    path: "",
                    parent_id: 0,
                    icon: "",
                    isBlocked: false,
                    order: null
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
            actionTitle() {
                let title = this.TEXT.add.title;
                if (this.currentActiveMenuItem) {
                    title = this.TEXT.edit.title + ` "${this.currentActiveMenuItem.title.toUpperCase()}"`;
                }
                return title;
            },
            ParentOnly() {
                return this.menus.filter(m => !m.parent_id).map(m => ({
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
                !this.$v.formModel.path.required && errors.push('Path is required')
                return errors
            },
        },
        methods: {
            handlerClickOnTreeMenuItem(value, $event){
                console.log('click', value);
                
                let notEmpty = _.values(value).some(x => x !== undefined);
                if (notEmpty) {
                    this.currentActiveMenuItem = value;
                    Object.keys(this.currentActiveMenuItem).forEach(key => {
                        if (key in this.formModel) {
                            this.formModel[key] = this.currentActiveMenuItem[key];
                        }
                    });
                    this.formIsValid = true;
                } 
            },
            inputDrag(value){
                console.log('inputDrag',value);
                var result = _.cloneDeepWith(value, function(v) {
                    if(!_.isObject(v)) {
                        return false;
                    }
                });
                console.log('result',result);
            },
            onIconSelect(icon) {
                this.formModel.icon = icon;
                this.showIconDialog = false;
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
            handleClear () {
                this.$v.$reset()
                this.formModel = {
                    id: null,
                    title: "",
                    path: "",
                    parent_id: 0,
                    icon: "",
                    isBlocked: false,
                    order: null
                }
                this.currentActiveMenuItem = 0;
            },
            confirmationTest(){
                this.$confirm('Do you really want to exit?').then(res => {
                    console.log(res)
                })
            },
            handleDeleteMenu: async function () {
                console.log(this.$vuetify);
                let res = await this.$confirm('Do you really want to exit?', { title: 'Warning' });
                if (res) {
                    console.log('aaa');
                }
            }
        },
        mounted() {
            this.menus = this.initialProps;
            console.log(this.initialProps)
        }
    }

</script>