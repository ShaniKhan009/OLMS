let books = [];

document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let title = document.getElementById('title').value.trim();
    let author = document.getElementById('author').value.trim();

    if (!isBookDuplicate(title, author)) {
        let newBook = { title, author };
        books.push(newBook);
        displayBooks();
        e.target.reset();
    } else {
        alert("Duplicate book entry detected!");
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchQuery').value.toLowerCase().trim();
    displayBooks(query);
});

function isBookDuplicate(title, author) {
    return books.some(book => book.title.toLowerCase() === title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase());
}

function displayBooks(query = "") {
    let bookListElement = document.getElementById('bookList');
    bookListElement.innerHTML = '';

    books
    .filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
    .forEach(book => {
        let bookElement = document.createElement('a');
        bookElement.classList.add('list-group-item', 'list-group-item-action');
        bookElement.textContent = `${book.title} by ${book.author}`;
        bookListElement.appendChild(bookElement);
    });
}
