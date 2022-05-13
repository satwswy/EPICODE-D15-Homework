/* 21
let x = "John"
let y = "Doe"
console.log(x , "<>" ,y) */

/* 22 
let objectNumberOne = {
    name: "name",
    surname: "surname",
    email: "email"
}
console.log(objectNumberOne)

23
delete objectNumberOne.email
console.log(objectNumberOne)
*/

/*
24 let arrayNumberOne = ["1","2","3","4","5","6","7","8","9","10"]
25 for (let i=0; i< arrayNumberOne.length; i++){
    console.log(arrayNumberOne[i])
}
*/

 /*26
 let arrayOfRandomNumbers = []
function randomNumber() {
    
    

for (let i=0; i<100 ; i++)
{
    let randomNum = Math.floor((Math.random() * 100) + 1);
    arrayOfRandomNumbers[i] = randomNum
    
    
}
console.log(arrayOfRandomNumbers)
}
randomNumber()
*/

//27) Write a function to get the maximum and minimum values from the previously created array

/*
function maximumminimum() {
let maximumValue = 0
let minimumValue = 100
for(let i =0; i<arrayOfRandomNumbers.length; i++){
    if(arrayOfRandomNumbers[i]>maximumValue)
       {maximumValue = arrayOfRandomNumbers[i]}
}
console.log(maximumValue)

for (let i =0; i<arrayOfRandomNumbers.length; i++){
    if(arrayOfRandomNumbers[i]<minimumValue)
       {minimumValue = arrayOfRandomNumbers[i]}
}
console.log(minimumValue)
}
maximumminimum()
*/

/*28) Create an array of arrays, in which every array has 10 random numbers
    
    let nestedArrayOne =[]
    let nestedArrayTwo = []
    let arrayWithArrays =[nestedArrayOne, nestedArrayTwo]

function arrayOfArrays() {
     for (let i=0; i<10 ; i++)
    {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        nestedArrayOne[i] = randomNum
    }
    for (let i=0; i<10 ; i++)
    {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        nestedArrayTwo[i] = randomNum
    }
}
arrayOfArrays()
console.log(arrayWithArrays)
*/

//29) Create a function that gets 2 arrays as parameters and returns the longest one
    
/*function longestArray(arrayOne,arrayTwo) {
    if (arrayOne.length >arrayTwo.length){
        return arrayOne
    }
    else {
        return arrayTwo
    }
}
console.log(longestArray(['Hey i am array number one',10,true], ['Hey i am array two',55,false])) */

// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

/*function sumOfArrays(num1 ,num2){
    let sumOfArrayOne = 0
    let sumOfArrayTwo = 0
for(i=0 ; i<num1.length ; i++)
{
    sumOfArrayOne = sumOfArrayOne + num1[i]
    //console.log(sumOfArrayOne)
}
for(i=0 ; i<num2.length ; i++)
{
    sumOfArrayTwo = sumOfArrayTwo + num2[i]
    //console.log(sumOfArrayTwo)
}
if (sumOfArrayOne > sumOfArrayTwo)
console.log('The bigger sum is', sumOfArrayOne)
else {console.log('The bigger sum is', sumOfArrayTwo)}
}
//console.log
(sumOfArrays([1,5,6,7,99,45,35,7] , [5,88,92,55,14,77,36])) */

