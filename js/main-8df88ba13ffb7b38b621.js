(()=>{"use strict";function t(t,e,n){var o=document.createElement(t);return null==n||n.append(o),Object.assign(o,e)}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,u=void 0,u=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(i,"string"),"symbol"===e(u)?u:String(u)),r)}var i,u}new(function(){function e(n){var o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null!==(o=document.getElementById("root"))&&void 0!==o?o:t("div",{id:"root"},n)}var o,r,i;return o=e,(r=[{key:"run",value:function(){t("h1",{className:"title",textContent:"Hello!"},this.root)}}])&&n(o.prototype,r),i&&n(o,i),Object.defineProperty(o,"prototype",{writable:!1}),e}())(document.body).run()})();