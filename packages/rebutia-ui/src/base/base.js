import { useState } from 'react';
import { pascalToKebabCase } from '../util/util.js';
import './base.scss';

let _uid = 1;

export const useBase = function(name) {

    //unique id
    const [uid] = useState(`${_uid++}`);
    //component id, instance id, rui-name-uid
    const [cid] = useState(`${pascalToKebabCase(name)}-${uid}`);

    //console.log(cid, name);

    return {
        uid,
        cid
    };
};


export default {
    useBase
};
