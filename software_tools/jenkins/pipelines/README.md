<link rel="stylesheet" type="text/css" href="/css/style-header.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

<div class="sticky-top bg-white pt-1 pb-2">
<h1><a href="/">맥쓰네 블로그</a></h1>
<h5> 
<a href="/">맥쓰네 블로그</a>
>
<a href="/software_tools/">Software Tools</a>
>
<a href="/software_tools/jenkins/">Jenkins</a>
>
</h5>
</div>

# Jenkins 파이프라인 예시
## 설명
다양한 파이프라인을 구성하는 예시를 공유합니다.

## groovy script
### WAS 빌드/배포
<!-- TODO: 스크립트 추가 -->
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