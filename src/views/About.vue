<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <div>
    <AboutPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutPage from "@/components/AboutMe.vue";

export default {
  name: "About",
  components: {
    AboutPage
  }
};
</script>
