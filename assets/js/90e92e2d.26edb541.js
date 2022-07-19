"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7642],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"index-redis-om",title:"Up and Running with Express and Redis OM for Node.js in 5-minutes",sidebar_label:"Redis OM for Node.js",slug:"/develop/node/redis-om",authors:["guyroyse"]},l="Up and Running with Express and Redis OM for Node.js in 5-minutes",p={unversionedId:"develop/node/redis-om/index-redis-om",id:"develop/node/redis-om/index-redis-om",title:"Up and Running with Express and Redis OM for Node.js in 5-minutes",description:"OK. So that title is a bold claim. And this is a read-and-follow-along sort of tutorial. So, it might be 6 minutes or 4 minutes depending on how fast you type. Regardless, this should get you building something useful quickly and could make a nice foundation for something bigger.",source:"@site/docs/develop/node/redis-om/index-redis-om.mdx",sourceDirName:"develop/node/redis-om",slug:"/develop/node/redis-om",permalink:"/develop/node/redis-om",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/redis-om/index-redis-om.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-redis-om",title:"Up and Running with Express and Redis OM for Node.js in 5-minutes",sidebar_label:"Redis OM for Node.js",slug:"/develop/node/redis-om",authors:["guyroyse"]},sidebar:"docs",previous:{title:"Wrap Up",permalink:"/develop/node/nodecrashcourse/coursewrapup"},next:{title:"Overview",permalink:"/develop/python/"}},d={},u=[{value:"Let&#39;s Build Something",id:"lets-build-something",level:2},{value:"Humble Beginnings",id:"humble-beginnings",level:2},{value:"Getting the Express Service Up and Running",id:"getting-the-express-service-up-and-running",level:2},{value:"Mapping Songs to Redis",id:"mapping-songs-to-redis",level:2},{value:"Using Redis OM for CRUD Operations",id:"using-redis-om-for-crud-operations",level:2},{value:"Add a Create Route",id:"add-a-create-route",level:3},{value:"Add a Read Route",id:"add-a-read-route",level:3},{value:"Add an Update Route",id:"add-an-update-route",level:3},{value:"Add a Delete Route",id:"add-a-delete-route",level:3},{value:"Searching with Redis OM",id:"searching-with-redis-om",level:2},{value:"Load Songs into Redis",id:"load-songs-into-redis",level:3},{value:"Adding a Songs Router",id:"adding-a-songs-router",level:3},{value:"Add Some Search Routes",id:"add-some-search-routes",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}],h={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"up-and-running-with-express-and-redis-om-for-nodejs-in-5-minutes"},"Up and Running with Express and Redis OM for Node.js in 5-minutes"),(0,r.kt)("p",null,"OK. So that title is a bold claim. And this is a read-and-follow-along sort of tutorial. So, it might be 6 minutes or 4 minutes depending on how fast you type. Regardless, this should get you building something useful quickly and could make a nice foundation for something bigger."),(0,r.kt)("p",null,"Oh, and you might be wondering what ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node"},"Redis OM")," is. Well, there's an extensive ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node/blob/main/README.md"},"README")," on GitHub. Go check it out!"),(0,r.kt)("p",null,"Also, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-om-node-tutorial/blob/main/README.md"},"this document"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-om-node-tutorial"},"the code")," that we're about to implement, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-om-node-tutorial/tree/main/songs"},"the data")," needed to test it are all out on GitHub. Refer to them as you need."),(0,r.kt)("h2",{id:"lets-build-something"},"Let's Build Something"),(0,r.kt)("p",null,"So, what are we going to build? We're going to build a RESTful service that lets you manage songs. It'll let you do all the CRUD things (that's create, read, update, and delete for the uninitiated) with songs. Plus, we'll add some cool search endpoints to the service as well. That way, we can find songs by an artist or genre, from a particular year, or with certain lyrics."),(0,r.kt)("p",null,'Test data for this problem was a little tricky. Most song lyrics are copyrighted and getting permission to use them for a little old tutorial wasn\'t really an option. And we definitely want to be able to search on song lyrics. How else are we going to find that song that goes "oooo ah ah ah ah"?'),(0,r.kt)("p",null,"Fortunately, my buddy ",(0,r.kt)("a",{parentName:"p",href:"https://dylanbeattie.net/"},"Dylan Beattie")," is literally the original ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RockstarLang/rockstar"},"Rockstar developer"),". In addition to coding cool things, he writes ",(0,r.kt)("a",{parentName:"p",href:"https://dylanbeattie.net/music/"},"parody songs")," with tech themes. And, he has given me permission to use them as test data."),(0,r.kt)("h2",{id:"humble-beginnings"},"Humble Beginnings"),(0,r.kt)("p",null,"We're using Redis as our database\u2014that's the whole idea behind Redis OM. So, you'll need some Redis, specifically with ",(0,r.kt)("a",{parentName:"p",href:"https://redisearch.io"},"RediSearch")," and ",(0,r.kt)("a",{parentName:"p",href:"https://redisjson.io"},"RedisJSON")," installed. The easiest way to do this is to set up a free ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Redis Cloud")," instance. But, you can also use Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker run -p 6379:6379 redislabs/redismod:preview\n")),(0,r.kt)("p",null,"I'm assuming you are relatively Node.js savvy so you should be able to get that installed on your own. We'll be using the ",(0,r.kt)("em",{parentName:"p"},"top-level await")," feature for modules that was introduced in Node v14.8.0 so do make sure you have that version, or a newer one. If you don't, go and get it."),(0,r.kt)("p",null,"Once you have that, it's time to create a project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm init\n")),(0,r.kt)("p",null,'Give it a name, version, and description. Use whatever you like. I called mine "Metalpedia".'),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," and Redis OM for Node.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm install express redis-om --save\n")),(0,r.kt)("p",null,"And, just to make our lives easy, we'll use ",(0,r.kt)("a",{parentName:"p",href:"https://nodemon.io/"},"nodemon"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm install nodemon --save-dev\n")),(0,r.kt)("p",null,"Now that stuff is installed, let's set up some other details in our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),'. First, set the "type" to "module", so we can use ES6 Modules:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "type": "module",\n')),(0,r.kt)("p",null,'The "test" script that ',(0,r.kt)("inlineCode",{parentName:"p"},"npm init"),' generates isn\'t super useful for us. Replace that with a "start" script that calls ',(0,r.kt)("inlineCode",{parentName:"p"},"nodemon"),". This will allow the service we build to restart automatically whenever we change a file. Very convenient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "start": "nodemon server.js"\n  },\n')),(0,r.kt)("p",null,"I like to make my packages private, so they don't accidentally get pushed to NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "private": true,\n')),(0,r.kt)("p",null,"Oh, and you don't need the \"main\" entry. We're not building a package to share. So go ahead and remove that."),(0,r.kt)("p",null,"Now, you should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "metalpedia",\n  "version": "1.0.0",\n  "description": "Sample application for building a music repository backed by Redis and Redis OM.",\n  "type": "module",\n  "scripts": {\n    "start": "nodemon server.js"\n  },\n  "author": "Guy Royse <guy@guyroyse.com> (http://guyroyse.com/)",\n  "license": "MIT",\n  "private": true,\n  "dependencies": {\n    "express": "^4.17.1",\n    "redis-om": "^0.2.0"\n  },\n  "devDependencies": {\n    "nodemon": "^2.0.14"\n  }\n}\n')),(0,r.kt)("p",null,"Excellent. Set up done. Let's write some code!"),(0,r.kt)("h2",{id:"getting-the-express-service-up-and-running"},"Getting the Express Service Up and Running"),(0,r.kt)("p",null,"I like to write my services with a little version and name endpoint at the root. That way if some random developer hits the site of the service, they'll get a clue as to what it is. So let's do that:"),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," in the root of your project folder and populate it thus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import express from 'express';\n\n// create an express app and use JSON\nlet app = new express();\napp.use(express.json());\n\n// setup the root level GET to return name and version from package.json\napp.get('/', (req, res) => {\n  res.send({\n    name: process.env.npm_package_name,\n    version: process.env.npm_package_version,\n  });\n});\n\n// start listening\napp.listen(8080);\n")),(0,r.kt)("p",null,"We now have enough to actually run something. So let's run it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm start\n")),(0,r.kt)("p",null,"Then, hit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/")," in your favorite browser. You should see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "metalpedia",\n  "version": "1.0.0"\n}\n')),(0,r.kt)("p",null,"Or, hit your service using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"json_pp")," if you want to be fancy):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X GET http://localhost:8080 -s | json_pp\n{\n  "name": "metalpedia",\n  "version": "1.0.0"\n}\n')),(0,r.kt)("p",null,"Cool. Let's add some Redis."),(0,r.kt)("h2",{id:"mapping-songs-to-redis"},"Mapping Songs to Redis"),(0,r.kt)("p",null,"We're going to use Redis OM to map data for a song from JSON data in Redis to JavaScript objects."),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"song-repository.js")," in the root of your project folder. In it, import all the parts from Redis OM that you'll need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Entity, Schema, Client, Repository } from 'redis-om';\n")),(0,r.kt)("p",null,"Entities are the classes that you work with\u2014the thing being mapped to. They are what you create, read, update, and delete. Any class that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," is an entity. We'll define our Song entity with a single line for now, but we'll add some more to it later:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Song extends Entity {}\n")),(0,r.kt)("p",null,"Schemas define the fields on your entity, their types, and how they are mapped internally to Redis. By default, entities map to Hashes in Redis but we want ours to use JSON instead. When a ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema")," is created, it will add properties to the provided entity class based on the schema information provided. Here's a ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema")," that maps to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Song"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let schema = new Schema(Song, {\n  title: { type: 'string' }, // the title of the song\n  artist: { type: 'string' }, // who performed the song\n  genres: { type: 'string[]' }, // array of strings for the genres of the song\n  lyrics: { type: 'text' }, // the full lyrics of the song\n  music: { type: 'text' }, // who wrote the music for the song\n  year: { type: 'number' }, // the year the song was releases\n  duration: { type: 'number' }, // the duration of the song in seconds\n  link: { type: 'string' }, // link to a YouTube video of the song\n});\n")),(0,r.kt)("p",null,"Clients are used to connect to Redis. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," and pass your Redis URL in the constructor. If you don't specify a URL, it will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"redis://localhost:6379"),". Clients have methods to ",(0,r.kt)("inlineCode",{parentName:"p"},".open"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".close"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},".execute")," raw Redis commands, but we're just going to open it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let client = await new Client().open();\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remember that ",(0,r.kt)("em",{parentName:"p"},"top-level await")," stuff I mentioned at the top of the document? There it is!")),(0,r.kt)("p",null,"Now we have all the pieces that we need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository"),". Repositories are the main interface into Redis OM. They give us the methods to read, write, and remove entities. Create a repository\u2014and make sure it's exported as you'll need it when we get into the Express stuff:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export let songRepository = client.fetchRepository(schema);\n")),(0,r.kt)("p",null,"We're almost done with setting up our repository. But we still need to create an index or we won't be able to search on anything. We do that by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".createIndex"),". If an index already exists and it's the same, this function won't do anything. If it is different, it'll drop it and create a new one. In a real environment, you'd probably want to create your index as part of CI/CD. But we'll just cram them into our main code for this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await songRepository.createIndex();\n")),(0,r.kt)("p",null,"We have what we need to talk to Redis. Now, let's use it to make some routes in Express."),(0,r.kt)("h2",{id:"using-redis-om-for-crud-operations"},"Using Redis OM for CRUD Operations"),(0,r.kt)("p",null,"Let's create a truly RESTful API with the CRUD operations mapping to PUT, GET, POST, and DELETE respectively. We're going to do this using ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com/en/4x/api.html#router"},"Express Routers")," as this makes our code nice and tidy. So, create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"song-router.js")," in the root of your project folder. Then add the imports and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Router"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Router } from 'express';\nimport { songRepository as repository } from './song-repository.js';\n\nexport let router = Router();\n")),(0,r.kt)("p",null,"This router needs to be added in ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/song")," path so let's do that next. Add the following line of code to at the top of ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js"),"\u2014with all the other imports\u2014to import the song router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { router as songRouter } from './song-router.js';\n")),(0,r.kt)("p",null,"Also add a line of code to call ",(0,r.kt)("inlineCode",{parentName:"p"},".use")," so that the router we are about to implement is, well, used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use('/song', songRouter);\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," should now look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import express from 'express';\nimport { router as songRouter } from './song-router.js';\n\n// create an express app and use JSON\nlet app = new express();\napp.use(express.json());\n\n// bring in some routers\napp.use('/song', songRouter);\n\n// setup the root level GET to return name and version from package.json\napp.get('/', (req, res) => {\n  res.send({\n    name: process.env.npm_package_name,\n    version: process.env.npm_package_version,\n  });\n});\n\n// start listening\napp.listen(8080);\n")),(0,r.kt)("h3",{id:"add-a-create-route"},"Add a Create Route"),(0,r.kt)("p",null,"Now, let's start putting some routes in our ",(0,r.kt)("inlineCode",{parentName:"p"},"song-router.js"),". We'll create a song first as you need to have songs in Redis before you can do any of the reading, updating, or deleting of them. Add the PUT route below. This route will call ",(0,r.kt)("inlineCode",{parentName:"p"},".createEntity")," to create an entity, set all the properties on the newly created entity, and then call ",(0,r.kt)("inlineCode",{parentName:"p"},".save")," to persist it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.put('/', async (req, res) => {\n  // create the Song so we can save it\n  let song = repository.createEntity();\n\n  // set all the properties, converting missing properties to null\n  song.title = req.body.title ?? null;\n  song.artist = req.body.artist ?? null;\n  song.genres = req.body.genres ?? null;\n  song.lyrics = req.body.lyrics ?? null;\n  song.music = req.body.music ?? null;\n  song.year = req.body.year ?? null;\n  song.duration = req.body.duration ?? null;\n  song.link = req.body.link ?? null;\n\n  // save the Song to Redis\n  let id = await repository.save(song);\n\n  // return the id of the newly created Song\n  res.send({ id });\n});\n")),(0,r.kt)("p",null,"Now that we have a way to shove songs into Redis, let's start shoving. Out on GitHub, there are a bunch of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-om-node-tutorial/tree/main/songs"},"JSON files")," with song data in them. (Thanks ",(0,r.kt)("a",{parentName:"p",href:"https://dylanbeattie.net/"},"Dylan"),"!) Go ahead and pull those down and place them in a folder under your project root called ",(0,r.kt)("inlineCode",{parentName:"p"},"songs"),"."),(0,r.kt)("p",null,"Let's use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to load in a song. I'm partial to ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=woKUEIJkwxI"},(0,r.kt)("em",{parentName:"a"},"HTML")),", sung to the tune of AC/DC's ",(0,r.kt)("em",{parentName:"p"},"Highway to Hell"),", so let's use that one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X PUT -H "Content-Type: application/json" -d "@songs/html.json" http://localhost:8080/song -s | json_pp\n')),(0,r.kt)("p",null,"You should get back the ID of that newly inserted song:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "01FKRW9WMVXTGF71NBEM3EBRPY"\n}\n')),(0,r.kt)("p",null,"We're shipping HTML indeed. If you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," handy\u2014or want to use ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight"),"\u2014you can take a look and see how Redis has stored this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> json.get Song:01FKRW9WMVXTGF71NBEM3EBRPY\n"{\\"title\\":\\"HTML\\",\\"artist\\":\\"Dylan Beattie and the Linebreakers\\",\\"genres\\":[\\"blues rock\\",\\"hard rock\\",\\"parody\\",\\"rock\\"],\\"lyrics\\":\\"W3C, RFC, a JIRA ticket and a style guide.\\\\\\\\nI deploy with FTP, run it all on the client side\\\\\\\\nDon\\xe2\\x80\\x99t need Ruby, don\\xe2\\x80\\x99t need Rails,\\\\\\\\nAin\\xe2\\x80\\x99t nothing running on my stack\\\\\\\\nI\\xe2\\x80\\x99m hard wired, for web scale,\\\\\\\\nYeah, I\\xe2\\x80\\x99m gonna bring the 90s back\\\\\\\\n\\\\\\\\nI\\xe2\\x80\\x99m shipping HTML,\\\\\\\\nHTML,\\\\\\\\nI\\xe2\\x80\\x99m shipping HTML,\\\\\\\\nHTML\\xe2\\x80\\xa6\\\\\\\\n\\\\\\\\nNo logins, no trackers,\\\\\\\\nNo cookie banners to ignore\\\\\\\\nI ain\\xe2\\x80\\x99t afraid of, no hackers\\\\\\\\nJust the occasional 404\\\\\\\\nThey hatin\\xe2\\x80\\x99, what I do,\\\\\\\\nBut that\\xe2\\x80\\x99s \\xe2\\x80\\x98cos they don\\xe2\\x80\\x99t understand\\\\\\\\nMark it up, break it down,\\\\\\\\nRemember to escape your ampersands\\xe2\\x80\\xa6\\\\\\\\n\\\\\\\\nI\\xe2\\x80\\x99m shipping HTML,\\\\\\\\nHTML,\\\\\\\\nI\\xe2\\x80\\x99m shipping HTML,\\\\\\\\nHTML\\xe2\\x80\\xa6\\\\\\\\n\\\\\\\\n(But it\\xe2\\x80\\x99s really just markdown.)\\",\\"music\\":\\"\\\\\\"Highway to Hell\\\\\\" by AC/DC\\",\\"year\\":2020,\\"duration\\":220,\\"link\\":\\"https://www.youtube.com/watch?v=woKUEIJkwxI\\"}"\n')),(0,r.kt)("p",null,"Yep. Looks like JSON."),(0,r.kt)("h3",{id:"add-a-read-route"},"Add a Read Route"),(0,r.kt)("p",null,"Create down, let's add a GET route to read this song from HTTP instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.get('/:id', async (req, res) => {\n  // fetch the Song\n  let song = await repository.fetch(req.params.id);\n\n  // return the Song we just fetched\n  res.send(song);\n});\n")),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," or your browser to load ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/song/01FKRW9WMVXTGF71NBEM3EBRPY")," to fetch the song:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET http://localhost:8080/song/01FKRW9WMVXTGF71NBEM3EBRPY -s | json_pp\n")),(0,r.kt)("p",null,"And you should get back the JSON for the song:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "link": "https://www.youtube.com/watch?v=woKUEIJkwxI",\n  "genres": ["blues rock", "hard rock", "parody", "rock"],\n  "entityId": "01FKRW9WMVXTGF71NBEM3EBRPY",\n  "title": "HTML",\n  "lyrics": "W3C, RFC, a JIRA ticket and a style guide.\\\\nI deploy with FTP, run it all on the client side\\\\nDon\u2019t need Ruby, don\u2019t need Rails,\\\\nAin\u2019t nothing running on my stack\\\\nI\u2019m hard wired, for web scale,\\\\nYeah, I\u2019m gonna bring the 90s back\\\\n\\\\nI\u2019m shipping HTML,\\\\nHTML,\\\\nI\u2019m shipping HTML,\\\\nHTML\u2026\\\\n\\\\nNo logins, no trackers,\\\\nNo cookie banners to ignore\\\\nI ain\u2019t afraid of, no hackers\\\\nJust the occasional 404\\\\nThey hatin\u2019, what I do,\\\\nBut that\u2019s \u2018cos they don\u2019t understand\\\\nMark it up, break it down,\\\\nRemember to escape your ampersands\u2026\\\\n\\\\nI\u2019m shipping HTML,\\\\nHTML,\\\\nI\u2019m shipping HTML,\\\\nHTML\u2026\\\\n\\\\n(But it\u2019s really just markdown.)",\n  "duration": 220,\n  "artist": "Dylan Beattie and the Linebreakers",\n  "music": "\\"Highway to Hell\\" by AC/DC",\n  "year": 2020\n}\n')),(0,r.kt)("p",null,"Now that we can read and write, let's implement the ",(0,r.kt)("em",{parentName:"p"},"REST")," of the HTTP verbs. REST... get it?"),(0,r.kt)("h3",{id:"add-an-update-route"},"Add an Update Route"),(0,r.kt)("p",null,"Here's the code to update using a POST route. You'll note this code is nearly identical to the GET route. Feel free to refactor to a helper function but since this is just a tutorial, I'll skip that for now.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.post('/:id', async (req, res) => {\n  // fetch the Song we are replacing\n  let song = await repository.fetch(req.params.id);\n\n  // set all the properties, converting missing properties to null\n  song.title = req.body.title ?? null;\n  song.artist = req.body.artist ?? null;\n  song.genres = req.body.genres ?? null;\n  song.lyrics = req.body.lyrics ?? null;\n  song.music = req.body.music ?? null;\n  song.year = req.body.year ?? null;\n  song.duration = req.body.duration ?? null;\n  song.link = req.body.link ?? null;\n\n  // save the Song to Redis\n  let id = await repository.save(song);\n\n  // return the id of the Song we just saved\n  res.send({ id });\n});\n")),(0,r.kt)("p",null,"And the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to try it out, replacing Dylan's ",(0,r.kt)("em",{parentName:"p"},"HTML")," with ",(0,r.kt)("em",{parentName:"p"},"D.M.C.A."),"\u2014sung to the tune of ",(0,r.kt)("em",{parentName:"p"},"Y.M.C.A.")," by the Village People:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X POST -H "Content-Type: application/json" -d "@songs/d-m-c-a.json" http://localhost:8080/song/01FKRW9WMVXTGF71NBEM3EBRPY -s | json_pp\n')),(0,r.kt)("p",null,"You should get back the ID of that updated song:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "id" : "01FKRW9WMVXTGF71NBEM3EBRPY"\n}\n')),(0,r.kt)("h3",{id:"add-a-delete-route"},"Add a Delete Route"),(0,r.kt)("p",null,"And, finally, let's implement a DELETE route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.delete('/:id', async (req, res) => {\n  // delete the Song with its id\n  await repository.remove(req.params.id);\n\n  // respond with OK\n  res.type('application/json');\n  res.send('OK');\n});\n")),(0,r.kt)("p",null,"And test it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X DELETE http://localhost:8080/song/01FKRW9WMVXTGF71NBEM3EBRPY -s\nOK\n")),(0,r.kt)("p",null,'This just returns "OK", which is technically JSON but aside from the response header, is indistinguishable from plain text.'),(0,r.kt)("h2",{id:"searching-with-redis-om"},"Searching with Redis OM"),(0,r.kt)("p",null,"All the CRUD is done. Let's add some search. Search is where Redis OM really starts to shine. We're going to create routes to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return all the songs, like, all of them."),(0,r.kt)("li",{parentName:"ul"},'Fetch songs for a particular artist, like "Dylan Beattie and the Linebreakers".'),(0,r.kt)("li",{parentName:"ul"},'Fetch songs that are in a certain genre, like "rock" or "electronic".'),(0,r.kt)("li",{parentName:"ul"},"Fetch songs between years, like all the songs from the 80s."),(0,r.kt)("li",{parentName:"ul"},'Fetch songs that have certain words in their lyrics, like "html" or "markdown".')),(0,r.kt)("h3",{id:"load-songs-into-redis"},"Load Songs into Redis"),(0,r.kt)("p",null,"Before we get started, let's load up Redis with a bunch of songs\u2014so we have stuff to search for. I've written a short shell script that loads all the song data on GitHub into Redis using the server we just made. It just calls ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," in a loop. It's on GitHub, so go ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-om-node-tutorial/blob/main/load-data.sh"},"grab it")," and put it in your project root. Then run it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./load-data.sh\n")),(0,r.kt)("p",null,"You should get something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"id":"01FM310A8AVVM643X13WGFQ2AR"} <- songs/big-rewrite.json\n{"id":"01FM310A8Q07D6S7R3TNJB146W"} <- songs/bug-in-the-javascript.json\n{"id":"01FM310A918W0JCQZ8E57JQJ07"} <- songs/d-m-c-a.json\n{"id":"01FM310A9CMJGQHMHY01AP0SG4"} <- songs/enterprise-waterfall.json\n{"id":"01FM310A9PA6DK4P4YR275M58X"} <- songs/flatscreens.json\n{"id":"01FM310AA2XTEQV2NZE3V7K3M7"} <- songs/html.json\n{"id":"01FM310AADVHEZXF7769W6PQZW"} <- songs/lost-it-on-the-blockchain.json\n{"id":"01FM310AASNA81Y9ACFMCGP05P"} <- songs/meetup-2020.json\n{"id":"01FM310AB4M2FKTDPGEEMM3VTV"} <- songs/re-bass.json\n{"id":"01FM310ABFGFYYJXVABX2YXGM3"} <- songs/teams.json\n{"id":"01FM310ABW0ANYSKN9Q1XEP8BJ"} <- songs/tech-sales.json\n{"id":"01FM310AC6H4NRCGDVFMKNGKK3"} <- songs/these-are-my-own-devices.json\n{"id":"01FM310ACH44414RMRHPCVR1G8"} <- songs/were-gonna-build-a-framework.json\n{"id":"01FM310ACV8C72Y69VDQHA12C1"} <- songs/you-give-rest-a-bad-name.json\n')),(0,r.kt)("p",null,"Note that this script will not erase any data. So any songs that you have in there already will still be there, alongside these. And if you run this script more than once, it will gleefully add the songs a second time."),(0,r.kt)("h3",{id:"adding-a-songs-router"},"Adding a Songs Router"),(0,r.kt)("p",null,"Like with the CRUD operations for songs, we need to first create a router. This time we'll name the file ",(0,r.kt)("inlineCode",{parentName:"p"},"songs-router.js"),". Note the plural. Add all the imports and exports to that file like before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Router } from 'express';\nimport { songRepository as repository } from './song-repository.js';\n\nexport let router = Router();\n")),(0,r.kt)("p",null,"Add this router to Express in ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"/songs"),", also like we did before. And, again, note the plural. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," should now look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import express from 'express';\nimport { router as songRouter } from './song-router.js';\nimport { router as songsRouter } from './songs-router.js';\n\n// create an express app and use JSON\nlet app = new express();\napp.use(express.json());\n\n// bring in some routers\napp.use('/song', songRouter);\napp.use('/songs', songsRouter);\n\n// setup the root level GET to return name and version from package.json\napp.get('/', (req, res) => {\n  res.send({\n    name: process.env.npm_package_name,\n    version: process.env.npm_package_version,\n  });\n});\n\n// start listening\napp.listen(8080);\n")),(0,r.kt)("h3",{id:"add-some-search-routes"},"Add Some Search Routes"),(0,r.kt)("p",null,"Now we can add some search routes. We initiate a search by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".search")," on our repository. Then we call ",(0,r.kt)("inlineCode",{parentName:"p"},".where")," to add any filters we want\u2014if we want any at all. Once we've specified the filters, we call ",(0,r.kt)("inlineCode",{parentName:"p"},".returnAll")," to get all the matching entities."),(0,r.kt)("p",null,"Here's the simplest search\u2014it just returns everything. Go ahead and add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"songs-router.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.get('/', async (req, res) => {\n  let songs = await repository.search().returnAll();\n  res.send(songs);\n});\n")),(0,r.kt)("p",null,"Then try it out with ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," or your browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET http://localhost:8080/songs -s | json_pp\n")),(0,r.kt)("p",null,"We can search for a specific field by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".where")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".eq"),". This route finds all songs by a particular artist. Note that you must specify the complete name of the artist for this to work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.get('/by-artist/:artist', async (req, res) => {\n  let artist = req.params.artist;\n  let songs = await repository.search().where('artist').eq(artist).returnAll();\n  res.send(songs);\n});\n")),(0,r.kt)("p",null,"Then try it out with ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," or your browser too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET http://localhost:8080/songs/by-artist/Dylan%20Beattie -s | json_pp\n")),(0,r.kt)("p",null,"Genres are stored as an array of strings. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},".contains")," to see if the array contains that genre or not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.get('/by-genre/:genre', async (req, res) => {\n  let genre = req.params.genre;\n  let songs = await repository\n    .search()\n    .where('genres')\n    .contains(genre)\n    .returnAll();\n  res.send(songs);\n});\n")),(0,r.kt)("p",null,"And try it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET http://localhost:8080/songs/by-genre/rock -s | json_pp\n$ curl -X GET http://localhost:8080/songs/by-genre/parody -s | json_pp\n")),(0,r.kt)("p",null,"This route lets you get all the songs between two years. Great for finding all those 80s hits. Of course, all of Dylan's songs are more recent than that, so we'll go a little more narrow when we try it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.get('/between-years/:start-:stop', async (req, res) => {\n  let start = Number.parseInt(req.params.start);\n  let stop = Number.parseInt(req.params.stop);\n  let songs = await repository\n    .search()\n    .where('year')\n    .between(start, stop)\n    .returnAll();\n  res.send(songs);\n});\n")),(0,r.kt)("p",null,"And, try it out, of course:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET http://localhost:8080/songs/between-years/2020-2021 -s | json_pp\n")),(0,r.kt)("p",null,"Let's add the final route to find songs that have certain words in the lyrics using ",(0,r.kt)("inlineCode",{parentName:"p"},".match"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router.get('/with-lyrics/:lyrics', async (req, res) => {\n  let lyrics = req.params.lyrics;\n  let songs = await repository\n    .search()\n    .where('lyrics')\n    .match(lyrics)\n    .returnAll();\n  res.send(songs);\n});\n")),(0,r.kt)("p",null,'We can try this out too, getting all the songs that contain both the words "html" and "markdown":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET http://localhost:8080/songs/with-lyrics/html%20markdown -s | json_pp\n")),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,r.kt)("p",null,"And that's a wrap. I've walked you through some of the basics with this tutorial. But you should totally go deeper. If you want to learn more, go ahead and check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node"},"Redis OM for Node.js on GitHub"),". It explains the capabilities of Redis OM for Node.js in greater detail."),(0,r.kt)("p",null,"If you have any questions or are stuck, feel free to jump on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/redis"},"Redis Discord")," server and ask there. I'm always hanging out and happy to help."),(0,r.kt)("p",null,"And, if you find a flaw, bug, or just think this tutorial could be improved, send a pull request or open an issue."),(0,r.kt)("p",null,"Thanks!"))}c.isMDXComponent=!0}}]);