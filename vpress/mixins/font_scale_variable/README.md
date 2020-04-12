---
lang: en-US
title: SCSS Font Scale Mixin by CSS variables | CSSCODER
---

# Font Scale mixins by CSS variables

By default, we use these variables.

```scss
// default variables
$ss-media-type: 'only screen' !default;
$ss-media-breakpoints: (
  xs: 480px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1600px
) !default;
$ss-end-step-font-scale: xl !default;
```

#### font-scale-var([a, b])
| params            | Description               | default       |
| :-------------    |:-------------             | :----------   |
| **a**             | min font size in 'px'     | 12px          |
| **b**             | max font size in 'px'     | 16px          |

#### This part of SCSS code must put to common SCSS file
Adding this part to mixin file - is not correct (a сode duplication occurs)

```scss
* {
  --ssfz: calc(
    ((var(--maxfz) - var(--minfz)) / (#{($_width-max-font-scale-strip - $_width-min-font-scale-strip) / 100 })) * 1vw + (var(--minfz) - ((var(--maxfz) - var(--minfz)) / (#{$_width-max-font-scale-strip - $_width-min-font-scale-strip})) * #{$_width-min-font-scale-strip}) * 1px);
}

@include mq-less(#{nth(map-keys($ss-media-breakpoints), 1)}) {
  * {
    --ssfz: calc(var(--minfz) * 1px);
  }
}

@include mq(#{$ss-end-step-font-scale}){
  * {
    --ssfz: calc(var(--maxfz) * 1px);
  }
}
```

#### Base using 
```scss{19,32}
// CSS result - this part generate from common SCSS file and will work in project for
// all declaration with font scale by CSS variable
* {
  --ssfz: calc(
    ((var(--maxfz) - var(--minfz)) / (7.2)) * 1vw + (var(--minfz) - ((var(--maxfz) - var(--minfz)) / (720)) * 480) * 1px);
}
@media only screen and (max-width: 479px) {
  * {
    --ssfz: calc(var(--minfz) * 1px);
  }
}
@media only screen and (min-width: 1200px) {
  * {
    --ssfz: calc(var(--maxfz) * 1px);
  }
}

.text {
  @include font-scale-var(22, 46);
}

// CSS result
// outline: 0.0001vw; - this fix for Safari resize calc re-render
.text {
  --minfz: 22;
  --maxfz: 134;
  font-size: var(--ssfz);
  outline: 0.0001vw;
}

.text2 {
  @include font-scale-var(14, 28);
}

// CSS result
.text2 {
  --minfz: 14;
  --maxfz: 28;
  font-size: var(--ssfz);
  outline: 0.0001vw;
}
```
