import {
    string,
    bool,
    func,
    any
} from 'prop-types';

import React, { useMemo } from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './button.scss';

const propTypes = {
    label: any,
    primary: bool,
    type: string,
    disabled: bool,
    onClick: func,
    className: string,
    children: any
};

const defaultProps = {
    type: 'button'
};

const RuiButton = (props) => {

    const { cid } = useBase('RuiButton');

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-button', cid, {
            'rui-button-primary': props.primary
        }, props.className]);
    }, [cid, props]);

    return (
        <button type={props.type} disabled={props.disabled} className={classList} onClick={props.onClick}>
            {props.label || props.children}
        </button>
    );

};

RuiButton.propTypes = propTypes;
RuiButton.defaultProps = defaultProps;

export default RuiButton;
