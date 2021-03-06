/*
Most langs will hard code their keywords but I wanted to make it easy to change the keywords so I did it like this. The keys represent the JavaScript semantic equivalent.
*/

export type Keyword = typeof JavaScriptKeyword;

export const JavaScriptKeyword = {
  AWAIT: "await",
  BREAK: "break",
  CASE: "case",
  CATCH: "catch",
  CLASS: "class",
  CONST: "const",
  CONTINUE: "continue",
  DEBUGGER: "debugger",
  DEFAULT: "default",
  DELETE: "delete",
  DO: "do",
  ELSE: "else",
  ENUM: "enum",
  EXPORT: "export",
  EXTENDS: "extends",
  FALSE: "false",
  FINALLY: "finally",
  FOR: "for",
  FUNCTION: "function",
  IF: "if",
  IMPLEMENTS: "implements",
  IMPORT: "import",
  IN: "in",
  INSTANCEOF: "instanceof",
  INTERFACE: "interface",
  LET: "let",
  NEW: "new",
  NULL: "null",
  PACKAGE: "package",
  PRIVATE: "private",
  PROTECTED: "protected",
  PUBLIC: "public",
  RETURN: "return",
  SUPER: "super",
  SWITCH: "switch",
  STATIC: "static",
  THIS: "this",
  THROW: "throw",
  TRY: "try",
  TRUE: "true",
  TYPEOF: "typeof",
  VAR: "var",
  VOID: "void",
  WHILE: "while",
  WITH: "with",
  YIELD: "yield",

  // This isn't technically a keyword but ok...
  CONSTRUCTOR: "constructor",
};

export const HackLangKeyword: typeof JavaScriptKeyword = {
  ...JavaScriptKeyword,
  VAR: "rice",
  CONST: "yuto",
  CLASS: "aditya",
  THROW: "aditya",
  THIS: "ken",
  IF: "winston",
  WHILE: "theo",
  CONSTRUCTOR: "zrl",
  IMPORT: "josh",
  LET: "luke", // I am your father
  /* if found please */ RETURN: "vincent",
  NEW: "caleb",
  FUNCTION: "sam",
};
