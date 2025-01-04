# Methods

I told you that the values of an object's key-value pairs could be anything,
even a function. When an object key names a function, we call that function a
**method**.

Study the starter code:

- `team` is an object
- `team.roster` is a pretty standard property. It stores an array of player
  names.
- `removePlayer` is a **method**. It provides a way to _change_ `team.roster`.
- `addPlayer` is another **method**. It also provides a way to change
  `team.roster`.

I defined `removePlayer` and `addPlayer` in different ways just to show you two
ways you can add a method to an object. Notice the funny-looking `this` in both
methods. `this` is a way to refer to the object that the method is a member of.

## Tests

Your task is to add a method to `team`. Call the method `count`. If I call it,
it should return the current number of players listed in `team.roster`.
