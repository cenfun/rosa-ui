import { any, bool } from 'prop-types';

import { createPortal } from 'react-dom';

const propTypes = {
    closed: bool,
    to: any,
    children: any
};
const defaultProps = {
    closed: true,
    to: document.body
};

const RuiPortal = (props) => {
    return (
        props.closed ? null : createPortal(props.children, props.to)
    );
};

RuiPortal.propTypes = propTypes;
RuiPortal.defaultProps = defaultProps;

export default RuiPortal;

