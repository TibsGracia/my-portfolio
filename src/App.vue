<template>
  <v-app id="app">
    <!-- <v-toolbar dark absolute app color="transparent"> -->
    <v-app-bar color="black" dark app v-if="$route.name!=='Home'">
      <v-toolbar-title>Mary Grace Tiburillo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/about" text>About</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/my-works" text>Works</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/resume" text>Resume</v-btn>
        <v-divider vertical></v-divider>
        <v-btn to="/contact" text>Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-footer dark padless app absolute>
      <v-card class="flex" flat tile>
        <v-card-title class="black">
          <div class="body-1">Get connected with us on social networks!</div>

          <v-spacer></v-spacer>

          <v-btn
            :href="socialMedia.link"
            target="_blank"
            v-for="socialMedia in socialMedias"
            :key="socialMedia.link"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ socialMedia.icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 black--text text-center grey">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    title: "Tiburillo",
    socialMedias: [
      {
        icon: "mdi-facebook",
        link: "https://m.facebook.com/grace.tiburillo"
      },
      // {
      //   icon: "mdi-google-plus",
      //   link: "https://ph.linkedin.com/in/mary-grace-tiburillo-b60738"
      // },
      {
        icon: "mdi-linkedin",
        link: "https://ph.linkedin.com/in/mary-grace-tiburillo-b60738195"
      },
      // {
      //   icon: "mdi-instagram",
      //   link: "https://ph.linkedin.com/in/mary-grace-tiburillo-b6073819"
      // }
    ]
  })
};
</script>
