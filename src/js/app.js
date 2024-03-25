const books = [];

document.getElementById("save-button").addEventListener("click", function() {
    const textInput = document.getElementById("book-name");
    const textValue = textInput.value;

    if(textValue.trim().length != 0) {
        books.push(textValue);
    }

    reloadSavedBooksDiv();
});

function reloadSavedBooksDiv() {
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
            listItem.textContent = item;
            booksList.appendChild(listItem);
        });

    }
}
