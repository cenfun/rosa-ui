import React, { useState } from 'react';
import RosaUI from 'rosa-ui';
const { RuiButton, RuiFlex } = RosaUI;

const DemoButton = () => {

    const [count, setCount] = useState(0);
    const onCount = (v) => {
        return (e) => {
            setCount(count + v);
        };
    };

    return (
        <RuiFlex spacing="10px">

            <RuiButton label={`Label + ${count}`} onClick={onCount(1)} />

            <RuiButton onClick={onCount(-1)}><b>Slot</b> - { count }</RuiButton>

            <RuiButton disabled>Disabled</RuiButton>

            <RuiButton primary tooltip="This is Button tooltip">Button Primary</RuiButton>

        </RuiFlex>
    );
};

export default DemoButton;
