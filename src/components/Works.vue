<template>
<v-col cols="4">
  <v-card :loading="loading" class="mx-auto my-5" max-width="374">
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
    <v-card-title>{{data.title}}</v-card-title>
    <v-card-text>
      <div>{{data.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-title>
      <div class="body-1 font-weight-medium">Technology Used</div>
    </v-card-title>

    <v-card-text>
      <v-chip-group column>
        <v-chip
          v-for="technology in data.technology"
          :key="technology"
          color="teal accent-5 white--text"
        >{{technology}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="teal darken-2" outlined text @click="reserve">Explore</v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["data"],
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