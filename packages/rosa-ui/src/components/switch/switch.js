import {
    string,
    bool,
    any
} from 'prop-types';

import React, { useMemo, useState } from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './switch.scss';

const propTypes = {
    label: string,
    colors: string,
    width: string,
    height: string,
    disabled: bool,
    checked: bool,
    model: any,
    className: string,
    children: any
};

const defaultProps = {
    width: '35px',
    height: '20px'
};

const defaultColors = ['#aaaaaa', '#1890ff'];

const RuiSwitch = (props) => {

    const { cid } = useBase('RuiSwitch');

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-switch', cid, props.className]);
    }, [cid, props]);

    let [modelValue, setModelValue] = useState(props.checked);
    if (props.model) {
        modelValue = props.model[0];
        setModelValue = props.model[1];
    }

    const buttonClassList = useMemo(() => {
        return classMap({
            'rui-switch-button': true,
            'rui-switch-checked': modelValue,
            'rui-switch-disabled': props.disabled
        });
    }, [modelValue, props]);

    const buttonStyleList = useMemo(() => {

        let bgc = modelValue ? defaultColors[1] : defaultColors[0];
        if (props.colors) {
            const ls = `${props.colors}`.split(',').map((it) => it.trim());
            if (modelValue && ls[1]) {
                bgc = ls[1];
            } else if (ls[0]) {
                bgc = ls[0];
            }
        }

        //console.log(bgc);

        return {
            'width': props.width,
            'height': props.height,
            'borderRadius': props.height,
            'backgroundColor': bgc
        };
    }, [props, modelValue]);

    const iconStyleList = useMemo(() => {
        return {
            width: `calc(${props.height} - 4px)`,
            right: modelValue ? '2px' : `calc(${props.width} - ${props.height} + 2px)`
        };
    }, [modelValue, props]);

    const labelContent = useMemo(() => {
        return props.label || props.children;
    }, [props]);

    const clickHandler = () => {
        if (props.disabled) {
            return;
        }
        setModelValue((v) => {
            return !v;
        });
    };

    return (
        <div className={classList}>
            {
                labelContent && <div className="rui-switch-label">{labelContent}</div>
            }
            <div
                className={buttonClassList}
                style={buttonStyleList}
                onClick={clickHandler}
            >
                <div
                    className="rui-switch-icon"
                    style={iconStyleList}
                />
            </div>
        </div>
    );

};

RuiSwitch.propTypes = propTypes;
RuiSwitch.defaultProps = defaultProps;

export default RuiSwitch;
