import React, { useEffect, useState } from 'react';
import RosaUI from 'rosa-ui';

const {
    RuiButton, RuiFlex, RuiSelect, RuiFlyover, RuiPortal
} = RosaUI;

const DemeFlyover = () => {

    const widthModel = useState('30%');
    const width = widthModel[0];

    const positionModel = useState('right');
    const position = positionModel[0];

    const [visible, setVisible] = useState(false);

    const [closed, setClosed] = useState(true);

    const showFlyover = (e) => {
        //console.log('showFlyover');
        if (closed) {
            setClosed(false);
        }
        setVisible(true);
    };

    const hideFlyover = (e) => {
        //console.log('hideFlyover');
        setVisible(false);
    };

    const toggleFlyover = (e) => {
        if (visible) {
            hideFlyover(e);
        } else {
            showFlyover(e);
        }
    };

    const destroyFlyover = (e) => {
        hideFlyover();
        setClosed(true);
    };

    useEffect(() => {
        return () => {
            destroyFlyover();
        };
    }, []);

    return (
        <RuiFlex spacing="10px">

            {position === 'left' && <div className="rui-flex-empty"/> }

            <RuiSelect model={widthModel}>
                <option>30%</option>
                <option>50%</option>
                <option>60%</option>
                <option>100px</option>
            </RuiSelect>

            <RuiSelect model={positionModel}>
                <option>right</option>
                <option>left</option>
            </RuiSelect>

            <RuiButton onClick={toggleFlyover}>Toggle</RuiButton>

            <RuiButton onClick={showFlyover}>Show</RuiButton>

            <RuiButton onClick={hideFlyover}>Hide</RuiButton>

            <RuiButton onClick={destroyFlyover}>Destroy</RuiButton>

            {position === 'right' && <div className="rui-flex-empty"/> }

            <RuiPortal closed={closed}>
                <RuiFlyover width={width} position={position} visible={visible}>
                    <div style={{
                        padding: '10px'
                    }}>
                        <RuiButton onClick={hideFlyover}>Close</RuiButton>
                    </div>
                </RuiFlyover>
            </RuiPortal>

        </RuiFlex>
    );

};

export default DemeFlyover;
