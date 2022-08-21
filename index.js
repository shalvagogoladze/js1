
//task1

let person1 = {
    name : "ana",
    age : 28,
}
let person2 = {
    name : "gio",
    age : 21,
}

let sxvaoba = person1.age - person2.age;

console.log(sxvaoba)

let shedareba = "ana gioze 7 wliT ufrosia"

console.log (shedareba)

//task2

let sia = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']

let studentname = sia[4]

console.log(studentname)

//task3

let student = {
firstname : "shalva",
lastname : "gogoladze",
age : 36,
subjects : ["matematika", "qimia", "fizika", "inglisuri", "qartuli"],
roommeat : {
fullname : "gela gelashvili",
age : 30,
}
}
let subjects = ["matematika", "qimia", "fizika", "inglisuri", "qartuli"];
for (let i=0; i < subjects.length; i ++ ) {
    console.log(subjects[i]);
}
    
 let fullname2 = "shalva gogoladze"; 

 student.fullname2 = fullname2;

 let result = [fullname2, "aris", student.age, "wlis", "da misi roommeti aris", student.roommeat.fullname];
console.log(result)

//task4

let fruit = ["Banana", "Orange", "Apple", "Mango",2,12];

let i = 0;

while(i < fruit.length - 2) {
    console.log(fruit[i])
    i ++;
}

//task 5

let numbers = [12,23,43,11,9,2,121,90];

for (i = 0; i < numbers.length; i ++) {
console.log(numbers[i]);
}

if(numbers[i] > 31, numbers[i] % 2 == 0) {
    console.log('Element is greater than provided value and is EVEN')
}else console.log('Element is less than provided value and is ODD'
)