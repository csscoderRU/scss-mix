---
lang: en-US
title: SCSS transition Mixin | CSSCODER
---

# Transitions mixins

By default, we use these variables.

```scss
// default variables
$ss-tr-duration: 200ms !default;
$ss-tr-function: ease-in-out !default;
```

#### tr([a, b, c, d])
| params            | Description                           | default       |
| :-------------    |:-------------                         | :----------   |
| **a**             | CSS property what will be change      | all           |
| **b**             | duration time in ms                   | 200ms         |
| **c**             | function                              | ease-in-out   |
| **d**             | delay time in ms                      | null          |

#### Base using for list
```scss{2,7,11,16,20,25,29,34}
.test {
  @include tr;
}

// CSS result
.test {
  transition: all 200ms ease-in-out;
}

.test2 {
  @include tr(width);
}

// CSS result
.test2 {
  transition: width 200ms ease-in-out;
}

.test3 {
  @include tr(width height);
}

// CSS result
.test3 {
  transition: width 200ms ease-in-out, height 200ms ease-in-out;
}

.test4 {
  @include tr(width height, 400, cubic-bezier(1, .5, .8, 1), 100);
}

// CSS result
.test4 {
  transition: width 400ms cubic-bezier(1, 0.5, 0.8, 1) 100ms, height 400ms cubic-bezier(1, 0.5, 0.8, 1) 100ms;
}

```
