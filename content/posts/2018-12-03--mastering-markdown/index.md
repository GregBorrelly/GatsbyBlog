---
title: "Mastering Markdown"
author: "Greg Borrelly"
category: 'none'
cover: photo-1465070845512-2b2dbdc6df66.jpg
---


The mundane sound of the word markup hides how cool the technology actually is. According to the gurus in Wikipedia.

> Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats

A lightbulb went on in my head when I read that sentence. There are two big take aways: 

1. Markdown gives you a way to create HTML elements
2. Because after markdown gets transpiled it creates HTML elements, how those HTML elements look on the page is entirely up to the CSS on the site in which the markdown lives.

Markdown was created with the intent of making reading and writing prose a more efficient endevour. 

## Creating Links 

Markdown 
```markdown
    <linkSource>
```

Example
```markdown
    <www.google.com>
```

HTML
```javascript
    <a href="google.com">Click me</a>
```


## Creating Images

The syntax for creating an image tag is straithforward. 

**Markdown Image Syntax**

```javascript
    1. ![alt text](image source "tooltip text")
```

Lets put that syntax to use with

```javascript
    1. ![This is a random image](https://unsplash.it/100/100?random "tooltip text")
```

**HTML Equivalent**
```html
    <img src="https://unsplash.it/100/100?random" alt="This is a random image" /> 
```

## Creating Blockquotes

Markdown 
```markdown
    > This quote is awesome. 
```

HTML
```javascript
    <blockquote>
        This quote is awesome 
    </blockquote>
```

Block quotes can contain nested markdown elements. So it's totally okay to do 

>  Quote with a google link <www.google.com>


## Using variables in Markdown

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

## Creating Lists 
Markdown 
```markdown
    1. apples 
    1. Oranges 
    1. Salami 
```

HTML
```javascript
    <ul>
        <li> Apples </li>
        <li> Oranges </li>
        <li> Salami </li> 
    </ul>
```

If all else fails, remember that because markdown just gets transpiled to HTML. You can always write pure HTML instead of markdown.  
 
##  Markdown Cheatcheet and Resources 
1. <https://daringfireball.net/projects/markdown/>
2. [Cheatcheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)