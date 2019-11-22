const sass = require('node-sass');

export default function(data) {
    return sass.renderSync({
      data: data,
      includePaths: ['./src/csscoder-lib'],
      outputStyle: 'expanded'
    }).css.toString('utf8');
}
