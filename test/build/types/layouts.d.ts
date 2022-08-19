import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/shahnozik/Desktop/Projects/project-sau/test/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}