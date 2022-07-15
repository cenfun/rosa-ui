import {
    bool,
    func,
    any
} from 'prop-types';

import React from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './checkbox.scss';

const RuiCheckbox = ({
    checked,
    disabled,
    onChange,
    label,
    children
}) => {

    const { cid } = useBase(RuiCheckbox);
    const className = classMap(['rui', 'rui-checkbox', cid]);

    return (
        <div className={className}>
            <input id={cid} disabled={disabled} checked={checked} onChange={onChange} type="checkbox" />
            <label htmlFor={cid}>{label || children}</label>
        </div>
    );

};

RuiCheckbox.propTypes = {
    checked: bool,
    disabled: bool,
    onChange: func,
    label: any,
    children: any
};

export default RuiCheckbox;
