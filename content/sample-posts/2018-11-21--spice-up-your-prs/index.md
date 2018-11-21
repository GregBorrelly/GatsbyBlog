---
title:'CoffeBreak: Using markdown to make your life better '
cover:''
author:'Greg Borrelly'
---


Notes
- You can use markdown to write Posts, Books, PRs etc 

## Paragraphs & text decoration 

- Markdown needs a fullline space in between each line in order to show as a new line. 
- **Bold** & _italics_
- ~~striketrough~~
- # H1
- ## h2
- ## h3 
- creating headers on github will generate ID's for those headers. 
-  links
-  <www.link.com>
-  [Github Account](github.com "This is cool")
-  Tokenized [Greg][1]
-  ##Images
-  ![wow great pic!!][2]

## Lists 

- Number
- Write number lists using 1.  
- you do not control how the bullets look like. That is done through the css of the site. 

1. here 
1. two
1. three 
1. four 

- Not order
  + what
  + two
  + three


- <br> you can force a line break by using ```javascript <br> ```
- BlockQuotes

> this is my quote

#tables 

#codeBlocks


Here is my code: 
    ```javascript
    var x = 100;
    const dog = 'snikers';
    ```
 Treats

 ```diff
    var x = 100
    - var x = 3
    + var x = 5
 ```  
#Github Treats 

Checkboxes 

* [] Get Milk 
* [] Crack egss 

[1]: gregborrelly.com 
[2]: https://unsplash.it/500/500?random "Tooltip"