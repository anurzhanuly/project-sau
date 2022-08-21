import { v as vue_cjs_prod, _ as _export_sfc, g as __nuxt_component_0$1 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "@vue/server-renderer";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "h3";
import "defu";
import "@intlify/message-compiler";
import "@intlify/vue-devtools";
const _imports_0 = "" + globalThis.__publicAssetsURL("img/logo.png");
const ToolbarBase_vue_vue_type_style_index_0_scoped_de9b8f9c_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "header" }, _attrs))} data-v-de9b8f9c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" height="30" width="160" data-v-de9b8f9c${_scopeId}>`);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            src: _imports_0,
            alt: "logo",
            height: "30",
            width: "160"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToolbarBase.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-de9b8f9c"]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ToolbarBase = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ToolbarBase, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
