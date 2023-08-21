# @0xforkitall/ui-kit-nextjs

UI components and utilities for NextJs applications.

## Installation

Use npm or yarn to install the required packages:

```
yarn add @0xforkitall/ui-kit @0xforkitall/ui-kit-nextjs
```

## Usage

Import the ui-kit styles and start using the package in your application:

```
import React from 'react';
import { Link } from '@0xforkitall/ui-kit-nextjs';
import '@0xforkitall/ui-kit/styles.scss';
import '@0xforkitall/ui-kit-nextjs/styles.scss';

export const Application: React.FC = () => {
    <Link variant="underline" href="/page">
        UI-Kit-NextJs link
    </Link>
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
