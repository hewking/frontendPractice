
The development server returned response error code: 500

URL: http://10.0.2.2:8081/index.delta?platform=android&dev=true&minify=false

Body:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Error: Unable to resolve module `./index` from `E:\gitrepository\GSYGithubAPP\node_modules\react-native\scripts/.`: The module `./index` could not be found from `E:\gitrepository\GSYGithubAPP\node_modules\react-native\scripts/.`. Indeed, none of these files exist:<br> &nbsp;* `E:\gitrepository\GSYGithubAPP\node_modules\react-native\scripts\index(.native||.android.js|.native.js|.js|.android.json|.native.json|.json|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx)`<br> &nbsp;* `E:\gitrepository\GSYGithubAPP\node_modules\react-native\scripts\index\index(.native||.android.js|.native.js|.js|.android.json|.native.json|.json|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx)`<br> &nbsp; &nbsp;at ModuleResolver.resolveDependency (E:\gitrepository\GSYGithubAPP\node_modules\metro\src\node-haste\DependencyGraph\ModuleResolution.js:163:15)<br> &nbsp; &nbsp;at ResolutionRequest.resolveDependency (E:\gitrepository\GSYGithubAPP\node_modules\metro\src\node-haste\DependencyGraph\ResolutionRequest.js:52:18)<br> &nbsp; &nbsp;at DependencyGraph.resolveDependency (E:\gitrepository\GSYGithubAPP\node_modules\metro\src\node-haste\DependencyGraph.js:283:16)<br> &nbsp; &nbsp;at E:\gitrepository\GSYGithubAPP\node_modules\metro\src\lib\transformHelpers.js:261:42<br> &nbsp; &nbsp;at Server.&lt;anonymous&gt; (E:\gitrepository\GSYGithubAPP\node_modules\metro\src\Server.js:1038:41)<br> &nbsp; &nbsp;at Generator.next (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at asyncGeneratorStep (E:\gitrepository\GSYGithubAPP\node_modules\metro\src\Server.js:99:24)<br> &nbsp; &nbsp;at _next (E:\gitrepository\GSYGithubAPP\node_modules\metro\src\Server.js:119:9)</pre>
</body>
</html>

processBundleResult
    BundleDownloader.java:296
access$200
    BundleDownloader.java:37
onResponse
    BundleDownloader.java:174
execute
    RealCall.java:206
run
    NamedRunnable.java:32
runWorker
    ThreadPoolExecutor.java:1133
run
    ThreadPoolExecutor.java:607
run
    Thread.java:761
