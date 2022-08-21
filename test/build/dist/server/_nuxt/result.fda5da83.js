import { _ as _export_sfc, v as vue_cjs_prod, d as __nuxt_component_0, e as __nuxt_component_1 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ResultSection = __nuxt_component_0;
  const _component_WhatsappPopup = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ResultSection, null, null, _parent));
  _push(ssrRenderComponent(_component_WhatsappPopup, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const result = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  result as default
};
