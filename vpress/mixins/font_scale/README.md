---
lang: en-US
title: SCSS Font Scale Mixin | CSSCODER
---

# Font Scale mixin (adaptive font size)

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

#### font-scale([a, b, c, d])
| params            | Description                           | default       |
| :-------------    |:-------------                         | :----------   |
| **a**             | min font size in 'px'                 | 14px          |
| **b**             | max font size in 'px'                 | 16px          |
| **c**             | min width when we start scaling (values is name of breackpoints, by default: xs, sm ...)       | xs       |
| **d**             | max width when we start scaling (values is name of breackpoints, by default: xs, sm ...)       | xl       |


#### Base using for list

```scss{2,23}
.text {
  @include font-scale;
}

// CSS result
// outline: 0.0001vw; - this fix for Safari resize calc re-render
.text {
  font-size: 14px;
}
@media only screen and (min-width: 480px) {
  .text {
    font-size: calc( 0.28vw + 12.656px );
    outline: 0.0001vw;
  }
}
@media only screen and (min-width: 1200px) {
  .text {
    font-size: 16px;
  }
}

.text2 {
  @include font-scale(12px, 24px, xs, lg);
}

// CSS result
.text2 {
  font-size: 12px;
}
@media only screen and (min-width: 480px) {
  .text2 {
    font-size: calc( 2.34vw + 0.768px );
    outline: 0.0001vw;
  }
}
@media only screen and (min-width: 992px) {
  .text2 {
    font-size: 24px;
  }
}
```

#### Base examples

<p class="codepen" data-height="477" data-theme-id="2386" data-default-tab="result" data-user="csscoder" data-slug-hash="mdeJxBR" style="height: 477px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSSCODER MIX - Font scale CSS  - Ex2">
  <span>See the Pen <a href="https://codepen.io/csscoder/pen/mdeJxBR">
  CSSCODER MIX - Font scale CSS  - Ex2</a> by Alexander Zidyganov (<a href="https://codepen.io/csscoder">@csscoder</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
