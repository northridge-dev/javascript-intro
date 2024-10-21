# Concatenating Strings

**Concatenate** is a big word that means "to link or join together".
_Concatenating strings_ just means to link or join two or more
strings together into a single string. For example:

```
"super" concatenated with "user" --> "superuser"
```

To concatenate strings in JavaScript, you can use the `+` operator:

```javascript
"super" + "user";
// "superuser"
```

You can concatenate as many strings as you want. For example:

```javascript
"sports" + "man" + "ship";
// "sportsmanship"
```

Notice that there are no spaces between the strings in the concatenated string.
If you want spaces, you'll need to supply them yourself:

```javascript
"Hello," + " " + "beautiful" + " " "world!";
// "Hello, beautiful world!"

// or...
"Hello, " + "beautiful " + "world!";
// "Hello, beautiful world!"
```

You can also concatenate strings with variables:

```javascript
let title = "Mr.";
let firstName = "Bilbo";
let lastName = "Baggins";
console.log(title + " " + firstName + " " + lastName);
// "Mr. Bilbo Baggins"
```

Now it's your turn. Practice by following the instructions in the code editor.
