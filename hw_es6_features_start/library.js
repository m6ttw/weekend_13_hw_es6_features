class Library { //remember to put round brackets inside curlys rather than before
  constructor(books = []) {
    this.books = books;
  }

  bookCount(){
    return this.books.length;
  };

  addBook(newBook){
    this.books.push(newBook);
  };

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  };

  printInventory(){
    this.books.forEach(({ author, title }) => {
      console.log(`${title} by ${author}`);
    });
  };
}

export default Library;
