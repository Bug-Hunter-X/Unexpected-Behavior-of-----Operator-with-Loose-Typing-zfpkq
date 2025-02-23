function foo(a, b) {
  // Explicit type checking before addition
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Operands must be numbers";
  }

  return a + b;}

foo(1, 2);
foo(1, "2");
foo("1", 2);
foo("1", "2");