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

- `use`: bring a library.
- `prelude`: are produced some libraries basically.
- `let`: statement to create variable.
- `mut`: change variable type to mutable. default variable type is immutable.
- `::`: in the ::new line indicates that new is an associated function of the String type.
- `&`: indicates that this argument is a reference.
- multi line: one long line is difficult to read, so it’s best to divide it. It’s often wise to introduce a newline and other whitespace to help break up long lines when you call a method with the .method_name() syntax.
- `Result`: enumeration, Result’s variants are Ok and Err. The Ok variant indicates the operation was successful, and inside Ok is the successfully generated value. The Err variant means the operation failed, and Err contains information about how or why the operation failed.  
  An instance of Result has an expect method that you can call. If this instance of Result is an Err value, expect will cause the program to crash and display the message that you passed as an argument to expect. 
- `{}`: placeholder.

- crate is a collection of Rust source code files.
- 