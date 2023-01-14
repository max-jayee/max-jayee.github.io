<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Jenkins 파이프라인 예시
## 설명
다양한 파이프라인을 구성하는 예시를 공유합니다.

## groovy script
### WAS 빌드/배포
```groovy
pipeline {
    agent any

    environment {
        GITLAB_CREDS = credentials('gitlab')
    }

    stages {
        stage("Prepare"){
            steps {
                sh 'rm -rf sample'
                sh 'git clone http://${GITLAB_CREDS_USR}:${GITLAB_CREDS_PSW}@13.209.11.11:48080/pipeline/sample.git -b main'
                sh 'whoami'
                sh 'env'
            }
        }
        stage("Build"){
            steps {
                sh 'cd ./sample && ./gradlew build'
            }
        }
        stage("Release"){
            steps {
                sh 'cp ./sample/build/libs/demo-0.0.1-SNAPSHOT.jar ./'
            }
        }
        stage("Deploy"){
            steps {
                sh 'nohub java -jar demo-0.0.1-SNAPSHOT.jar &'
                sh 'rm -rf sample'
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