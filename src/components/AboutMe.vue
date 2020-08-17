<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md7 pa-7>
        <bubble1 style="transform: translate(5%, -5%)"/>
        <div class="teal--text text--darken-2 my-5 font-weight-light">About Me</div>
        <div
          class="body-1 font-weight-light text-justify mb-10"
        >I am a Software Developer and specializes front-end development. I enjoy taking complex problem and make it into simple and user-friendly web application.</div>
        <div class="teal--text text--darken-2 display-1 my-5 font-weight-light">Skills</div>
        <div
          class="body-1 font-weight-light text-justify mb-10"
        >I have a diverse set of skills, ranging from web design including the front-end, all the way to its functionalities.</div>
        <v-card flat class="mb-6">
          <div class="teal--text text--darken-2 mb-2">Front-end</div>
          <span v-for="(skill, i) in frontend" :key="i" class="mx-2">
            <v-chip class="ma-2" color="teal darken-4" large outlined label>
              <v-avatar tile color="white" size="40" class="mr-1">
                <img :src="skill.image">
              </v-avatar>
              {{skill.name}}
            </v-chip>
          </span>
        </v-card>
        <v-card flat class="mb-6">
          <div class="teal--text text--darken-2 mb-2">Back-end</div>
          <span v-for="(skill, i) in backend" :key="i" class="mx-2">
            <v-chip class="ma-2" color="teal darken-4" large outlined label>
              <v-avatar tile color="white" size="40" class="mr-1">
                <img :src="skill.image">
              </v-avatar>
              {{skill.name}}
            </v-chip>
          </span>
        </v-card>
        <v-card flat class="mb-6">
          <div class="teal--text text--darken-2 mb-2">Database</div>
          <span v-for="(skill, i) in database" :key="i" class="mx-2">
            <v-chip class="ma-2" color="teal darken-4" large outlined label>
              <v-avatar tile color="white" size="40" class="mr-1">
                <img :src="skill.image">
              </v-avatar>
              {{skill.name}}
            </v-chip>
          </span>
        </v-card>
        <v-card flat class="mb-6">
          <div class="teal--text text--darken-2 mb-2">Tools</div>
          <span v-for="(skill, i) in tools" :key="i" class="mx-2">
            <v-chip class="ma-2" color="teal darken-4" large outlined label>
              <v-avatar tile color="white" size="40" class="mr-1">
                <img :src="skill.image">
              </v-avatar>
              {{skill.name}}
            </v-chip>
          </span>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md5>
        <v-img class="layer" :src="require('@/assets/coding.jpg')" height="100%"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import bubble1 from "@/components/base/Bubble1.vue";

export default {
  name: "about",
  components: {
    bubble1
  },
  data: () => ({
    frontend: [
      {
        name: "Vue Js",
        image: require("@/assets/skills/vue.png")
      },
      {
        name: "Angular 2",
        image: require("@/assets/skills/angular.png")
      },
      {
        name: "Html",
        image: require("@/assets/skills/html.png")
      },
      {
        name: "CSS",
        image: require("@/assets/skills/css.png")
      },
      {
        name: "JavaScript",
        image: require("@/assets/skills/javascript.png")
      },
      {
        name: "Vuetify",
        image: require("@/assets/skills/vuetify.png")
      },
      {
        name: "Bootstrap",
        image: require("@/assets/skills/bootstrap.png")
      }
    ],
    backend: [
      {
        name: "Node Js",
        image: require("@/assets/skills/node.png")
      },
      {
        name: "Express Js",
        image: require("@/assets/skills/express.png")
      },
      {
        name: "php",
        image: require("@/assets/skills/php.png")
      },
      {
        name: "java",
        image: require("@/assets/skills/java.png")
      },
      {
        name: "python",
        image: require("@/assets/skills/python.png")
      }
    ],
    database: [
      {
        name: "MongoDB",
        image: require("@/assets/skills/mongodb.png")
      },
      {
        name: "MySQL",
        image: require("@/assets/skills/mysql.png")
      }
    ],
    tools: [
      {
        name: "GitHub",
        image: require("@/assets/skills/github.png")
      },
      {
        name: "BitBucket",
        image: require("@/assets/skills/bitbucket.png")
      },
      {
        name: "Visual Studio Code",
        image: require("@/assets/skills/vscode.png")
      },
      {
        name: "Net Beans",
        image: require("@/assets/skills/netbeans.png")
      }
    ]
  })
};
</script>

