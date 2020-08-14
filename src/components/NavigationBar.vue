<template>
  <div>
    <v-app-bar color="black" dark app v-if="$route.name!=='Home'" clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Mary Grace Tiburillo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in data" :key="item.title" :to="item.link" text>{{item.title}}</v-btn>
        <!-- <v-btn to="/about" text>About</v-btn>
        <v-btn to="/my-works" text>Works</v-btn>
        <v-btn to="/resume" text>Resume</v-btn>
        <v-btn to="/contact" text>Contact</v-btn>-->
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary absolute id="drawer">
      <v-list nav dense>
            <div class="mb-4 text-center">
          <img :width="70" src="@/assets/logo4.png">
          <h3>Mary Grace Tiburillo</h3>
        </div>
        <v-divider></v-divider>
        <v-list-item-group v-model="group" active-class="teal--text text--accent-4">
          <v-list-item v-for="item in data" :key="item.title" :to="item.link">
             <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    group: null,
    data: [
      {
        title: "Home",
        link: "/",
        icon: "mdi-home"
      },
      {
        title: "About",
        link: "/about",
        icon: "mdi-account"
      },
      {
        title: "Works",
        link: "/my-works",
        icon: "mdi-monitor"
      },
      {
        title: "Resume",
        link: "/resume",
        icon: "mdi-clipboard-account"
      },
      {
        title: "Contact",
        link: "/contact",
        icon: "mdi-phone"
      }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>


