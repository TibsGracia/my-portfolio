<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md7 pa-7>
        <bubble1 style="transform: translate(5%, -5%)"/>
        <heading class="teal--text text--darken-2">About Me</heading>

        <mytext class="mb-10"></mytext>

        <subheading class="teal--text text--darken-2">Skills</subheading>
        <div
          class="body-1 font-weight-light text-justify mb-10"
        >I have a diverse set of skills, ranging from web design including the front-end, all the way to its functionalities.</div>
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
        <v-card flat class="mb-5">
          <div class="teal--text text--darken-2">Tools</div>
          <v-chip
            class="ma-2"
            v-for="(skill, i) in tools"
            :key="i"
            color="teal darken-4"
            label
            text-color="white"
          >{{skill}}</v-chip>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md5>
        <v-img class="layer" :src="require('@/assets/coding.jpg')" height="100%"/>
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
    frontend: [
      "Vue Js",
      "Angular 2",
      "Html",
      "CSS",
      "JavaScript",
      "Vuetify",
      "Bootstrap"
    ],
    backend: ["Node Js", "Express 2", "php"],
    database: ["MongoDB", "MySQL"],
    tools: ["GitHub", "BitBucket", "Visual Studio", "Net Beans"]
  })
};
</script>

