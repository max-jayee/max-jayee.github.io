<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Rust Output

Let's see the rust output style.

## Output

### Macros

Macros related to printing defined in `std::fmt` module.

| Type | List | Note |
| :--- | :--- | :--- |
| write formatted text | `format!` | `!` means that is a macro. |
| print text to the console (io::stdout) | `print!`, `println!` | `ln` is added `newline`; linux - `\n`, windows - `\r\n`. |
| print text to the standard error (io::stderr) | `eprint!`, `eprintln!` |  |

### Traits

`std::fmt` contains many traits which govern the display of text. The base form of two important ones are listed below.

| Type | List | Note |
| :--- | :--- | :--- |
| Format text for debugging | `{:?}` | There is in `fmt::Debug` trait. <br> set `#[derive(Debug)]` code on the struct definition. |
| Format text in a more elegant for user | `{}` | There is in `fmt::Display` trait. |

### Debug

The `fmt::Debug` trait makes this very straightforward. All types can derive (automatically create) the `fmt::Debug` implementation.


## Example

There is an example from [doc.rust-lang.org](https://doc.rust-lang.org/rust-by-example/hello/print.html "https://doc.rust-lang.org/rust-by-example/hello/print.html").

```rust
fn main() {
    // In general, the `{}` will be automatically replaced with any
    // arguments. These will be stringified.
    println!("{} days", 31);

    // Positional arguments can be used. Specifying an integer inside `{}`
    // determines which additional argument will be replaced. Arguments start
    // at 0 immediately after the format string
    println!("{0}, this is {1}. {1}, this is {0}", "Alice", "Bob");

    // As can named arguments.
    println!("{subject} {verb} {object}",
             object="the lazy dog",
             subject="the quick brown fox",
             verb="jumps over");

    // Different formatting can be invoked by specifying the format character after a
    // `:`.
    println!("Base 10:               {}",   69420); //69420
    println!("Base 2 (binary):       {:b}", 69420); //10000111100101100
    println!("Base 8 (octal):        {:o}", 69420); //207454
    println!("Base 16 (hexadecimal): {:x}", 69420); //10f2c
    println!("Base 16 (hexadecimal): {:X}", 69420); //10F2C


    // You can right-justify text with a specified width. This will
    // output "    1". (Four white spaces and a "1", for a total width of 5.)
    println!("{number:>5}", number=1);

    // You can pad numbers with extra zeroes,
    //and left-adjust by flipping the sign. This will output "10000".
    println!("{number:0<5}", number=1);

    // You can use named arguments in the format specifier by appending a `$`
    println!("{number:0>width$}", number=1, width=5);


    // Rust even checks to make sure the correct number of arguments are
    // used.
    println!("My name is {0}, {1} {0}", "Bond");
    // FIXME ^ Add the missing argument: "James"

    // Only types that implement fmt::Display can be formatted with `{}`. User-
    // defined types do not implement fmt::Display by default

    #[allow(dead_code)]
    struct Structure(i32);

    // This will not compile because `Structure` does not implement
    // fmt::Display
    //println!("This struct `{}` won't print...", Structure(3));
    // TODO ^ Try uncommenting this line

    // For Rust 1.58 and above, you can directly capture the argument from a
    // surrounding variable. Just like the above, this will output
    // "     1". 5 white spaces and a "1".
    let number: f64 = 1.0;
    let width: usize = 5;
    println!("{number:>width$}");

    let pi: f32 = 3.1415926536897932384626;
    let k1: f32 = 0.6072529350088812561694; // 1/k

    println!("pi is {:.32}", pi);
    println!("k1 is {:.32}", k1);
}
```
