<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md6 pa-5>
        <bubble1 style="transform: translate(5%, -5%)"/>
        <heading class="teal--text text--darken-2">About Me</heading>

        <mytext class="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipi
          <br>scin elit. Etiam vulputate augue vel felis gravida
          <br>porta. Lorem ipsum dolor sit amet.
        </mytext>

        <subheading class="teal--text text--darken-2">Skills</subheading>
        <mytext class="mb-5">
          Lorem ipsum dolor sit amet, consecte tur adipi scin e
          <br>lit. Etiam vulputate augu e vel felis gravida porta.
        </mytext>
        <v-card flat class="mb-5">
          <div class="teal--text text--darken-2">Front-end</div>
          <v-chip
            class="ma-2"
            v-for="(skill, i) in frontend"
            :key="i"
            color="teal darken-4"
            label
            text-color="white"
          >{{skill}}</v-chip>
        </v-card>
        <v-card flat class="mb-5">
          <div class="teal--text text--darken-2">Back-end</div>
          <v-chip
            class="ma-2"
            v-for="(skill, i) in backend"
            :key="i"
            color="teal darken-4"
            label
            text-color="white"
          >{{skill}}</v-chip>
        </v-card>
        <v-card flat class="mb-5">
          <div class="teal--text text--darken-2">Database</div>
          <v-chip
            class="ma-2"
            v-for="(skill, i) in database"
            :key="i"
            color="teal darken-4"
            label
            text-color="white"
          >{{skill}}</v-chip>
        </v-card>
        <!-- <v-alert outlined color="grey">
          <v-layout v-for="(skill, i) in skills" :key="i" style="color: #69A1BB;" wrap>
            <v-flex xs6 text-uppercase v-text="skill.name"/>
            <v-flex xs6 text-xs-right v-text="`${skill.value}%`"/>
            <v-progress-linear :value="skill.value" color="info" height="8"/>
          </v-layout>
        </v-alert>-->
      </v-flex>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/about1.jpg')" height="100%"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import bubble1 from "@/components/base/Bubble1.vue";
import heading from "@/components/base/Heading";
import subheading from "@/components/base/Subheading";
import mytext from "@/components/base/Text";

export default {
  name: "about",
  components: {
    bubble1,
    heading,
    subheading,
    mytext
  },
  data: () => ({
    frontend: ["Vue Js", "Angular 2", "Html", "CSS", "JavaScript","Vuetify", "Bootstrap"],
    backend: ["Node Js", "Express 2", "php"],
    database: ["MongoDB", "MySQL"]
  })
};
</script>
