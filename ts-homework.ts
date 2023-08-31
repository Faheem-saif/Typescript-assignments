// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
var arr1:string[]=["Faheem","sami","raza","ahsan","adnan"];
var loc:number=3;
var val:string="Saif";
function spuse(a:string[],b:number,c:string){
   let res=a.splice(b,1,c);
   return arr1;

}
spuse(arr1,loc,val);
console.log(arr1);
console.log("First Funtion Working Well");
console.log("---------------------------");
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var arr2:string[]=["soap","shampo","Vim","sugar"];
 var qua:number=arr2.length;
function addcart(a:string[],b:number,c:string,d:number){
    let res=a.splice(b,d,c);
    qua=qua+d;  
    return arr2;
 
}
addcart(arr2,2,"tea",1)
console.log(arr2)
console.log("Total Items :" +qua);
function deletecart(a:string[],b:number,d:number){
    let res=a.splice(b,d,);
    qua=qua-d;  
    return arr2;
 
}
deletecart(arr2,0,1)
console.log(arr2)
console.log("Total Items :" +qua);
console.log("Second Funtion Working Well");
console.log("---------------------------");
//  - Write a program that uses a while loop to print the first 25 integers.
function f25(){
let index=0;
var v=0
while(index<=25){
    v +=index
  index++;
}
console.log("The sum of First 25 digits :"+v);
console.log("---------------------------");}
f25();
console.log("---------------------------");
// - Write a program that uses a while loop to print the first 10 even numbers.

function f10even(){

var index:number=1;

var arre10:number[]=[]
while(index<=20){
    if(index%2==0){
     var res=index
        arre10.push(res);
        
    }
    index++;
}

console.log(arre10);
console.log("---------------------------");
}
f10even();
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function fac(a:number){
    if(a<0){
        console.log("The no is negative");
        
    }
    else if(a==0){
        console.log("The factorial of 0 is not valid");
        
    }
    else{
    var index:number=1;
    var result:number=1
  while(index<=a){
     result*=index;
index++;
}
console.log(result);
console.log("---------------------------");}
}
fac(6);
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let arrN:number[]=[3,4,5,6,7,-4,-6,89,2,-7,6,23,34]
function Nfilter(a:number[]){
    a=a.filter(b => b > 0)
    console.log("Before Elimination: "+arrN)
console.log("After Nagative NO Elimination; "+a)
}
Nfilter(arrN);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sumARR(a:number[]){
    console.log(a);
    var index=0
    let sum=0;
    // for(index=0;index<a.length;index++){
    //     sum+=sum+a[index]    }
    while(index<a.length){
        sum+=sum+a[index];
        index++;
       
    }
    console.log(sum);
    console.log("---------------------------");
}
sumARR([1,2,3,4,5]);
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function temc(a:number[] ){
    console.log("Temp in celsius: "+a);
let index:number=0;
let arrT:number[]=[]
    while(index<a.length){
   let f=(a[index]*9/5)+32;

  arrT.push(f)
index++;
    }
console.log("Temp in Farenheit: "+arrT)
console.log("---------------------------");
}
temc([2,4,5]);
/// Next week assignment
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sum100E(a:number,b:number){
for(let i:number=1;i<=a;i++){

    if(i%2==0){

    b=b+i;
    }
    
    
}
console.log(b);
console.log("---------------------------");
}
sum100E(100,0);
// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function Evenprint(a:number[]){
   let b:number[]=[];
    for(let i:number=0;i<a.length;i++){
        if(a[i]%2==0){

            b.push(a[i]);
        }

    }
    console.log(b);
    console.log("---------------------------");
    
}
Evenprint([1,2,3,4,5,6,7,8,9,10,12,14,15,16]);
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

function Evenremove(a:number[]){
    // for(let i:number=0;i<a.length;i++){
    //  if(a[i]%2==0){
    //     a.splice(i,1,)
    //  }

    // }
    a=a.filter(b => b%2!= 0 )
    console.log(a);
    console.log("---------------------------");
    
}
Evenremove([1,2,3,4,5,6,7,8,9,10,12,14,15,16]);
// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areacal(a:number){
  let area=Math.PI*a**2
  console.log(area);
  console.log("---------------------------");
}
areacal(5);
//- Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function failsplice(a:number[]){
    let i=0;
    while(i<a.length){
     if(a[i]<50){
        a.splice(i,1,)
     }
   i++;
    }
    console.log(a)
}
failsplice([23,60,89,67,78,89,96,44,56,90]);
// - Write a program that uses a function to find the largest element in an array of numbers.
function findMax(a:number[]){
    let max:number=a[0]
    for(let i=0;i<a.length;i++){
        if(max<a[i]){
            max=a[i];
        }
       
    }
    console.log(max);
    console.log("---------------------------");
}
findMax([23,60,89,67,78,89,96,44,56,90]);