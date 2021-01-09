<template>
  <v-container>
    <bubble1 style="transform: translate(5%, -5%)"/>
    <div class="teal--text text--darken-2 my-5 text-center font-weight-light">My Resume</div>
    <v-hover v-slot:default="{ hover }">
      <v-card max-width="800" class="mx-auto" :elevation="hover ? 16 : 2">
        <pdf src="./pdf/myResume.pdf"></pdf>
      </v-card>
    </v-hover>
    <div class="text-center mt-5">
      <v-btn dark rounded color="primary" href="./pdf/myResume.pdf" download>Download Resume</v-btn>
    </div>
  </v-container>
</template>

<script>
import pdf from "vue-pdf";
import bubble1 from "@/components/base/Bubble1.vue";

export default {
  name: "about",
  components: {
    bubble1,
    pdf
  },
};
</script>
