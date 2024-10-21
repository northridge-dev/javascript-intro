# `concat` Method

Now you know that you can _concatenate_ strings with the `+` operator. As is
often the case, in JavaScript, there are more than one ways to do a thing.
Here's another way:

```javascript
"super".concat("user");
// "superuser"
```

Use the `concat` **_method_** to concatenate as many strings as you like:

```javascript
"Mr.".concat(" ", "Bilbo", " ", "Baggins", " is", " a", " ", " ", "hobbit");
// Mr. Bilbo Baggins is a hobbit
```

Of course, you can use variables, too:

```javascript
let title = "Mr.";
let firstName = "Bilbo";
let lastName = "Baggins";
console.log(title.concat(" " + firstName + " " + lastName + ", hobbit"));
// "Mr. Bilbo Baggins, hobbit"
```

Your turn. Follow the directions in the code editor and try to pass the tests.
