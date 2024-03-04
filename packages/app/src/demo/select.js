import React, { useState } from 'react';
import RosaUI from 'rosa-ui';

const { RuiSelect, RuiFlex } = RosaUI;

const DemoSelect = () => {

    const selectValue = useState('STG');

    const selectOptions = [{
        label: 'One'
    }, {
        label: 'Two'
    }, {
        label: 'Three'
    }];


    const selectList = [
        '',
        'DEV',
        'QA',
        'STG',
        'LOCAL'
    ];

    const [selectResults, setSelectResults] = useState([
        '',
        'Short',
        'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long',
        "I'm a really long string that I'm going to use to test the ellipsis functionality",
        'QA'
    ]);

    const onSelectSearch = (e) => {

        // console.log(e);
        const value = e.target.value;
        if (!value) {
            return;
        }

        const len = Math.ceil(30 * Math.random());
        const results = [];
        let i = 0;
        while (i < len) {
            const ls = [value];
            ls.length = Math.ceil(12 * Math.random());
            const str = ls.join(' Text');
            results.push({
                // only label
                label: `${i + 1}, ${str}`,
                removable: true
            });
            i++;
        }
        setSelectResults(results);

        // console.log(v);
    };

    const onSelectRemove = (item) => {
        console.log('onSelectRemove', item);
        const v = item.value;
        setSelectResults((results) => {
            return results.filter((it) => {
                // no value here
                if (it.label === v) {
                    return false;
                }
                return true;
            });
        });
    };


    return (
        <RuiFlex
            spacing="10px"
            direction="column"
        >
            <RuiFlex spacing="10px">
                <RuiSelect
                    model={selectValue}
                    label="prop options:"
                    options={selectOptions}
                />

                <RuiSelect label="slot options:" onRemove={onSelectRemove}>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option value="3">option 3</option>
                    <option><b>bold</b> text</option>
                    <option
                        label="attr removable"
                        value="attr"
                    />
                    <option>text</option>
                    <option>One</option>
                    <option>Two</option>
                </RuiSelect>

                <RuiSelect
                    model={selectValue}
                    disabled
                    label="Disabled:"
                >
                    <option>Two</option>
                    <option>STG</option>
                </RuiSelect>

                <RuiSelect label="empty list:" />

                <RuiSelect label="empty value:">
                    <div />
                </RuiSelect>
            </RuiFlex>

            <RuiFlex spacing="10px">
                <RuiSelect
                    model={selectValue}
                    label="Select:"
                    options={selectList}
                />
                <RuiSelect
                    model={selectValue}
                    label="200 width:"
                    width="200px"
                    options={selectList}
                />
                <RuiSelect
                    model={selectValue}
                    label="Disabled:"
                    options={selectList}
                    disabled
                />

                <div className="rui-flex-empty" />

                <RuiSelect
                    model={selectValue}
                    width="60px"
                    label="Right width 60:"
                >
                    <option />
                    <option>5</option>
                    <option>10</option>
                    <option>long test long test long test long</option>
                    <option>long test long test long test long test long test</option>
                </RuiSelect>
            </RuiFlex>

            <RuiFlex spacing="10px">
                <RuiSelect
                    model={selectValue}
                    label="max width:"
                >
                    <option />
                    <option>dddddddddd ddddddddddddddddd ddddddddddddd5</option>
                    <option>10ddddd ddddddddddd</option>
                    <option>15ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</option>
                    <option>20ddddddd ddddddddddd long test long test long test long test long test long test long test</option>
                </RuiSelect>

                <div className="rui-flex-empty" />

                <RuiSelect
                    model={selectValue}
                    label="Right:"
                >
                    <option />
                    <option>5</option>
                    <option>10</option>
                    <option>long test long test long test long</option>
                    <option>long test long test long test long test long test</option>
                </RuiSelect>
            </RuiFlex>

            <RuiFlex spacing="10px">
                <RuiSelect
                    model={selectValue}
                    label="Input:"
                    options={selectResults}
                    searchable={true}
                    onSearch={onSelectSearch}
                    onRemove={onSelectRemove}
                />
                <RuiSelect
                    model={selectValue}
                    label="100 width (no onSearch):"
                    width="100px"
                    options={selectResults}
                    searchable={true}
                    onRemove={onSelectRemove}
                />
            </RuiFlex>
        </RuiFlex>
    );
};


export default DemoSelect;
