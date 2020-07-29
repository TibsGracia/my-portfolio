<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
    <v-card-title>Project Title</v-card-title>
    <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-title>
      <div class="body-1 font-weight-medium">Technology Used</div>
    </v-card-title>

    <v-card-text>
      <v-chip-group column>
        <v-chip color="teal accent-5 white--text">Vue js</v-chip>

        <v-chip color="teal accent-5 white--text">Node js</v-chip>

        <v-chip color="teal accent-5 white--text">Express js</v-chip>

        <v-chip color="teal accent-5 white--text">MongoDB</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="teal darken-2" outlined text @click="reserve">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>