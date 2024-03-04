![](/scripts/rosa.jpg)

# Rosa UI
- Lightweight UI components based on [React](https://github.com/facebook/react/)
- Dist size (js minified: true): 26.5KB / gzip: 8.1KB

## Preview Online
[https://cenfun.github.io/rosa-ui/](https://cenfun.github.io/rosa-ui/)

## Components
* RuiButton  * RuiCheckbox  * RuiFlex  * RuiFlyover  * RuiPortal  * RuiSelect  * RuiSwitch  

## Install
```sh
npm i rosa-ui
```

## Usage
```
import RosaUI from "rosa-ui";
const { RuiButton } = RosaUI;
root.render(
    <RuiButton>Button Name</RuiButton>
    <RuiButton disabled>Button Disabled</RuiButton>
);
```
see [app.js](/packages/app/src/app.js)