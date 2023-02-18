import { createRouter, createWebHistory } from "vue-router";
import MainBar from "@/modules/main/components/MainBar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
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
      component: () => import("@/modules/result/ResultCabinet.vue"),
    },
    {
      path: "/survey",
      name: "survey",
      component: () => import("@/modules/survey/SurveyLibrary.vue"),
    },
    {
      path: "/patientcab",
      name: "patientcab",
      component: () => import("@/modules/patientsCabinet/PatientCabinet.vue"),
      children: [
        {
          path: "main",
          component: () =>
            import("@/modules/patientsCabinet/views/PatientCabinetMain.vue"),
        },
        {
          path: "settings",
          component: () =>
            import(
              "@/modules/patientsCabinet/views/PatientCabinetSettings.vue"
            ),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/modules/admin/AdminCabinet.vue"),
      children: [
        {
          path: "quest",
          component: () =>
            import("@/modules/admin/views/questions/ChangeQuestions.vue"),
        },
        {
          path: "cond",
          component: () =>
            import("@/modules/admin/views/conditions/AdminConditions.vue"),
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
          component: () =>
            import("@/modules/admin/views/clinics/AdminClinics.vue"),
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
