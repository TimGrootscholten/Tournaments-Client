import { Client, UserDto } from "../api/tournamentapiclient";

export interface IUserService {
    createUser(user: UserDto): any;
}

export class UserService implements IUserService {
    private client: Client;

    constructor() {
        this.client = new Client('https://localhost:7174');
    }

    createUser(user: UserDto) {
        this.client.usersPOST(user);
    }

    getUser() {
        this.client.usersGET();
    }

}