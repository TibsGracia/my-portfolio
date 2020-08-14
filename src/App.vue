<template>
  <v-app id="app">
    <NavigationBar/>
    <Footer/>
    <v-main>
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavigationBar,
    Footer
  },

  data: () => ({
    title: "Tiburillo",
    socialMedias: [
      {
        icon: "mdi-facebook",
        link: "https://m.facebook.com/grace.tiburillo"
      },
      {
        icon: "mdi-linkedin",
        link: "https://ph.linkedin.com/in/mary-grace-tiburillo-b60738195"
      }
    ]
  })
};
</script>
