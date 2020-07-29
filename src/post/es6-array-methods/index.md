---
title: "ES6 high order array methods"
date: "2020-07-29"
cover: "./cover.png"
tags:
  - javascript
---

## Introduction
[[snippet]]
| ECMAScript 6 introduces some new array methods that is useful to loop through an array items. In this post, I'll try to explain how I understand some ES6 high order array methods like `map()`, `filter()`, `reduce()`, `forEach()`, etc. Hopefully you will understand more about these methods after reading this post. Let's get started.

## High Order Array Methods
### Find
The first method is `Array.prototype.find()`. Just like the name suggest, it will find the item that you are looking for. It will return the item if the function returns true. Here's an example.

```javascript
const users = [
  {
    id: 1,
    name: "John Doe",
    admin: false
  },
  {
    id: 2,
    name: "Lukas Smith",
    admin: true
  },
  {
    id: 3,
    name: "Erina Matsumoto",
    admin: false
  }
]

// will return {id: 1, name: "John Doe", admin: false}
users.find(user => user.id === 1)
```

As you can see from the example, `Array.prototype.find()` returns the first item because we give it a condition to check if the item that is currently looping has the `id` of 1.

What if there are multiple matches? Well, `.find()` will only return the first match it found. So if you would type

```javascript
user.find(user => !user.admin)
```

It will return the first match which is `{id: 1, name: "John Doe", admin: false}`. If you want it to spit an array with matching condition, then you would use `.filter()` which we will talk about later.

`Array.prototype.find()` will return undefined if the given condition is not fullfilled (the item that you're looking for is not available). You can play around with this [here](https://repl.it/@elianiva/find-method).

### Filter
Like I said earlier, if you want multiple results based off on your condition then you would use `Array.prototype.filter()`. Let's try it with the code below.

```javascript
const cities = [
  { name: "Hiroshima", country: "Japan" },
  { name: "Sendai", country: "Japan" },
  { name: "London", country: "England" },
  { name: "Brighton", country: "England" },
  { name: "Jakarta", country: "Indonesia" },
  { name: "Bandung", country: "Indonesia" }
]

// will return all cities in Japan
cities.filter(city => city.country === "Japan")
```

As you would expect, it returns an array with matching items. The code above will give us this result.

```javascript
[
  { name: "Hiroshima", country: "Japan" },
  { name: "Sendai", country: "Japan" },
]
```

You can play around with the code snippet above [here](https://repl.it/@elianiva/filter-method)

### Some
What if you want to check if an array have some condition that you want? Well, `Array.prototype.some()` got you covered. This method checks if an array have _some_ condition that you want. Take a look at this example.

```javascript
const items = [
  { name: "Phone", discount: true },
  { name: "Laptop", discount: false  },
  { name: "Keyboard", discount: false  },
  { name: "Mouse", discount: true  },
  { name: "Monitor", discount: false },
]

// will return true
items.some(item => item.discount)
```

As you can see, it returns `true` because there are _some_ items that is currently in a discount. Go ahead and try to change them all to `false` on repl.it [here](https://repl.it/@elianiva/some-method).

### Every
Ok great, now you can check whether or not an array has some items that match you requirements. There's also a method that will return `true` if _every_ one of them matches your condition. Check the code below.

```javascript
const students = [
  { name: "Erika", passed: true },
  { name: "Himawari", passed: false  },
  { name: "Irene", passed: false  },
  { name: "Suzuka", passed: true  },
  { name: "Riku", passed: true },
]

// will return false
students.every(student => student.passed)
```

It returns false because we need _every_ single one of the student passed. As always, you can play around with the code above [here](https://repl.it/@elianiva/every-method).

### ForEach
`Array.prototype.forEach()` is useful if you want to just loop through an array and don't want to return anything. For example, if you just want to `console.log()` every item of an array.

```javascript
const songs = [
  "Road of Resistance",
  "Pretender",
  "Megitsune",
  "Feel It Still",
  "Arkadia"
]

// will not return anything
songs.forEach(song => console.log(song))
```

You can play around with this method [here](https://repl.it/@elianiva/foreach-method).

### Map
Similar to `.forEach()`, `Array.prototype.map()` will also loop through each item in an array but it will return a new array. Here's an example.

```javascript
const numbers = [1, 2, 3, 4, 5]

// will return multiplied value
numbers.map(num => num * 2)
```

I use this method more often than `.forEach()` because most of the time I need to process that item and returns a new array with the result. You can play around with this [here](https://repl.it/@elianiva/map-method).

### Reduce
Finally, `Array.prototype.reduce`. This method is quite hard for me to understand initially. It's sort of like merges the array. The first argument is the function handler that takes 2 arguments and the second argument is the initial value. The function's first argument called `accumulator` has the result of current iteration. The second argument called `currentValue` has the current item in an array. Let's look at the code and hope it will make more sense.

```javascript
const numbers = [1, 1, 1, 1, 1]

// will return 5
numbers.reduce((acc, curr) => acc + curr)
```

Let's make an analogy of that to make things simpler. Suppose you have a jar. That jar is the `accumulator`. The first time you have it, it's empty. Then you started to pick an item from a box. The box is an array and the item is the `currentValue`. You pick the item one by one, adding the total of the items in the jar (`accumulator`) with the item that you are picking (`currentValue`). Eventually, you will end up with 5 items. Same goes to the code above.

If you give it a second argument which is `initialValue`, then it will start from that value instead of 0. Just like if you have a jar filled with some items already.

```javascript
const numbers = [1, 1, 1, 1, 1]

// will return 10
numbers.reduce((acc, curr) => (acc + curr), 5)
```

Reduce method is quite hard to understand at first, don't worry. Reduce deservces an article in itself, check out [this article](https://alligator.io/js/finally-understand-reduce/) to understand `reduce()` even more.

## References
There are so many references for these methods out there already. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is one of the best reference out there if you want something more technical and detail. Also checkout [this tweet](https://twitter.com/profulsadangi/status/1288053880010334208) (and follow him too! He shared _a lot_ of useful stuff in a form of simple yet concise sketch).

## Conclusion
These methods that ES6 introduces is so useful. We no longer need to create a `for loop` that iterates through the whole array and then do something. Let me know what you think about this. See ya next time ツ
