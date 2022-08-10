import React, { useState } from 'react';
import { components } from 'rosa-ui';

const DemoSwitch = () => {
    const { RuiFlex, RuiSwitch } = components;

    const switchModel = useState(false);
    const switchValue = switchModel[0];

    return (
        <RuiFlex spacing="10px">
            <RuiSwitch model={switchModel}>switch:</RuiSwitch>
            <RuiSwitch checked>checked:</RuiSwitch>
            <RuiSwitch model={switchModel} disabled>disabled:</RuiSwitch>

            <RuiSwitch colors="darkred, green">colors:</RuiSwitch>

            <RuiSwitch
                model={switchModel}
                width="28px"
                height="16px"
                colors=",green"
            >small:</RuiSwitch>

            <RuiSwitch
                model={switchModel}
                tooltip="This is switch tooltip"
            />

            <RuiSwitch
                width="45px"
                height="24px"
                checked
            >large: { `${switchValue}` }</RuiSwitch>
        </RuiFlex>
    );

};

export default DemoSwitch;
