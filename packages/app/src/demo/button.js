import React from 'react';

import { components } from 'rebutia-ui';

const { RuiButton, RuiFlex } = components;

const text = 'Text';

export default class DemoButton extends React.Component {
    render() {
        return (
            <RuiFlex spacing="10px">
                <RuiButton label="Label" />

                <RuiButton label={`Props ${text}`} />

                <RuiButton>
                    <b>Slot</b> { text }
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
    }
}
