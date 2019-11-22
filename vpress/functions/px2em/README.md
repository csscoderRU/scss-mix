---
lang: en-US
---

# PX to EM
I often use this function, it's very helpful for create responsive sites where scalable elements use often. 

By default, a base font size I accept as ```$ss-base-font-size = 16px;```. In my work it's a font-size for ```<body>``` tag. Below you can see how I set this value.
```css
html {
  font-size: 10px;
}

body {
  font-size: 1.6rem;
}
```

### Our parent has font-size 16px

```scss{4,5,10,11}
// parent element has 16px font-size

.test {
  font-size: em(10);
  font-size: em(10px); 
}

// result CSS
.test {
  font-size: 0.625em;
  font-size: 0.625em;
}
```

### Our parent has not font-size 16px
When we have different value for parent element we must set this size;
```scss{4,7,13,17}
// parent element has 16px font-size

.test{ 
  font-size: em(24px);

  &__element {
    min-width: em(140px, 24px);
  }
}

// result CSS
.test {
  font-size: 1.5em; //16*1.5 = 24
}

.test__element {
  min-width: 5.8333em; // 24*5.8333 = 139.9992
}
```


### When we have group values in one property
```scss{4,7,11,17,21,25}
// parent element has 16px font-size

.test{ 
  padding: em(24px 44px);

  &__element {
    padding: em(12px 24px 10px);
  }

  &__element2 {
    padding: em(12px 24px 10px 8px);
  }
}

// result CSS
.test {
  padding: 1.5em 2.75em;
}

.test__element {
  padding: 0.75em 1.5em 0.625em;
}

.test__element2 {
  padding: 0.75em 1.5em 0.625em 0.5em;
}
```

### Work with negative values

```scss{4,7,11,17,21,25}
// parent element has 16px font-size

.test{ 
  margin: em(24px -44px);

  &__element {
    margin: em(12px 24px -10px);
  }

  &__element2 {
    margin: em(12px 24px -10px 8px);
  }
}

// CSS result
.test {
  margin: 1.5em -2.75em;
}

.test__element {
  margin: 0.75em 1.5em -0.625em;
}

.test__element2 {
  margin: 0.75em 1.5em -0.625em 0.5em;
}
```
