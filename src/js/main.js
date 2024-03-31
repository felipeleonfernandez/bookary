let books = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("save-button").addEventListener("click", function() {
        const bookNameTextInput = document.getElementById("book-name");
        const bookAuthorTextInput = document.getElementById("book-author");
    
        addBook(bookNameTextInput.value, bookAuthorTextInput.value, books);
    
        manageSavedBooksDiv();
    
        bookNameTextInput.value = "";
        bookAuthorTextInput.value = "";
    });
});

function addBook(bookName, bookAuthor, books) {
    if(bookName.trim().length != 0) {
        bookName = bookName.charAt(0).toUpperCase() + bookName.slice(1);
        bookAuthor = bookAuthor.charAt(0).toUpperCase() + bookAuthor.slice(1);
    
        bookAuthor = (bookAuthor.trim().length == 0) ? "Anonymous" : bookAuthor;
        const book = {
            name:bookName, 
            author:bookAuthor
        };
        books.push(book);
    }
}

function manageSavedBooksDiv() {
    const noBooksSavedMsg = document.getElementById("no-books-saved-msg");
    const savedBooksIntro = document.getElementById("saved-books-intro");
    const savedBooksDiv = document.getElementById("saved-books");

    if (books.length === 0) {
        noBooksSavedMsg.style.display = "block";
        savedBooksIntro.style.display = "none";
    } else {
        noBooksSavedMsg.style.display = "none";
        savedBooksIntro.style.display = "block";
        savedBooksDiv.style.display = "block";
        
        const booksList = document.getElementById("books-list");

        booksList.innerHTML = '';

        books.forEach(function(item) {
            const listItem = document.createElement("li");
            listItem.textContent = item.name + " - " + item.author;
            booksList.appendChild(listItem);
        });

    }
}

module.exports = { addBook };