# greeting-contract-type-for-near-kit
typed hello/greeting contract that can be used with near-kit


---

#### DEV

```bash
bun install

```

---

#### HOW TO USE
this package is meant to be used with near-kit and asummes you have a basic undersatding of how to use.
this package only exports a type ```greetContractType``` for a greeting contract.

import
```js
import type { greetContractType } from '@sleet-js/greeting-contract-type-for-near-kit';
```

use with your near kit client set up
```js
const hello_greeting_contract = near.contract<greetContractType>(hello_contractId_for_network);
const get_greeting_view = await hello_greeting_contract.view.get_greeting();
```


---

This project was created using `bun init` in bun v1.2.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

copyright 2025 by sleet.near

