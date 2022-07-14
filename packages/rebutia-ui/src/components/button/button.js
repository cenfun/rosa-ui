import PropTypes from 'prop-types';

import React from 'react';
import './button.css';

export default class RuiButton extends React.Component {

    static propTypes = {
        disabled: PropTypes.bool,
        children: PropTypes.node
    };

    render() {
        const { children, disabled } = this.props;

        return (
            <button disabled={disabled} className="rui-button">{children}</button>
        );
    }
}
