![](/scripts/rebutia.jpg)

# Rebutia UI
UI components based on [React](https://github.com/facebook/react/)
## Preview Online
[https://cenfun.github.io/rebutia-ui/](https://cenfun.github.io/rebutia-ui/)

## Install
```bash
npm install rebutia-ui
```
## Usage
```
import { components } from "rebutia-ui";
const { RuiButton } = components;
root.render(
    <StrictMode>
        <RuiButton><b>Bold</b> Button Name</RuiButton>
        <RuiButton disabled>Button Disabled</RuiButton>
    </StrictMode>
);
```