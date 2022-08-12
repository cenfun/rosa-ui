
import {
    string,
    oneOf,
    bool,
    any
} from 'prop-types';


import React, {
    useMemo, useState, useRef, useEffect
} from 'react';
import { createPortal } from 'react-dom';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './flyover.scss';

const RuiFlyover = (props) => {

    const {
        width = '50%',
        position = 'right',
        visible = false,
        className,
        children
    } = props;

    const { cid } = useBase('RuiFlyover');
    const classList = useMemo(() => {
        return classMap(['rui', 'rui-flyover', cid, `rui-flyover-${position}`, className]);
    }, [cid, position, className]);

    const el = useRef(null);

    const [state] = useState({
        firstUpdated: false,
        hasStarted: false,
        visible: visible,
        $el: null
    });

    const [dataWidth, setDataWidth] = useState(width);

    const styleList = useMemo(() => {
        return {
            width: dataWidth
        };
    }, [dataWidth]);

    const getBodyClass = () => {
        if (position === 'left') {
            return '';
        }
        if (state.$el.parentNode) {
            return 'rui-flyover-overflow-hidden';
        }
        return '';
    };

    const lockBody = (lock) => {
        const bc = getBodyClass();
        if (!bc) {
            return;
        }
        //for body hide scrollbar when animation
        const cl = document.body.classList;
        if (lock) {
            cl.add(bc);
        } else {
            cl.remove(bc);
        }
    };


    const animationHandler = () => {
        console.log('animationHandler', state.visible);
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


        const nv = visible;
        const ov = state.visible;

        console.log('onStart', nv, ov);

        if (nv === ov) {
            return;
        }

        if (state.hasStarted) {
            onEnd(ov);
        }
        lockBody(true);
        unbindEvents();
        const cl = state.$el.classList;
        if (nv) {
            cl.add(`rui-slide-in-${position}`, 'rui-flyover-show');
            setDataWidth(width);
        } else {
            cl.add(`rui-slide-out-${position}`);
        }
        state.hasStarted = true;
        bindEvents();
    };

    const onEnd = (v) => {
        console.log('onEnd', v);
        state.hasStarted = false;
        lockBody(false);
        unbindEvents();
        const cl = state.$el.classList;
        if (v) {
            cl.remove(`rui-slide-in-${position}`);
        } else {
            cl.remove(`rui-slide-out-${position}`, 'rui-flyover-show');
            setDataWidth('0px');
        }
    };


    useEffect(() => {

        setDataWidth(width);

        if (state.firstUpdated) {

            onStart();
            state.visible = visible;

        } else {

            state.firstUpdated = true;
            state.$el = el.current;
            onStart();

        }

        return () => {
            unbindEvents();
            lockBody(false);
        };

    }, [width, visible]);

    return createPortal(
        <div ref={el} className={classList} style={styleList}>{children}</div>,
        document.body
    );

};


RuiFlyover.propTypes = {
    width: string,
    position: oneOf(['right', 'left']),
    visible: bool,
    className: string,
    children: any
};

export default RuiFlyover;
