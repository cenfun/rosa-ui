import PropTypes from 'prop-types';

import React from 'react';
import RuiBase from '../../base/base.js';
import Util from '../../util/util.js';
import './button.scss';

export default class RuiButton extends RuiBase {

    static propTypes = {
        label: PropTypes.node,
        primary: PropTypes.bool,
        disabled: PropTypes.bool,
        children: PropTypes.node
    };

    render() {
        const {
            primary, disabled, children
        } = this.props;

        const classList = ['rui', 'rui-button', this.cid];
        if (primary) {
            classList.push('rui-button-primary');
        }

        return (
            <button disabled={disabled} className={Util.classMap(classList)}>{children}</button>
        );
    }
}
