(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(330)),o={id:"cs-redis",title:"Blocking Stream reads with CSRedis",sidebar_label:"Blocking Stream Reads with CSRedis",slug:"/develop/dotnet/streams/blocking-reads/cs-redis"},s={unversionedId:"develop/dotnet/streams/blocking-reads/cs-redis/cs-redis",id:"develop/dotnet/streams/blocking-reads/cs-redis/cs-redis",isDocsHomePage:!1,title:"Blocking Stream reads with CSRedis",description:"CSRedis is an MIT Licensed Open source project which provides a straightforward interface for executing commands. CSRedis can be used effectively for performing blocking stream reads with the one major downside that it does not support any async API for them.",source:"@site/docs/develop/dotnet/streams/blocking-reads/cs-redis/cs-redis.md",slug:"/develop/dotnet/streams/blocking-reads/cs-redis",permalink:"/develop/dotnet/streams/blocking-reads/cs-redis",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/streams/blocking-reads/cs-redis/cs-redis.md",version:"current",lastUpdatedAt:1643217781,sidebar_label:"Blocking Stream Reads with CSRedis",sidebar:"docs",previous:{title:"How to handle blocking stream reads with ServiceStack.Redis",permalink:"/develop/dotnet/streams/blocking-reads/service-stack"},next:{title:"Go and Redis",permalink:"/develop/golang/"}},l=[{value:"Start Redis",id:"start-redis",children:[]},{value:"Create the app",id:"create-the-app",children:[]},{value:"Add the package to your app",id:"add-the-package-to-your-app",children:[]},{value:"Create group",id:"create-group",children:[]},{value:"Write to the stream",id:"write-to-the-stream",children:[]},{value:"Parsing read results",id:"parsing-read-results",children:[]},{value:"Blocking XREAD",id:"blocking-xread",children:[]},{value:"Blocking XREADGROUP",id:"blocking-xreadgroup",children:[]},{value:"Spin up threads",id:"spin-up-threads",children:[]},{value:"Run the app",id:"run-the-app",children:[]},{value:"Resources:",id:"resources",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/2881099/csredis"}),"CSRedis")," is an MIT Licensed Open source project which provides a straightforward interface for executing commands. CSRedis can be used effectively for performing blocking stream reads with the one major downside that it does not support any async API for them."),Object(i.b)("h2",{id:"start-redis"},"Start Redis"),Object(i.b)("p",null,"Before we begin, we'll start up Redis. If you are developing locally, which we'll assume you are for the duration of this tutorial, you can start Redis with a simple docker command."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -p 6379:6379 redis\n")),Object(i.b)("h2",{id:"create-the-app"},"Create the app"),Object(i.b)("p",null,"We will build a simple console application for streaming telemetry using the library. To do so, use the ",Object(i.b)("inlineCode",{parentName:"p"},"dotnet new")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet new console -n StreamsWithCSRedis\n")),Object(i.b)("h2",{id:"add-the-package-to-your-app"},"Add the package to your app"),Object(i.b)("p",null,"Run the ",Object(i.b)("inlineCode",{parentName:"p"},"cd StreamsWithCSRedis")," command to change directories into the application's directory and run the following to add the CSRedis package"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet add package CSRedisCore\n")),Object(i.b)("h2",{id:"create-group"},"Create group"),Object(i.b)("p",null,"When we start up our app, the first thing we'll do is create our ",Object(i.b)("inlineCode",{parentName:"p"},"avg")," group. To make this group, open up ",Object(i.b)("inlineCode",{parentName:"p"},"Program.cs")," and add to it the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var cancellationTokenSource = new CancellationTokenSource();\nvar token = cancellationTokenSource.Token;\n\nvar client = new CSRedisClient("localhost");\nif (!client.Exists("stream") || client.XInfoStream("stream").groups == 0)\n{\n    client.XGroupCreate("stream", "avg", "$", MkStream: true);\n}\n')),Object(i.b)("p",null,"This code will create a cancellation token for the threads we'll spin up to do the writes/reads to the stream, create a client, check if our ",Object(i.b)("inlineCode",{parentName:"p"},"avg")," group already exists, and finally create the ",Object(i.b)("inlineCode",{parentName:"p"},"avg")," group if it doesn't."),Object(i.b)("h2",{id:"write-to-the-stream"},"Write to the stream"),Object(i.b)("p",null,"Next, we'll write out to the stream. We'll call the stream ",Object(i.b)("inlineCode",{parentName:"p"},"stream"),", and send a ",Object(i.b)("inlineCode",{parentName:"p"},"temp")," and ",Object(i.b)("inlineCode",{parentName:"p"},"time")," field along with the stream. We'll do this every 2 seconds. We'll put this on its own thread, since this operation isn't actually 'blocking' in the Redis sense, it may be alright to spin it out on its task, but as the other two operations in here are blocking, it's better to spin it off on its own thread as well. Add the following to your ",Object(i.b)("inlineCode",{parentName:"p"},"Program.cs")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var writeThread = new Thread(() =>\n{\n    var writeClient = new CSRedisClient("localhost");\n    var random = new Random();\n    while (!token.IsCancellationRequested)\n    {\n        writeClient.XAdd("stream", new (string, string)[]{new ("temp", random.Next(50,65).ToString()), new ("time", DateTimeOffset.Now.ToUnixTimeSeconds().ToString())});\n        Thread.Sleep(2000);\n    }\n});\n')),Object(i.b)("h2",{id:"parsing-read-results"},"Parsing read results"),Object(i.b)("p",null,"The next issue we'll need to dispose of is parsing the read results from the ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD")," and ",Object(i.b)("inlineCode",{parentName:"p"},"XREADGROUP")," commands. CSRedis handles return types generally as tuples in a reply, so we'll need a way to parse the result into something more useable. In this case, we'll parse the results into a dictionary. For the sake of brevity, we will keep everything in this project in ",Object(i.b)("inlineCode",{parentName:"p"},"Program.cs")," on the top-level method, so we'll declare a ",Object(i.b)("inlineCode",{parentName:"p"},"Func")," to handle the parsing. This function will pull the first message from the first stream and arrange the values returned into a dictionary. A couple of things to consider here if you wanted to expand this further is that you could reply with a dictionary of dictionaries if you were pulling back multiple messages from multiple streams. This complexity is intentionally left out."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"Func<(string key, (string id, string[] items)[] data), Dictionary<string,string>> parse = delegate((string key, (string id, string[] items)[] data) streamResult)\n{\n    var message = streamResult.data.First().items;\n    var result = new Dictionary<string, string>();\n    for (var i = 0; i < message.Length; i += 2)\n    {\n        result.Add(message[i], message[i+1]);\n    }\n\n    return result;\n};\n")),Object(i.b)("h2",{id:"blocking-xread"},"Blocking XREAD"),Object(i.b)("p",null,"There are two primary types of 'read' methods, ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD")," and ",Object(i.b)("inlineCode",{parentName:"p"},"XREADGROUP"),", this is in addition to the various range methods, which are their category and operate semantically differently from the read operations. ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD")," lets you read off a given stream and read the ",Object(i.b)("em",{parentName:"p"},"next")," item that hit's the stream. You can do this with the special ",Object(i.b)("inlineCode",{parentName:"p"},"$")," id. For our purposes here, we are going to block for two seconds, or whenever we get a response back from redis, whichever comes first:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var readThread = new Thread(() =>\n{\n    var readClient = new CSRedisClient("localhost");\n    while (!token.IsCancellationRequested)\n    {\n        var result = readClient.XRead(1, 5000, new (string key, string id)[] {new("stream", "$")});\n        if (result != null)\n        {\n            var dictionary = parse(result[0]);\n            Console.WriteLine($"Most recent message, time: {dictionary["time"]} temp: {dictionary["temp"]}");\n        }\n    }\n});\n')),Object(i.b)("h2",{id:"blocking-xreadgroup"},"Blocking XREADGROUP"),Object(i.b)("p",null,"Blocking ",Object(i.b)("inlineCode",{parentName:"p"},"XREADGROUP")," commands operate very similarly to ",Object(i.b)("inlineCode",{parentName:"p"},"XREAD"),". In this case, however, the creation of the group told us what id to start at, and by passing in the ",Object(i.b)("inlineCode",{parentName:"p"},">")," we necessarily start off at the next message in the queue. Because we are reading out of a group, we'll also want to ",Object(i.b)("inlineCode",{parentName:"p"},"XACK")," to any messages that we pull down. Also, since this is our average group, we'll maintain an average for our stream's temperatures."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var total = 0;\nvar count = 0;\nvar groupReadThread = new Thread(() =>\n{\n    var groupReadClient = new CSRedisClient("localhost");\n    var id = string.Empty;\n    while (!token.IsCancellationRequested)\n    {\n        if (!string.IsNullOrEmpty(id))\n        {\n            client.XAck("stream", "avg", id);\n        }\n        var result =\n            groupReadClient.XReadGroup("avg", "avg-1", 1, 5000, new (string key, string id)[] {new("stream", ">")});\n        if (result != null)\n        {\n            id = result.First().data.First().id;\n            var dictionary = parse(result[0]);\n            if (dictionary.ContainsKey("temp"))\n            {\n                count++;\n                total += int.Parse(dictionary["temp"]);\n                double avg = (double) total / count; \n                Console.WriteLine($"Most recent group message, time: {dictionary["time"]} temp: {dictionary["temp"]} avg: {avg:00.00}");\n            }\n        }\n    }\n});\n')),Object(i.b)("h2",{id:"spin-up-threads"},"Spin up threads"),Object(i.b)("p",null,"The last thing we'll need to do is start up all the threads, set a cancellation timeout (so the app doesn't run forever), and join all the threads back together:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"readThread.Start();\nwriteThread.Start();\ngroupReadThread.Start();\n\ncancellationTokenSource.CancelAfter(TimeSpan.FromSeconds(10));\n\nreadThread.Join();\nwriteThread.Join();\ngroupReadThread.Join();\n")),Object(i.b)("h2",{id:"run-the-app"},"Run the app"),Object(i.b)("p",null,"Now that the app is written, all that's left to do is run it. You can do so by running `dotnet run in your terminal."),Object(i.b)("h2",{id:"resources"},"Resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The source for this tutorial is in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-streams-with-dotnet/tree/main/StreamsWithCSRedis"}),"GitHub")),Object(i.b)("li",{parentName:"ul"},"Redis University has an extensive ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://university.redis.com/courses/ru202/"}),"course")," on Redis Streams where you can learn everything you need to know about them."),Object(i.b)("li",{parentName:"ul"},"You can learn more about Redis Streams in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io/topics/streams-intro"}),"Streams Info")," article on redis.io")))}d.isMDXComponent=!0},330:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);