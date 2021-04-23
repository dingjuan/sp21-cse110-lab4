### 1a
1. line 9 printed "values added: 20", since the var result is kind of defindes a variable globally regardless of the block scope
2. line 13 printed "final result: 20", since the var result is kind of defindes a variable globally regardless of the block scope
3. line 9 printed "values added: 20", since the let result is block-scoped variable, it can be accessed through the block inside
4. line 13 has an error, becauce we only define let result inside the boolean check add block, out of the block, it will has ReferenceError: "result is not defined"
5. line 9 has an error, because we can not modify a const variable after is be assigned
6. line 13 also has an error, because const scope is also a "block scope" as let, so if we access it out of block scope, it will has ReferenceError: "result is not defined"
### 1b
1. Line 12 will print 3, because, as var i is global-scope, then we can get i with length of list, since the for-loop range from 0 - 2, so we can get 3 of i.
2. Line 13 we will print 300 * (2-0.5) = 450. since discountedPrice is also a global-scope variable, and it update by the last element of the list prices.
3. line 14 we will get output 450, since we define the var finalPrice in the global scope, so we get update from the for-loop
4. The function will return a list with 3 updated finalPrices [-50, 100, 450]
5. We will have a ReferenceError which is "i is not defined", since the let defines a variable only in the for loop block
6. We will have a ReferenceError which is "discoutedPrice is not defined", since the let defines a variable only in the for loop block
7. We will output 450, since the let variable finalPrice is in the scope of the whole function and has updated on the for-loop
8. The function will return a list with 3 updated finalPrices [-50, 100, 450], since we use let variable discounted as list reference and return this reference.
9. We will have a ReferenceError which is "i is not defined", since the let defines a variable only in the for loop block
10. We will have a output 3 since, length has been const declare the length of the list prices which is 3
11. The function will return a list with 3 updated discountedPrice [-50, 100, 450], Although we declare discounted list as const, but we still can do some operation of the content of the list such as delete/add/update the value
12. 
 - A. student.name
 - B. student['Grad Year']
 - C. student.greeting()
 - D. student['Favorite Teacher'].name
 - E. student.courseLoad[0]
13. 
 - A. 32, since '+' operation is string appending and integers map to their exact string representation 
 - B. 1,  since the we can not substract string, so it covert string '3' to integer 3 and substracted by 2 which is 1
 - C. 3, when we add null with a integer type, we consider null as 0
 - D. 3null, when we add null with a string type, we consider null as string "null"
 - E. 4, when we add true with a integer type, we consider true as 1, false as 0
 - F. 0, when we add false with null, we consider both false and null as integer 0
 - G. 3undefined, when we add undefined with a string, we consider it as string "undefined"
 - H. NaN, operator '-' will only work for numbers, which Undefined is NaN
14.
 - A. True, because When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.  In our case, 2 is greater than 1, so it's true
 - B. False, character 2 is greater than 1 so '2' > '12'
 - C. True, same as A When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.  In our case, 2 is equal to 2
 - D. False, '===' is used for comparing two variables, and also check datatype and compares two values, so '2' != 2
 - E. False, since when compare true with a int, it will convert true to 1, so 1 != 2, return false
 - F. True, Boolean is a function to check whether the variable/expression is true, so 2 is not 0, which is true. So true == true, return true
15.  '==' is to compare the two variables by ignoring their datatype, so we can use "==" to check string and integer; Meanwhile, '===' is to compare two variables and also their datatypes too, so when we use different type, like '1' === 1, it will return false
17.  The return array will be [2, 4, 6]. The process is we call the function modifyArray with array and the callback function "doSomething", inside the function, each iteration, the local variable newArr will add a return value from callback function with twice of the array[i]
