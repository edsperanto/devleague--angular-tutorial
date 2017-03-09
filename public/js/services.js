myApp.service('BookService', function() {
	var books = [
		'Ready Player One',
		'Enders Game',
		'Harry Potter and the Philosophers Stone'
	];
	this.getBooks = function() {
		return books;
	}
	this.getBook = function(id) {
		return books[id];
	}
});
