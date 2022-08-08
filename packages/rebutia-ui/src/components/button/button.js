import {
    string,
    bool,
    func,
    any
} from 'prop-types';

import React from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './button.scss';

const RuiButton = ({
    type,
    primary,
    disabled,
    onClick,
    label,
    children
}) => {

    const { cid } = useBase('RuiButton');

    const className = classMap(['rui', 'rui-button', cid, {
        'rui-button-primary': primary
    }]);

    return (
        <button type={type} disabled={disabled} className={className} onClick={onClick}>{label || children}</button>
    );

};

RuiButton.propTypes = {
    type: string,
    primary: bool,
    disabled: bool,
    onClick: func,
    label: any,
    children: any
};


export default RuiButton;
