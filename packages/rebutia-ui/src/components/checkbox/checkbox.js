import {
    bool,
    func,
    any,
    array
} from 'prop-types';

import React from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './checkbox.scss';

const RuiCheckbox = ({
    checked,
    onChange,
    model,
    disabled,
    label,
    children
}) => {

    const { cid } = useBase('RuiCheckbox');
    const className = classMap(['rui', 'rui-checkbox', cid]);

    if (model) {
        checked = model[0];
        const setChecked = model[1];
        onChange = (e) => {
            setChecked(e.target.checked);
        };
    }

    return (
        <div className={className}>
            <input id={cid} checked={checked} onChange={onChange} disabled={disabled} type="checkbox" />
            <label htmlFor={cid}>{label || children}</label>
        </div>
    );

};

RuiCheckbox.propTypes = {
    checked: bool,
    disabled: bool,
    onChange: func,
    model: array,
    label: any,
    children: any
};

export default RuiCheckbox;
