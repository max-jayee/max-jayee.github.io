<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Rust Data Type

Let's see the rust data types.

## Data Type

### Scalar

| Type | List | Note |
| :--- | :--- | :--- |
| signed integer | `i8`, `i16`, `i32`, `i64`, `i128`, `isize` | `isize` is pointer size. |
| unsigned integer | `u8`, `u16`, `u32`, `u64`, `u128`, `usize` | `usize` is pointer size. |
| floating point | `f32`, `f64` |  |
| character | `'a'`, `'α'`, `'∞'`, etc.. | Unicode scalar value, each charater has 4 bytes. |
| boolean | `true`, `false` |  |
| unit type | tuple: `()`, etc.. |  |

### Compound

| Type | List | Note |
| :--- | :--- | :--- |
| array | `[]` | ex). [1, 2, 3] |
| tuple | `()` | ex). (1, true) |

## Example

There is an example from [doc.rust-lang.org](https://doc.rust-lang.org/rust-by-example/primitives.html "https://doc.rust-lang.org/rust-by-example/primitives.html").

```rust
fn main() {
    // Variables can be type annotated.
    let logical: bool = true;

    let a_float: f64 = 1.0;  // Regular annotation
    let an_integer   = 5i32; // Suffix annotation

    // Or a default will be used.
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`
    
    // A type can also be inferred from context 
    let mut inferred_type = 12; // Type i64 is inferred from another line
    inferred_type = 4294967296i64;
    
    // A mutable variable's value can be changed.
    let mut mutable = 12; // Mutable `i32`
    mutable = 21;
    
    // Error! The type of a variable can't be changed.
    mutable = true;
    
    // Variables can be overwritten with shadowing.
    let mutable = true;
}
```
