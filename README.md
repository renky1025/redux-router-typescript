This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## create typescript react product with “create-react-app”
```
  npm install -g create-react-app
  create-react-app my-app --scripts-version=react-scripts-ts
  npm run start
```
## run the starter project
```
yarn

yarn start
```
## other tooltips
```scss
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
```
```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```
```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```
```js
import * as React from 'react';
import {
  NavLink,
  NavLinkProps,
  match,
  Link
} from 'react-router-dom';
import * as H from 'history';

const getIsActive = (extraProp: string) => (match: match<any>, location: H.Location) => !!extraProp;

interface Props extends NavLinkProps {
  extraProp: string;
}

export default function(props: Props) {
  const {extraProp, ...rest} = props;
  const isActive = getIsActive(extraProp);
  return (
    <NavLink {...rest} isActive={isActive}/>
  );
}

<Link to="/url" />;

const acceptRef = (node: HTMLAnchorElement | null) => {};
<Link to="/url" replace={true} innerRef={acceptRef} />;
```