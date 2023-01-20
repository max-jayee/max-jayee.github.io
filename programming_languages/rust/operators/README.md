<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Rust Data Operators

Let's see the rust operators.

## Operator

There are operators from [doc.rust-lang.org](https://doc.rust-lang.org/book/appendix-02-operators.html "https://doc.rust-lang.org/book/appendix-02-operators.html").

| Operator | Example | Explanation | Overloadable? |
| :--- | :--- | :--- | :--- |
| `!` | `ident!(...), ident!{...}, ident![...]` | Macro expansion | |
| `!` | `!expr` | Bitwise or logical complement | Not |
| `!=` | `expr != expr` | Nonequality comparison | PartialEq |
| `%` | `expr % expr` | Arithmetic remainder | Rem |
| `%=` | `var %= expr` | Arithmetic remainder and assignment | RemAssign |
| `&` | `&expr, &mut expr` | Borrow |  |
| `&` | `&type, &mut type, &'a type, &'a mut type` | Borrowed pointer type |  |
| `&` | `expr & expr` | Bitwise AND | BitAnd |
| `&=` | `var &= expr` | Bitwise AND and assignment | BitAndAssign |
| `&&` | `expr && expr` | Short-circuiting logical AND |  |
| `*` | `expr * expr` | Arithmetic multiplication | Mul |
| `*=` | `var *= expr` | Arithmetic multiplication and assignment | MulAssign |
| `*` | `*expr` | Dereference | Deref |
| `*` | `*const type, *mut type` | Raw pointer |  |
| `+` | `trait + trait, 'a + trait` | Compound type constraint |  |
| `+` | `expr + expr` | Arithmetic addition | Add |
| `+=` | `var += expr` | Arithmetic addition and assignment | AddAssign |
| `,` | `expr, expr` | Argument and element separator |  |
| `-` | `- expr` | Arithmetic negation | Neg |
| `-` | `expr - expr` | Arithmetic subtraction | Sub |
| `-=` | `var -= expr` | Arithmetic subtraction and assignment | SubAssign |
| `->` | `fn(...) -> type, \|...\| -> type` | Function and closure return type |  |
| `.` | `expr.ident` | Member access |  |
| `..` | `.., expr.., ..expr, expr..expr` | Right-exclusive range literal | PartialOrd |
| `..=` | `..=expr, expr..=expr` | Right-inclusive range literal | PartialOrd |
| `..` | `..expr` | Struct literal update syntax |  |
| `..` | `variant(x, ..), struct_type { x, .. }` | “And the rest” pattern binding |  |
| `...` | `expr...expr` | (Deprecated, use ..= instead) In a pattern: inclusive range pattern |  |
| `/` | `expr / expr` | Arithmetic division | Div |
| `/=` | `var /= expr` | Arithmetic division and assignment | DivAssign
| `:` | `pat: type, ident: type` | Constraints |  |
| `:` | `ident: expr` | Struct field initializer |  |
| `:` | `'a: loop {...}` | Loop label |  |
| `;` | `expr;` | Statement and item terminator |  |
| `;` | `[...; len]` | Part of fixed-size array syntax |  |
| `<<` | `expr << expr` | Left-shift | Shl |
| `<<=` | `var <<= expr` | Left-shift and assignment | ShlAssign |
| `<` | `expr < expr` | Less than comparison | PartialOrd |
| `<=` | `expr <= expr` | Less than or equal to comparison | PartialOrd |
| `=` | `var = expr, ident = type` | Assignment/equivalence |  |
| `==` | `expr == expr` | Equality comparison | PartialEq |
| `=>` | `pat => expr` | Part of match arm syntax |  |
| `>` | `expr > expr` | Greater than comparison | PartialOrd |
| `>=` | `expr >= expr` | Greater than or equal to comparison | PartialOrd |
| `>>` | `expr >> expr` | Right-shift | Shr |
| `>>=` | `var >>= expr` | Right-shift and assignment | ShrAssign |
| `@` | `ident @ pat` | Pattern binding |  |
| `^` | `expr ^ expr` | Bitwise exclusive OR | BitXor |
| `^=` | `var ^= expr` | Bitwise exclusive OR and assignment | BitXorAssign |
| `\|` | `pat \| pat` | Pattern alternatives |  |
| `\|` | `expr \| expr` | Bitwise OR | BitOr |
| `\|=` | `var \|= expr` | Bitwise OR and assignment | BitOrAssign |
| `\|\|` | `expr \|\| expr` | Short-circuiting logical OR |  |
| `?` | `expr?` | Error propagation |  |
