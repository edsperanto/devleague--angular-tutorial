myApp.service('BookService', function() {
	var books = [
		{title: 'Ready Player one', author: 'Ernest Cline'},
		{title: 'Enders Game', author: 'Orson Scott Card'},
		{title: 'Harry Potter and the Philosophers Stone', author: 'J.K. Rowling'}
	];
	this.books = books;
	this.getBooks = function() {
		return books;
	}
	this.getBook = function(id) {
		return books[id];
	}
	this.addBook = function(book) {
		this.books.push({
			title: book.title,
			author: book.author
		});
	}
});
