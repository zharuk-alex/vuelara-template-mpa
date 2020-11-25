<template>
    <v-row>
        <v-col md="10" xl="8" class="mx-auto">
            <v-card elevation="4">
                <v-toolbar
                    color="indigo"
                    dark
                    >
                    <v-toolbar-title class="title white--text pl-0">
                        Menus Admin
                    </v-toolbar-title>
                </v-toolbar>
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
                                        <p><a href="https://vuelidate.js.org/" target="_blank">vuelidate</a></p>
                                        <p><a href="https://v-draggable-treeview.netlify.app/" target="_blank">v-draggable-treeview</a></p>
                                        <p><strong>action url:</strong>{{switchActionRoute}}</p>
                                        <p><strong>submited params:</strong>{{formModel}}</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
   
                            

                            <template>
                                <v-form 
                                    ref="form" 
                                    :action="switchActionRoute" 
                                    v-model="formIsValid"
                                    lazy-validation
                                    enctype="multipart/form-data"
                                    method="POST"
                                >   
                                    <!-- hiddens -->
                                    <input type="hidden" name="_token" :value="csrf"  />
                                    <input type="hidden" name="_method" value="POST"  />
                                    <input v-if="formModel.id" type="hidden" name="id" :value="formModel.id" />
                                    <!--  -->
                                    <v-text-field v-model="formModel.title" name="title"
                                        :error-messages="titleErrors"
                                        :counter="$v.formModel.title.$params.maxLength.max"
                                        :label="_.capitalize(TEXT.title)"
                                        required
                                        @input="$v.formModel.title.$touch()"
                                        @blur="$v.formModel.title.$touch()"
                                        >
                                    </v-text-field>

                                    <v-text-field 
                                        v-model="formModel.path" 
                                        name="path" 
                                        :error-messages="pathErrors"
                                        :label="_.capitalize(TEXT.path)"
                                        required
                                        @input="$v.formModel.path.$touch()"
                                        @blur="$v.formModel.path.$touch()">
                                    </v-text-field>

                                    <v-select 
                                        v-model="formModel.parent_id" 
                                        name="parent_id" 
                                        :items="parentsOnly"
                                        item-value="id" 
                                        clearable  
                                        @click:clear="$nextTick(() => formModel.parent_id=0)" 
                                        :label="_.capitalize(TEXT.parent)" 
                                        item-disabled
                                    >
                                    </v-select>

                                    <v-btn 
                                        :disabled="!!isOrderChanged"
                                        elevation="4" 
                                        height="50" 
                                        width="50" 
                                        @click.stop="showIconDialog=true"
                                    >
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

                                    <v-checkbox 
                                        v-model="formModel.isBlocked" 
                                        name="isblocked" 
                                        :label="_.capitalize(TEXT.is_blocked)"
                                    />
                                    
                                    <v-btn :disabled="!formIsValid || !!isOrderChanged" color="success" class="mr-4" @click="handleSubmitForm">
                                        <v-icon left>mdi-check</v-icon>
                                        {{TEXT.save}}
                                    </v-btn>
                                    <v-btn 
                                        v-show="IsFormResetable"
                                        :disabled="!!isOrderChanged"
                                        color="warning" 
                                        class="mr-4" 
                                        @click="handleClear"
                                    >
                                        <v-icon left>mdi-undo</v-icon>
                                        {{TEXT.reset}}
                                    </v-btn>
                                    <v-btn 
                                        v-show="Boolean(currentActiveMenuItem) && currentActiveMenuItem.is_removable"
                                        :disabled="!!isOrderChanged"
                                        color="error" 
                                        class="mr-4" 
                                        @click="handleDeleteMenu"
                                    >
                                        <v-icon left>mdi-trash-can-outline</v-icon>
                                        {{TEXT.delete}}
                                    </v-btn>
                                </v-form>
                            </template>
                        </v-col>
                        <v-col>
                            <v-sheet dark color="blue darken-2" class="rounded-sm py-2 text-center" elevation="2" >
                                <h3>Menu List</h3>
                            </v-sheet>
                            <p>*<small class="blue--text text--lighten-1">{{ TEXT.descriptions[0] }}</small></p>
                            <v-draggable-treeview 
                                v-model="menus" 
                                @input="inputDrag"
                            >
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
                            <v-snackbar
                                v-if="Boolean(newOrders)"
                                v-model="isOrderChanged"
                                elevation="24"
                                :timeout="-1"
                                >
                                {{TEXT.order_changed_msg}}
                                <template v-slot:action="{ attrs }">
                                    <form :action="homeRoute+'/orderupdate'" ref="orderForm" method="POST">
                                        <input type="hidden" name="_token" :value="csrf"  />
                                        <input type="hidden" name="orders[]" :value="JSON.stringify(newOrders)">
                                    </form>
                                    <v-btn
                                        color="success"
                                        v-bind="attrs"
                                        @click="handleSubmitOrderForm"
                                        v-text="TEXT.save"
                                    >
                                    </v-btn>

                                    <v-btn
                                        color="warning"
                                        text
                                        v-bind="attrs"
                                        @click="handleResetOrder"
                                        v-text="TEXT.reset"
                                    >
                                    </v-btn>
                                </template>
                            </v-snackbar>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        
    </v-row>
</template>
<script>

    import DialogIconGrid from '@/components/DialogIconsGrid'
    import { findTextRecursively } from '@/plugins/helpers'
    import lodashComputed from '@/mixins/lodashComputed'
    import VuetifyDraggableTreeview from 'vuetify-draggable-treeview'
    import { validationMixin } from 'vuelidate'
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
 

    const TEXT = {
        title: "title",
        path: "path",
        parent: "parent",
        is_blocked: "is blocked",
        edit: {
            title: "Edit menu item",
        },
        add: {
            title: "Add NEW menu item",
        },
        deleteItemMenu: {
            title: "Warning!!!",
            msg: `Do you realy want to DELETE item ?`
        },
        descriptions: [
            "select item to edit / drag`n`drop for reordering"
        ],
        save: "save",
        reset: "undo",
        delete: "delete",
        order_changed_msg: "Order has been changed.",
        validators: {
            fieldIsRequared: "This field is required",
            minLength: (count)=>`Input must have at least ${count} letters`,
            maxLength: (count)=>`Input must be at most ${count} characters long`,
            isNotUniq: 'Same title is already used.'
        }
    };
    
    export default {
        props: {
            homeRoute: String,
            initialProps: [Array, Object],
        },
        mixins: [validationMixin, lodashComputed],

        validations: {
            formModel:{
                title: { 
                    required, 
                    minLength: minLength(3),
                    maxLength: maxLength(24),
                    mustBeUniq: function(value) {
                        // not used yet
                        return !_.some(this.initialMenusOrders, (result)=>{
                            return _.get(result, "title") ? result.title.toLowerCase() == value.toLowerCase() : false ;
                        });
                    }
                },
                path: { 
                    required
                }
            }
            
        },
        components: {
            DialogIconGrid, 
            VuetifyDraggableTreeview
        },
        data() {
            return {
                TEXT,
                isOrderChanged: false,
                newOrders: [],
                currentActiveMenuItem: null,
                csrf: document.head.querySelector('meta[name="csrf-token"]').content,
                menus: [],
                formIsValid: true,
                formCurrentAction: null,
                formModel: {
                    id: null,
                    title: "",
                    path: "",
                    parent_id: 0,
                    icon: "",
                    isBlocked: false,
                    order: null
                },
                initialMenusOrders: [{}],
                isRemoveItem: false, // flag for route to destroy method
                showIconDialog: false
            }
        },
        computed: {
            isEditItem(){
                return _.get(this.currentActiveMenuItem, "id") ? this.formModel.id!==this.currentActiveMenuItem.id : false
            },
            switchActionRoute(){
                let actionurl = this.homeRoute;
                
                if(this.formModel.id && !this.isRemoveItem){
                    actionurl = this.homeRoute+"/update/"+this.formModel.id
                } else if(this.formModel.id && this.isRemoveItem){
                    actionurl = this.homeRoute+"/destroy/"+this.formModel.id
                }
                return actionurl;
            },
            IsFormResetable(){
                return Boolean(this.currentActiveMenuItem) || !_.every(this.formModel, _.isEmpty);
            },
            actionTitle() {
                let title = this.TEXT.add.title;
                if (this.currentActiveMenuItem) {
                    title = this.TEXT.edit.title + ` "${this.currentActiveMenuItem.title.toUpperCase()}"`;
                }
                return title;
            },
            parentsOnly() {
                return this.menus
                        .filter(m => !m.parent_id && _.get(this.currentActiveMenuItem, "id")!=m.id )
                        .map(m => ({ id: m.id, text: m.title }) );
            },
            titleErrors () {
                const errors = []
                if (!this.$v.formModel.title.$dirty) return errors
                !this.$v.formModel.title.minLength && errors.push(TEXT.validators.minLength(this.$v.formModel.title.$params.minLength.min))
                !this.$v.formModel.title.maxLength && errors.push(TEXT.validators.maxLength(this.$v.formModel.title.$params.maxLength.max))
                !this.$v.formModel.title.required && errors.push(TEXT.validators.fieldIsRequared)
                // !this.$v.formModel.title.mustBeUniq && !this.isEditItem && errors.push(TEXT.validators.isNotUniq)
                return errors
            },
            pathErrors () {
                const errors = []
                if (!this.$v.formModel.path.$dirty) return errors
                !this.$v.formModel.path.required && errors.push(TEXT.validators.fieldIsRequared)
                return errors
            },
        },
        methods: {
            handlerClickOnTreeMenuItem(value, $event){
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
                // flatten menus array of objects by children props
                var flatten = function(item,index) {
                    return [{id: item.id, order: index}, _.flatMapDeep(item.children, flatten)];
                }
                let treeorder = _.flatMapDeep(value, flatten);
                
                this.newOrders = _.intersectionWith(treeorder, this.initialMenusOrders, ((a,b)=>{
                    return a.id==b.id && a.order!==b.order
                }));

                // toggle alert visibility
                this.isOrderChanged = this.newOrders.length ? true : false;
                
            },
            onIconSelect(icon) {
                this.formModel.icon = icon;
                this.showIconDialog = false;
            },
            handleSubmitForm () {
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
            handleDeleteMenu: async function () {
                let res = await this.$confirm(
                    `<div class="text-center">
                        ${this.TEXT.deleteItemMenu.msg}<br>
                        <strong>${this.currentActiveMenuItem.title}</strong> 
                        will be remove FOREVER!!!
                    </div>`, 
                    { 
                        title: this.TEXT.deleteItemMenu.title 
                    }
                ).then(res => {
                    if (res) {
                        this.isRemoveItem = res;
                    }
                    return res
                }).then(res => {
                    if (res) {
                        this.handleSubmitForm();
                    }
                });
            },
            handleSubmitOrderForm(){
                this.isOrderChanged = false
                this.$refs.orderForm.submit();
            },
            handleResetOrder(){
                this.newOrders = [];
                this.isOrderChanged = false;
                this.menus = this.initialProps;
            }
        },
        mounted() {
            this.menus = this.initialProps;
            // flatten menus array of objects by children props
            let flatten = function(item) {
                return [item, _.flatMapDeep(item.children, flatten)];
            }
            this.initialMenusOrders = _.flatMapDeep(this.menus, flatten);
        }
    }

</script>