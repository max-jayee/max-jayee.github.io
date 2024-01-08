<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Markdown Lint

## MD034 - Bare URL used

- 원인: url 을 그대로 기입하여 사용하여 발생한다.
- 방안: url 앞 뒤에 '<', '>' 를 추가한다.
- 예시  
  - 문제: https://github.com/updownpress/markdown-lint
  - 해결: <https://github.com/updownpress/markdown-lint>
