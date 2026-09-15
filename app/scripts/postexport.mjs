// GitHub Pages runs Jekyll over a branch-based source, and Jekyll drops every
// path that starts with an underscore — which is where Expo puts the whole
// bundle (_expo/static/js/web/...). Without this marker the page loads and the
// script tag 404s, so the app renders as a blank white screen.
//
// `expo export` doesn't emit it, and it clears the output dir on each run, so
// it has to be written after every export.
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const docs = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'docs');
writeFileSync(join(docs, '.nojekyll'), '');
console.log('wrote docs/.nojekyll (keeps Jekyll from stripping _expo/)');
