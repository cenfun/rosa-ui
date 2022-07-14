import PropTypes from 'prop-types';

import React from 'react';
import RuiBase from '../../base/base.js';
import Util from '../../util/util.js';
import './button.scss';

export default class RuiButton extends RuiBase {

    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.node,
        primary: PropTypes.bool,
        disabled: PropTypes.bool,
        children: PropTypes.node
    };

    render() {
        const {
            type, primary, disabled, label, children
        } = this.props;

        const classMap = Util.classMap(['rui', 'rui-button', this.cid, {
            'rui-button-primary': primary
        }]);

        return (
            <button type={type} disabled={disabled} className={classMap}>{label || children}</button>
        );
    }
}
