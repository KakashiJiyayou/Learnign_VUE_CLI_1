import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/404View.vue"
import HomeView from "@/views/HomeView.vue"
import QuizView from "@/views/QuizView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
      path: "/quiz/:id",
      name: 'quiz',
      component: QuizView
  },
  {
    path: "/:catchall(.*)",
    name: "Not Found",
    component : NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
