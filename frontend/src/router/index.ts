import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/authorization",
      name: "authorization",
      component: () => import("@/views/AuthorizationView.vue"),
    },
    {
      path: "/survey",
      name: "survey",
      component: () => import("@/views/SurveyView.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("@/views/ResultView.vue"),
    },
    {
      path: "/surveylib",
      name: "surveylib",
      component: () => import("@/views/SurveyLibView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/admin/AdminView.vue"),
      children: [
        {
          path: "quest",
          component: () => import("@/views/admin/QuestionsView.vue"),
        },
        {
          path: "cond",
          component: () => import("@/views/admin/ConditionsView.vue"),
        },
        {
          path: "recom",
          component: () => import("@/views/admin/RecommendationsView.vue"),
        },
        {
          path: "magic",
          component: () => import("@/views/admin/ConditionsNameView.vue"),
        },
        {
          path: "clinics",
          component: () => import("@/views/admin/ClinicsView.vue"),
        },
      ],
    },
    {
      path: "/cabinet",
      name: "cabinet",
      component: () => import("@/views/cabinet/CabinetView.vue"),
      children: [
        {
          path: "main",
          component: () => import("@/views/cabinet/CabinetMain.vue"),
        },
        {
          path: "patients",
          component: () => import("@/views/cabinet/CabinetPatients.vue"),
        },
        {
          path: "settings",
          component: () => import("@/views/cabinet/CabinetSettings.vue"),
        },
      ],
    },
  ],
});

export default router;
