(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(330)),a=(n(331),{id:"index-redisandnodejs",title:"Using Redis from Node.js",sidebar_label:"Redis and Node.js",slug:"/develop/node/nodecrashcourse/redisandnodejs",authors:["simon"]}),s={unversionedId:"develop/node/node-crash-course/redisandnodejs/index-redisandnodejs",id:"develop/node/node-crash-course/redisandnodejs/index-redisandnodejs",isDocsHomePage:!1,title:"Using Redis from Node.js",description:"To connect to Redis from an application, we need a Redis client library for the language that we're coding in.  Redis clients perform the following functions:",source:"@site/docs/develop/node/node-crash-course/redisandnodejs/index-redisandnodejs.mdx",slug:"/develop/node/nodecrashcourse/redisandnodejs",permalink:"/develop/node/nodecrashcourse/redisandnodejs",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/redisandnodejs/index-redisandnodejs.mdx",version:"current",lastUpdatedAt:1635760568,sidebar_label:"Redis and Node.js",sidebar:"docs",previous:{title:"What is Redis?: An Overview",permalink:"/develop/node/nodecrashcourse/whatisredis"},next:{title:"Introducing RedisInsight",permalink:"/develop/node/nodecrashcourse/introducingredisinsight"}},c=[{value:"External Resources",id:"external-resources",children:[]}],d={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vXkYOSpKFHc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"To connect to Redis from an application, we need a Redis client library for the language that we're coding in.  Redis clients perform the following functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manage the connections between our application and the Redis server."),Object(i.b)("li",{parentName:"ul"},"Handle network communications to the Redis server using Redis' wire protocol."),Object(i.b)("li",{parentName:"ul"},"Provide a language specific API that we use in our application.")),Object(i.b)("p",null,"For Node.js, there are two popular Redis clients: ioredis and node_redis.  Both clients expose similar programming APIs, wrapping each Redis command as a function that we can call in a Node.js script.  For this course, we'll use ioredis which has built in support for modern JavaScript features such as Promises."),Object(i.b)("p",null,"Here's a complete Node.js script that uses ioredis to perform the SET and GET commands that we previously tried in redis-cli:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const Redis = require('ioredis');\n\nconst redisDemo = async () => {\n  // Connect to Redis at 127.0.0.1, port 6379.\n  const redisClient = new Redis({\n    host: '127.0.0.1',\n    port: 6379,\n  });\n\n  // Set key \"myname\" to have value \"Simon Prickett\".\n  await redisClient.set('myname', 'Simon Prickett');\n\n  // Get the value held at key \"myname\" and log it.\n  const value = await redisClient.get('myname');\n  console.log(value);\n\n  // Disconnect from Redis.\n  redisClient.quit();\n};\n\nredisDemo();\n")),Object(i.b)("p",null,"ioredis wraps each Redis command in a function that can either accept a callback or return a Promise.  Here, I'm using async/await to wait for each command to be executed on the Redis server before moving on to the next."),Object(i.b)("p",null,"Running this code displays the value that's now stored in Redis:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ node basic_set_get.js\nSimon Prickett\n")),Object(i.b)("h2",{id:"external-resources"},"External Resources"),Object(i.b)("p",null,"The following additional resources can help you understand how to access Redis from a Node.js application:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/luin/ioredis"}),"ioredis"),": Home page for the ioredis client."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.js.org/"}),"node_redis"),": Home page for the node_redis client."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://university.redis.com/courses/ru102js/"}),"RU102JS, Redis for JavaScript Developers"),": A free online course at Redis University that provides a deep dive into Redis for Node.js applications. You can expect to learn how to make connections to Redis, store and retrieve data, and leverage essential Redis features such as sorted sets and streams."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io/clients"}),"Redis clients by programming language"),": A large list of Redis clients at redis.io.")),Object(i.b)("p",null,"In this video, I take a look at how to get up and running with the ioredis client:"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/H6rikGCYPUk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}l.isMDXComponent=!0},330:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return n?o.a.createElement(m,s(s({ref:t},d),{},{components:n})):o.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},331:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(21),o=n(339);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,d=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},339:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);