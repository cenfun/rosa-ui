import React, { useState } from 'react';
import { components } from 'rebutia-ui';

const DemoFlex = () => {

    const {
        RuiButton, RuiSelect, RuiSwitch, RuiFlex
    } = components;

    const directionModel = useState('column');
    const direction = directionModel[0];

    const centerModel = useState(false);
    const center = centerModel[0];

    const spacingModel = useState('5px');
    const spacing = spacingModel[0];

    const widthModel = useState('300px');
    const width = widthModel[0];

    const heightModel = useState('200px');
    const height = heightModel[0];

    return (
        <RuiFlex spacing="10px">
            <RuiFlex spacing="10px" direction="column">
                <RuiSelect model={directionModel}>
                    <option>row</option>
                    <option>column</option>
                </RuiSelect>

                <RuiSwitch model={centerModel}>center</RuiSwitch>

                <RuiSelect model={spacingModel}>
                    <option />
                    <option>5px</option>
                    <option>10px</option>
                    <option>15px</option>
                    <option>20px</option>
                </RuiSelect>
                <RuiSelect model={widthModel}>
                    <option>100px</option>
                    <option>200px</option>
                    <option>300px</option>
                    <option>30%</option>
                </RuiSelect>
                <RuiSelect model={heightModel}>
                    <option>100px</option>
                    <option>200px</option>
                    <option>300px</option>
                </RuiSelect>
            </RuiFlex>

            <RuiFlex
                direction={direction}
                center={center}
                spacing={spacing}
                width={width}
                height={height}
                className="rui-demo-flex-item"
            >
                <RuiButton>Button</RuiButton>
                <span>span</span>
                <button>Button</button>
                <div>div</div>
            </RuiFlex>

            <RuiFlex
                direction={direction}
                center={center}
                spacing={spacing}
                width={width}
                height={height}
                className="rui-demo-flex-item"
            >
                <RuiButton>Button</RuiButton>
                <div className="rui-flex-auto" style={{
                    background: '#eee'
                }}>
                    <span>auto</span>
                    <button>Button</button>
                </div>
                <div>div</div>
            </RuiFlex>

            <RuiFlex
                direction={direction}
                center={center}
                spacing={spacing}
                width={width}
                height={height}
                className="rui-demo-flex-item"
            >
                <RuiButton>Button</RuiButton>
                <span>span</span>
                <div className="rui-flex-empty" style={{
                    background: '#eee'
                }}>empty</div>
                <button>Button</button>
                <div>div</div>
            </RuiFlex>
        </RuiFlex>
    );
};

export default DemoFlex;
