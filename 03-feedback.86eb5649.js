function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,i,r,f,a,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function h(e){return c=e,a=setTimeout(w,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function w(){var e=v();if(j(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?g(n,r-(e-c)):n}(e))}function O(e){return a=void 0,m&&o?y(e):(o=i=void 0,f)}function S(){var e=v(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},S.flush=function(){return void 0===a?f:O(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");let h={};const j=e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500);y.addEventListener("input",j);try{if(localStorage.getItem("feedback-form-state")){h=JSON.parse(localStorage.getItem("feedback-form-state"));for(let e in h)y.elements[e].value=h[e]}}catch(e){console.log(e)}console.log(h),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log(h)}));
//# sourceMappingURL=03-feedback.86eb5649.js.map
