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
- `^x.y.z`: means any version that is at least `x.y.z` but below `x.y+1.0`.
- `Shadowing`: lets us reuse the `guess` variable name rather than forcing us to create two unique variables, such as `guess_str` and `guess`.
- `_`: means catch all value.

## Keywords

- `as` - perform primitive casting, disambiguate the specific trait containing an item, or rename items in use statements
- `async` - return a Future instead of blocking the current thread
- `await` - suspend execution until the result of a Future is ready
- `break` - exit a loop immediately
- `const` - define constant items or constant raw pointers
- `continue` - continue to the next loop iteration
- `crate` - in a module path, refers to the crate root
- `dyn` - dynamic dispatch to a trait object
- `else` - fallback for if and if let control flow constructs
- `enum` - define an enumeration
- `extern` - link an external function or variable
- `false` - Boolean false literal
- `fn` - define a function or the function pointer type
- `for` - loop over items from an iterator, implement a trait, or specify a higher-ranked lifetime
- `if` - branch based on the result of a conditional expression
- `impl` - implement inherent or trait functionality
- `in` - part of for loop syntax
- `let` - bind a variable
- `loop` - loop unconditionally
- `match` - match a value to patterns
- `mod` - define a module
- `move` - make a closure take ownership of all its captures
- `mut` - denote mutability in references, raw pointers, or pattern bindings
- `pub` - denote public visibility in struct fields, impl blocks, or modules
- `ref` - bind by reference
- `return` - return from function
- `Self` - a type alias for the type we are defining or implementing
- `self` - method subject or current module
- `static` - global variable or lifetime lasting the entire program execution
- `struct` - define a structure
- `super` - parent module of the current module
- `trait` - define a trait
- `true` - Boolean true literal
- `type` - define a type alias or associated type
- `union` - define a union; is only a keyword when used in a union declaration
- `unsafe` - denote unsafe code, functions, traits, or implementations
- `use` - bring symbols into scope
- `where` - denote clauses that constrain a type
- `while` - loop conditionally based on the result of an expression
- `abstract` - in future use
- `become`
- `box`
- `do`
- `final`
- `macro`
- `override`
- `priv`
- `try`
- `typeof`
- `unsized`
- `virtual`
- `yield`
