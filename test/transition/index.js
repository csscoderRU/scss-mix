import test from "ava";
const fs = require('fs');
import getCSS from '../_getCSS';

test('Check transition mixins', t => {
  let scss = fs.readFileSync('./test/transition/index.scss').toString();
  let successCSS = fs.readFileSync('./test/transition/index.css').toString();
  let resultCSS = getCSS(scss);
  t.is(resultCSS, successCSS);
});

