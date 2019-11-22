import test from "ava";
const fs = require('fs');
import getCSS from '../_getCSS';

test('Check column mixins', t => {
  let scss = fs.readFileSync('./test/column/index.scss').toString();
  let successCSS = fs.readFileSync('./test/column/index.css').toString();
  let resultCSS = getCSS(scss);
  t.is(resultCSS, successCSS);
});

