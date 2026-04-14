import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAllUsers(): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    findOneById(id: string): {
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
