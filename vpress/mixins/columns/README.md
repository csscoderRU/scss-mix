---
lang: en-US
title: SCSS columns Mixin | CSSCODER
---

# Mixin for create columns

By default, we use these variables.
```scss
// default variables
$ss-layout-gutter: 30px !default;
$ss-columns-size: 12 !default;
```

#### col(a, [b, c, d])
| params            | Description                           | default       |
| :-------------    |:-------------                         | :----------   |
| **a** - required  | width element (unit is column)        | -             |
| **b**             | number of items per row               | 1             |
| **c**             | gutter (it can be px, %, em ...)      | 30px          |
| **d**             | number of columns                     | 12            |

#### Base using for list
```scss{6}
.product {
  display: flex;
  flex-wrap: wrap;

  &__product {
    @include col(3, 4);
  }
}

// CSS result
.product {
  display: flex;
  flex-wrap: wrap;
}

.product__product {
  width: calc(25% - 22.58333px);
  margin-right: 30px;
}

.product__product:nth-child(4n) {
  margin-right: 0;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="csscoder" data-slug-hash="QWWPmVZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - column - Ex1">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/QWWPmVZ">
  CSSCODER MIX - column - Ex1</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


#### Base using for layout
```scss
.layout {
  display: flex;

  &__section-left {
    @include col(4, 2, 5%);
  }

  &__section-right {
    @include col(8, 2, 5%);
  }
}

// CSS result
.layout {
  display: flex;
}

.layout__section-left {
  width: 29.91632%;
  margin-right: 5%;
}

.layout__section-left:nth-child(2n) {
  margin-right: 0;
}

.layout__section-right {
  width: 64.91702%;
  margin-right: 5%;
}

.layout__section-right:nth-child(2n) {
  margin-right: 0;
}
```
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="csscoder" data-slug-hash="MWWRVPd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - column - Ex2">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/MWWRVPd">
  CSSCODER MIX - column - Ex2</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<br>
<br>
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="csscoder" data-slug-hash="zYYXWMx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - column - Ex3">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/zYYXWMx">
  CSSCODER MIX - column - Ex3</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
