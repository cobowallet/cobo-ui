## Cobo UI Components

This package should contains most of the UI Components in Cobo App.

Target:

* Support IOS and Android, maybe share some code with web.
* Support theme, use styled-components themeProvider maybe.
* Provide docs, use react-docgen currently, maybe find other tools to provide better experience.

Style:

* We use styled-components for styling, and theme.
* But styled-components cannot share same code using react-native-web, will dive further.

#### Develop

```
git clone git@github.com:cobowallet/cobo-ui.git
yarn
yarn start
```

Open browser at: http://localhost:7007

#### Use

```
yarn add cobowallet/cobo-ui
import { ActiveAccountCard } from 'CoboUI';
```
