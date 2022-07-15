import React, { useState } from 'react';
import { components } from 'rebutia-ui';

const DemoCheckbox = () => {

    const { RuiCheckbox, RuiFlex } = components;

    const [checked, setChecked] = useState(true);
    const onChecked = (e) => {
        setChecked(!checked);
    };

    return (
        <RuiFlex spacing="10px">
            <RuiCheckbox>
                Checkbox
            </RuiCheckbox>

            <RuiCheckbox checked={checked} onChange={onChecked}>
                Checked { checked }
            </RuiCheckbox>

            <RuiCheckbox model={checked}>
                Checkbox v-model
            </RuiCheckbox>

            <RuiCheckbox
                model={checked}
                disabled
            >
                Disabled { checked }
            </RuiCheckbox>

            <RuiCheckbox />

            <RuiCheckbox label={`Label ${checked}`} />

            <RuiCheckbox>
                this label is long! this label is long! this label is long! this label is long! this label is long! this label is long! this label is long! this label is long! this label is long!
            </RuiCheckbox>
        </RuiFlex>
    );
};


export default DemoCheckbox;
