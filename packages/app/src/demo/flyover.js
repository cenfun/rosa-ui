import React, { useState } from 'react';
import { components } from 'rosa-ui';

const DemeFlyover = () => {
    const {
        RuiButton, RuiFlex, RuiSelect
    } = components;

    const [flyoverVisible, setVisible] = useState(false);

    const flyoverWidth = useState('30%');
    const flyoverPosition = useState('right');

    const onClick = (v) => {
        return (e) => {
            setVisible(v);
        };
    };

    return (
        <RuiFlex spacing="10px">

            {flyoverPosition[0] === 'left' && <div className="rui-flex-empty"/> }

            <RuiSelect model={flyoverWidth}>
                <option>30%</option>
                <option>50%</option>
                <option>60%</option>
                <option>100px</option>
            </RuiSelect>

            <RuiSelect model={flyoverPosition}>
                <option>right</option>
                <option>left</option>
            </RuiSelect>

            <RuiButton onClick={onClick(!flyoverVisible)}>Toggle</RuiButton>

            <RuiButton onClick={onClick(true)}>Show</RuiButton>

            <RuiButton onClick={onClick(false)}>Hide</RuiButton>

            {flyoverPosition[0] === 'right' && <div className="rui-flex-empty"/> }

        </RuiFlex>
    );

};

export default DemeFlyover;
