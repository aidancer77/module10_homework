let a = prompt('Введите значение');
if (a != "number") {
  alert('Упс, кажется, вы ошиблись')  
} else if (isNaN(a % 2)) {
  alert('Не число')
} else if (a % 2 === 0) {
  alert('Число четное')
} else if (a % 2 !== 0) {
  alert('Число нечетное')
}  