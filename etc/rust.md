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

- Cargo is Rust’s build system and package manager.
- TOML (Tom’s Obvious, Minimal Language) format, which is Cargo’s configuration format.
- `[package]` is a section heading that indicates that the following statements are configuring a package. As we add more information to this file, we’ll add other sections.
  The next three lines set the configuration information Cargo needs to compile your program: the name, the version, and the edition of Rust to use.
- `[dependencies]` is the start of a section for you to list any of your project’s dependencies. In Rust, packages of code are referred to as crates.

- Cargo expects your source files to live inside the src directory. The top-level project directory is just for README files, license information, configuration files, and anything else not related to your code.
