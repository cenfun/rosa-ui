import { components } from 'rebutia-ui';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

//console.log(React, ReactDOM);

console.log(components);

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const { RuiButton, RuiFlex } = components;

root.render(
    <StrictMode>
        <RuiFlex spacing="10px">
            <RuiButton><b>Bold</b> Button Name</RuiButton>
            <RuiButton label="Button Label"></RuiButton>
            <RuiButton primary>Button Primary</RuiButton>
            <RuiButton disabled>Button Disabled</RuiButton>
        </RuiFlex>
    </StrictMode>
);
