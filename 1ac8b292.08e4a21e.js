(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(116),l=a(126);a(117),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:l.a},e.children)))}},121:function(e,t,a){"use strict";var n=a(0),i=a(122);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},124:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(121),l=a(118),o=a(56),s=a.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,m=e.values,u=e.groupId,p=e.className,b=Object(r.a)(),h=b.tabGroupChoices,v=b.setTabGroupChoices,g=Object(n.useState)(o),j=g[0],O=g[1],f=n.Children.toArray(e.children);if(null!=u){var y=h[u];null!=y&&y!==j&&m.some((function(e){return e.value===y}))&&O(y)}var N=function(e){O(e),null!=u&&v(u,e)},k=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},125:function(e,t,a){"use strict";var n=a(3),i=a(0),r=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(116)),l=a(124),o=a(125),s=(a(117),a(120),{id:"index-ratelimiting",title:"How to build a Rate Limiter using Redis",sidebar_label:"How to build a Rate Limiter using Redis",slug:"/howtos/ratelimiting"}),c={unversionedId:"howtos/RateLimiting/index-ratelimiting",id:"howtos/RateLimiting/index-ratelimiting",isDocsHomePage:!1,title:"How to build a Rate Limiter using Redis",description:"Overview",source:"@site/docs/howtos/RateLimiting/index-ratelimiting.mdx",slug:"/howtos/ratelimiting",permalink:"/howtos/ratelimiting",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/RateLimiting/index-ratelimiting.mdx",version:"current",sidebar_label:"How to build a Rate Limiter using Redis",sidebar:"docs",previous:{title:"How to build Fraud detection system using Redis",permalink:"/howtos/fraudmitigation"},next:{title:"How to build a real-time leaderboard system using Redis",permalink:"/howtos/leaderboard"}},d=[{value:"Implementing Rate Limiter using Python",id:"implementing-rate-limiter-using-python",children:[]},{value:"How to run it locally?",id:"how-to-run-it-locally",children:[{value:"Run docker compose or install redis manually",id:"run-docker-compose-or-install-redis-manually",children:[]},{value:"Implementing Rate Limiter using NodeJS",id:"implementing-rate-limiter-using-nodejs",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Local installation",id:"local-installation",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Implementing Rate Limiter using Java",id:"implementing-rate-limiter-using-java",children:[]},{value:"Run docker compose or install redis manually",id:"run-docker-compose-or-install-redis-manually-2",children:[]}]}],m={toc:d};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"overview"},"Overview"),Object(r.b)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limit the number of requests made to an API endpoint and respond with a 429 status code. In this tutorial, we will see how to implement Rate Limiting using various programming languages:"),Object(r.b)(l.a,{defaultValue:"Python",values:[{label:"Python",value:"Python"},{label:"NodeJS",value:"NodeJS"},{label:"Java",value:"Java"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"Python",mdxType:"TabItem"},Object(r.b)("h3",{id:"implementing-rate-limiter-using-python"},"Implementing Rate Limiter using Python"),Object(r.b)("h2",{id:"how-to-run-it-locally"},"How to run it locally?"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/redis-rate-limiting-python.git\n")),Object(r.b)("h3",{id:"run-docker-compose-or-install-redis-manually"},"Run docker compose or install redis manually"),Object(r.b)("p",null,"Install docker (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"https://docs.docker.com/docker-for-mac/install/"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker network create global\ndocker-compose up -d --build\n")),Object(r.b)("h4",{id:"if-you-install-redis-manually-open-django-backendconfiguration-folder-and-copy-envexample-to-create-env-and-provide-the-values-for-environment-variables"},"If you install redis manually open django-backend/configuration folder and copy ",Object(r.b)("inlineCode",{parentName:"h4"},".env.example")," to create ",Object(r.b)("inlineCode",{parentName:"h4"},".env"),". And provide the values for environment variables"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- REDIS_HOST: Redis server host\n- REDIS_PORT: Redis server port\n- REDIS_DB: Redis server db index\n- REDIS_PASSWORD: Redis server password\n")),Object(r.b)("h4",{id:"setup-and-run"},"Setup and run"),Object(r.b)("p",null,"Install python, pip and venv (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://installpython3.com/mac/"}),"https://installpython3.com/mac/"),")"),Object(r.b)("p",null,"Use python version: 3.8"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"python3 -m venv venv\nsource ./venv/bin/activate\npip3 install -r requirements.txt\npython3 manage.py collectstatic\npython3 manage.py runserver\n"))),Object(r.b)(o.a,{value:"NodeJS",mdxType:"TabItem"},Object(r.b)("h3",{id:"implementing-rate-limiter-using-nodejs"},"Implementing Rate Limiter using NodeJS"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Node - v12.19.0"),Object(r.b)("li",{parentName:"ul"},"NPM - v6.14.8"),Object(r.b)("li",{parentName:"ul"},"Docker - v19.03.13 (optional)")),Object(r.b)("h3",{id:"local-installation"},"Local installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs/\n\n")),Object(r.b)("h1",{id:"copy-file-and-set-proper-data-inside"},"Copy file and set proper data inside"),Object(r.b)("p",null,"Copy .env.example to .env and make the changes as per your environment"),Object(r.b)("h1",{id:"install-dependencies"},"Install dependencies"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm cache clean && npm install\n")),Object(r.b)("h1",{id:"run-docker-compose-or-install-redis-manually-1"},"Run docker compose or install redis manually"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker network create global\ndocker-compose up -d --build\n``\n\n```bash\nnpm run dev\n\n")),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"To make deploys work, you need to create free account in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redislabs.com/try-free/"}),"https://redislabs.com/try-free/")," and get Redis' instance informations - REDIS_ENDPOINT_URI and REDIS_PASSWORD. You must pass them as environmental variables.")),Object(r.b)(o.a,{value:"Java",mdxType:"TabItem"},Object(r.b)("h3",{id:"implementing-rate-limiter-using-java"},"Implementing Rate Limiter using Java"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/deliveryweb/redis-rate-limiting-java.git\n")),Object(r.b)("h3",{id:"run-docker-compose-or-install-redis-manually-2"},"Run docker compose or install redis manually"),Object(r.b)("p",null,"Install docker (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"https://docs.docker.com/docker-for-mac/install/"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker network create global\ndocker-compose up -d --build\n")),Object(r.b)("h4",{id:"if-you-install-redis-manually-open-srcmainresources-folder-and-provide-the-values-for-environment-variables-in-applicationproperties"},"If you install redis manually open src/main/resources/ folder and provide the values for environment variables in application.properties"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"spring.redis.database=\nspring.redis.host=\nspring.redis.port=\nspring.redis.password=\nspring.redis.timeout=\n")),Object(r.b)("h4",{id:"else"},"else"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"copy .env.example .env\nexport $(cat .env | xargs)\n")),Object(r.b)("h4",{id:"setup-and-run-1"},"Setup and run"),Object(r.b)("p",null,"Install gradle (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gradle.org/install/"}),"https://gradle.org/install/"),")"),Object(r.b)("p",null,"Install JDK (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"}),"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"gradle wrapper\n./gradlew build\n./gradlew run\n")))))}u.isMDXComponent=!0}}]);