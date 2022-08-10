![](/scripts/rosa.jpg)

# Rosa UI
- Lightweight UI components based on [React](https://github.com/facebook/react/)
- Dist size (js minified: true): 25.2KB / gzip: 7.9KB

## Preview Online
[https://cenfun.github.io/rosa-ui/](https://cenfun.github.io/rosa-ui/)

## Components
* RuiButton  

## Install
```sh
npm i rosa-ui
```

## Usage
```
import { components } from "rosa-ui";
const { RuiButton } = components;
root.render(
    <RuiButton>Button Name</RuiButton>
    <RuiButton disabled>Button Disabled</RuiButton>
);
```
see [app.js](/packages/app/src/app.js)