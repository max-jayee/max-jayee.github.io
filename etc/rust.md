<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# RUST

## Data Types

Keep in mind that Rust is a statically typed language, which means that it must know the types of all variables at compile time.

### Scalar Types

#### Integer Types

| Length | Signed | Unsigned |
|---|---|---|
| 8-bit | i8 | u8 |
| 16-bit | i16 | u16 |
| 32-bit | i32(default) | u32 |
| 64-bit | i64 | u64 |
| 128-bit | i128 | u128 |
| arch | isize | usize |

- Number literals

Number literals can also use `_` as a visual separator to make the number easier to read, such as `1_000`, which will have the same value as if you had specified `1000`.

| Number literals | Example |
|---|---|
| Decimal | 98_222 |
| Hex | 0xff |
| Octal | 0o77 |
| Binary | 0b1111_0000 |
| Byte (u8 only) | b'A' |

#### Floating-Point Types

Rust’s floating-point types are `f32` and `f64(default)`, which are 32 bits and 64 bits in size, respectively.

#### Numeric Operations

```rust
// addition
let sum = 5 + 10;

// subtraction
let difference = 95.5 - 4.3;

// multiplication
let product = 4 * 30;

// division
let quotient = 56.7 / 32.2;
let truncated = -5 / 3; // Results in -1

// remainder
let remainder = 43 % 5;
```

#### The Boolean Type

```rust
let t = true;

let f: bool = false; // with explicit type annotation
```

#### The Character Type

```rust
let c = 'z';
let z: char = 'ℤ'; // with explicit type annotation
let heart_eyed_cat = '😻';
```

### Compound Types

#### The Tuple Type

The tuple without any values has a special name, unit.
The first index in a tuple is 0.

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1); // with explicit type annotation
let tup = (500, 6.4, 1);

let (x, y, z) = tup;

println!("The value of y is: {y}");

let x: (i32, f64, u8) = (500, 6.4, 1);

let five_hundred = x.0;

let six_point_four = x.1;

let one = x.2;
```

#### The Array Type

Arrays in Rust have a fixed length.

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5]; // with explicit type annotation
let a = [1, 2, 3, 4, 5];

let a = [3; 5]; // == [3, 3, 3, 3, 3]

let first = a[0];
let second = a[1];
```

## Notes

- The `main` function is special: it is always the first code that runs in every executable Rust program.
- Function parameters are in ().
- Function body are in {}.
- `panic`: runtime error.

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
  You can declare a new variable with the same name as a previous variable.  
  We can change the type of the value but reuse the same name.
- `_`: means catch all value.
- We can define functions to have parameters, which are special variables that are part of a function’s signature.  
  Technically, the concrete values are called arguments, but in casual conversation, people tend to use the words parameter and argument interchangeably for either the variables in a function’s definition or the concrete values passed in when you call a function.
- In function signatures, you must declare the type of each parameter.

- Constants can be declared in any scope, including the global scope, which makes them useful for values that many parts of code need to know about.
- The last difference is that constants may be set only to a constant expression, not the result of a value that could only be computed at runtime.
- Rust code uses snake case as the conventional style for function and variable names, in which all letters are lowercase and underscores separate words.
- Function bodies are made up of a series of statements optionally ending in an expression.  
  - **Statements** are instructions that perform some action and do not return a value.
  - **Expressions** evaluate to a resultant value. Let’s look at some examples. Expressions do not include ending semicolons.
  - Functions can return values to the code that calls them. We don’t name return values, but we must declare their type after an arrow (`->`).

- Rust has three kinds of loops: `loop`, `while`, and `for`.  
  - The loop keyword tells Rust to execute a block of code over and over again forever or until you explicitly tell it to stop.
  - You can optionally specify a loop label on a loop that you can then use with break or continue to specify that those keywords apply to the labeled loop instead of the innermost loop.

- Each value in Rust has an owner.
- There can only be one owner at a time.
- When the owner goes out of scope, the value will be dropped.
- When s comes into scope, it is valid.
- It remains valid until it goes out of scope.
- The memory must be requested from the memory allocator at runtime.
- We need a way of returning this memory to the allocator when we’re done with our `String`.
- When a variable goes out of scope, Rust calls a special function for us. This function is called `drop`, and it’s where the author of String can put the code to return the memory. Rust calls `drop` automatically at `the closing curly bracket`. The `drop` function in Rust will be familiar to you if you’ve used c++'s RAII(Resource Acquisition Is Initialization) patterns.
- When we assign `s1` to `s2`, the String data is copied, meaning we copy the pointer, the length, and the capacity that are on the stack. We do not copy the data on the heap that the pointer refers to.

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

## Trouble shootings

- error[E0282]: type annotations needed  
  원인: 변수 타입이 무엇인지 정보가 부족한 경우  
  
  ```rust
  let guess = "42".parse().expect("Not a number!");
  ```

  해결: 변수 타입을 지정  

  ```rust
  let guess: u32 = "42".parse().expect("Not a number!");
  ```

- error[E0384]: cannot assign twice to immutable variable `x`  
  원인: immutable x 변수에 값을 두번 할당할 수 없음  
  해결: x 변수를 mutable 하게 변경  

  ```rust
  let mut x = 6;

  x = 5;
  ```
