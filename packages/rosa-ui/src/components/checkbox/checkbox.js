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

const propTypes = {
    checked: bool,
    disabled: bool,
    onChange: func,
    model: array,
    label: any,
    className: string,
    children: any
};

const defaultProps = {
    onChange: () => {}
};

const RuiCheckbox = (props) => {

    const { cid } = useBase('RuiCheckbox');
    const classList = useMemo(() => {
        return classMap(['rui', 'rui-checkbox', cid, props.className]);
    }, [cid, props]);

    let checked = props.checked;
    let setChecked = (v) => {
        checked = v;
    };

    if (props.model) {
        checked = props.model[0];
        setChecked = props.model[1];
    }

    const onChange = (e) => {
        setChecked(e.target.checked);
        props.onChange(e);
    };

    return (
        <div className={classList}>
            <input id={cid} checked={checked} onChange={onChange} disabled={props.disabled} type="checkbox" />
            <label htmlFor={cid}>
                {props.label || props.children}
            </label>
        </div>
    );

};

RuiCheckbox.propTypes = propTypes;
RuiCheckbox.defaultProps = defaultProps;

export default RuiCheckbox;
