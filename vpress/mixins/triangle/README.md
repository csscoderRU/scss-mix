---
lang: en-US
title: SCSS triangle Mixin | CSSCODER
---

# Triangle
# Triangle mixins

By default, we use these variables.

```scss
// default variables for only this mixin - triangle-em()
$ss-base-font-size: 16px !default;
```

#### triangle([a, b, c, d, f])
| params            | Description                           | default       |
| :-------------    |:-------------                         | :----------   |
| **a**             | Direction (down, up, left, right)     | down          |
| **b**             | size value (can be list, see example below)                   | 30px         |
| **c**             | color triangle                        | #20ba5b       |
| **d**             | switch to get dimentions in EM        | null          |
| **f**             | set parent font size                  | 16px          |


#### Base using for list
```scss{2,13,24,35}
.test1 {
  @include triangle;
}

// CSS result
.test1 {
  border-top: 30px solid #20ba5b;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
}

.test2 {
  @include triangle(up, 100px, green);
}

// CSS result
.test2 {
  border-bottom: 100px solid green;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
}

.test3 {
   @include triangle(right, 100 60 20, green);
}

// CSS result
.test3 {
  border-left: 60px solid green;
  border-bottom: 80px solid transparent;
  border-top: 20px solid transparent;
}

.test4 {
   @include triangle(right, 100 60 20, green, true);
}

// CSS result
.test4 {
  border-left: 3.75em solid green;
  border-bottom: 5em solid transparent;
  border-top: 1.25em solid transparent;
}
```

#### Base examples
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="csscoder" data-slug-hash="zYYXmWa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - triangle - Ex1">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/zYYXmWa">
  CSSCODER MIX - triangle - Ex1</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

#### Base examples EM
<p class="codepen" data-height="406" data-theme-id="dark" data-default-tab="result" data-user="csscoder" data-slug-hash="XWWQxLx" style="height: 406px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - triangle - Ex2">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/XWWQxLx">
  CSSCODER MIX - triangle - Ex2</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
