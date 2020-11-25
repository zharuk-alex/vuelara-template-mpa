<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar class="white--text" color="primary">
                    <v-btn icon dark @click="onClose">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Icons ({{mdiIcons.length}})</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-sheet style="position:relative" class="d-flex align-center justify-center" color="white"
                        elevation="1" height="50" width="50" rounded>
                        <v-btn 
                            v-if="selectedIcon"
                            fab  
                            absolute 
                            height="20"
                            width="20"
                            style="top: -4px; right: -4px;"
                            @click="selectedIcon=''"
                            >
                            <v-icon color="red" style="font-size: 18px;">mdi-close</v-icon>
                        </v-btn>
                        <v-icon x-large color="blue-grey darken-2" v-text="selectedIcon"></v-icon>
                    </v-sheet>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" solo append-icon="mdi-magnify" class="shrink" label="Search"
                        single-line hide-details></v-text-field>

                    <v-toolbar-items>
                        <v-btn class="ml-3" dark text @click="onSave">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text class="py-5">
                    <v-virtual-scroll :items="iconsRows" :item-height="80" height="600">
                        <template v-slot="{ item }">
                            <v-row no-gutters>
                                <v-col v-for="(icon, i) in item" :key="i" class="wrapper-icon">
                                    <div @click="selectIconEvent(icon)" :style="iconWrapperStyle">
                                        <v-icon x-large v-text="`mdi-${icon.name}`"></v-icon><br>
                                        <small v-text="icon.name"></small>
                                    </div>
                                </v-col>
                            </v-row>
                        </template>
                    </v-virtual-scroll>
                </v-card-text>

            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
    import lodash from 'lodash'
    import mdiIcons from '@/plugins/mdiIconsList'

    export default {
        props: {
            value: Boolean,
            icon: String
        },
        computed: {
            dialog: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                }
            },
            iconsRows() {
                let matches = this.mdiIcons.filter((item) => {
                    return item.name.toLowerCase().match(this.search)
                })
                return lodash.chunk(matches, 7)
            },
            iconWrapperStyle() {
                return {
                    "text-align": "center",
                    cursor: "pointer"
                }
            }
        },
        data() {
            return {
                search: '',
                mdiIcons,
                selectedIcon: null,
                notifications: false,
                sound: true,
                widgets: false,
                dialogStat: this.dialog
            }
        },
        methods: {
            selectIconEvent(value) {
                this.selectedIcon = 'mdi-'+value.name;
            },
            onSave(event) {
                this.dialogStat = false;
                this.$emit('saveIcon', this.selectedIcon);
            },
            onClose(event) {
                this.dialogStat = false;
                this.$emit('close');
            }
        },
        mounted(){
            this.selectedIcon = lodash.clone(this.icon)
        }
    }

</script>
