(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return v}));var c=n(3),r=n(7),l=(n(0),n(116)),a=n(153),o={id:"index-develop",title:"Develop",hide_title:!0,sidebar_label:"Develop",hide_table_of_contents:!0,slug:"/develop/",custom_edit_url:null},i={unversionedId:"develop/index-develop",id:"develop/index-develop",isDocsHomePage:!1,title:"Develop",source:"@site/docs/develop/index-develop.mdx",slug:"/develop/",permalink:"/develop/",editUrl:null,version:"current",sidebar_label:"Develop"},s=[],u={toc:s};function v(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(c.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(a.a,{mdxType:"Languages"}))}v.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return m}));var c=n(0),r=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},v=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),v=u(n),d=c,m=v["".concat(a,".").concat(d)]||v[d]||p[d]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}));var c=n(22),r=n(123);function l(){var e=Object(c.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,c){var l=void 0===c?{}:c,a=l.forcePrependBaseUrl,o=void 0!==a&&a,i=l.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(l,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},123:function(e,t,n){"use strict";function c(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!c(e)}n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}))},153:function(e,t,n){"use strict";var c=n(0),r=n.n(c),l=n(117),a=n(3),o=n(7),i=function(e){var t=e.color,n=void 0===t?"#1969FF":t,c=Object(o.a)(e,["color"]);return r.a.createElement("svg",Object(a.a)({width:"1490",height:"641",xmlns:"http://www.w3.org/2000/svg"},c),r.a.createElement("g",{fill:n,fillRule:"evenodd",fillOpacity:".03"},r.a.createElement("path",{d:"M299.361 624.01c41.68 21.957 64.35 21.222 96.525 5.855 32.175-15.365 238.387-99.52 275.68-117.088 37.294-17.57 38.026-29.997 1.463-43.913-36.563-13.897-241.312-94.398-284.456-110.498-43.144-16.1-58.5-16.1-95.062-2.204-36.563 13.916-228.881 90.011-265.443 103.192-36.563 13.182-38.025 24.876-.731 43.914C64.63 523.02 257.679 602.053 299.36 624.01zM689.361 446.01c41.68 21.957 64.35 21.222 96.525 5.855 32.175-15.365 238.387-99.52 275.68-117.088 37.294-17.57 38.026-29.997 1.463-43.913-36.563-13.897-241.312-94.398-284.456-110.498-43.144-16.1-58.5-16.1-95.062-2.204-36.563 13.916-228.881 90.011-265.443 103.192-36.563 13.182-38.025 24.876-.731 43.914C454.63 345.02 647.679 424.053 689.36 446.01zM1089.361 278.01c41.68 21.957 64.35 21.222 96.525 5.855 32.175-15.365 238.387-99.52 275.68-117.088 37.294-17.57 38.026-29.997 1.463-43.913-36.563-13.897-241.312-94.398-284.456-110.498-43.144-16.1-58.5-16.1-95.062-2.204-36.563 13.916-228.881 90.011-265.443 103.192-36.563 13.182-38.025 24.876-.731 43.914 37.293 19.752 230.342 98.785 272.024 120.742z"})))},s=function(e){var t=e.color,n=void 0===t?"#EA2D2E":t,c=Object(o.a)(e,["color"]);return r.a.createElement("svg",Object(a.a)({width:"75",height:"100",xmlns:"http://www.w3.org/2000/svg"},c),r.a.createElement("path",{d:"M24.398 77.392c-15.294 4.273 9.305 13.1 28.78 4.757-3.19-1.24-5.479-2.67-5.479-2.67-8.683 1.641-12.711 1.77-20.594.87-6.506-.745-2.707-2.957-2.707-2.957zm26.447-8.335c-11.51 2.215-18.158 2.144-26.579 1.275-6.51-.673-2.248-3.829-2.248-3.829-16.844 5.591 9.376 11.935 32.918 5.05-2.502-.882-4.09-2.496-4.09-2.496zm9.02-48.27c.001 0-34.051 8.501-17.788 27.242 4.8 5.527-1.26 10.495-1.26 10.495s12.184-6.288 6.59-14.166c-5.227-7.343-9.233-10.991 12.458-23.572zm7.967 64.661s2.813 2.319-3.098 4.111c-11.237 3.404-46.781 4.43-56.654.136-3.546-1.544 3.107-3.685 5.2-4.137 2.183-.472 3.43-.386 3.43-.386-3.946-2.78-25.51 5.458-10.951 7.82 39.701 6.436 72.37-2.897 62.073-7.544zM54.188 61.277c1.908-1.303 4.544-2.433 4.544-2.433s-7.51 1.342-14.992 1.971c-9.159.768-18.983.92-23.915.26-11.676-1.561 6.401-5.856 6.401-5.856s-7.022-.474-15.654 3.701c-10.21 4.937 25.254 7.187 43.616 2.356zm4.47 12.068c-.087.231-.374.491-.374.491 24.92-6.551 15.758-23.093 3.843-18.906-1.046.37-1.594 1.23-1.594 1.23s.66-.266 2.134-.574c6.024-1.255 14.654 8.064-4.01 17.76zM37.597 55.04c-3.677-8.31-16.145-15.58.005-28.336C57.74 10.808 47.408.468 47.408.468c4.167 16.422-14.703 21.382-21.515 31.61-4.639 6.968 2.277 14.456 11.704 22.961zM59.33 96.276c-15.29 2.878-34.149 2.543-45.332.697 0 0 2.29 1.896 14.062 2.654 17.91 1.145 45.422-.638 46.072-9.113.001 0-1.25 3.213-14.802 5.762z",fill:n,fillRule:"nonzero"}))},u=function(e){var t=e.color,n=void 0===t?"#FFD845":t,c=Object(o.a)(e,["color"]);return r.a.createElement("svg",Object(a.a)({width:"93",height:"95",xmlns:"http://www.w3.org/2000/svg"},c),r.a.createElement("path",{d:"M35.442 45.9H57.75c6.21 0 11.101-5.254 11.101-11.49V13.145c0-6.053-5.073-10.6-11.135-11.61-3.835-.638-7.799-.93-11.618-.91-3.817.017-7.353.342-10.56.91C26.085 3.204 24.48 6.7 24.48 13.145v8.275h22.185v3.06H15.894c-6.49 0-12.175 3.908-13.952 11.33-2.05 8.507-2.142 13.708 0 22.59 1.588 6.612 5.378 11.215 11.87 11.215h7.608v-9.982c0-7.372 6.447-13.733 14.022-13.733zm-1.406-29.92c-2.315 0-4.19-1.896-4.19-4.241 0-2.356 1.875-4.27 4.19-4.27 2.307 0 4.192 1.914 4.192 4.27-.001 2.345-1.886 4.242-4.192 4.242zM91.25 35.81c-1.605-6.462-4.669-11.33-11.168-11.33H71.91v9.93c0 7.689-6.727 13.785-14.16 13.785H35.441c-6.11 0-10.962 5.604-10.962 11.724v21.267c0 6.052 5.16 9.612 11.063 11.348 7.07 2.079 13.766 2.455 22.224 0C63.39 90.906 68.85 87.63 68.85 81.186v-8.511H46.665v-3.06h33.417c6.49 0 8.91-4.419 11.168-11.215 2.33-6.996 2.23-13.616 0-22.59zM59.154 78.35c2.316 0 4.192 1.896 4.192 4.243 0 2.354-1.875 4.268-4.192 4.268-2.306 0-4.19-1.914-4.19-4.268 0-2.347 1.884-4.243 4.19-4.243z",fill:n,fillRule:"nonzero"}))},v=function(e){var t=e.color,n=void 0===t?"#83CD29":t,c=Object(o.a)(e,["color"]);return r.a.createElement("svg",Object(a.a)({width:"83",height:"94",xmlns:"http://www.w3.org/2000/svg"},c),r.a.createElement("path",{d:"M79.393 21.135L45.261 1.337c-2.15-1.225-4.967-1.225-7.135 0l-34.4 19.798C1.51 22.412 0 24.811 0 27.378v39.544c0 2.566 1.54 4.966 3.76 6.25l9.069 5.171c4.35 2.144 5.556 2.144 7.535 2.144 6.445 0 9.791-3.897 9.791-10.693v-39.04c0-.551.345-1.371-.197-1.371H25.61c-.55 0-1.641.82-1.641 1.37v39.04c0 3.013-2.796 6.011-7.888 3.465l-9.373-5.423a1.037 1.037 0 01-.523-.913V27.378c0-.373.358-.747.689-.938L41.189 6.675c.32-.181.775-.181 1.094 0l33.993 19.76c.326.196.274.558.274.943v39.544c0 .377.071.745-.25.926L42.176 87.624a1.003 1.003 0 01-.994 0l-8.75-5.218c-.264-.153-.582-.208-.836-.067-2.431 1.379-2.883 1.562-5.164 2.353-.562.196-1.391.535.315 1.492l11.443 6.769a7.184 7.184 0 003.593.963c1.27 0 2.512-.33 3.608-.963l34.003-19.781c2.22-1.293 3.342-3.684 3.342-6.25V27.378c0-2.567-1.123-4.96-3.343-6.243zm-27.025 39.52c-9.067 0-11.064-2.5-11.73-7.01-.078-.485-.49-1.066-.985-1.066h-4.43c-.548 0-.99.665-.99 1.211 0 5.773 3.14 12.768 18.135 12.768 10.855 0 17.08-4.218 17.08-11.683 0-7.401-5.001-9.344-15.529-10.737-10.64-1.406-11.722-2.117-11.722-4.61 0-2.055.916-4.796 8.795-4.796 7.04 0 9.634 1.51 10.702 6.256.092.446.5.766.96.766h4.449c.274 0 .534-.11.726-.306.186-.21.284-.474.26-.757-.69-8.172-6.119-11.98-17.098-11.98-9.767 0-15.593 4.124-15.593 11.037 0 7.5 5.797 9.571 15.173 10.499 11.215 1.1 12.087 2.738 12.087 4.944 0 3.832-3.076 5.465-10.29 5.465z",fill:n,fillRule:"nonzero"}))},p=function(e){var t=e.color,n=void 0===t?"#000000":t,c=Object(o.a)(e,["color"]);return r.a.createElement("svg",Object(a.a)({width:"70",height:"95",xmlns:"http://www.w3.org/2000/svg"},c),r.a.createElement("path",{d:"M68.284 48.299c-.075-.076-.151-.152-.303-.152l-.075-.076c-.076-.075-.152-.075-.152-.15l-.075-.077c-.076 0-.152-.075-.152-.075l-.151-.076c-.076 0-.152-.076-.152-.076l-.151-.075c-.076 0-.151-.076-.151-.076-.076 0-.076 0-.152-.076l-.227-.076c-.076 0-.076 0-.151-.075l-.227-.076h-.076l-.303-.076h-.151c-.076 0-.152 0-.228-.075h-1.74c-.455-10.069.454-20.289-2.12-29.979 9.765-3.482 2.12-16.882-6.36-10.901C49.587 1.287 41.865.227 33.765.227c-7.95.53-15.444 2.196-20.743 6.36-2.12-1.06-4.164-1.363-5.98-.834v.076c-.076 0-.228.076-.303.152-.076 0-.228.075-.303.151h-.076c-.076 0-.151.076-.303.151h-.075l-.228.152h-.075l-.227.151h-.076l-.227.152s-.076 0-.076.075l-.227.152s-.076 0-.076.075l-.227.152s-.076 0-.076.075l-.227.152-.075.076c-.076.075-.152.075-.152.151l-.075.076-.152.151-.076.076c-.075.076-.075.151-.151.151l-.076.076c-.075.076-.075.151-.151.151l-.076.076c-.075.076-.075.151-.151.151l-.076.076c-.076.076-.076.152-.151.152l-.076.075c-.076.076-.076.152-.151.152l-.076.075-.076.227s0 .076-.076.076l-.075.227s0 .076-.076.076l-.076.227s0 .076-.075.076l-.076.227s0 .076-.076.076c.303.227.303.302.303.302v.076l-.076.227v.076c0 .076 0 .151-.075.227v2.347c0 .076 0 .151.075.227v.076l.076.227v.075l.076.228s0 .075.075.075l.076.227s0 .076.076.076l.076.227s0 .076.075.076l.152.227s0 .076.075.076l.152.227s0 .076.076.076l.15.227.077.075.227.227.227.228h.076c.757.68 1.514 1.21 3.028 1.665v-.151c-3.18 9.538-.53 19.153-.379 28.994-.454 0-.53.303-1.287.378h-.378c-.076 0-.227 0-.379.076-.076 0-.227 0-.303.076l-.302.076H3.86l-.303.075h-.076l-.227.076H3.18l-.228.076s-.075 0-.075.075l-.227.076-.152.076c-.076 0-.151.075-.151.075l-.152.076-.151.076c-.076 0-.151.076-.151.076l-.152.075-.303.227c-.075.076-.151.152-.227.152l-.303.303-.075.075c-.076.152-.227.303-.303.379l-.151.227-.228.454-.075.227v.227c0 .379.151.682.681.909.151 2.8 2.952 1.514 4.24.605l.075-.075c.152-.152.379-.227.454-.227h.076l.151-.076c.076 0 .076 0 .152-.076.151-.075.303-.075.378-.151.076 0 .076-.076.076-.152l.076-.075c.075-.152.151-.454.151-.909l.076-.984v1.363c-.379 9.917-3.028 23.24 2.498 32.174a16.879 16.879 0 003.558 4.088h-.378c-.152.151-.379.302-.606.454l-.681.454-.227.151-.455.303-.681.53-.833.757c-.151.152-.227.303-.303.379l-.302.454-.152.227c-.075.151-.151.303-.151.454l-.076.227c-.151.606 0 1.287.454 2.044l.303.303h.152c.075 0 .151 0 .302.076.152.303.909 1.892 2.953.681 2.12-1.135 3.558-3.482 6.132-3.86l-.379-.455c4.467 2.12 9.69 3.028 14.384 3.18 6.586.227 14.08-.682 20.061-3.937 1.666.53 2.953 2.953 4.39 4.088l.077.076.075.075.076.076.076.076s.075 0 .075.076c0 0 .076 0 .076.075 0 0 .076 0 .076.076h1.59s.075 0 .075-.076h.076s.076 0 .076-.075h.075s.076 0 .076-.076c0 0 .076 0 .076-.076l.076-.076s.075 0 .075-.075l.076-.076h.076l.151-.151.151-.076h.076l.076-.076h.076l.075-.075.076-.076.076-.076.075-.076.076-.075.076-.076.075-.076v-.075s0-.076.076-.076v-.076s0-.075.076-.075v-.076s0-.076.076-.076v-1.06s-.227 0-.227-.075l-.228-.076v-.076l.227-.076s.152 0 .152-.075l.076-.076v-1.59s0-.075-.076-.075v-.076s0-.076-.076-.076v-.076s0-.075-.075-.075c0 0 0-.076-.076-.076 0 0 0-.076-.076-.076 0 0 0-.075-.076-.075 0 0 0-.076-.075-.076 0 0 0-.076-.076-.076 0 0 0-.075-.076-.075 0 0 0-.076-.075-.076 0 0 0-.076-.076-.076 0 0 0-.076-.076-.076 0 0 0-.075-.076-.075 0 0 0-.076-.075-.076 0 0 0-.076-.076-.076 0 0 0-.075-.076-.075l-.075-.076-.076-.076-.076-.075-.075-.076-.076-.076-.076-.076-.076-.075-.075-.076-.076-.076-.076-.075-.075-.076-.076-.076v-.076l-.076-.075-.075-.076-.076-.076-.076-.075-.076-.076-.075-.076-.076-.075-.076-.076-.075-.076-.076-.076-.076-.075-.076-.076-.075-.076-.076-.075-.076-.076-.075-.076-.076-.075-.076-.076-.075-.076c1.514-1.438 2.876-3.18 3.86-5.223 4.467-8.933 3.71-19.835 3.104-29.676h.076c.076 0 .151.076.151.076h.227s.076 0 .076.075h.076s.076 0 .076.076l.151.076c1.287.908 4.088 2.195 4.24-.606 1.21.454-.228-1.362-.985-1.892zM13.627 16.655C11.204 4.542 30.584 2.27 31.265 14.08c.606 9.841-15.14 12.34-17.638 2.574zM40.955 28.01c-.984 1.06-2.044.909-3.103.53 0 1.438.302 2.953.075 4.467-.378.68-1.135.757-1.74 1.06-.91-.152-1.59-.682-1.97-1.515l-.15-.075c-2.953 3.936-4.77-.833-3.937-3.786-.909.076-1.666-.15-2.271-1.135-1.06-1.968.53-4.39 2.574-4.77.53 2.272 6.586 1.969 7.646-.15 2.346 1.135 4.92 3.254 2.876 5.374zm-5.299-13.248c-.681-10.447 15.368-13.248 17.715-3.028 2.65 11.355-15.747 14.308-17.715 3.028zm-17.714-2.65c-1.439 0-2.65 1.287-2.65 2.877 0 1.59 1.211 2.877 2.65 2.877 1.438 0 2.65-1.287 2.65-2.877 0-1.59-1.136-2.877-2.65-2.877zm1.21 4.316c-.378 0-.605-.303-.605-.757 0-.379.303-.757.606-.757.378 0 .606.302.606.757 0 .378-.228.757-.606.757zm21.046-4.997c-1.438 0-2.574 1.287-2.574 2.877 0 1.59 1.136 2.877 2.574 2.877 1.439 0 2.574-1.287 2.574-2.877 0-1.59-1.135-2.877-2.574-2.877zm1.212 4.24c-.303 0-.606-.303-.606-.757 0-.379.303-.758.606-.758.302 0 .605.303.605.758 0 .454-.303.757-.605.757z",fill:n,fillRule:"nonzero"}))};t.a=function(){return r.a.createElement("section",{className:"rds-languages",id:"languages"},r.a.createElement(i,{className:"shape"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"section-title"},"Resources by Languages"),r.a.createElement("h3",{className:"section-description"},"Find documentation, sample code and tools to develop with your favorite language."),r.a.createElement("ul",{className:"languages-list"},r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/develop/java/")},r.a.createElement(s,null),r.a.createElement("span",{className:"btn"},"Java"))),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/develop/python/")},r.a.createElement(u,null),r.a.createElement("span",{className:"btn"},"Python"))),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/develop/node/")},r.a.createElement(v,null),r.a.createElement("span",{className:"btn"},"Node.js"))),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/develop/golang/")},r.a.createElement(p,null),r.a.createElement("span",{className:"btn"},"Golang"))))))}}}]);