Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

Diagram solution:
```
title Diagram New note of Single page app

user->browser: Write something into the text field
user->browser: Click the submit button

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

server-->browser: {"message":"note created"}
```
