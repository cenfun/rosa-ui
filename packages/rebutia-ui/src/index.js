import Util from './util/util.js';
import RuiBase from './base/base.js';

import generateComponents from './util/generate-components.js';

const context = require.context('./components', true, /\.js$/);
const components = generateComponents(context);

export {
    Util,
    RuiBase,
    components
};

export default components;
