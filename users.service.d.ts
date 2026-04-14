export declare class UsersService {
    private users;
    findAll(): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    } | undefined;
    findByRole(role: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    findByEmail(email: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    } | undefined;
    findByName(name: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
}
