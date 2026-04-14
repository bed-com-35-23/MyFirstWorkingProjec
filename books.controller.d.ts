import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAllBooks(): {
        id: string;
        title: string;
        author: string;
        year: number;
    }[];
    findOneById(id: string): {
        id: string;
        title: string;
        author: string;
        year: number;
    } | undefined;
    findByAuthor(author: string): {
        id: string;
        title: string;
        author: string;
        year: number;
    }[];
    findByYear(year: number): {
        id: string;
        title: string;
        author: string;
        year: number;
    }[];
}
