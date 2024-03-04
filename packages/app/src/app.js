import RosaUI from 'rosa-ui';
import React, {
    StrictMode, useEffect, useState
} from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

// console.log(React, ReactDOM);

console.log('components', RosaUI);

const rootElement = document.createElement('div');
rootElement.className = 'rui-app';
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const { RuiFlex, RuiSwitch } = RosaUI;


const kebabToPascalCase = function(text) {
    return (`${text}`).trim()
        .replace(/(^\w|-\w)/g, function(str) {
            return str.replace(/-/, '').toUpperCase();
        });
};

const context = require.context('./demo', true, /\.js$/);
const demos = [];
const paths = context.keys();
paths.forEach((path) => {
    // console.log(path);
    const fileName = path.split('/').pop();
    const demoName = fileName.split('.').shift();
    const N = kebabToPascalCase(demoName);
    const Demo = context(path).default;
    demos.push({
        name: `Rui${N}`,
        Demo
    });
});

console.log('demos', demos);

const App = () => {

    const strict = localStorage.getItem('rui-strict-mode') === 'true';
    const strictModel = useState(strict);
    useEffect(() => {
        localStorage.setItem('rui-strict-mode', strictModel[0]);
    });

    const Children = () => {
        return (
            <RuiFlex direction="column">
                <RuiFlex spacing="10px" className="rui-header">
                    <div className="rui-title">Rosa UI</div>
                    <div className="rui-sub">
                    Based on <a href="https://github.com/facebook/react/" target="_blank" rel="noreferrer" >React</a>
                    </div>
                    <div>
                        <RuiSwitch model={strictModel}>StrictMode</RuiSwitch>
                    </div>
                    <div>
                        <a href="https://github.com/cenfun/rosa-ui" target="_blank" className="icon-github" rel="noreferrer"/>
                    </div>
                </RuiFlex>
                <div className="rui-body rui-flex-auto">
                    {demos.map((item, i) => {
                        const Demo = item.Demo;
                        return (
                            <div key={i} className="rui-item rui-flex-row">
                                <div className="rui-item-name">
                                    { item.name }
                                </div>
                                <div className="rui-item-example rui-flex-auto">
                                    <Demo />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </RuiFlex>
        );
    };

    return (
        strictModel[0] ? <StrictMode><Children /></StrictMode> : <Children />
    );
};

root.render(<App />);
