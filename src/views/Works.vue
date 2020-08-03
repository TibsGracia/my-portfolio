<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <v-row>
    <Works v-for="work in works" :key="work" :data="work"/>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Works from "@/components/Works.vue";

export default {
  name: "works",
  components: {
    Works
  },
  data: () => ({
    works: [
      {
        title: "ToothBook",
        description:
          "Toothbook is a web application intended for dental clinics to manage the flow of its clients. Basically, it is a Queue Management System that allows the clients to book for a schedule in a specific dental clinic.",
        technology: ["Vue js", "Node js", "Express js", "Mongoose", "MongoDB"]
      },
      {
        title: "PNRMS",
        description:
          "PN Request Mangement System is web application specifically for Passerelles numeriques. It allows the student to easily send their request to the staff as well as allows the staff the manage the request sent by the students.",
        technology: ["Vue js", "Node js", "Express js", "Mongoose", "MongoDB"]
      },
      {
        title: "PN Tasking Generator",
        description:
          "PN Tasking Generator is a web application used only for the educators of Passerelles numeriques that allows them to easly generate a tasking form for their students that is also printable.",
        technology: [
          "Angular 2",
          "Node js",
          "Express js",
          "Mongoose",
          "MongoDB"
        ]
      },
       {
        title: "E-Learning Hub",
        description:
          "E-Learning Hub is a web application and a learning platform that allows the teacher and student to have an online class and engage a conversation like having a typical class inside a classroom.",
        technology: [
          "Vue Js",
          "Node js",
          "Express js",
          "Mongoose",
          "MongoDB"
        ]
      }
    ]
  })
};
</script>
