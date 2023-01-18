<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Gitlab Rest API 사용 방법

## 설명

Gitlab 의 Rest API 를 활용하는 방법을 소개합니다.

### 사용 방법

Http request 에 header 에 access token 을 담아 제공하는 gitlab rest api 를 호출합니다.
Gitlab rest api 는 `/api/v4` 가 base 입니다.

### 준비

Access Token 발급 방법
사용자 -> Profile -> Access Tokens 에서 발급 할 수 있습니다.

### Header attribute

PRIVATE-TOKEN 에 발급한 Access Token 을 담아주면 됩니다.

### 예시

Rest API 명세는 [Gitlab Rest API 명세](https://docs.gitlab.com/ee/api/api_resources.html "https://docs.gitlab.com/ee/api/api_resources.html")에서 확인할 수 있습니다.

#### curl command

1. Create an user.

    ```bash
    curl -X POST "${gitlab_url}/api/v4/users" -H "PRIVATE-TOKEN: ${gitlab_access_token}" -H "Content-Type: application/json" -d @${data_json_file}
    ```

2. Search an user.

    ```bash
    curl -X GET "${gitlab_url}/api/v4/users/${user_id}" -H "PRIVATE-TOKEN: ${gitlab_access_token}" -H "Content-Type: application/json"
    ```

3. Delete an user.

    ```bash
    curl -X DETETE "${gitlab_url}/api/v4/users/${user_id}" -H "PRIVATE-TOKEN: ${gitlab_access_token}" -H "Content-Type: application/json"
    ```

#### shell script

1. Create an user.

    ```bash
    #! /bin/bash

    name=$1
    username=$2
    password="12345678"

    bodydata="\
    {\
        \"email\":\"${username}@sample.com\",\
        \"name\":\"${name}\",\
        \"username\":\"${username}\",\
        \"password\":\"${password}\",\
        \"can_create_group\":false,\
        \"skip_confirmation\":true\
    }"
    echo ${bodydata} > ${username}.json

    curl -X POST "${gitlab_url}/api/v4/users" -H "PRIVATE-TOKEN: ${gitlab_access_token}" -H "Content-Type: application/json" -d @${username}.json

    rm ${username}.json
    ```

2. Delete an user.

    ```bash
    #! /bin/bash

    userid=$1
    curl -X DETETE "${gitlab_url}/api/v4/users/${userid}" -H "PRIVATE-TOKEN: ${gitlab_access_token}" -H "Content-Type: application/json"
    ```
