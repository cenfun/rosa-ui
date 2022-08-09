import {
    string,
    bool,
    any
} from 'prop-types';

import React, { useMemo, useState } from 'react';
import { useBase } from '../../base/base.js';
import { classMap } from '../../util/util.js';
import './switch.scss';

const defaultColors = ['#aaaaaa', '#1890ff'];

const RuiSwitch = (props) => {

    const {
        label = '',
        colors,
        width = '35px',
        height = '20px',
        disabled,
        checked,
        model,
        className,
        children
    } = props;

    const { cid } = useBase('RuiSwitch');

    const classList = useMemo(() => {
        return classMap(['rui', 'rui-switch', cid, className]);
    }, [cid, className]);

    let [modelValue, setModelValue] = useState(checked);
    if (model) {
        modelValue = model[0];
        setModelValue = model[1];
    }

    const buttonClassList = useMemo(() => {
        return classMap({
            'rui-switch-button': true,
            'rui-switch-checked': modelValue,
            'rui-switch-disabled': disabled
        });
    }, [modelValue, disabled]);

    const buttonStyleList = useMemo(() => {

        let bgc = modelValue ? defaultColors[1] : defaultColors[0];
        if (colors) {
            const ls = `${colors}`.split(',').map((it) => it.trim());
            if (modelValue && ls[1]) {
                bgc = ls[1];
            } else if (ls[0]) {
                bgc = ls[0];
            }
        }

        //console.log(bgc);

        return {
            'width': width,
            'height': height,
            'borderRadius': height,
            'backgroundColor': bgc
        };
    }, [width, height, modelValue, colors]);

    const iconStyleList = useMemo(() => {
        return {
            width: `calc(${height} - 4px)`,
            right: modelValue ? '2px' : `calc(${width} - ${height} + 2px)`
        };
    }, [modelValue, width, height]);

    const labelContent = useMemo(() => {
        return label || children;
    }, [label, children]);

    const clickHandler = () => {
        if (disabled) {
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

RuiSwitch.propTypes = {
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

export default RuiSwitch;
