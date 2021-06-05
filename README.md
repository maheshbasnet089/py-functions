

# py-function
This package contains JavaScript implementations of common python functions. 

## Installation 
````
npm i py-function
````

## Usage
````javascript
const {shuffle,randint,range,counter,reversestring} = require('py-function')
````
### shuffle
  It is the implementation of python suffle function. It generates new array by shuffling it .
  ````javascript
let arr = [1,2,3,4,5]
console.log(shuffle(arr))
````
### randint
  It is the implementations of python randint function in JS . It generates random number from given argument.
  ````javascript
    randint(min,max)
````
### range
It is the similar implementation of python range function . The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.
  ````javascript
    range(start,end,step)
````
### counter 
The elements in the array when given to the counter will be converted to a hashtable objects wherein the elements will become keys and the values will be the count of the elements from the array given.It holds the count of each of the elements present in the array.
  ````javascript
    counter(array)
    const {counter} = require('py-function')
    list1 = ['x','y','z','x','x','x','y','z']
    console.log(counter(list1))
    Output:
    { x: 4, y: 2, z: 2 }
    
````
### reversestring
 It reverses the string provided with a single command . 
   ````javascript
    reversestring('hello') // returns olleh
````
 