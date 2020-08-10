<template>
  <v-container>
    <bubble1 style="transform: translate(5%, -5%)"/>
    <heading class="teal--text text--darken-2 mb-10 text-center">My Resume</heading>
    <v-hover v-slot:default="{ hover }">
      <v-card max-width="800" class="mx-auto" :elevation="hover ? 16 : 2">
        <pdf src="./pdf/myResume.pdf"></pdf>
      </v-card>
    </v-hover>
    <div class="text-center mt-5">
      <v-btn dark rounded color="primary" @click="readFile()">Open Resume in Pdf File</v-btn>
    </div>
  </v-container>
</template>

<script>
import pdf from "vue-pdf";
import bubble1 from "@/components/base/Bubble1.vue";
import heading from "@/components/base/Heading";

export default {
  name: "about",
  components: {
    bubble1,
    heading,
    pdf
  },
  mounted() {},
  methods: {
    readFile() {
      window.open("./pdf/myResume.pdf", "_blank"); //to open in new tab
    }
  }
};
</script>
