
import {
    string,
    oneOf,
    bool,
    any
} from 'prop-types';


import React from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './flyover.scss';

const RuiFlyover = ({
    width,
    position = 'row',
    visible = true,
    children
}) => {

    const { cid } = useBase('RuiFlyover');
    const className = classMap(['rui', 'rui-flyover', `rui-flyover-${position}`, cid]);

    const styleMap = {

    };

    return (
        <div className={className} style={styleMap}>{children}</div>
    );

};


RuiFlyover.propTypes = {
    width: string,
    position: oneOf(['right', 'left']),
    visible: bool,
    children: any
};

export default RuiFlyover;
