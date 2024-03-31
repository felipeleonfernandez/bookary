const { addBook } = require('../src/js/main');

test('Add a book with author', () => {
    let books = [];
    const book = {
        name: "20.000 Leguas de Viaje Submarino", 
        author: "Julio Verne"
    };

    addBook("20.000 Leguas de Viaje Submarino", "Julio Verne", books)
    
    expect(books).toContainEqual(book);
});

test('Add an anonymous book', () => {
    let books = [];
    const book = {
        name: "Lazarillo de Tormes", 
        author: "Anonymous"
    };

    addBook("Lazarillo de Tormes", "", books)
    
    expect(books).toContainEqual(book);
});