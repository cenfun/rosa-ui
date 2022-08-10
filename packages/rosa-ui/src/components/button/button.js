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

const RuiButton = (props) => {

    const {
        type,
        primary,
        disabled,
        onClick,
        label,
        className,
        children
    } = props;

    const { cid } = useBase('RuiButton');

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-button', cid, {
            'rui-button-primary': primary
        }, className]);
    }, [cid, primary, className]);

    return (
        <button type={type} disabled={disabled} className={classList} onClick={onClick}>{label || children}</button>
    );

};

RuiButton.propTypes = {
    type: string,
    primary: bool,
    disabled: bool,
    onClick: func,
    label: any,
    className: string,
    children: any
};


export default RuiButton;
