import { UserDto, UserV1Client } from "../api/tournamentapiclient";

export interface IUserService {
    createUser(user: UserDto): any;
}

export class UserService implements IUserService {
    private userV1Client: UserV1Client;

    constructor() {
        this.userV1Client = new UserV1Client('https://localhost:7174');
    }

    createUser(user: UserDto) {
        this.userV1Client.createUser(user);
    }

    getUser() {
        this.userV1Client.getUser();
    }

}