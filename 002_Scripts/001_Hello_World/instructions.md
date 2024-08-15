# Hello, World

So far, we've been using a REPL to execute JavaScript one command at a time.
More often, you'll write a script: a series of JavaScript expressions and
statements that can be passed to the JavaScript engine all at once. The
JavaScript engine will still execute them one at a time in the order you set
out, but it doesn't have to wait for you to give it the next command.

Typically a script is saved as a file. Maybe you've seen Microsoft Word files
that end with an extension like `.doc` or `.docx` or an image file that ends
with a `.jpg` or `.gif` extension. Most JavaScript files end with a special
extension: `.js`. The extension isn't strictly necessary, but it helps users
and some programs know how to handle the file.

It's not obvious, but the editor on this page is showing you the contents of a
file. When you click the ▶ button, the code you've written in that file will
get passed to the JavaScript engine. Output, if there is any, will show up in
the box below the editor.

Give it a try: click the ▶ button . . .

Nothing happened, right? Not quite. The JavaScript engine did run the code you
see in the editor, but there's nothing in the script that tells it to output any
values.

Let's add one line to the script:

```javascript
let greeting = "Hello, World!";
console.log(greeting);
```

Try it again. Voila! You should see the output `Hello, World!` in the console
below the editor. If we want to send a value to the console, we need to
"console log" it.

You can pass more than one value in the same `console.log` function. Try this:

```javascript
let greeting = "Hello, World!";
console.log(greeting, "Nice to meet you.");
console.log("Bye!");
```

Try logging a few more things to the console. So far, we've been logging words.
Can you log numbers to the console ? Could you log the result of a calculation?

When you're finished experimenting, click the ✓ button.
