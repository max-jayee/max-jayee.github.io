<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Markdown Lint

## MD012 - Multiple consecutive blank lines

- 규칙: 빈 줄이 여러 줄(2줄 이상)으로 위치하는 것을 제한한다.
- 방안: 여러 줄로 구성된 빈 줄을 하나로 줄인다.
- 예시  
  - 문제  

    ```bash
    Some text here


    Some more text here
    ```

  - 해결
  
    ```bash
    Some text here

    Some more text here
    ```

## MD026 - Trailing punctuation in heading

- 규칙: Heading 에 구두점('.,;:!。，；：！')이 위치하는 것을 제한한다.
- 방안: Heading 에서 구두점을 제거한다.
- 예시  
  - 문제  

    ```bash
    # This is a heading.
    ```

  - 해결
  
    ```bash
    # This is a heading
    ```

## MD031 - Fenced code blocks should be surrounded by blank lines

- 규칙: 코드 블록 앞뒤에 문장을 구분하기 위해 빈 줄이 들어가도록 제한한다.
- 방안: 코드 블록 앞뒤에 빈 줄을 추가한다.
- 예시  
  - 문제  

    ````bash
    Some text
    ```
    Code block
    ```

    ```
    Another code block
    ```
    Some more text
    ````

  - 해결
  
    ````bash
    Some text

    ```
    Code block
    ```

    ```
    Another code block
    ```

    Some more text
    ````

## MD034 - Bare URL used

- 규칙: url 을 그대로 기입하여 사용하는 것을 제한한다.
- 방안: url 앞 뒤에 '<', '>' 를 추가한다.
- 예시  
  - 문제: https://github.com/updownpress/markdown-lint
  - 해결: <https://github.com/updownpress/markdown-lint>

## MD047 - Files should end with a single newline character

- 규칙: 파일 끝에 빈 줄이 존재하도록 제한한다.
- 방안: 파일 끝에 빈 줄을 추가한다.
- 예시  
  - 문제  

    ````bash
    This file ends without a newline.
    ````

  - 해결
  
    ````bash
    This file ends without a newline.
    
    ````
