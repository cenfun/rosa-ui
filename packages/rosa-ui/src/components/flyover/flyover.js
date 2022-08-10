
import {
    string,
    oneOf,
    bool,
    any
} from 'prop-types';


import React, { useMemo } from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './flyover.scss';

const RuiFlyover = (props) => {

    const {
        //width,
        position = 'row',
        //visible = true,
        className,
        children
    } = props;

    const { cid } = useBase('RuiFlyover');
    const classList = useMemo(() => {
        return classMap(['rui', 'rui-flyover', cid, `rui-flyover-${position}`, className]);
    }, [cid, position, className]);

    const styleMap = {

    };

    return (
        <div className={classList} style={styleMap}>{children}</div>
    );

};


RuiFlyover.propTypes = {
    width: string,
    position: oneOf(['right', 'left']),
    visible: bool,
    className: string,
    children: any
};

export default RuiFlyover;
