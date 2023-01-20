<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Jenkins 파이프라인 예시

## 설명

다양한 파이프라인을 구성하는 예시를 공유합니다.
git 저장소에 jenkins 계정을 생성하고, jenkins 계정의 api token 을 발급합니다.
발급한 토큰은 jenkins token 에 추가합니다.

## git structure

projectcode[3]-syscode[3] > syscode[3]-biz[3]-prjtype[3] - src
projectcode[3]-ci > spring boot - Jenkinsfile
projectcode[3]-cd > syscode[3] > syscode[3]-biz[3]-prjtype[3] - deployment.yaml

## Jenkins global options

```bash
# ex). syscode[3]-biz[3]-prjtype[3]-env[3]
# cut started index by 1.
SYSTEM_IDX=1
BIZ_IDX=5
APPLICATION_TYPE_IDX=9
BRANCH_IDX=13
```

## groovy script

pipeline 전역에 environment 를 가질 수 있고, 각 stage 마다 environment 를 가질 수 있습니다.
각 stage 는 독립적인 관계로, stage 가 끝나면 pwd 나 environment 는 초기화 됩니다.
environment 내에서 정의한 것은 environment 에서 바로 사용할 수 없고, 한 레벨 아래 영역들만 사용할 수 있습니다.

<!-- TODO: groovy 에서는 "" 와 '' 가 환경변수를 처리할 때 다르게 처리되는 것으로 보인다. 
GITLAB_CREDS_USR, GITLAB_CREDS_PSW 와 같은 민감 정보를 사용할 때 "" 로 하면 탈취 당할 수 있다고 경고가 뜨고, '' 를 권장함
다른 언어의 ` 코드 ` 와 유사한게 groovy 에서는 / 코드 / 이다.
-->

### shell script in environment

`ENV_VAR_NAME = "${sh(script: '', returnStdout:true).trim()}"`

### WAS 빌드/배포 (-> vm)

Deploy stage 의 step 만 vm 에 서버 재기동으로 변경

```groovy
pipeline {
    agent any

    environment {
        //BUILD_ID // unique value
        PROJECT_KEY = "${sh(script: 'echo ${JOB_NAME} | cut -c ${SYSTEM_IDX}-$((APPLICATION_TYPE_IDX + 2))', returnStdout:true).trim()}"
        SYSTEM_CODE = "${sh(script: 'echo ${JOB_NAME} | cut -c ${SYSTEM_IDX}-$((SYSTEM_IDX + 2)) | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
        BIZ_CODE = "${sh(script: 'echo ${JOB_NAME} | cut -c ${BIZ_IDX}-$((BIZ_IDX + 2)) | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
        APPLICATION_TYPE = "${sh(script: 'echo ${JOB_NAME} | cut -c ${APPLICATION_TYPE_IDX}-$((APPLICATION_TYPE_IDX + 2)) | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
        JOB_NAME = "${sh(script: 'echo ${JOB_NAME} | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
    }

    stages {
        stage("Prepare"){
            environment {
                GITLAB_CREDS = credentials('jenkins-system-token')
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
                GITLAB_APPLICATION_GROUP = "${sh(script: 'echo \"$(echo ${!PROJECT_KEY} | awk \'{print tolower($0)}\')-$(echo ${SYSTEM_CODE})\"', returnStdout:true).trim()}"
                BRANCH_NAME = "${sh(script: 'echo ${JOB_NAME} | cut -c ${BRANCH_IDX}-$((BRANCH_IDX + 2))', returnStdout:true).trim()}"
            }
            steps {
                sh "rm -rf ${GITLAB_REPO_NAME}"
                sh 'git clone http://${GITLAB_CREDS_USR}:${GITLAB_CREDS_PSW}@43.201.131.196:48080/${GITLAB_APPLICATION_GROUP}/${GITLAB_REPO_NAME}.git -b ${BRANCH_NAME}'
            }
        }
        stage("Build"){
            environment {
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
            }
            steps {
                sh "cd ./${GITLAB_REPO_NAME} && ./gradlew build"
            }
        }
        stage("Release"){
            environment {
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
            }
            steps {
                sh "cp ./${GITLAB_REPO_NAME}/build/libs/${BIZ_CODE}-0.0.1-SNAPSHOT.jar ./"
            }
        }
        stage("Deploy"){
            environment {
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
            }
            steps {
                sh "nohup java -jar ${BIZ_CODE}-0.0.1-SNAPSHOT.jar &"
                sh "rm -rf ${GITLAB_REPO_NAME}"
            }
        }
    }
}
```

### WAS 빌드/배포 (-> paas)

```groovy
pipeline {
    agent any

    environment {
        PROJECT_URL = "sample.com"
        DEPLOY_VERSION = "0.0.${BUILD_ID}"
        PROJECT_KEY = "${sh(script: 'echo ${JOB_NAME} | cut -c ${SYSTEM_IDX}-$((APPLICATION_TYPE_IDX + 2))', returnStdout:true).trim()}"
        SYSTEM_CODE = "${sh(script: 'echo ${JOB_NAME} | cut -c ${SYSTEM_IDX}-$((SYSTEM_IDX + 2)) | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
        BIZ_CODE = "${sh(script: 'echo ${JOB_NAME} | cut -c ${BIZ_IDX}-$((BIZ_IDX + 2)) | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
        CD_CODE = "cd"
        APPLICATION_TYPE = "${sh(script: 'echo ${JOB_NAME} | cut -c ${APPLICATION_TYPE_IDX}-$((APPLICATION_TYPE_IDX + 2)) | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
        JOB_NAME = "${sh(script: 'echo ${JOB_NAME} | awk \'{print tolower($0)}\'', returnStdout:true).trim()}"
    }

    stages {
        stage("Prepare"){
            environment {
                GITLAB_CREDS = credentials('jenkins-system-token')
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
                GITLAB_APPLICATION_GROUP = "${sh(script: 'echo \"$(echo ${!PROJECT_KEY} | awk \'{print tolower($0)}\')-$(echo ${SYSTEM_CODE})\"', returnStdout:true).trim()}"
                GITLAB_CD_GROUP = "${sh(script: 'echo \"$(echo ${!PROJECT_KEY} | awk \'{print tolower($0)}\')-$(echo ${CD_CODE})\"', returnStdout:true).trim()}"
                BRANCH_NAME = "${sh(script: 'echo ${JOB_NAME} | cut -c ${BRANCH_IDX}-$((BRANCH_IDX + 2))', returnStdout:true).trim()}"
            }
            steps {
                sh "rm -rf ${GITLAB_REPO_NAME} && rm -rf ${GITLAB_REPO_NAME}-${CD_CODE}"
                sh 'git clone http://${GITLAB_CREDS_USR}:${GITLAB_CREDS_PSW}@43.201.131.196:48080/${GITLAB_APPLICATION_GROUP}/${GITLAB_REPO_NAME}.git -b ${BRANCH_NAME}'
                sh 'git clone http://${GITLAB_CREDS_USR}:${GITLAB_CREDS_PSW}@43.201.131.196:48080/${GITLAB_CD_GROUP}/${SYSTEM_CODE}/${GITLAB_REPO_NAME}.git -b ${BRANCH_NAME} ${GITLAB_REPO_NAME}-${CD_CODE}'
            }
        }
        stage("Build"){
            environment {
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
            }
            steps {
                sh "cd ./${GITLAB_REPO_NAME} && ./gradlew build"
                // TODO: docker build
            }
        }
        stage("Release"){
            environment {
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
            }
            steps {
                sh "cp ./${GITLAB_REPO_NAME}/build/libs/${BIZ_CODE}-0.0.1-SNAPSHOT.jar ./"
                // TODO: docker image tagging
                // TODO: docker image push
            }
        }
        stage("Deploy"){
            environment {
                GITLAB_REPO_NAME = "${SYSTEM_CODE}-${BIZ_CODE}-${APPLICATION_TYPE}"
                BRANCH_NAME = "${sh(script: 'echo ${JOB_NAME} | cut -c ${BRANCH_IDX}-$((BRANCH_IDX + 2))', returnStdout:true).trim()}"
            }
            steps {
                dir ("${GITLAB_REPO_NAME}-${CD_CODE}") {
                    sh "pwd"
                    sh "ls -al"
                    sh "sed -i 's/image: ${PROJECT_URL}\\/${GITLAB_REPO_NAME}-${BRANCH_NAME}:.*/image: ${PROJECT_URL}\\/${GITLAB_REPO_NAME}-${BRANCH_NAME}:${DEPLOY_VERSION}/g' deployment.yaml"
                    sh "git add deployment.yaml"
                    sh "git commit -m 'deploy ${GITLAB_REPO_NAME}-${BRANCH_NAME}:${DEPLOY_VERSION}'"
                    sh "git push"
                }
                sh "rm -rf ${GITLAB_REPO_NAME} && rm -rf ${GITLAB_REPO_NAME}-${CD_CODE}"
            }
        }
    }
}
```

### WEB 빌드/배포
<!-- TODO: 스크립트 추가 -->

## shell script

### WAS 빌드/배포

```bash
p1_download_sources() {
    # ex. git
    git clone ${id}:${password / access_token}@${git_url}/${user_name / group_name}/${repo_name}.git -b dev
}

p2_build_sources() {
    cd ${repo_directory}
    # project building command
}

p3_release_results() {
    ssh ${was_account}@${was_url} "${run_stop_was_script}"
    ssh ${was_account}@${was_url} "mkdir -p ${target_server_path}"
    scp -r ${results} ${was_account}@${was_url}:${target_server_path}
}

p4_deploy_results() {
    ssh ${was_account}@${was_url} "${run_start_was_script}"
}

cleanup() {
    rm -rf ${repo_directory}
}

main() {
cleanup

# P-1. download sources.
p1_download_sources

# P-2. build sources.
p2_build_sources

# P-3. release results.
p3_release_results

# P-4. deploy results.
p4_deploy_results

cleanup
}

main
```

### WEB 빌드/배포

```bash
p1_download_sources() {
    # ex. git
    git clone ${id}:${password / access_token}@${git_url}/${user_name / group_name}/${repo_name}.git -b dev
}

p2_build_sources() {
    cd ${repo_directory}
    # project building command
}

p3_release_results() {
    ssh ${web_account}@${web_url} "${run_remove_web_resources_script}"
}

p4_deploy_results() {
    ssh ${web_account}@${web_url} "mkdir -p ${target_server_path}"
    scp -r ${results} ${web_account}@${web_url}:${target_server_path}
}

cleanup() {
    rm -rf ${repo_directory}
}

main() {
cleanup

# P-1. download sources.
p1_download_sources

# P-2. build sources.
p2_build_sources

# P-3. release results.
p3_release_results

# P-4. deploy results.
p4_deploy_results

cleanup
}

main
```
