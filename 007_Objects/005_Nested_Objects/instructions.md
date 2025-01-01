# Nested Objects

Objects can contain other objects. This is called nesting.

You can access the properties of nested objects by chaining keys using dot
notation, bracket notation, or mixture of both. For example, you could retrieve
President Reagan's middle name in any of the following ways:

- `president.name.middle`
- `president["name"]["middle"]`
- `president["name"].middle`
- `president.name["middle"]`

Try it! `console.log` some nested properties.

## Tests

You can also update nested properties by chaining keys. To pass the test, update
the `birthplace.state` from `"IL"` to `"Illinois"`.
