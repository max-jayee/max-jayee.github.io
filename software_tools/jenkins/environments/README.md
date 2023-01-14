<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2">
  <h1><a href="/">맥쓰네 블로그</a></h1>
  <h5 id="fixed-header-id"></h5>
</div>
<details id="display-none"><summary></summary>
  <script src="/js/fixed-header.js" defer="defer"></script>
</details>

# Jenkins 환경변수
## 설명
Jenkins 의 Item(=job) 을 실행할 때 사용할 수 있는 Jenkins 관련 환경 변수로 파이프라인을 구성할 때 유용하게 사용할 수 있습니다.

## Job 환경변수
Job 을 실행하여 명령을 실행하는 경우 아래의 목록에 해당하는 환경변수를 사용할 수 있습니다.

|환경변수|설명|
|---|---|
|BUILD_NUMBER|The current build number, such as "153"|
|BUILD_ID|The current build id, such as "2005-08-22_23-59-59" (YYYY-MM-DD_hh-mm-ss, defunct since version 1.597)|
|BUILD_URL|The URL where the results of this build can be found (e.g. http://buildserver/jenkins/job/MyJobName/666/)|
|NODE_NAME|The name of the node the current build is running on. Equals 'master' for master node.|
|JOB_NAME|Name of the project of this build. This is the name you gave your job when you first set it up. It's the third column of the Jenkins Dashboard main page.|
|BUILD_TAG|String of jenkins-${JOB_NAME}-${BUILD_NUMBER}. Convenient to put into a resource file, a jar file, etc for easier identification.|
|JENKINS_URL|Set to the URL of the Jenkins master that's running the build. This value is used by Jenkins CLI for example|
|EXECUTOR_NUMBER|The unique number that identifies the current executor (among executors of the same machine) that's carrying out this build. This is the number you see in the "build executor status", except that the number starts from 0, not 1.|
|JAVA_HOME|If your job is configured to use a specific JDK, this variable is set to the JAVA_HOME of the specified JDK. When this variable is set, PATH is also updated to have $JAVA_HOME/bin.|
|WORKSPACE|The absolute path of the workspace.|
|SVN_REVISION|For Subversion-based projects, this variable contains the revision number of the module. If you have more than one module specified, this won't be set.|
|CVS_BRANCH|For CVS-based projects, this variable contains the branch of the module. If CVS is configured to check out the trunk, this environment variable will not be set.|
|GIT_COMMIT|For Git-based projects, this variable contains the Git hash of the commit checked out for the build (like ce9a3c1404e8c91be604088670e93434c4253f03) (all the GIT_* variables require git plugin)|
|GIT_URL|For Git-based projects, this variable contains the Git url (like git@github.com:user/repo.git or [https://github.com/user/repo.git])|
|GIT_BRANCH|For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master)|