import path from 'path';
import fs from 'fs';
import lessToJs from 'less-vars-to-js';

/**
 * less-vars-to-js
 * this package enable translate less to js
 * for more details, see https://github.com/michaeltaranto/less-vars-to-js
 */

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './index.less'), 'utf8'),
);

export default themeVariables;
