(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),r=(a(0),a(306)),o=(a(311),a(312),a(307),a(308),{id:"index-kubernetes-operator",title:"Kubernetes Operator: What It Is and Why You Should Really Care About It",sidebar_label:"Kubernetes Operator: What It Is and Why You Should Really Care About It",slug:"/create/kubernetes/kubernetes-operator",authors:["ajeet"]}),i={unversionedId:"create/kubernetes/kubernetes-operator/index-kubernetes-operator",id:"create/kubernetes/kubernetes-operator/index-kubernetes-operator",isDocsHomePage:!1,title:"Kubernetes Operator: What It Is and Why You Should Really Care About It",description:"My Image",source:"@site/docs/create/kubernetes/kubernetes-operator/index-kubernetes-operator.mdx",slug:"/create/kubernetes/kubernetes-operator",permalink:"/create/kubernetes/kubernetes-operator",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/kubernetes/kubernetes-operator/index-kubernetes-operator.mdx",version:"current",sidebar_label:"Kubernetes Operator: What It Is and Why You Should Really Care About It",sidebar:"docs",previous:{title:"Create a Redis database on Google Kubernetes Engine",permalink:"/create/kubernetes/kubernetes-gke"},next:{title:"Create Redis database on Mac",permalink:"/create/homebrew/"}},l=[{value:"Stateful vs Stateless Applications",id:"stateful-vs-stateless-applications",children:[]},{value:"Scaling stateful application is hard",id:"scaling-stateful-application-is-hard",children:[]},{value:"Functions of Kubernetes Operator",id:"functions-of-kubernetes-operator",children:[]},{value:"How does an Operator work?",id:"how-does-an-operator-work",children:[]},{value:"What is the Redis Enterprise Operator?",id:"what-is-the-redis-enterprise-operator",children:[]},{value:"How does the Redis Enterprise Operator work?",id:"how-does-the-redis-enterprise-operator-work",children:[]},{value:"Example of Operator automation",id:"example-of-operator-automation",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function p(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"My Image",src:a(760).default})),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes"),' is popular due to its capability to deploy new apps at a faster pace. Thanks to "Infrastructure as data" (specifically, YAML), today you can express all your Kubernetes  resources such as ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/"}),"Pods"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"}),"Deployments"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/"}),"Services"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/volumes/"}),"Volumes"),", etc., in a YAML file. These default objects make it much easier for DevOps and SRE engineers to fully express their workloads without the need to learn how to write code in a programming language like Python, Java, or Ruby. "),Object(r.b)("p",null,"Kubernetes is designed for automation. Out of the box, you get lots of built-in automation from the core of Kubernetes. It can speed up your development process by making easy, automated deployments, updates (rolling update), and by managing your apps and services with almost zero downtime. However,  Kubernetes can\u2019t automate the process natively for stateful applications. For example, say you have a stateful workload, such as a database application, running on several nodes. If a majority of nodes go down, you\u2019ll need to reload the database from a specific snapshot following specific steps. Using existing default objects, types, and controllers in Kubernetes, this would be impossible to achieve. "),Object(r.b)("p",null,"Think of scaling nodes up, or upgrading to a new version, or disaster recovery for your stateful application \u2014 these kinds of operations often need very specific steps, and typically require manual intervention. Kubernetes cannot know all about every stateful, complex, clustered application. Kubernetes, on its own, does not know the configuration values for, say, a Redis database cluster, with its arranged memberships and stateful, persistent storage. Additionally, scaling stateful applications in Kubernetes is not an easy task and requires manual intervention."),Object(r.b)("h3",{id:"stateful-vs-stateless-applications"},"Stateful vs Stateless Applications"),Object(r.b)("p",null,"Let\u2019s try to understand the difference between ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tutorials/stateful-application/"}),"stateful"),"  versus ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tutorials/stateless-application/"}),"stateless")," applications with a simple example. Consider a Kubernetes cluster running a simple web application (without any operator). The YAML file below allows you to create two replicas of NGINX (a stateless application)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," apiVersion: apps/v1\n kind: Deployment\n metadata:\n   name: nginx-deployment\n   namespace: web\n spec:\n   selector:\n     matchLabels:\n       app: nginx\n   replicas: 2\n   template:\n     metadata:\n       labels:\n         app: nginx\n     spec:\n       containers:\n       - name: nginx\n         image: nginx:1.14.2\n         ports:\n         - containerPort: 80\n\n")),Object(r.b)("p",null,"In the example above, a Deployment object named ",Object(r.b)("inlineCode",{parentName:"p"},"nginx-deployment")," is created under a namespace \u201cweb,\u201d indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},".metadata.name")," field. It creates two replicated Pods, indicated by the ",Object(r.b)("inlineCode",{parentName:"p"},".spec.replicas")," field. The ",Object(r.b)("inlineCode",{parentName:"p"},".spec.selector")," field defines how the Deployment finds which Pods to manage. In this case, you select a label that is defined in the Pod template (app: nginx). The template field contains the following subfields: the Pods are labeled ",Object(r.b)("inlineCode",{parentName:"p"},"app: nginx")," using the ",Object(r.b)("inlineCode",{parentName:"p"},".metadata.labels")," field and the Pod template's specification indicates that the Pods run one container, nginx, which runs the nginx Docker Hub image at version 1.14.2. Finally, it creates one container and names it nginx."),Object(r.b)("p",null,"Run the command below to create the Deployment resource:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f nginx-dep.yaml\n")),Object(r.b)("p",null,"Let us verify if the Deployment was created successfully by running the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," kubectl get deployments\n NAME               READY   UP-TO-DATE   AVAILABLE   AGE\n nginx-deployment   2/2     2            2           63s\n")),Object(r.b)("p",null,"The example above shows the name of the Deployment in the namespace. It also displays how many replicas of the application are available to your users. You can also see that the number of desired replicas that have been updated to achieve the desired state is 2. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(761).default,title:"image_tooltip"})),Object(r.b)("p",null,"You can run the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl describe")," command to get detailed information of deployment resources. To show details of a specific resource or group of resources:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," kubectl describe deploy\n Name:                   nginx-deployment\n Namespace:              default\n CreationTimestamp:      Mon, 30 Dec 2019 07:10:33 +0000\n Labels:                 <none>\n Annotations:            deployment.kubernetes.io/revision: 1\n Selector:               app=nginx\n Replicas:               2 desired | 2 updated | 2 total | 0 available | 2 unavailable\n StrategyType:           RollingUpdate\n MinReadySeconds:        0\n RollingUpdateStrategy:  25% max unavailable, 25% max surge\n Pod Template:\n   Labels:  app=nginx\n   Containers:\n    nginx:\n     Image:        nginx:1.7.9\n     Port:         80/TCP\n     Host Port:    0/TCP\n     Environment:  <none>\n     Mounts:       <none>\n   Volumes:        <none>\n Conditions:\n   Type           Status  Reason\n   ----           ------  ------\n   Available      False   MinimumReplicasUnavailable\n   Progressing    True    ReplicaSetUpdated\n OldReplicaSets:  <none>\n NewReplicaSet:   nginx-deployment-6dd86d77d (2/2 replicas created)\n Events:\n   Type    Reason             Age   From                   Message\n   ----    ------             ----  ----                   -------\n   Normal  ScalingReplicaSet  90s   deployment-controller  Scaled up replica set nginx-deployment-6dd86d77d to 2\n")),Object(r.b)("p",null,"A Deployment is responsible for keeping a set of Pods running, but it\u2019s equally important to expose an interface to these Pods so that the other external processes can access them. That\u2019s where the Service resource comes in. The Service resource lets you expose an application running in Pods to be reachable from outside your cluster. Let us create a Service resource definition as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"})," apiVersion: v1\n kind: Service\n metadata:\n   name: nginx-service\n spec:\n   selector:\n     app: nginx\n   ports:\n     - port: 80\n       targetPort: 80\n   type: LoadBalancer\n\n")),Object(r.b)("p",null,'The above YAML specification creates a new Service object named "nginx-service," which targets TCP port 80 on any Pod with the ',Object(r.b)("inlineCode",{parentName:"p"},"app=nginx")," label."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," kubectl get svc -n web             \n NAME            TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE\n nginx-service   LoadBalancer   10.107.174.108   localhost     80:31596/TCP   46s\n\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(762).default,title:"image_tooltip"})),Object(r.b)("p",null,"Let\u2019s scale the Deployment to 4 replicas. We are going to use the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl scale")," command, followed by the deployment type, name, and desired number of instances. The output is similar to this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl scale deployments/nginx-deployment --replicas=4\ndeployment.extensions/nginx-deployment scaled\n")),Object(r.b)("p",null,"The change was applied, and we have 4 instances of the application available. Next, let\u2019s check if the number of Pods changed. There should now be 4 Pods running in the cluster (as shown in the diagram below)"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(763).default,title:"image_tooltip"})),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," kubectl get deployments\n NAME               READY   UP-TO-DATE   AVAILABLE   AGE\n nginx-deployment   4/4     4            4           4m\n")),Object(r.b)("p",null,"There are 4 Pods, with different IP addresses. The change was registered in the Deployment events log."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," kubectl get pods -o wide\n NAME                               READY   STATUS    RESTARTS   AGE     IP           NODE             NOMINATED NODE   READINESS GATES\n nginx-deployment-6dd86d77d-b4v7k   1/1     Running   0          4m32s   10.1.0.237   docker-desktop   none             none\n nginx-deployment-6dd86d77d-bnc5m   1/1     Running   0          4m32s   10.1.0.236   docker-desktop   none             none\n nginx-deployment-6dd86d77d-bs6jr   1/1     Running   0          86s     10.1.0.239   docker-desktop   none             none\n nginx-deployment-6dd86d77d-wbdzv   1/1     Running   0          86s     10.1.0.238   docker-desktop   none             none\n\n")),Object(r.b)("p",null,"Deleting one of the web server Pods triggers work in the control plane to restore the desired state of four replicas. Kubernetes starts a new Pod to replace the deleted one. In this excerpt, the replacement Pod shows a STATUS of ContainerCreating:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," kubectl delete pod nginx-deployment-6dd86d77d-b4v7k\n")),Object(r.b)("p",null,"You will notice that the Nginx static web server is interchangeable with any other replica, or with a new Pod that replaces one of the replicas. It doesn\u2019t store data or maintain state in any way. Kubernetes doesn\u2019t need to make any special arrangements to replace a failed Pod, or to scale the application by adding or removing replicas of the server. Now you might be thinking, what if you want to store the state of the application? Great question. "),Object(r.b)("h3",{id:"scaling-stateful-application-is-hard"},"Scaling stateful application is hard"),Object(r.b)("p",null,"Scaling stateless applications in Kubernetes is easy but it\u2019s not the same case for stateful applications. Stateful applications require manual intervention. Bringing Pods up and down is not that simple. Each Node has an identity and some data attached to it. Removing a Pod means losing its data and disrupting the system."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(764).default,title:"image_tooltip"})),Object(r.b)("p",null,"Consider a Kubernetes cluster with 6 worker Nodes hosting a Nginx web application connected to a persistent volume as shown above. Here is the snippet of StatefulSets YAML file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: web\nspec:\n  serviceName: "nginx"\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n          name: web\n        volumeMounts:\n        - name: www\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n  - metadata:\n      name: www\n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      resources:\n        requests:\n          storage: 1Gi\n\n')),Object(r.b)("p",null,"Kubernetes makes physical storage devices available to your cluster in the form of objects called ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"Persistent Volumes"),". Each of these Persistent Volumes is consumed by a Kubernetes Pod by issuing a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes"}),"PersistentVolumeClaim")," object, also known as PVC. A PVC object lets Pods use storage from Persistent Volumes. Imagine a scenario in which we want to downscale a cluster from 5 Nodes to 3 Nodes. Suddenly removing 2 Nodes at once is a potentially destructive operation. This might lead to the loss of all copies of the data. A better way to handle Node removal would be to first migrate data from the Node to be removed to other Nodes in the system before performing the actual Pod deletion. It is important to note that the StatefulSet controller is necessarily generic and cannot possibly know about every possible way to manage data migration and replication. In practice, however, StatefulSets are rarely enough to handle complex, distributed stateful workload systems in production environments. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Now the question is, how to solve this problem? "),"Enter Operators. Operators were developed to handle the sophisticated, stateful applications that the default Kubernetes controllers aren\u2019t able to handle. While Kubernetes controllers like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"StatefulSets")," are ideal for deploying, maintaining, and scaling simple stateless applications, they are not equipped to handle access to stateful resources, or to upgrade, resize, and backup of more elaborate clustered applications such as databases. A Kubernetes Operator fills in the gaps between the capabilities and automation provided by Kubernetes and how your software uses Kubernetes for automation of tasks relevant to your software."),Object(r.b)("p",null,"An Operator is basically an application-specific controller that can help you manage a Kubernetes application. It is a way to package, run, and maintain a Kubernetes application. It is designed to extend the capabilities of Kubernetes, and also simplify application management. This is especially useful for stateful applications, which include persistent storage and other elements external to the application, and may require extra work to manage and maintain. "),Object(r.b)("h3",{id:"functions-of-kubernetes-operator"},"Functions of Kubernetes Operator"),Object(r.b)("p",null,"A Kubernetes Operator uses the Kubernetes API to create, configure, and manage instances of complex stateful applications on behalf of a Kubernetes user. There is a public repository called ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://operatorhub.io"}),"OperatorHub.io")," that is designed to be the public registry for finding Kubernetes Operator backend services. With Operator Hub, developers can easily create an application based on an operator without going through the complexity of crafting an operator from scratch."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(765).default,title:"image_tooltip"})),Object(r.b)("p",null,"Below are a few examples of popular Kubernetes Operators and their functions and capabilities."),Object(r.b)("h4",{id:"kubernetes-operators"},"Kubernetes Operators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Helps you deploy an application on demand (for example, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://operatorhub.io/operator/argocd-operator-helm"}),"Argo CD operator (Helm")," is a declarative, GitOps continuous delivery tool for Kubernetes that helps with easy installation and configuration on demand)"),Object(r.b)("li",{parentName:"ul"},"Helps you install applications with the required configurations and number of application instances"),Object(r.b)("li",{parentName:"ul"},"Allows you to take and restore backups of the application state (for example, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/vmware-tanzu/velero"}),"Velero operator")," manages disaster recovery, backup, and restoration of cluster components such as pv, pvc, deployments, etc., to aid in disaster recovery)"),Object(r.b)("li",{parentName:"ul"},"Handles the upgrades of the application code plus the changes, such as database schema (for example, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://fluxcd.io/"}),"Flux ")," is a continuous delivery solution for Kubernetes that allows automating updates to configuration when there is new code to deploy)"),Object(r.b)("li",{parentName:"ul"},"Can manage a cluster of database servers (for example, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://operatorhub.io/operator/mariadb-operator-app"}),"MariaDB operator")," creates MariaDB server and database easily by defining simple custom resource)"),Object(r.b)("li",{parentName:"ul"},"Can install a database cluster of a declared software version and number of members"),Object(r.b)("li",{parentName:"ul"},"Scale applications in or out"),Object(r.b)("li",{parentName:"ul"},"Continues to monitor an application as it runs (for example, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://operatorhub.io/operator/prometheus"}),"Prometheus Operator ")," simplifies the deployment and configuration of Prometheus, Alertmanager, and related monitoring components)"),Object(r.b)("li",{parentName:"ul"},"Initiate upgrades, automated backups, and failure recovery, simulating failure in all or part of your cluster to test its resilience"),Object(r.b)("li",{parentName:"ul"},"Allows you to publish a service to applications that don\u2019t support Kubernetes APIs to discover them")),Object(r.b)("h3",{id:"how-does-an-operator-work"},"How does an Operator work?"),Object(r.b)("p",null,"Operators work by extending the Kubernetes control plane and API. Operators allows you to define a Custom Controller that watches your application and performs custom tasks based on its state. The application you want to watch is usually defined in Kubernetes as a new object: a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"}),"Custom Resource")," (CR) that has its own YAML spec and object type that is well understood by the API server. That way, you can define any specific criteria in the custom spec to watch out for, and reconcile the instance when it doesn\u2019t match the spec. The way an Operator\u2019s controller reconciles against a spec is very similar to native Kubernetes controllers, though it is using mostly custom components."),Object(r.b)("h3",{id:"what-is-the-redis-enterprise-operator"},"What is the Redis Enterprise Operator?"),Object(r.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/VjQZScpBj-I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("p",null,"Redis has created an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.redis.com/6.0/platforms/kubernetes/concepts/operator/"}),"Operator")," that deploys and manages the lifecycle of a Redis Enterprise Cluster. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://operatorhub.io/operator/redis-enterprise"}),"The Redis Enterprise Operator")," is the fastest, most efficient way to deploy and maintain a Redis Enterprise cluster in Kubernetes. The Operator creates, configures, and manages Redis Enterprise deployments from a single Kubernetes control plane. This means that you can manage Redis Enterprise instances on Kubernetes just by creating native objects, such as a Deployment, ReplicaSet, StatefulSet, etc. Operators allow full control over the Redis Enterprise cluster lifecycle."),Object(r.b)("p",null,"The Redis Enterprise Operator acts as a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-controllers"}),"custom controller")," for the custom resource Redis Enterprise Cluster, or \u201cREC\u201d, which is defined through Kubernetes CRD (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources"}),"customer resource definition"),") and deployed with a YAML file.The Redis Enterprise Operator functions as the logic \u201cglue\u201d between the Kubernetes infrastructure and the Redis Enterprise cluster."),Object(r.b)("h3",{id:"how-does-the-redis-enterprise-operator-work"},"How does the Redis Enterprise Operator work?"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(766).default,title:"image_tooltip"})),Object(r.b)("p",null,"The Redis Enterprise Operator supports two Custom Resource Definitions (CRDs):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Redis Enterprise Cluster "),"(REC): An API to create Redis Enterprise clusters. Note that only one cluster is supported per Operator deployment."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Redis Enterprise Database "),"(REDB): An API to create Redis databases running on the Redis Enterprise cluster. Note that the Redis Enterprise Operator is namespaced. High-level architecture and overview of the solution can be found ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/platforms/kubernetes/"}),"HERE"),".")),Object(r.b)("p",null,"This is how it works:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"First, the Redis Enterprise cluster custom resource (\u201cCR\u201d for short) is read and validated by the operator for a cluster specification."),Object(r.b)("li",{parentName:"ol"},"Secondly, cluster StatefulSet, service rigger, cluster admin secrets, RS/UI services are created."),Object(r.b)("li",{parentName:"ol"},"A Redis Enterprise Database CR is read and validated by the operator."),Object(r.b)("li",{parentName:"ol"},"The database is created on the cluster and the database access credentials are stored in a Kubernetes secret object. "),Object(r.b)("li",{parentName:"ol"},"The service rigger discovers the new database and configures the Kubernetes service for the database."),Object(r.b)("li",{parentName:"ol"},"An application workload uses the database secret and service for access to data.")),Object(r.b)("h3",{id:"example-of-operator-automation"},"Example of Operator automation"),Object(r.b)("p",null,"Consider the YAML file below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"apiVersion: app.redislabs.com/v1\nkind: RedisEnterpriseCluster\nmetadata:\n  name: rec\nspec:\n  # Add fields here\n  nodes: 3\n\n")),Object(r.b)("p",null,"If you change the number of nodes to 5, the Operator talks to StatefulSets, and changes the number of replicas from 3 to 5. Once that happens, Kubernetes will take over and bootstrap new Nodes one at a time, deploying Pods accordingly. As each becomes ready, the new Nodes join the cluster and become available to Redis Enterprise master Nodes."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(767).default,title:"image_tooltip"})),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"apiVersion: app.redislabs.com/v1\nkind: RedisEnterpriseDatabase\nmetadata:\n  name: redis-enterprise-database\nspec:\n  redisEnterpriseCluster:\n    name: redis-enterprise\n    Memory: 2G\n\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(768).default,title:"image_tooltip"})),Object(r.b)("p",null," In order to create a database, the Operator discovers the resources, talks to the cluster RestAPI, and then it creates the database. The server talks to the API and discovers it. The DB creates a Redis database service endpoint for that database and that will be available. "),Object(r.b)("p",null,"In the next tutorial, you will learn how to get started with the Redis Enterprise Kubernetes Operator from scratch, including how to perform non-trivial tasks such as backup, restore, horizontal scaling, and much more. Stay tuned!"),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/create/kubernetes/"}),"Create Redis database on Google Kubernetes Engine")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redis.com/latest/kubernetes/deployment/quick-start/"}),"Redis Enterprise Software on Kubernetes architecture ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redis.com/latest/kubernetes/deployment/quick-start/"}),"Deploy Redis Enterprise Software on Kubernetes"))))}p.isMDXComponent=!0},308:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(306),o=a(314);a(307),a(59);t.a=function(e){var t=s.a.useState(!1),a=t[0],n=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(r.a,{components:o.a},e.children)))}},309:function(e,t,a){"use strict";var n=a(0),s=a(310);t.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},310:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)(void 0);t.a=s},311:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(309),o=a(313),i=a(60),l=a.n(i),c=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,d=e.values,u=e.groupId,b=e.className,m=Object(r.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(n.useState)(i),O=g[0],j=g[1],y=n.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==O&&d.some((function(e){return e.value===w}))&&j(w)}var v=function(e){j(e),null!=u&&f(u,e)},k=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},d.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},312:function(e,t,a){"use strict";var n=a(3),s=a(0),r=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:s}),t)}},760:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-1e92843037d483a8d50131ad0782ce81.png"},761:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-0cc6134e38326b6b06aac1e0dfc25f69.png"},762:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-38ec17970520b64f9fa2f046f5c3f077.png"},763:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-755bd50b0b5593c478633052ab0fdaec.png"},764:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-b3e307cfb5e6d5aba45f164f9d6d1629.png"},765:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-2382df7cc9d1f38c995144f08a030e4a.png"},766:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-a53d07a9fa4d9521e7cb5e3ed1fdb1c5.png"},767:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-eee52222bd4f1f03666ff55d063d9d77.png"},768:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image9-19d2f3b3190b96fc273842668b952ada.png"}}]);