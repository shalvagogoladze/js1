// let test = "test"
// console.log(test);



//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/

function logArr(arr) {
    for (let i = 0; i < arr.length; i ++) {
        console.log(arr[i]);
    }
}

function chakIteration(obj) {
    if (obj.isItarable) {
        logArr(obj.sampleArray);
    } else {
        console.log("provided array isn't itarable");
    }
}

const sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57],
};
chakIteration(sampleObject);
//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/

function checkPythagoras (x,y,z) {
    return ( x * x == y * y + z * z || y * y == x * x + z * z || z * z == y * y + x * x);
}

let test = checkPythagoras(8,6,10);
console.log(test);

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

let arr = [2,14,25,75,11,6];

function minMax(testArray) {
    let minVal = testArray[0];
    let maxVal = testArray[0];
    for(let i = 0; i < testArray.length; i ++) {
        if (testArray[i] <= minVal) {
            minVal = testArray[i];
        }
        if (testArray[i] > maxVal) {
            maxVal = testArray[i];
        }
    }
    console.log(maxVal,minVal);
    
}
minMax(arr);

//hhh

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

// function checkDeg (deg) {

// }

// checkDeg(92)

function chackAngle (deg) {
    if( deg > 0 && deg < 90) {
        return "Acute angle";
    }
    if(deg == 90) {
        return "Right angle"
    }
    if(deg > 90 && deg < 180) {
       return "Obtuse angle" 
    }
    if(deg == 180) {
        return "Straight angle"
    }
}

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/