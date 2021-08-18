(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),o=(t(0),t(225)),s=(t(226),{id:"index-introducingredisinsight",title:"Introducing RedisInsight",sidebar_label:"Introducing RedisInsight",slug:"/develop/node/nodecrashcourse/introducingredisinsight"}),a={unversionedId:"develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight",id:"develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight",isDocsHomePage:!1,title:"Introducing RedisInsight",description:"RedisInsight is a free product from Redis that provides an intuitive graphical user interface for managing Redis databases. RedisInsight allows you to browse Redis and monitor changes in data in real time.  You can edit data stored in existing keys, create and delete new ones, and run redis-cli commands.",source:"@site/docs/develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight.mdx",slug:"/develop/node/nodecrashcourse/introducingredisinsight",permalink:"/develop/node/nodecrashcourse/introducingredisinsight",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight.mdx",version:"current",sidebar_label:"Introducing RedisInsight",sidebar:"docs",previous:{title:"Using Redis from Node.js",permalink:"/develop/node/nodecrashcourse/redisandnodejs"},next:{title:"Sample Application Overview",permalink:"/develop/node/nodecrashcourse/sampleapplicationoverview"}},d=[{value:"External Resources",id:"external-resources",children:[]}],c={toc:d};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/EUY8WyQdR-o",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"RedisInsight is a free product from Redis that provides an intuitive graphical user interface for managing Redis databases. RedisInsight allows you to browse Redis and monitor changes in data in real time.  You can edit data stored in existing keys, create and delete new ones, and run redis-cli commands."),Object(o.b)("p",null,"RedisInsight also supports some popular Redis modules, and we'll use it in this course to look at data managed by the RedisJSON and RediSearch modules.  The data type specific views in RedisInsight make visualizing even the most complex Redis data types easy.  We'll benefit from this when we look at Redis Streams later in the course."),Object(o.b)("p",null,"For this course, we'll be running Redis in a Docker container.  While you can complete the course using just the redis-cli interface provided with the container, we'd strongly recommend that you ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/"}),"download and install RedisInsight")," to benefit from its graphical interface and specialized views for Redis data types and modules."),Object(o.b)("p",null,'We\'ll cover how to connect RedisInsight to our Redis server in the "Up and Running with the Sample Application" module shortly.'),Object(o.b)("h2",{id:"external-resources"},"External Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-insight/"}),"RedisInsight Home Page and downloads"))))}u.isMDXComponent=!0},225:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(t),f=r,h=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return t?i.a.createElement(h,a(a({ref:n},c),{},{components:t})):i.a.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},226:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s}));var r=t(21),i=t(234);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,a=void 0!==s&&s,d=o.absolute,c=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(a)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+u:u}(o,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},234:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))}}]);