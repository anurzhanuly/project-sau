/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "error",
    "no-debugger": "error",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/singleline-html-element-content-newline": 0,
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION", // 'is', 'v-is'
          "LIST_RENDERING", // 'v-for item in items'
          "CONDITIONALS", // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          "RENDER_MODIFIERS", // 'v-once', 'v-pre'
          "GLOBAL", // 'id'
          ["UNIQUE", "SLOT"], // 'ref', 'key', 'v-slot', 'slot'
          "TWO_WAY_BINDING", // 'v-model'
          "OTHER_DIRECTIVES", // 'v-custom-directive'
          "OTHER_ATTR", // 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
          "EVENTS", // '@click="functionCall"', 'v-on="event"'
          "CONTENT", // 'v-text', 'v-html'
        ],
        alphabetical: false,
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
      },
    ],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"],
        shouldMatchCase: true,
      },
    ],
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
        ],
      },
    ],
  },
};
