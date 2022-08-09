import {
    bool,
    func,
    any,
    array,
    string
} from 'prop-types';

import React, { useMemo } from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './checkbox.scss';

const RuiCheckbox = ({
    checked,
    onChange,
    model,
    disabled,
    label,
    className,
    children
}) => {

    const { cid } = useBase('RuiCheckbox');
    const classList = useMemo(() => {
        return classMap(['rui', 'rui-checkbox', cid, className]);
    }, [cid, className]);

    if (model) {
        checked = model[0];
        const setChecked = model[1];
        onChange = (e) => {
            setChecked(e.target.checked);
        };
    }

    return (
        <div className={classList}>
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
    className: string,
    children: any
};

export default RuiCheckbox;
