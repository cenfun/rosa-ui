
import RuiBase from './base/base.js';

import generateComponents from './util/generate-components.js';

const context = require.context('./components', true, /\.js$/);
const components = generateComponents(context);

export {
    RuiBase,
    components
};

export default components;
