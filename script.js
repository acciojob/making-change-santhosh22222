const makeChange = (c) => {
  // your name here
	c = Number(c);

  const result = { q: 0, d: 0, n: 0, p: 0 };

  // quarters (25)
  result.q = Math.floor(c / 25);
  c = c % 25;

  // dimes (10)
  result.d = Math.floor(c / 10);
  c = c % 10;

  // nickels (5)
  result.n = Math.floor(c / 5);
  c = c % 5;

  // pennies (1)
  result.p = c;

  return result;

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
