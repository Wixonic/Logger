> A simple logger for **all** types of variables.

**[GitHub](https://github.com/Wixonic/Logger/)**

# Use

Put this in the head of the HTML document :

```html
<script src="https://logger.wixonic.fr/logger.min.js"></script>
```

# Variables and Functions

### `Logger.mode`
- **Type** : `String`
- **Description** : The printing mode. Two possible values : `"normal"` or `"compressed"`
- **Default** : `"normal"`
- **Edition** : True

### `Logger.LIMIT`
- **Type** : `Number`
- **Description** : The limit for the length of objects
- **Default** : `150`
- **Edition** : True

### `Logger.logs`
- **Type** : `Array`
- **Description** : All logs
- **Default** : `[]`
- **Edition** : Not Recommended

### `Logger.tabs`
- **Type** : `String`
- **Description** : Indentation
- **Default** : `""`
- **Edition** : Not Recommanded

---

### `Logger.log()`
- **Description** : Logs arguments in the console
- **Arguments** : An infinity of arguments of any type
- **Returns** : `undefined`

### `Logger.getLogs()`
- **Description** : Convert `Logger.logs` to a string
- **Arguments** : `none`
- **Returns** : All logs `string`

### `Logger.stringify()`
- **Description** : Convert anything to a `String`
- **Arguments** : One, the variable to convert.
- **Returns** : Argument `string`

# Issues

- Don't put an object which contains itself like `window`
