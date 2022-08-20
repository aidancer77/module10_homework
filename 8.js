let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

for (let name of myMap.entries()) {
  console.log(`Ключ = ${name[0]}, значение = ${name[1]}`);
}