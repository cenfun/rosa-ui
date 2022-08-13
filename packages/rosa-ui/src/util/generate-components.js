import { createComponent } from '../base/base.js';
import { kebabToPascalCase } from './util.js';

export default function(context) {

    const components = {};

    const paths = context.keys();
    //console.log(paths);

    paths.forEach((path) => {

        //console.log(path);

        //get folder name
        //kebab case, custom element names must contain a hyphen.
        const list = path.toLowerCase().split('/');

        //file and folder should be same
        const fileName = list.pop();
        const folderName = list.pop();

        // "./button/button.js"
        // "./path-to/grid/grid.js"

        // entry file name must be same with folder name
        if (fileName !== `${folderName}.js`) {
            //console.log(`ignore ${path}`);
            return;
        }

        const TagName = kebabToPascalCase(`rui-${folderName}`);

        //esModule default
        const Component = context(path).default;

        Component.createComponent = createComponent;

        // no private component
        if (Component.private) {
            return;
        }

        components[TagName] = Component;
    });

    //console.log(components);
    return components;
}
