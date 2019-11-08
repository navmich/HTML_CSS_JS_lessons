function stringTimes(str, n) {
  var returnStr = '';
  var i = 0;
  while (i < n) {
      returnStr += str;
      i++;
  }
  return returnStr; // nelze pouzit Python: 5 * str...
}

console.log(stringTimes("ah ", 5));



var x = "Ja jsem 'x'";
var y = "Ja jsem 'y'";

/*
  Globalni promenna se nemeni, pokud vstupuje do funkce jako parametr,
  a nasledne se zmeni uvnitr ve funkci.
  ==>
  Promenne v parametru funkce se berou jako lokalni promenne 
  (pouze prislusne funkci)
*/
function fun(y) {
  console.log(x);
  y = "Funkce rika: Ja jsem 'y'";
  console.log(y);
}

fun(y);
console.log(y);


var a = "Ja jsem 'a'";
var b = "Ja jsem 'b'";


function fun_2() {
  console.log(a);
  b = "Funkce rika: Ja jsem 'b'";
  console.log(b);
}

fun_2();
console.log(b);


function luckySum(a, b, c){

  if(a == 13){
    return 0
  }
  if(b == 13){
    return a
  }
  if(c == 13){
    return a + b
  }
  return a + b + c
}

console.log(luckySum(2,3,5))


function brick(one_size, another_size, length) {
  if (length % one_size === 0) {
    return true
  } else if (length % one_size !== 0 && (length % one_size) % another_size === 0) {
    return true
  } else if (length % another_size === 0) {
    return true
  }
  return false
}

console.log(brick(3, 5, 10))