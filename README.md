# math.juana.dev

Juana's math JSON-RPC server built with [sepc](https://github.com/kohutd/sepc).

## Usage

```javascript
import repc from "repc";

const math = repc('https://math.juana.dev/v1');

const sum = await math.call('add', [2, 2]);

console.log(sum);
```
