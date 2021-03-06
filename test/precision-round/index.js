import test from "ava";
const fs = require('fs');
import getCSS from '../_getCSS';

test('Check _precision-round function', t => {
  let scss = fs.readFileSync('./test/precision-round/index.scss').toString();
  let successCSS = fs.readFileSync('./test/precision-round/index.css').toString();
  let resultCSS = getCSS(scss);
  t.is(resultCSS, successCSS);
});
