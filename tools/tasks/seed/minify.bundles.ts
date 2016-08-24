import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import { join } from 'path';

import { JS_DEST, JS_PROD_APP_BUNDLE, JS_PROD_SHIMS_BUNDLE } from '../../config';

const closureCompiler = require('google-closure-compiler').gulp();

const getTask = (target: string, destDir: string) => {
  return gulp.src(join(destDir, target))
    .pipe(closureCompiler({
        // upstream had used ECMASCRIPT_STRICT but that cause errors with some modules (possible firebase or shim.js)
        language_out: 'ECMASCRIPT5',
        js_output_file: target
      }))
    .pipe(gulp.dest(destDir));
};

export = () => {
  return merge(
    getTask(JS_PROD_APP_BUNDLE, JS_DEST),
    getTask(JS_PROD_SHIMS_BUNDLE, JS_DEST)
  );
};
