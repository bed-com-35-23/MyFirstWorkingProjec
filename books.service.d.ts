export declare class BooksService {
    private books;
    findAll(): {
        id: string;
        title: string;
        author: string;
        year: number;
    }[];
    findOne(id: string): {
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
    findByyear(year: number): {
        id: string;
        title: string;
        author: string;
        year: number;
    }[];
}
