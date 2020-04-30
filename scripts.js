console.log('Script file is loaded.');

// Single line comment

/* 
Multiple 
lines
of comments
*/

// First part: 

/*
+1
2
15-5
10
4*3
12
15/6
2.5
15/6;
2.5
17*12
204
let age
undefined
age = 34
34
age +5
39
age = 55
55
age + 10
65
let numbersOfLegs = 4;
undefined
numberoflegs * 2
VM436:1 Uncaught ReferenceError: numberoflegs is not defined
    at <anonymous>:1:1
(anonymous) @ VM436:1
numbersOfLegs * 4
16
let numbersOfLegs = 2;
undefined
numbersOfLegs = 2
2
numbersOfLegs*4
8
let name = Stefan
VM584:1 Uncaught ReferenceError: Stefan is not defined
    at <anonymous>:1:12
(anonymous) @ VM584:1
age/4
13.75
let name = "Stefan"
undefined
name
"Stefan"
name = "egg"
"egg"
name
"egg"
egg
VM705:1 Uncaught ReferenceError: egg is not defined
    at <anonymous>:1:1
(anonymous) @ VM705:1
let sentence = "That person's cat."
undefined
sentence = "He said: "ok""
VM962:1 Uncaught SyntaxError: Unexpected identifier
sentence = 'he said: "ok"'
"he said: "ok""
let backtick ='backtick'
undefined
let oldEnoughToDrive = false
undefined
'Hello; ' + name
"Hello; egg"
name = "StayAtHome"
"StayAtHome"
'11' + '23'
"1123"
true && true
true
true && false
false
fasle && false
VM1519:1 Uncaught ReferenceError: fasle is not defined
    at <anonymous>:1:1
(anonymous) @ VM1519:1
false && false
false
true || true
true
true || false
true
false || false
false
let post = "This is my first post"
undefined
let post2 = "This is my second post"
undefined
let color1 = "orange"
undefined
let color2 = "blue"
undefined
let colors = ["orange", "blue:"; "green"]
VM2135:1 Uncaught SyntaxError: Unexpected token ';'
let colors = ["orange", "blue:", "green"]
undefined
colors
(3) ["orange", "blue:", "green"]0: "orange"1: "blue:"2: "green"length: 3__proto__: Array(0)
colors[0]
"orange"
colors[1]
"blue:"
colors[2]
"green"
let pickedColor = 2
undefined
colors[pickedColor]
"green"
colors[1] = 'yellow'
"yellow"
colors
(3) ["orange", "yellow", "green"]
colors.length
3
name
"StayAtHome"
name.length
10
colors[3] = "lime"
"lime"
colors
(4) ["orange", "yellow", "green", "lime"]
colors.push('purple')
5
colors
(5) ["orange", "yellow", "green", "lime", "purple"]
colors[6] = "cyan"
"cyan"
colors
(7) ["orange", "yellow", "green", "lime", "purple", empty, "cyan"]
colors[5] = "cyan"
"cyan"
colors
(7) ["orange", "yellow", "green", "lime", "purple", "cyan", "cyan"]
let notGoodExample = ['text', 123, true]
undefined
let person = {    }
undefined
let person = { name: = 'Stefan', age: 32, favoriColors: colors, oldEnoughToDrive: true }                                                     }
VM3380:1 Uncaught SyntaxError: Unexpected token '='
let person = { name: = 'Stefan', age: 32, favoriColors: colors, oldEnoughToDrive: true }
VM3386:1 Uncaught SyntaxError: Unexpected token '='
let person = { name: = 'Stefan', age: 32, favoriteColors: colors, oldEnoughToDrive: true }
VM3393:1 Uncaught SyntaxError: Unexpected token '='
let person = { name: = 'Stefan', age: 32, favoriColors: colors, oldEnoughToDrive: true }
VM3397:1 Uncaught SyntaxError: Unexpected token '='
let person = {                         name: = 'Stefan',                         age: 32,                         favoriColors: colors,                 oldEnoughToDrive: true                     }
VM3426:1 Uncaught SyntaxError: Unexpected token '='
let person = {                         name: = 'Stefan',                         age: 32,                         favoriColors: colors,                 oldEnoughToDrive: true,                    }
VM3436:1 Uncaught SyntaxError: Unexpected token '='
person
{}
let oldEnoughToDrive = true
undefined
age = 32
32
age + 1
33
name = "Stefan"
"Stefan"
let person = { name: = 'Stefan', age: 32, favoriColors: colors, oldEnoughToDrive: true } 
VM3555:1 Uncaught SyntaxError: Unexpected token '='
let person = { name: = 'Stefan', age: 32, favoriteColors: colors, oldEnoughToDrive: true } 
VM3562:1 Uncaught SyntaxError: Unexpected token '='
let person = {
 name: 'Stefan',
 age: 32,
favoriteColors: colors,
oldEnoughToDrive: true
}
undefined
person
{name: "Stefan", age: 32, favoriteColors: Array(7), oldEnoughToDrive: true}age: 32favoriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", "cyan"]name: "Stefan"oldEnoughToDrive: true__proto__: Object
'Hello, dear ' + person.name
"Hello, dear Stefan"
'Hello, dear ' + person.age
"Hello, dear 32"
person.name = 'Peti'
"Peti"
person
{name: "Peti", age: 32, favoriteColors: Array(7), oldEnoughToDrive: true}
person.food = 'Pizza'
"Pizza"
person
{name: "Peti", age: 32, favoriteColors: Array(7), oldEnoughToDrive: true, food: "Pizza"}
*/