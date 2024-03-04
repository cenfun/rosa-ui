
import {
    string,
    oneOf,
    bool,
    any
} from 'prop-types';


import React, {
    useMemo, useState, useRef, useEffect
} from 'react';

import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './flyover.scss';

const propTypes = {
    width: string,
    position: oneOf(['right', 'left']),
    visible: bool,
    className: string,
    children: any
};

const defaultProps = {
    width: '50%',
    position: 'right'
};

const RuiFlyover = (props) => {

    const { cid } = useBase('RuiFlyover');

    // console.log(cid, props);

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-flyover', cid, `rui-flyover-${props.position}`, props.className]);
    }, [cid, props]);

    const el = useRef(null);

    const [state] = useState({
        mounted: false,
        visible: false,
        $el: null,
        hasStarted: false
    });

    const [dataWidth, setDataWidth] = useState(props.width);

    const styleList = useMemo(() => {
        return {
            width: dataWidth
        };
    }, [dataWidth]);

    const animationHandler = () => {
        // console.log('animationHandler', state.visible);
        onEnd(state.visible);
    };

    const bindEvents = () => {
        if (state.$el) {
            state.$el.addEventListener('animationend', animationHandler);
        }
    };

    const unbindEvents = () => {
        if (state.$el) {
            state.$el.removeEventListener('animationend', animationHandler);
        }
    };

    const onStart = () => {


        const nv = props.visible;
        const ov = state.visible;

        // console.log('onStart', nv, ov);

        if (nv === ov) {
            return;
        }

        if (state.hasStarted) {
            onEnd(ov);
        }
        unbindEvents();
        const cl = state.$el.classList;
        if (nv) {
            cl.add(`rui-slide-in-${props.position}`, 'rui-flyover-show');
            setDataWidth(props.width);
        } else {
            cl.add(`rui-slide-out-${props.position}`);
        }
        state.hasStarted = true;
        bindEvents();
    };

    const onEnd = (v) => {
        // console.log('onEnd', v);
        state.hasStarted = false;
        unbindEvents();
        const cl = state.$el.classList;
        if (v) {
            cl.remove(`rui-slide-in-${props.position}`);
        } else {
            cl.remove(`rui-slide-out-${props.position}`, 'rui-flyover-show');
            setDataWidth('0px');
        }
    };

    useEffect(() => {

        // console.log(cid, 'useEffect');

        if (!state.mounted) {
            state.mounted = true;
            state.$el = el.current;
        }

        setDataWidth(props.width);
        onStart();
        state.visible = props.visible;

        return () => {
            // console.log('flyover unmount');
            unbindEvents();
        };

    }, [props]);

    return (
        <div ref={el} className={classList} style={styleList}>{props.children}</div>
    );

};


RuiFlyover.propTypes = propTypes;
RuiFlyover.defaultProps = defaultProps;

export default RuiFlyover;
