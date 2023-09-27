# eslint-plugin-no-new-comparisons

This is a very simple eslint plugin that prevents you from comparing values directly to newly created
objects or arrays.  
This is done because people used to writing languages other than JavaScript might believe that objects and
arrays are actually compared when you compare them using `===`.  
In reality, this check checks if both sides of the equal signs refer to the **exact same** object or array
in memory.

Example:

```js
// Check if the array is empty
if (arr === []) {
    console.error('Your array is empty!');
}
```

This would never run because arr does not point at the array that was nearly created within the comparison.  
Instead, you should do something like this:

```js
if (arr.length === 0) {
    console.error('Your array is empty!');
}
```

## Installation

- Run `npm install --save-dev @binary-butterfly/eslint-plugin-no-new-comparisons`
- Add `@binary-butterfly/eslint-plugin-no-new-comparisons` to the `plugins` array of your eslint config
- Add `"@binary-butterfly/no-new-comparisons/no-new-array-or-object-comparisons": error` to the `rules` object of your
  eslint config
