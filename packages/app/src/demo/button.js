import React from 'react';

import { components } from 'rebutia-ui';

const { RuiButton, RuiFlex } = components;

export default class DemoButton extends React.Component {
    render() {
        return (
            <RuiFlex spacing="10px">
                <RuiButton><b>Bold</b> Button Name</RuiButton>
                <RuiButton label="Button Label"></RuiButton>
                <RuiButton primary>Button Primary</RuiButton>
                <RuiButton disabled>Button Disabled</RuiButton>
            </RuiFlex>
        );
    }
}
