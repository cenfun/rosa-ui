import React, { useState } from 'react';
import { components } from 'rebutia-ui';

const DemoCheckbox = () => {

    const { RuiCheckbox, RuiFlex } = components;

    const checkedModel = useState(true);
    const [checked, setChecked] = checkedModel;
    const onChecked = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <RuiFlex spacing="10px">
            <RuiCheckbox>
                Checkbox
            </RuiCheckbox>

            <RuiCheckbox checked={checked} onChange={onChecked}>
            checked { `${checked}` }
            </RuiCheckbox>

            <RuiCheckbox model={checkedModel}>
            v-model
            </RuiCheckbox>

            <RuiCheckbox
                model={checkedModel}
                disabled
            >
                Disabled { `${checked}` }
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
