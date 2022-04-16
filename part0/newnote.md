Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes when writing something into the text field and clicking the submit button.

Diagram solution:
```
title Diagram of New note

user->browser: Write something into the text field
user->browser: Click the submit button

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
The server creates a new note object.
end note
```
