import generateComponents from './util/generate-components.js';

const context = require.context('./components', true, /\.js$/);
const components = generateComponents(context);

export { components };

export default components;
