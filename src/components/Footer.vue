<template>
  <v-footer dark padless app absolute>
    <v-card class="flex" flat tile>
      <v-card-title class="black">
        <div class="body-1">Get connected with me on social networks!</div>

        <v-spacer></v-spacer>
        <div>
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
        </div>
      </v-card-title>

      <v-card-text class="py-2 black--text text-center teal lighten-2">
        {{ new Date().getFullYear() }} —
        <strong>made with Vue js and Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
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

