import { createRouter, createWebHistory } from "vue-router";
import MainScreenVue from "@/modules/main/MainScreen.vue";
import type { Component } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainScreenVue,
    },
    {
      path: "/clientSignup",
      name: "clientSignup",
      component: (): Component =>
        import("@/modules/authorization/AuthorizationCabinet.vue"),
    },
    {
      path: "/clientSignin",
      name: "clientSignin",
      component: (): Component =>
        import("@/modules/authorization/AuthorizationCabinet.vue"),
    },
    {
      path: "/doctorSignin",
      name: "doctorSignin",
      component: (): Component =>
        import("@/modules/authorization/AuthorizationDoctor.vue"),
    },
    {
      path: "/onboarding",
      name: "onboarding",
      component: (): Component =>
        import("@/modules/authorization/OnboardingMobile.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: (): Component => import("@/modules/result/ResultCabinet.vue"),
    },
    {
      path: "/survey",
      name: "survey",
      component: (): Component => import("@/modules/survey/SurveyLibrary.vue"),
    },
    {
      path: "/patientcab",
      name: "patientcab",
      component: (): Component =>
        import("@/modules/patientsCabinet/PatientCabinet.vue"),
      children: [
        {
          path: "main",
          component: (): Component =>
            import("@/modules/patientsCabinet/views/PatientCabinetMain.vue"),
        },
        {
          path: "settings",
          component: (): Component =>
            import(
              "@/modules/patientsCabinet/views/PatientCabinetSettings.vue"
            ),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: (): Component => import("@/modules/admin/AdminCabinet.vue"),
      children: [
        {
          path: "quest",
          component: (): Component =>
            import("@/modules/admin/views/changeQuestions/ChangeQuestions.vue"),
        },
        {
          path: "cond",
          component: (): Component =>
            import("@/modules/admin/views/conditions/AdminConditions.vue"),
        },
        {
          path: "recom",
          component: (): Component =>
            import(
              "@/modules/admin/views/recomindations/ChangeRecommendations.vue"
            ),
        },
        {
          path: "magic",
          component: (): Component =>
            import(
              "@/modules/admin/views/changeQuestionsName/ChangeConditionsName.vue"
            ),
        },
        {
          path: "clinics",
          component: (): Component =>
            import("@/modules/admin/views/clinics/ClinicsLists.vue"),
        },
      ],
    },
    {
      path: "/cabinet",
      name: "cabinet",
      component: (): Component =>
        import("@/modules/doctorCabinet/DoctorCabinet.vue"),
      children: [
        {
          path: "main",
          component: (): Component =>
            import("@/modules/doctorCabinet/views/DoctorCabinetMain.vue"),
        },
        {
          path: "patients",
          component: (): Component =>
            import("@/modules/doctorCabinet/views/DoctorCabinetPatients.vue"),
        },
        {
          path: "settings",
          component: (): Component =>
            import("@/modules/doctorCabinet/views/DoctorCabinetSettings.vue"),
        },
      ],
    },
  ],
});

export default router;
