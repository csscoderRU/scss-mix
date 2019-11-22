import test from "ava";
const fs = require('fs');
import getCSS from '../_getCSS';

test('Check _strip-unit function', async t => {
  let scss = fs.readFileSync('./test/strip-units/index.scss').toString();
  let successCSS = fs.readFileSync('./test/strip-units/index.css').toString();
  let resultCSS = getCSS(scss);
  t.is(resultCSS, successCSS);
});
