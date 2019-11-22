---
lang: en-US
title: Auxiliary SCSS function | CSSCODER
---
# Auxiliary functions SCSS

These functions do not using in real coding.

## Raise a number to a power
#### _pow(x, n)

```scss{3,7}
// scss
.block {
  line-height: _pow(10, 3); //10*10*10
}
// css result
.block {
  line-height: 1000;
} 
```


## Strip units
Strip units from value and returns the numeric value

#### _strip-unit(x)

```scss{3,7}
// scss
.block {
  line-height: _strip-unit(1.2em);
}
// css result
.block {
  line-height: 1.2;
} 
```

## Round a number
Round a number to a specified decimal precision
#### ss-precision-round(x,[y])

```scss{3,4,5,9,10,11}
// scss
.block {
  line-height: ss-precision-round(1.33333333333, 3);
  line-height: ss-precision-round(1.77777777777, 3);
  line-height: ss-precision-round(1.77777777777);
}
// css result
.block {
  line-height: 1.333;
  line-height: 1.778;
  line-height: 1.77778;
} 
```

