import { createRouter, createWebHistory } from "vue-router";
import MainBar from "@/modules/main/components/MainBar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainBar,
    },
    {
      path: "/authorization",
      name: "authorization",
      component: () =>
        import("@/modules/authorization/AuthorizationCabinet.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("@/views/ResultView.vue"),
    },
    {
      path: "/survey",
      name: "survey",
      component: () => import("@/modules/survey/SurveyLibrary.vue"),
    },
    {
      path: "/patientcab",
      name: "patientcab",
      component: () => import("@/views/PatientCabView.vue"),
      children: [
        {
          path: "main",
          component: () => import("@/views/PatientCabMainView.vue"),
        },
        {
          path: "settings",
          component: () => import("@/views/PatientCabSettingsView.vue"),
        },
      ],
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
      component: () => import("@/modules/doctorCabinet/DoctorCabinet.vue"),
      children: [
        {
          path: "main",
          component: () =>
            import("@/modules/doctorCabinet/views/DoctorCabinetMain.vue"),
        },
        {
          path: "patients",
          component: () =>
            import("@/modules/doctorCabinet/views/DoctorCabinetPatients.vue"),
        },
        {
          path: "settings",
          component: () =>
            import("@/modules/doctorCabinet/views/DoctorCabinetSettings.vue"),
        },
      ],
    },
  ],
});

export default router;
