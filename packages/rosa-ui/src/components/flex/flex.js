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

const propTypes = {
    width: string,
    height: string,
    direction: oneOf(['row', 'column']),
    center: bool,
    spacing: string,
    className: string,
    children: any
};

const defaultProps = {
    direction: 'row'
};

const RuiFlex = (props) => {

    const { cid } = useBase('RuiFlex');

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-flex', cid, `rui-flex-${props.direction}`, {
            'rui-flex-center': props.center,
            'rui-flex-spacing': props.spacing
        }, props.className]);
    }, [cid, props]);

    const styleList = useMemo(() => {
        return {
            width: props.width,
            height: props.height,
            '--rui-flex-spacing': props.spacing
        };
    }, [props]);

    return (
        <div className={classList} style={styleList}>{props.children}</div>
    );

};

RuiFlex.propTypes = propTypes;
RuiFlex.defaultProps = defaultProps;

export default RuiFlex;
