<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# RUST

## Notes

- The `main` function is special: it is always the first code that runs in every executable Rust program.
- Function parameters are in ().
- Function body are in {}.

- Rust style is to indent with four spaces, not a tab.

- `println!` calls a Rust macro. If it had called a function instead, it would be entered as `println` (without the `!`).
- `!` means that you’re calling a macro instead of a normal function and that macros don’t always follow the same rules as functions.
- we end the line with a semicolon (`;`), which indicates that this expression is over and the next one is ready to begin. Most lines of Rust code end with a semicolon.

