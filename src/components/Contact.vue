<template>
  <section id="get-in-touch" class="hide-overflow">
    <v-layout teal lighten-3 white--text>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/contact.png')" height="100%"/>
      </v-flex>
      <v-flex xs12 md6 pa-5>
        <bubble1/>
        <heading class="mb-5">Get In Touch</heading>
        <v-sheet max-width="600" class="pa-5 rounded mb-12 mx-auto">
          <mytext class="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipi
            <br>scin elit. Etiam vulputate augue vel felis gravida
            <br>porta. Lorem ipsum dolor sit amet.
          </mytext>

          <v-list class="transparent">
            <v-list-item class="ma-5">
              <v-list-item-action>
                <v-icon class="grey--text text--darken-2">mdi-phone</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>09773972032 (TM)</v-list-item-title>
                <v-list-item-title>09104885592 (TNT)</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="ma-5">
              <v-list-item-action>
                <v-icon dark medium class="grey--text text--darken-2">mdi-map-marker</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Nasipit Road, Talamban, Cebu City</v-list-item-title>
                <v-list-item-title>San Alberto Carmelites Formation Center</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="ma-5">
              <v-list-item-action>
                <v-icon class="grey--text text--darken-2">mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>marygracetiburillo@gmail.com</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
        <heading class="mb-5">Mail us your Message</heading>
        <v-sheet max-width="600" color="transparent" class="mx-auto">
          <v-text-field color="info" label="Name" solo flat/>
          <v-text-field color="info" label="Email" solo flat/>
          <v-text-field color="info" label="Subject" solo flat/>
          <v-textarea color="info" label="Message" solo flat/>
          <mybtn>Send</mybtn>
        </v-sheet>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import bubble1 from "@/components/base/Bubble1.vue";
import heading from "@/components/base/Heading";
import mybtn from "@/components/base/Btn";
import mytext from "@/components/base/Text";

export default {
  name: "about",
  components: {
    bubble1,
    heading,
    mybtn,
    mytext
  },
  data: () => ({})
};
</script>
