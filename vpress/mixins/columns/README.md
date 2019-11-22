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
