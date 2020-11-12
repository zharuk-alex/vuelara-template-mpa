<template>
  
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="activatorColor"
          dark
          v-bind="attrs"
          v-on="on"
        >
            <v-icon v-if="activatorIcon" left >{{activatorIcon}}</v-icon>
            {{activatorText}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"></v-card-title>
        <v-card-text>
            <h3 class="text-center">{{msgText}}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            size="sm"
            color="warning"
            @click="dialog = false"
          >
            <v-icon v-text="'mdi-cancel'"></v-icon>
          </v-btn>
          <v-btn
            size="sm"
            color="success"
            @click="dialog = false"
          >
            <v-icon v-text="'mdi-check'"></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    props: {
            activatorText: {
                type: String,
                default: "Подтвердить"
            },
            activatorColor: {
                type: String,
                default: "primary"
            },
            activatorIcon: {
                type: String,
            },
            msgText: {
                type: String,
                default: "Подтвердить изменения ?"
            }
        },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>