<template>
  <v-app-bar color="black" dark app v-if="$route.name!=='Home'">
    <v-toolbar-title>Mary Grace Tiburillo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/my-works" text>Works</v-btn>
      <v-btn to="/resume" text>Resume</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

