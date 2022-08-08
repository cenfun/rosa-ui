import {
    string,
    oneOf,
    bool,
    any
} from 'prop-types';

import React from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './flex.scss';

const RuiFlex = ({
    width,
    height,
    direction = 'row',
    center,
    spacing,
    children
}) => {

    const { cid } = useBase('RuiFlex');
    const className = classMap(['rui', 'rui-flex', cid, `rui-flex-${direction}`, {
        'rui-flex-center': center,
        'rui-flex-spacing': spacing
    }]);

    const styleMap = {
        width,
        height,
        '--rui-flex-spacing': spacing
    };

    //console.log(styleMap);

    return (
        <div className={className} style={styleMap}>{children}</div>
    );

};

RuiFlex.propTypes = {
    width: string,
    height: string,
    direction: oneOf(['row', 'column']),
    center: bool,
    spacing: string,
    children: any
};

export default RuiFlex;
