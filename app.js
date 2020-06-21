
// Chapter 21 to 30
// / Question 1


// // var multi = [];
// // var multi = [['Abdullah', 19],
// // ['hamza', 18],
// // ['hammad', 20]]

// // console.log(multi)

// // // Question 2 
// // var multi=[[0,1,2,3],[2,4,2,4],[1,6,7,8]]
// // document.write(multi[0] + "<br>" + multi[1] + "<br>" + multi[2])


// // Question 3

// // for(var i = 1; i<=10;i++)
// // {
// //     document.write(i +"<br>")
// // }


// // Question 4


// // var val = +prompt("Enter the value for table")
// // for(var i = 1; i<=10;i++)
// // {
// //     document.write(val + "x" + i + "=" + i*val + "<br>")
// // }



// // Question 5

// // var fruits = ["apple","banana","mango","orange","strawberry"]

// // for(var i = 0; i <=fruits.length;i++)
// // {
// //     document.write("Element at index" + i + " is " + fruits[i] + "<br>")
// // }



// // Question 6

// // for(var i=1;i<=15;i++)
// // {
// //     document.write(i + "<br>")
// // }


// // for(var i=10;i>=1;i--)
// // {
// //     document.write(i + "<br>")
// // }


// // for(var i=0;i<=20;i=i+2)
// // {
// //     document.write(i + "<br>")
// // }


// // for(var i=1;i<=20;i=i+2)
// // {
// //     document.write(i + "<br>")
// // }

// // Question 7

// // var A=["cake","apple pie","cookies","chips","patties"]

// // var search=prompt("Enter to search")

// // for(var i = 0; i<=A.length;i++)
// // {
// //     if(search=== A[i])
// //     {
// //         alert("Your search is Succesfull")
// //         break;
// //     }
// //     else
// //     {
// //         alert("Your search is not Succesfull")
// //         break;
// //     }
// // }

// // Question 8


// // var Arr=[66,45,11,84,90,53]
// // var max = 0

// // for(var i=0; i<=Arr.length;i++)
// // {
// //     if(arr[i]>max)
// //     {
// //         max=arr[i];
// //     }
// // }

// // document.write(max)



// // // Question 9



// // var Arr=[66,45,11,84,90,53]
// // var min= 0

// // for(var i=0; i<=Arr.length;i++)
// // {
// //     if(arr[i]<min)
// //     {
// //         min=arr[i];
// //     }
// // }

// // document.write(min)


// // Question 10


// // for( var i=1; i <=20;i++)
// // {
// //     document.write(i*5 + "<br>")
// // }


// Chapter 31 to 34

// Question 1
// var a = new Date()
// console.log(a)

// Question 2
// var a = new getMonth();
// alert(a)


// Question 3
// var a = new Date()
// var b = a.toString()
// var c = b.slice(0,3)

// alert("Today is " + c)


// var  x = prompt("Enter the day")
// if(x==="Sunday" || x === "Saturday")
// {
//     alert("It's Funday")
// }
// else{
//     alert("It's not funday")
// }

// Question 5
// var x = prompt("Enter the date")
// if(x >= 0 && x<= 15)
// {
//     alert("First fifteen days of the month")

// }
// else{
//     alert("End of the month")
// }


// Question 6
// var today = new Date()
// console.log("Current Date is : " + todaymili )
// var todaymili = today.getTime()

// console.log("Elapsed Milisecond since January 1, 1970: " +todaymili)

// var datemint = todaymili/60000

// console.log("Elapsed Minutes since January 1, 1970:" + datemint)



// function calage(){
// var dob = new Date(prompt("Enter you date ","1 June,1999"))
// var dobmili = dob.getTime()

// var today = new Date()
// var todaymili = today.getDate()
// var diff = todaymili - dobmili;

// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage)
// }

// calage()









// Chapter 34 to 38
// Question 1 
// function datee(){
//     var x = new Date()
//     console.log(x)
// }

// datee()


// Question 2 
// function name(xx,yy)
// {

//     alert(xx+" "+ yy)
// }

// var x = prompt("Enter your first name")
// var y = prompt("Enter your last name")

// name( x , y )


// Question 3

// function add(xx,yy){
//     z= xx+yy
//     alert("The sum is " + z)

// }

// var x = +prompt("Enter your first number")
// var y = +prompt("Enter your second number")

// add(x,y)



// Question 4
// function cal(num1, op, num2) {
//     if (op === "+") {
//         return num1 + num2
//     }
//     if (op === "-") {
//         return num1 - num2
//     }
//     if (op === "*") {
//         return num1 * num2
//     }
//     else {
//         return "Incorrect Operator"
//     }
// }

// Question 5
// function sq(xx){
//         z= xx*xx
//         alert("The square is " + z)
    
//     }
    
//     var x = +prompt("Enter your number to square")
    
    
//     sq(x)


// Question 6

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = +prompt("Enter your number")
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);



// Question 7
// function count(xx,yy)
// {
//     for(var i = xx;i<=yy;i++)
//     {
//         document.write(i + "<br>")
//     }
// }

// var x = +prompt("Enter the starting Number")
// var y = +prompt("Enter the ending Number")
// count(x,y)


// Question 9
// function area(xx,yy){
//     z= xx*yy
//     alert("The area is " + z)

// }

// var x = +prompt("Enter width")
// var y = +prompt("Enter height")

// area(x,y)


// Question 10
// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }



// palindrome("Abdullah")


// Question 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


// Question 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


// Question 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resource.com', 'o'));


// Question 14


// function calcCircumference(xx){
// var c= xx * 2 * 3.14
// console.log("The circunstance is: "+ c)
// }
// function calcArea(xx){
//     var a =  3.14 * xx * xx
//     console.log("The area is : " + a)
// }

// var x = +prompt("Enter the Radius")

// calcCircumference(x)
// calcArea(x)