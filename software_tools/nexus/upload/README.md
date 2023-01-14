<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

<!-- TODO: nexus upload 추가 -->

# Jenkins 파이프라인 예시
## 설명
다양한 파이프라인을 구성하는 예시를 공유합니다.

## WAS 배포 (only jenkins)
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
    scp -r ${results} ${was_account}@${was_url}:${target_server_path}
}

p4_deploy_results() {
    ssh ${was_account}@${was_url} "${run_start_was_script}"
}

cleanup() {
    rm -rf ${repo_directory}
}

main() {
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

## WEB 배포 (only jenkins)
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
    scp -r ${results} ${web_account}@${web_url}:${target_server_path}
}

cleanup() {
    rm -rf ${repo_directory}
}

main() {
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