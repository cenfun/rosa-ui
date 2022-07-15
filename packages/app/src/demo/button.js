import React, { useState } from 'react';
import { components } from 'rebutia-ui';

const DemoButton = () => {

    const { RuiButton, RuiFlex } = components;

    const [count, setCount] = useState(0);
    const onCount = (e) => {
        setCount(count + 1);
    };

    return (
        <RuiFlex spacing="10px">

            <RuiButton label={`Label ${count}`} onClick={onCount} />

            <RuiButton onClick={onCount}>
                <b>Slot</b> { count }
            </RuiButton>

            <RuiButton disabled>
                Disabled
            </RuiButton>

            <RuiButton
                primary
                tooltip="This is Button tooltip"
            >
                Button Primary
            </RuiButton>
        </RuiFlex>
    );
};

export default DemoButton;
