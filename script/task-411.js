/*
8 kyu 411
8 kyu
String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!


STRINGSDEBUGGING
*/
function buildString(...template) {
  return `I like ${template.join(',')}!`;
}
