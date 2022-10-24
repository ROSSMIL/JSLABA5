console.log ("Завдання 1")
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);

console.log(result);

console.log('\n');

console.log ("Завдання 2")
let arr3 = [1, 2, 3];
arr3.reverse();

console.log(arr3);

console.log('\n');

console.log ("Завдання 3 'push'")
let arr4 = [1, 2, 3];
arr4.push (4, 5, 6);

console.log(arr4);

console.log('\n');

console.log ("Завдання 3 'unshift'")
let arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);

console.log(arr5);

console.log('\n');

console.log ("Завдання 4 'shift'")
let arr6  = ['js', 'css', 'jq'];
let elem = arr6.shift();

console.log(elem);

console.log('\n');

console.log ("Завдання 4 'pop'")
let arr7 = ['js', 'css', 'jq'];
let del = arr7.pop();

console.log(del);

console.log('\n');

console.log ("Завдання 5 'slice (1)'")
let arr8 = [1, 2, 3, 4, 5];
let sub = arr8.slice(0, 3);

console.log(sub);

console.log('\n');

console.log ("Завдання 5 'slice (2)'")
let arr9 = [1, 2, 3, 4, 5];
let sub1 = arr9.slice(3);

console.log(sub1);

console.log('\n');

console.log ("Завдання 6 'splice (1)'")
let arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);

console.log(arr10);

console.log('\n');

console.log ("Завдання 6 'splice (2)'")
let arr11 = [1, 2, 3, 4, 5];
let del2 = arr11.splice(1, 3);

console.log(del2);

console.log('\n');

console.log ("Завдання 6 'splice (3)'")
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(3, 0, 'a', 'b', 'c');

console.log(arr13);

console.log('\n');

console.log ("Завдання 6 'splice (4)'")
let arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 0, 'a','b');
arr14.splice(6, 0, 'c');
arr14.splice(8, 0, 'e');

console.log(arr14);

console.log('\n');

console.log ("Завдання 7 'sort'")
let arr15 = [3, 4, 1, 2, 7];
arr15.sort();

console.log(arr15);

console.log('\n');

console.log ("Завдання 8 'Object.keys'")
let arr16 = {js:'test', jq: 'hello', css: 'world'};
let ob = Object.keys(arr16);

console.log(ob);

console.log('\n');