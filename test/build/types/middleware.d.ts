import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/shahnozik/Desktop/Projects/project-sau/test/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}