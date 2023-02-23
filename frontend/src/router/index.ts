import { createRouter, createWebHistory } from "vue-router";
import MainScreenVue from "@/modules/main/MainScreen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainScreenVue,
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import("@/modules/authorization/AuthorizationCabinet.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () =>
        import("@/modules/authorization/AuthorizationCabinet.vue"),
    },
    {
      path: "/onboarding",
      name: "onboarding",
      component: () =>
        import("@/modules/authorization/OnboardingMobile.vue"),
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
            import("@/modules/admin/views/changeQuestions/ChangeQuestions.vue"),
        },
        {
          path: "cond",
          component: () =>
            import("@/modules/admin/views/conditions/AdminConditions.vue"),
        },
        {
          path: "recom",
          component: () =>
            import(
              "@/modules/admin/views/recomindations/ChangeRecommendations.vue"
            ),
        },
        {
          path: "magic",
          component: () =>
            import(
              "@/modules/admin/views/changeQuestionsName/ChangeConditionsName.vue"
            ),
        },
        {
          path: "clinics",
          component: () =>
            import("@/modules/admin/views/clinics/ClinicsLists.vue"),
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
