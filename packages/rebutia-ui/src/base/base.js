import Util from '../util/util.js';
import './base.scss';

let _uid = 1;

export const useBase = function(target) {

    //unique id
    const uid = `${_uid++}`;
    //component id, instance id, rui-name-uid
    const kebab = Util.pascalToKebabCase(target.name);
    const cid = `${kebab}-${uid}`;

    return {
        uid,
        cid
    };
};


export default {
    useBase
};
