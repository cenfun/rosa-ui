import React from 'react';
import Util from '../util/util.js';
import './base.scss';

let uid = 1;
class RuiBase extends React.Component {

    constructor() {
        super();
        //unique id
        this.uid = `${uid++}`;
        //component id, instance id, lui-name-uid
        const kebab = Util.pascalToKebabCase(this.constructor.name);
        this.cid = `${kebab}-${this.uid}`;
    }

    render() {
        return 'Hello Base Component';
    }

}

export default RuiBase;
