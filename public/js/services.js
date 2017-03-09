myApp.service('BookService', function() {
	var books = [
		{title: 'Ready Player one', author: 'Ernest Cline'},
		{title: 'Enders Game', author: 'Orson Scott Card'},
		{title: 'Harry Potter and the Philosophers Stone', author: 'J.K. Rowling'}
	];
	this.getBooks = function() {
		return books;
	}
	this.getBook = function(id) {
		return books[id];
	}
});
