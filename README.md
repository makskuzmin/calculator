## **Calculator.js**
Install calculator:
```
git clone git@github.com:makskuzmin/calculator.git
```
```
npm install
```
The function accepts the arithmetic operations of two numbers as a string and a number system. 
Returns a string with the result of their execution.

Implemented number systems:
```
arabic
roman
binary
decimal
```

The operands must be in the range 1 to 10 inclusive, no zero. The answer may be more than 10.
Arithmetic operations: 
```
"+" "-" "*" "/"
```
Both operands must be in the same number system.
The calculator can only work with integers.
The output result is always a string with an integer.
Only in the Arabic numeral system, negative numbers and zero are returned, in other systems, an empty string is returned.
When calling the calculator with inappropriate numbers, the function throws an exception and exits.