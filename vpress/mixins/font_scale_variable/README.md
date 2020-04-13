---
lang: en-US
title: SCSS Font Scale Mixin by CSS variables | CSSCODER
---

# Font Scale mixin by CSS variables (adaptive font size)

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
$ss-start-step-font-scale: xs !default;
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
  --ssfz: calc(var(--minfz) * 1px);
}

@include mq(#{$ss-start-step-font-scale}) {
  * {
    --ssfz: calc(((var(--maxfz) - var(--minfz)) / (#{($_font-scale-var-max-width - $_font-scale-var-min-width) / 100 })) * 1vw + (var(--minfz) - ((var(--maxfz) - var(--minfz)) / (#{$_font-scale-var-max-width - $_font-scale-var-min-width})) * #{$_font-scale-var-min-width}) * 1px);
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
  --ssfz: calc(var(--minfz) * 1px);
}

@media only screen and (min-width: 480px) {
  * {
    --ssfz: calc(((var(--maxfz) - var(--minfz)) / (7.2)) * 1vw + (var(--minfz) - ((var(--maxfz) - var(--minfz)) / (720)) * 480) * 1px);
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
  --maxfz: 46;
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

#### Base examples
<p class="codepen" data-height="478" data-theme-id="2386" data-default-tab="result" data-user="csscoder" data-slug-hash="RwWPVWO" style="height: 478px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - Font scale CSS variable - Ex1">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/RwWPVWO">
  CSSCODER MIX - Font scale CSS variable - Ex1</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
