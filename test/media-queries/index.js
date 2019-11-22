import test from "ava";
const fs = require('fs');
import getCSS from '../_getCSS';

test('Check media queries mixins', t => {
  let scss = fs.readFileSync('./test/media-queries/index.scss').toString();
  let successCSS = fs.readFileSync('./test/media-queries/index.css').toString();
  let resultCSS = getCSS(scss);
  t.is(resultCSS, successCSS);
});

test('Check media queries mixins - customize', t => {
  let scss = fs.readFileSync('./test/media-queries/index2.scss').toString();
  let successCSS = fs.readFileSync('./test/media-queries/index2.css').toString();
  let resultCSS = getCSS(scss);
  t.is(resultCSS, successCSS);
});
