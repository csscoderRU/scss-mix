---
lang: en-US
title: SCSS base content container Mixin | CSSCODER
---

# Base container for content box

In this mixin we use default variables, you always can set needed values in variables. Also, by default I use for all HTML TAGs ```box-sizing: border-box;```.

```scss
// default variables
$ss-layout-gutter: 30px !default;
$ss-media-breakpoints: (
  xs: 480px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1600px
) !default;
```

#### When our content is fluid box - Responsive design
```scss
.container {
  @include container-fluid;
}

// CSS result
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
```
#### When our design and content box have adaptive design
```scss
.container {
  @include container;
}

// CSS result
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 480px) {
  .container {
    max-width: 450px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 546px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 738px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 962px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
@media (min-width: 1600px) {
  .container {
    max-width: 1570px;
  }
}
```

You can use variants adaptive + responsive 

```scss
// start adaptive by 'lg' breakpoint
.container {
  @include container(lg);
}

// CSS result
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 992px) {
  .container {
    max-width: 962px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
@media (min-width: 1600px) {
  .container {
    max-width: 1570px;
  }
}
```

```scss
// End breakpoint for responsive 'lg', fix max width for content box
.container {
  @include container(lg, true);
}

// CSS result
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 992px) {
  .container {
    max-width: 962px;
  }
}
```
