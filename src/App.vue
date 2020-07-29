<template>
  <v-app id="app">
    <!-- <v-toolbar dark absolute app color="transparent"> -->
    <v-app-bar color="black" dark app>
      <v-toolbar-title>Mary Grace Tiburillo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  to="/" text>Home</v-btn>
      <v-btn  to="/about" text>About</v-btn>
      <v-btn to="/my-works" text>Works</v-btn>
      <v-btn to="/resume" text>Resume</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
    </v-app-bar>
    <!-- <v-toolbar color="transparent" dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text>Link One</v-btn>
      <v-btn text>Link Two</v-btn>
      <v-btn text>Link Three</v-btn>
    </v-toolbar>-->
    <v-main>
      <!-- <v-container fluid> -->
      <router-view></router-view>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    title: "Tiburillo"
  })
};
</script>
