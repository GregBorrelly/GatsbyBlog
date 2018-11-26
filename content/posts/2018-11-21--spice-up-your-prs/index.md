---
title: Master Markdown
category: "GoodToKnow"
cover: spice.jpg
author: Greg Borrelly
---



##Markdown why bother ? 




Throughout my journey as a software developer, if there's a technology that I have completely ignored, it is Markdown. With all the new libraries coming out. I'll admit learning markup is not sexiest things but boy have I reaped the benefits.   Github has a set of tools that allow you to use markdown without writing it, and whatever features are missing can be quickly looked up on the internet. So, this begs the question, why bother learning it?  

The first reason is that learning markdown takes about ten minutes.  The second reason was somewhat unexpected, I began using my new found skills. I found myself writing better PRs.  The act of stopping to think how I could best convey the reason for my PR, and the act of thinking about how I could use markdown to improve the engagement with what I was saying. 

but before we begin, let's take a step back. So what exactly it's markdown... 

The mundane sound of the word markup hides how cool the technology actually is. According to the gurus in Wikipedia. 

>Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats

A lightbulb went on in my head when I read that sentence.  There are two big take aways from that sentence 

1. Markdown gives you a way to create HTML elements
1. Because  after markdown gets transpiled it creates HTML elements, how those HTML elements look on the page is entirely up to the CSS on the site in which the markdown lives. 


So how can we use markdown in order to superpower our PR? the rest of this tutorial will concentrate on creating a PR using markdown.  We will be writing the markdown to create this PR

![](./PR.PNG)

* [X] It will make your PRs easier to read. 
* [x] Markdown is common to many domains. I'm writing this entire blog post in      markdown. 

  
## Creating Images 
Adding images to markdown is one of those things that I always used to have to look up when I create a new repo. But the syntax is actually quite simple. 

**Image Syntax**
```javascript
    1. ![alt text](image source "tooltip text")
```

Lets put that syntax to use with
```javascript
    1. ![This is a random image](https://unsplash.it/100/100?random "tooltip text")
```

which will be displayed as 

![This is a random image](https://unsplash.it/100/100?random "tooltip text")

## How about variables ?

Something the quickly aparent when using images is that adding long URLs can be clutter up your markdown quickly and since the first rule of markdown is to make everything readable. Woun't it be nice if we could store the url in a variable ? well it turns out you can, and they are called tokens. 

**Token Syntax**
```javascript
    1. # To create a token, you give it a key and value 
    2. [key]:value 
```

```javascript 
    # Here we are going to create an image by referencing a token. 
    1. ![My alt text][randomImage]
    ...
    40. # Let's create a token
    41. [randomImage]:https://unsplash.it/100/100?random
```


## Adding Code
## lists 

## Checkboxes 

* [ ] mark
## Marking up text











<!-- 

**The Basics**

_italics_   : 
    ```
        _italics_
    ```

**bold**   : 
    ```
        **bold**
    ```

~~strikethrough~~   : 
    ```
        ~~strikethrough~~
    ```

## the Fun stuff 

```javascript
    [1]: jscoffebreak.com
``` -->