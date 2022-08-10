import {
    string,
    oneOf,
    bool,
    any
} from 'prop-types';

import React, { useMemo } from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './flex.scss';

const RuiFlex = (props) => {

    const {
        width,
        height,
        direction = 'row',
        center,
        spacing,
        className,
        children
    } = props;

    const { cid } = useBase('RuiFlex');

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-flex', cid, `rui-flex-${direction}`, {
            'rui-flex-center': center,
            'rui-flex-spacing': spacing
        }, className]);
    }, [cid, direction, center, spacing, className]);

    const styleList = useMemo(() => {
        return {
            width,
            height,
            '--rui-flex-spacing': spacing
        };
    }, [width, height, spacing]);

    return (
        <div className={classList} style={styleList}>{children}</div>
    );

};

RuiFlex.propTypes = {
    width: string,
    height: string,
    direction: oneOf(['row', 'column']),
    center: bool,
    spacing: string,
    className: string,
    children: any
};

export default RuiFlex;
