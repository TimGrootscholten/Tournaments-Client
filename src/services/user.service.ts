import { UserDto, AuthenticateRequestDto, UserV1Client } from "../api/tournamentapiclient";

export interface IUserService {
    createUser(user: UserDto): any;
    authenticate(login: AuthenticateRequestDto): any;
}

export class UserService implements IUserService {
    private userV1Client: UserV1Client;

    constructor() {
        this.userV1Client = new UserV1Client('https://localhost:7174');
    }

    createUser(user: UserDto) {
        return this.userV1Client.createUser(user);
    }


    authenticate(login: AuthenticateRequestDto) {
        return this.userV1Client.authenticate(login);
    }


}