import Book from "../types/Book";

abstract class BooksRepository {
    static createBook(book: Book) : void {};

    static getBook(id: number): Book | null { return null };

    static getBooks(): Book[] { return [] };

    static updateBook(id: number, updatedBook: Book): void {};

    static deleteBook(id: number): void {};
};

// class BookApi extends BooksRepository {
//     serverUrl: string = 'localhost:3000';
// };

// const api = new BookApi();