import PropTypes from 'prop-types';

import React from 'react';
import RuiBase from '../../base/base.js';
import Util from '../../util/util.js';
import './flex.scss';

export default class RuiFlex extends RuiBase {

    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,

        center: PropTypes.bool,
        spacing: PropTypes.string,

        direction: PropTypes.oneOf(['row', 'column']),

        children: PropTypes.node
    };

    static defaultProps = {
        direction: 'row'
    };

    render() {
        const {
            width, height, center, direction, spacing, children
        } = this.props;

        const classMap = Util.classMap(['rui', 'rui-flex', this.cid, `rui-flex-${direction}`, {
            'rui-flex-center': center,
            'rui-flex-spacing': spacing
        }]);

        const styleMap = {
            width,
            height,
            '--rui-flex-spacing': spacing
        };

        //console.log(styleMap);

        return (
            <div className={classMap} style={styleMap}>{children}</div>
        );
    }
}
