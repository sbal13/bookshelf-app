## Deliverables

The database of books can be found in a JSON-server. If you haven't already done so install json-server:

TO INSTALL: npm install -g json-server

Then start the json-server:

TO START: json-server --watch db.json

1. List all books
2. Clicking on a book in the Book List should add it to the Book Shelf
3. Clicking on a book in the Book Shelf should remove it from the Book Shelf
4. Each book can only be added to Book Shelf one time (Book Shelf should not have duplicate books)
5. Add an input that allows the user to search through Book List and still add books to the Book Shelf

![bookshelf gif](bookshelf.gif)

## Criteria

1. Props and state - Is state maintained in the right components? Are the functions to change state defined and executed in the appropriate places? Are the appropriate props passed from component to component?

2. Code structure and efficiency - Is the code clean and easy to read? Is functionality appropriately delegated between class and functional components?

3. Component lifecycle - Are the right component lifecycle methods used? Are they used for the correct purposes?

4. Rendering - Is information rendered in the correct locations?

## Bonus:

- Make it so you a user can only add a book to the book shelf once. No duplicate books
- Make it so a user can also search for books in bookshelf
