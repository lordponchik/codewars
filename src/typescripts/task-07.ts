/*
7 kyu 7
Truthy and Falsy
In JavaScript there are truthy and falsy values:

truthy: a value that when evaluated in a boolean context returns true
falsy: a value that when evaluated in a boolean context returns false
MDN links:

https://developer.mozilla.org/en/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
Your task
You are given two empty arrays (truthy and falsy) and you have to fill this array with at least 5 elements in each which will evaluate to true or false accordingly.

FundamentalsLanguage Features
*/

export const truthy = [true, [1], {}, 1, 'true'];
export const falsy = [false, 0, null, undefined, ''];