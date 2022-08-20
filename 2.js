var x = 2 * undefined;
if (typeof x == 'number') {
    console.log("x - число")
  } else if (typeof x == 'string') {
   console.log("x - строка")
} else if (x === true || x === false) {
   console.log("х - логический тип")
} else if (typeof x !== x) {
   console.log("NaN")
} else {
   console.log("Тип х не определен")
}