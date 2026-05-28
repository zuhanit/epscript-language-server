use logos::{Lexer, Logos};
use rowan::{TextRange, TextSize};

#[derive(Debug, PartialEq, Clone, Default)]
pub enum LexingError {
    UnterminatedString,
    UnterminatedBlockComment,
    #[default]
    UnknownCharacter,
}

fn terminated_double(lex: &mut Lexer<Token>) -> Result<(), LexingError> {
    if lex.slice().ends_with('"') {
        Ok(())
    } else {
        Err(LexingError::UnterminatedString)
    }
}

fn terminated_single(lex: &mut Lexer<Token>) -> Result<(), LexingError> {
    if lex.slice().ends_with('\'') {
        Ok(())
    } else {
        Err(LexingError::UnterminatedString)
    }
}

fn terminated_block_comment(lex: &mut Lexer<Token>) -> Result<(), LexingError> {
    if lex.slice().ends_with("*/") {
        Ok(())
    } else {
        Err(LexingError::UnterminatedBlockComment)
    }
}

#[derive(Logos, Debug, PartialEq, Clone)]
#[logos(error = LexingError)]
#[rustfmt::skip]
pub enum Token {
    Error(LexingError),

    // Keywords
    #[token("import")]          Import,
    #[token("as")]                  As,
    #[token("var")]                Var,
    #[token("const")]            Const,
    #[token("static")]          Static,
    #[token("function")]      Function,
    #[token("object")]          Object,
    #[token("extends")]        Extends,
    #[token("once")]              Once,
    #[token("if")]                  If,
    #[token("else")]              Else,
    #[token("for")]                For,
    #[token("foreach")]        Foreach,
    #[token("while")]            While,
    #[token("break")]            Break,
    #[token("continue")]      Continue,
    #[token("return")]          Return,
    #[token("epdswitch")]    Epdswitch,
    #[token("case")]              Case,
    #[token("default")]        Default,

    // Literals
    #[regex(r"0[xX][0-9a-fA-F]+|0b[01]+|[0-9]+")]
    Number,
    #[regex(r#"b?"([^"\\\n]|\\[^\n]|\\\n)*"?"#, terminated_double)]
    #[regex(r"b?'([^'\\\n]|\\[^\n]|\\\n)*'?",   terminated_single)]
    String,

    // Identifiers
    #[regex(r"[a-zA-Z_$\u{0080}-\u{10FFFF}][a-zA-Z0-9_$\u{0080}-\u{10FFFF}]*")]
    Name,

    // Operators
    #[token("++")]                 Inc,
    #[token("--")]                 Dec,
    #[token("+=")]                IAdd,
    #[token("-=")]                ISub,
    #[token("*=")]                IMul,
    #[token("/=")]                IDiv,
    #[token("%=")]                IMod,
    #[token("<<=")]            ILShift,
    #[token(">>=")]            IRShift,
    #[token("&=")]             IBitAnd,
    #[token("|=")]              IBitOr,
    #[token("^=")]             IBitXor,
    #[token("=")]               Assign,
    #[token("+")]                 Plus,
    #[token("-")]                Minus,
    #[token("*")]             Multiply,
    #[token("/")]               Divide,
    #[token("%")]                  Mod,
    #[token("<<")]           BitLShift,
    #[token(">>")]           BitRShift,
    #[token("&")]               BitAnd,
    #[token("|")]                BitOr,
    #[token("^")]               BitXor,
    #[token("~")]               BitNot,
    #[token("&&")]                LAnd,
    #[token("||")]                 LOr,
    #[token("!")]                 LNot,
    #[token("==")]                  Eq,
    #[token("<=")]                  Le,
    #[token(">=")]                  Ge,
    #[token("<")]                   Lt,
    #[token(">")]                   Gt,
    #[token("!=")]                  Ne,

    // Other tokens
    #[token("(")]               LParen,
    #[token(")")]               RParen,
    #[token("{")]               LBrace,
    #[token("}")]               RBrace,
    #[token("[")]               LBrack,
    #[token("]")]               RBrack,
    #[token(".")]               Period,
    #[token("?")]                QMark,
    #[token(",")]                Comma,
    #[token(":")]                Colon,
    #[token(";")]            Semicolon,

    #[regex(r"[ \t\r\n]+")]
    Whitespace,
    #[regex(r"//[^\n]*", allow_greedy = true)]
    LineComment,
    #[regex(r"/\*([^*]|\*+[^*/])*\**/?", terminated_block_comment)]
    BlockComment,
}

// Might we can parse Python code used in py_eval("") by using Context-dependent lexing.
// See https://logos.maciej.codes/context-dependent-lexing.html

#[allow(unused)]
#[derive(Logos, Debug, PartialEq, Clone)]
enum PythonToken {
    #[regex(r"[\s\S]+", allow_greedy = true)]
    Code,
}

pub type LexTokens = Vec<(Token, TextRange)>;

/// Lexing epScript code
///
/// # Example
/// ```
/// use syntax::lexer::lex;
///
/// let src = "if x == 1";
/// let toks = lex(src);
/// ```
pub fn lex(src: &str) -> LexTokens {
    let mut tokens: LexTokens = Vec::new();
    let lexer = Token::lexer(src);

    for (token, span) in lexer.spanned() {
        let range = TextRange::new(
            TextSize::try_from(span.start).unwrap(),
            TextSize::try_from(span.end).unwrap(),
        );

        match token {
            Ok(token) => {
                tokens.push((token, range));
            }
            Err(e) => tokens.push((Token::Error(e), range)),
        }
    }

    tokens
}

#[cfg(test)]
mod tests {
    use super::*;
    use expect_test::{Expect, expect};

    fn check_lex(src: &str, expect: Expect) {
        let toks = lex(src);
        let out = toks
            .iter()
            .map(|(tok, range)| format!("{:?} {:?}", tok, range))
            .collect::<Vec<_>>()
            .join("\n");
        expect.assert_eq(&out);
    }

    #[test]
    fn basic() {
        check_lex(
            "if x == 1",
            expect![[r#"
            If 0..2
            Whitespace 2..3
            Name 3..4
            Whitespace 4..5
            Eq 5..7
            Whitespace 7..8
            Number 8..9"#]],
        )
    }

    #[test]
    fn comparison_operators() {
        check_lex(
            "==!=<=>=<>",
            expect![[r#"
            Eq 0..2
            Ne 2..4
            Le 4..6
            Ge 6..8
            Lt 8..9
            Gt 9..10"#]],
        )
    }

    #[test]
    fn brackets() {
        check_lex(
            "()[]",
            expect![[r#"
            LParen 0..1
            RParen 1..2
            LBrack 2..3
            RBrack 3..4"#]],
        )
    }

    #[test]
    fn nested_braces() {
        check_lex(
            "a { \n   b {\n       c\n   }\n   d\n   e {\n       f\n   }\n}\ng\n",
            expect![[r#"
                Name 0..1
                Whitespace 1..2
                LBrace 2..3
                Whitespace 3..8
                Name 8..9
                Whitespace 9..10
                LBrace 10..11
                Whitespace 11..19
                Name 19..20
                Whitespace 20..24
                RBrace 24..25
                Whitespace 25..29
                Name 29..30
                Whitespace 30..34
                Name 34..35
                Whitespace 35..36
                LBrace 36..37
                Whitespace 37..45
                Name 45..46
                Whitespace 46..50
                RBrace 50..51
                Whitespace 51..52
                RBrace 52..53
                Whitespace 53..54
                Name 54..55
                Whitespace 55..56"#]],
        )
    }

    #[test]
    fn names() {
        check_lex(
            "forvar test var for function object if else while break continue v1",
            expect![[r#"
                Name 0..6
                Whitespace 6..7
                Name 7..11
                Whitespace 11..12
                Var 12..15
                Whitespace 15..16
                For 16..19
                Whitespace 19..20
                Function 20..28
                Whitespace 28..29
                Object 29..35
                Whitespace 35..36
                If 36..38
                Whitespace 38..39
                Else 39..43
                Whitespace 43..44
                While 44..49
                Whitespace 49..50
                Break 50..55
                Whitespace 55..56
                Continue 56..64
                Whitespace 64..65
                Name 65..67"#]],
        )
    }

    #[test]
    fn mixed_names_operators() {
        check_lex(
            "var v1 = a + b",
            expect![[r#"
            Var 0..3
            Whitespace 3..4
            Name 4..6
            Whitespace 6..7
            Assign 7..8
            Whitespace 8..9
            Name 9..10
            Whitespace 10..11
            Plus 11..12
            Whitespace 12..13
            Name 13..14"#]],
        )
    }

    #[test]
    fn complex_operators() {
        check_lex(
            "(a & b) || (c ^ b) && x + y[]",
            expect![[r#"
            LParen 0..1
            Name 1..2
            Whitespace 2..3
            BitAnd 3..4
            Whitespace 4..5
            Name 5..6
            RParen 6..7
            Whitespace 7..8
            LOr 8..10
            Whitespace 10..11
            LParen 11..12
            Name 12..13
            Whitespace 13..14
            BitXor 14..15
            Whitespace 15..16
            Name 16..17
            RParen 17..18
            Whitespace 18..19
            LAnd 19..21
            Whitespace 21..22
            Name 22..23
            Whitespace 23..24
            Plus 24..25
            Whitespace 25..26
            Name 26..27
            LBrack 27..28
            RBrack 28..29"#]],
        )
    }

    #[test]
    fn numbers() {
        check_lex(
            "0x123 + 456",
            expect![[r#"
            Number 0..5
            Whitespace 5..6
            Plus 6..7
            Whitespace 7..8
            Number 8..11"#]],
        )
    }

    #[test]
    fn strings() {
        check_lex(
            "\"test\\n\"'test''test\\\ntest2'",
            expect![[r#"
            String 0..8
            String 8..14
            String 14..27"#]],
        )
    }

    #[test]
    fn multiline_string() {
        check_lex(
            r"'line1\
line2\
line3'",
            expect!["String 0..21"],
        )
    }

    #[test]
    fn scmdraft2_text() {
        check_lex(
            "DisplayText('\\\n<13><03>===========================\\n\\\n<13><04><< Game over >>\\n\\\n<13><05>Defeat();\\n\\\n<13><03>===========================\\n\\\n')",
            expect![[r#"
                Name 0..11
                LParen 11..12
                String 12..142
                RParen 142..143"#]],
        )
    }

    #[test]
    fn arithmetic_operators() {
        check_lex(
            "+-*/",
            expect![[r#"
            Plus 0..1
            Minus 1..2
            Multiply 2..3
            Divide 3..4"#]],
        )
    }

    #[test]
    fn utf8_identifier() {
        // 한글 변수명, 한자, 이모지 포함 식별자
        check_lex(
            "변수 _한글 $漢字 var변수",
            expect![[r#"
            Name 0..6
            Whitespace 6..7
            Name 7..14
            Whitespace 14..15
            Name 15..22
            Whitespace 22..23
            Name 23..32"#]],
        )
    }

    #[test]
    fn utf8_string() {
        check_lex(
            r#""안녕하세요" '漢字'"#,
            expect![[r#"
            String 0..17
            Whitespace 17..18
            String 18..26"#]],
        )
    }

    #[test]
    fn mismatched_quotes() {
        check_lex(
            r#"'Mismatched single quote""#,
            expect!["Error(UnterminatedString) 0..25"],
        )
    }

    #[test]
    fn mismatched_quotes2() {
        check_lex(
            r#""Mismatched double quote'"#,
            expect!["Error(UnterminatedString) 0..25"],
        )
    }

    #[test]
    fn error_recovery() {
        // Check lexing continues after error token
        check_lex(
            "var @ x = 1",
            expect![[r#"
            Var 0..3
            Whitespace 3..4
            Error(UnknownCharacter) 4..5
            Whitespace 5..6
            Name 6..7
            Whitespace 7..8
            Assign 8..9
            Whitespace 9..10
            Number 10..11"#]],
        )
    }

    #[test]
    fn error_recovery_unterminated_string() {
        // Check lexing continues after unterminated string
        check_lex(
            "var x = 'unterminated\nvar y = 2",
            expect![[r#"
            Var 0..3
            Whitespace 3..4
            Name 4..5
            Whitespace 5..6
            Assign 6..7
            Whitespace 7..8
            Error(UnterminatedString) 8..21
            Whitespace 21..22
            Var 22..25
            Whitespace 25..26
            Name 26..27
            Whitespace 27..28
            Assign 28..29
            Whitespace 29..30
            Number 30..31"#]],
        )
    }

    #[test]
    fn binary_literal() {
        check_lex(
            "0b1010 + 0b0001",
            expect![[r#"
            Number 0..6
            Whitespace 6..7
            Plus 7..8
            Whitespace 8..9
            Number 9..15"#]],
        )
    }

    #[test]
    fn binary_string() {
        check_lex(
            r#"b"hello" b'world'"#,
            expect![[r#"
            String 0..8
            Whitespace 8..9
            String 9..17"#]],
        )
    }

    #[test]
    fn comments() {
        check_lex(
            "x // line comment\ny + /* block comment */ z",
            expect![[r#"
            Name 0..1
            Whitespace 1..2
            LineComment 2..17
            Whitespace 17..18
            Name 18..19
            Whitespace 19..20
            Plus 20..21
            Whitespace 21..22
            BlockComment 22..41
            Whitespace 41..42
            Name 42..43"#]],
        )
    }

    #[test]
    fn compound_assignment() {
        check_lex(
            "x += 1; y <<= 2; z &= 3",
            expect![[r#"
            Name 0..1
            Whitespace 1..2
            IAdd 2..4
            Whitespace 4..5
            Number 5..6
            Semicolon 6..7
            Whitespace 7..8
            Name 8..9
            Whitespace 9..10
            ILShift 10..13
            Whitespace 13..14
            Number 14..15
            Semicolon 15..16
            Whitespace 16..17
            Name 17..18
            Whitespace 18..19
            IBitAnd 19..21
            Whitespace 21..22
            Number 22..23"#]],
        )
    }

    #[test]
    fn empty_string() {
        check_lex(
            r#""" ''"#,
            expect![[r#"
            String 0..2
            Whitespace 2..3
            String 3..5"#]],
        )
    }

    #[test]
    fn unterminated_block_comment() {
        check_lex(
            "x + /* unterminated",
            expect![[r#"
                Name 0..1
                Whitespace 1..2
                Plus 2..3
                Whitespace 3..4
                Error(UnterminatedBlockComment) 4..19"#]],
        )
    }
}
