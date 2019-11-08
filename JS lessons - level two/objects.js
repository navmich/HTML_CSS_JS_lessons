var obj = {key_one: "hello", key_two: "hi there"};

for (k in obj) {
  console.log("key: " + k + ", value: " + obj[k]);  
}

var myObj = {
  prop: 37,
  reportProp: function() {
    return this.prop;
  }
}
// vykona funkci prislusneho klice
console.log(myObj.reportProp())
// vypise pouze, ze value je funkce (a jeji jmeno/ pokud neni jmeno, uvede jmeno klice)
console.log(myObj["reportProp"])

