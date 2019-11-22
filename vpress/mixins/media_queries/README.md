---
lang: en-US
title: SCSS Media Queries Mixin | CSSCODER
---

# Media Queries Mixin

### Using
```scss{2,3,4,5}
.block {
  @include mq(xl) {...}
  @include mq-less(sm) {...}
  @include mq-only(md) {...}
  @include mq-range(md, lg) {...}
}
```

### Breakpoints by default 
Available names of media queries breakpoints

| Name          | Value         | Associate          |
| :-------------|:------------- | :----------        |
| **xs**            | 480px         | extra small        |
| **sm**            | 576px         | small              |
| **md**            | 768px         | medium             |
| **lg**            | 992px         | large              |
| **xl**            | 1200px        | extra large        |
| **xxl**           | 1600px        | double extra large |

### Default variables
```scss
$ss-media-type: 'only screen' !default;
$ss-media-breakpoints: (
  xs: 480px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1600px
) !default;
```

### Available variants to use
| Name of mixin          | Example         | Associate     |
| :-------------|:------------------- | :----------        |
| **mq**| mq($bp){} | (min-width: $bp){}         |
| **mq-less**| mq-less($bp){} | (max-width: $bp){}         |
| **mq-only**| mq-only($bp){} | (min-width: $bp) and (max-width: $bpNext){}         |
| **mq-range**| mq-range($bp1, $bp2){} | (min-width: $bp1) and (max-width: $bp2){}         |


## mq(x)
result, we will get ```@media only screen and (min-width: ...px){...}```
```scss{4,14}
.block {
  display: block;

  @include mq(sm) {
    display: none;
  }
}

// CSS result
.block {
  display: block;
}

@media only screen and (min-width: 576px) {
  .block {
    display: none;
  }
}
```

## mq-less(x)
result, we will get ```@media only screen and (max-width: ...px){...}```
```scss{4,14}
.block {
  display: block;

  @include mq-less(md) {
    display: flex;
  }
}

// CSS result
.block {
  display: block;
}

@media only screen and (max-width: 767px) {
  .block {
    display: flex;
  }
}
```

## mq-only(x)
result, we will get ```@media only screen and(min-width: ...px) and (max-width: ...px){...}```
```scss{4,14}
.block {
  display: block;

  @include mq-only(lg) {
    display: none;
  }
}

// CSS result
.block {
  display: block;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .block {
    display: none;
  }
}
```

## mq-range(x,y)
**Order is not important**, at result, we will get ```@media only screen and(min-width: ...px) and (max-width: ...px){...}```
```scss{4,8,18,24}
.block {
  display: block;

  @include mq-range(lg, sm) {
    display: none;
  }

  @include mq-range(lg, xl) {
    display: flex;
  }
}

// CSS result
.block {
  display: block;
}

@media only screen and (min-width: 576px) and (max-width: 991px) {
  .block {
    display: none;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .block {
    display: flex;
  }
}

```


## Customize
You can customize this, change value, change length, and change name steps.
For this, you must create variable before importing to your main SCSS file.
```scss{14}
$media_breakpoints: (
  phone: 576px,
  tablet: 768px,
  laptop: 992px,
  decktop: 1200px
);

@import "csscoder-ui/src/mixins/csscoder-mixins";

// and now you can use it like this

.block {
  display: block;
  @include mq-range(phone, tablet) {
    display: none;
  }
}
```
at result
```css{4}
.block {
  display: block;
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .block {
    display: none;
  }
}
```
