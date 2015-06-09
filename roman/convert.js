// Original script by Steven H. Gibbs //

function convert(inputValue) {
  var num = '', i = 0, n = 0;

  while (inputValue.charAt(0) == ' ') {inputValue = inputValue.substr(1)};
  if (inputValue.indexOf(' ') != -1) {inputValue = inputValue.substr(0, inputValue.indexOf(' '))}

  if (inputValue.length == 0) {
    msg = 'You left it blank, yo.'
  }
  else {
    if (isNaN(inputValue)) {
      num = inputValue;
      if (num == num.toLowerCase()) {
        i = num.indexOf('u'); if (i != -1) {num = num.substr(0, i) + 'v' + num.substr(i + 1, num.length - i)};
        if (num.substr(num.length - 2, 2) == 'ij') {num = num.substr(0, num.length - 2) + 'ii'};
      }
	  n = evalRoman(num);
      if (n == -1) {
	    msg = (inputValue + ' is not a valid input.')
	  }
      else {
	    msg = n;
	  }
      }
      else {
      n = Math.round(parseFloat(inputValue));
      if (n < 1 || n > 4999) {
	    msg = 'Input must be 1 to 4999.'
	  }
      else {
        if (n != parseFloat(inputValue)) {msg = (inputValue + ' will be rounded to ' + n)};
        msg = converts(n);
      }
    }        
  }
  return msg;
}

function evalRoman(num) {
  var i = 0, h = 0, n, t = 0, u = 0;

  num = num.toUpperCase();
  while (num.charAt(i) == 'M') {i ++};
  n = i * 1000;

  if (num.substr(i, 2) == 'CM') {h = 9; i += 2}
    else if (num.substr(i, 1) == 'D') {h = 5; i ++}
      else if (num.substr(i, 2) == 'CD') {h = 4; i += 2};
  if (h == 0 || h == 5) {while (num.charAt(i) == 'C') {h ++; i ++}};
  n += h * 100;

  if (num.substr(i, 2) == 'XC') {t = 9; i += 2}
    else if (num.substr(i, 1) == 'L') {t = 5; i ++}
      else if (num.substr(i, 2) == 'XL') {t = 4; i += 2};
  if (t == 0 || t == 5) {while (num.charAt(i) == 'X') {t ++; i ++}};
  n += t * 10;

  if (num.substr(i, 2) == 'IX') {u = 9; i += 2}
    else if (num.substr(i, 1) == 'V') {u = 5; i ++}
      else if (num.substr(i, 2) == 'IV') {u = 4; i += 2};
  if (u == 0 || u == 5) {while (num.charAt(i) == 'I') {u ++; i ++}};
  n += u;

  if (!((num == convert1000s(n) + convert100s(n) + convert10s(n) + convert1s(n))
    || (num == convert1000s(n) + convert100s(n) + convert10s(n) + convert1a(n))
    || (num == convert1000s(n) + convert100s(n) + convert10a(n) + convert1s(n))
    || (num == convert1000s(n) + convert100s(n) + convert10a(n) + convert1a(n))
    || (num == convert1000s(n) + convert100a(n) + convert10s(n) + convert1s(n))
    || (num == convert1000s(n) + convert100a(n) + convert10s(n) + convert1a(n))
    || (num == convert1000s(n) + convert100a(n) + convert10a(n) + convert1s(n))
    || (num == convert1000s(n) + convert100a(n) + convert10a(n) + convert1a(n)))) {n = -1}

  return(n);
}

function converts(n) {
  return (convert1000s(n) + convert100s(n) + convert10s(n) + convert1s(n))
}

function convert1000s(n) {
  return ('MMMM'.substr(0, (Math.floor(n / 1000))));
}

function convert100s(h) {
  var m = '', h = Math.floor((h % 1000) / 100);
  if (h == 9) {m = 'CM'}
    else if (h > 4) {m = 'DCCC'.substr(0, h - 4)}
      else if (h == 4) {m = 'CD'}
        else {m = 'CCC'.substr(0, h)};
  return m;
}

function convert100a(h) {
  var m = '', h = Math.floor((h % 1000) / 100);
  if (h > 4) {m = 'DCCCC'.substr(0, h - 4)}
    else {m = 'CCCC'.substr(0, h)};
  return m;
}

function convert10s(t) {
  var m = '', t = Math.floor((t % 100) / 10);
  if (t == 9) {m = 'XC'}
    else if (t > 4) {m = 'LXXX'.substr(0, t - 4)}
      else if (t == 4) {m = 'XL'}
        else {m = 'XXX'.substr(0, t)};
  return m;
}

function convert10a(t) {
  var m = '', t = Math.floor((t % 100) / 10);
  if (t > 4) {m = 'LXXXX'.substr(0, t - 4)}
    else {m = 'XXXX'.substr(0, t)};
  return m;
}

function convert1s(u) {
  var m = '', u = u % 10;
  if (u == 9) {m = 'IX'}
    else if (u > 4) {m = 'VIII'.substr(0, u - 4)}
      else if (u == 4) {m = 'IV'}
        else {m = 'III'.substr(0, u)};     
  return m;
}

function convert1a(u) {
  var m = '', u = u % 10;
  if (u > 4) {m = 'VIIII'.substr(0, u - 4)}
    else {m = 'IIII'.substr(0, u)};     
  return m;
}