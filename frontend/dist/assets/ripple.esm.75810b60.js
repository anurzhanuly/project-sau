import{D as i}from"./index.119d1086.js";function u(e){e.addEventListener("mousedown",s)}function p(e){e.removeEventListener("mousedown",s)}function m(e){let t=document.createElement("span");t.className="p-ink",t.setAttribute("role","presentation"),e.appendChild(t),t.addEventListener("animationend",a)}function f(e){let t=l(e);t&&(p(e),t.removeEventListener("animationend",a),t.remove())}function s(e){let t=e.currentTarget,n=l(t);if(!n||getComputedStyle(n,null).display==="none")return;if(i.removeClass(n,"p-ink-active"),!i.getHeight(n)&&!i.getWidth(n)){let r=Math.max(i.getOuterWidth(t),i.getOuterHeight(t));n.style.height=r+"px",n.style.width=r+"px"}let o=i.getOffset(t),d=e.pageX-o.left+document.body.scrollTop-i.getWidth(n)/2,c=e.pageY-o.top+document.body.scrollLeft-i.getHeight(n)/2;n.style.top=c+"px",n.style.left=d+"px",i.addClass(n,"p-ink-active")}function a(e){i.removeClass(e.currentTarget,"p-ink-active")}function l(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const h={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(m(e),u(e))},unmounted(e){f(e)}};export{h as R};
