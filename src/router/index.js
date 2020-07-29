import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MyWorks from "../views/Works.vue";
import Resume from "../views/Resume.vue";
import Contact from "../views/Contact.vue";
import Project from '@/components/Home'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects/:projectId",
    component: Project,
    name: "project_component"
  },
  {
    path: "/my-works",
    name: "MyWorks",
    component: MyWorks
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
