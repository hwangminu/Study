!function(t,e){let n=!1,o=!1;function i(t){Array.isArray(t.detail)&&h(t.detail.map((t=>t+":1")).join(","))}async function s(){return new Promise(((o,s)=>{if(!n){t.addEventListener("OneTrustGroupsUpdated",i);const a=e.createElement("script");a.setAttribute("src","https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"),a.setAttribute("data-domain-script","371dff85-b1f3-4223-9466-f2360ffb604b"),a.setAttribute("data-document-language",!0),a.setAttribute("data-script-vendor","onetrust"),a.setAttribute("type","text/javascript"),a.onload=function(){o(!0)},a.onerror=function(){s(!1)},e.head.appendChild(a),n=!0}}))}function a(t){const n=t+"=",o=e.cookie.split(";");for(let t=0;t<o.length;t++){for(var i=o[t];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(n))return i.substring(n.length,i.length)}return null}function r(){let n="1:1";return n="string"==typeof t.OptanonActiveGroups?t.OptanonActiveGroups.split(",").filter((t=>!!t)).map((t=>t+":1")).join(","):"1:1"+("true"===function(t){const n=e.getElementById("nav-styles");return!(!n||!n.dataset[t])&&n.dataset[t]}("optiDefault")?",2:1":",2:0"),n}function c(){const t=a("OptanonConsent");if("string"==typeof t&&""!==t){const e="groups=",n=t.split("&").find((t=>t.includes(e))),o=n?decodeURIComponent(n.slice(e.length)):"";if(""!==o)return o}return r()}function u(){return!!a("OptanonAlertBoxClosed")}function p(t,e){var n=t.split(",").filter((function(t){return""!==t&&":0"!==t.substring(t.length-2)})).map((function(t){return"1"===t?t:t.substring(0,t.length-2)})).reduce((function(t,e){return t[e]=!0,t}),{});return e||(n.showBanner=!0),n}function l(n){const o=new Date;o.setTime(o.getTime()+31536e6);const i=["ikea_cookieconsent_"+(function(t=""){const e=t.split("/")[1];return 2===e.length&&e}(t.location.pathname)||"")+"="+encodeURIComponent(JSON.stringify(n)),"path=/","expires="+o.toGMTString(),"domain=.ikea.com","SameSite=None; Secure"].join(";");e.cookie=i}function d(t){if("ikea-cookieconsent"===t.data.namespace&&"get-cookieConsent.status"==t.data.action){var e={namespace:"ikea-cookieconsent",action:"result-cookieConsent.status",result:p(c(),u())};t.source.postMessage(e,"*")}}function f(){"#cookieconsent-show-settings"===t.location.hash&&ikea.cookieConsent.togglePreferenceCenter()}function k(){const t=e.location.pathname||"";let n=!1;if(t.includes("/customer-service/")&&(n=new RegExp("(/customer-service/.*cookie-policy)|(^/at/\\w{2}/customer-service/(impressum-|privacy-policy))","i").test(t)),n){const t=e.createElement("style");t.textContent="#onetrust-banner-sdk { display:none; }",e.body.appendChild(t)}}function g(){f(),t.addEventListener("hashchange",f,!1);var n=new CustomEvent("ikeaCookieConsentInit");e.dispatchEvent(n),t.ikea.pubsub&&t.ikea.pubsub.publish("ikeaCookieConsent/init")}function h(n,o){const i=void 0!==o?o:u(),s=p(n||c(),i);var a;a={consentStatusObject:s,vendor:"onetrust",interactedWithBanner:i},t.ikea.cookieConsent.vendor=a.vendor,t.ikea.cookieConsent.status=a.consentStatusObject,t.ikea.cookieConsent.statusStringified=JSON.stringify(a.consentStatusObject),t.ikea.cookieConsent.interactedWithBanner=a.interactedWithBanner,l(s);const r=new CustomEvent("ikeaCookieConsent",{detail:t.ikea.cookieConsent.status});e.dispatchEvent(r),t.ikea.pubsub&&t.ikea.pubsub.publish("ikeaCookieConsent/changed",t.ikea.cookieConsent.status)}n||t.Optanon||((t.Optanon=t.Optanon||{}).ToggleInfoDisplay=async function(){o=!0,s()}),(t.ikea=t.ikea||{}).cookieConsent={vendor:"unknown",status:{},statusStringified:"",interactedWithBanner:null,togglePreferenceCenter:function(){t.Optanon.ToggleInfoDisplay()},hasConsent:function(t){return this.status[t]||!1}};const m=t=>{const n=e.createElement("script");t.getAttributeNames().forEach((e=>{n.setAttribute(e,t.getAttribute(e))})),n.removeAttribute("type"),t.src||(n.innerText=t.innerText),t.parentNode.replaceChild(n,t)};function C(t={},e=""){return((e||"").match(/(?:optanon-category-)+([a-zA-Z0-9,-]+)+($|\s)/)||["",""])[1].split("-").every((e=>t[e]))}{function b(){g(),function(){const t=e.querySelectorAll('script[class*="optanon-category"]');for(const e of t)C(ikea.cookieConsent.status,e.className)&&m(e)}()}a("OptanonConsent")&&u()?(h(),k(),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",b):b()):s();let v=!1;t.OptanonWrapper=function(){h(),v||(k(),v=!0,o&&t.Optanon.ToggleInfoDisplay())}}t.addEventListener("message",d,!1)}(window,document);