# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vickydj/lotide`

**Require it:**

`const _ = require('@vickydj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail`: The "tail" function takes an array and returns a new array containing all elements except the first one, or undefined if the array is empty.
* `middle`: The "middle" function returns the middle element(s) of the input array, or an empty array for two or fewer elements.
* `head`: The "head" function returns the first element of the input array.
* `countOnly`: The "countOnly" function is a function that takes an array of items and an object specifying which items to count, and it returns an object with the count of the specified items in the array.
* `eqArrays`:The "eqArrays" function is a function that compares two arrays and checks if they are equal, meaning they have the same elements in the same order.
* `eqObjects`: The "eqObjects" function is a function that compares two objects and checks if they are equal, meaning they have the same key-value pairs regardless of the order and the value types.
* `findKeyByValue`: The "findKeyByValue" function is a function that searches for a key in an object based on its corresponding value and returns the first key found.
* `flatten`: The "flatten" function is a function that takes an array containing a nested array and returns a new array with all the elements flattened into a single level.
* `letterPosition`: The "letterPosition" function  is a function that takes a string and returns an object with each unique character in the string as a key and an array of its positions in the string as the corresponding value.