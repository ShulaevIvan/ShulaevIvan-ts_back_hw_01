import Book from "../types/Book";

abstract class BooksRepository {
    abstract createBook(book: Book) : void;

    abstract getBook(id: number): Book | null;

    abstract getBooks(): Book[];

    abstract updateBook(id: number, updatedBook: Book): void;

    abstract deleteBook(id: number): void;
};

// class BookApi extends BooksRepository {
//     serverUrl: string = 'localhost:3000';
// };

// const api = new BookApi();