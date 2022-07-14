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
        const k = Util.pascalToKebabCase(this.constructor.name).toLowerCase();
        this.cid = `${k}-${this.uid}`;
    }

    render() {
        return 'Hello Base Component';
    }

}

export default RuiBase;
