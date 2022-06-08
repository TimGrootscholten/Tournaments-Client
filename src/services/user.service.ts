import { AuthenticateRequestDto, AuthResponse, UserDto, UserInfoDto, UserV1Client } from "../api/tournamentapiclient";

export interface IUserService {
    createUser(user: UserDto): Promise<AuthResponse>;
    authenticate(login: AuthenticateRequestDto): Promise<AuthResponse>;
    deleteClientGrant(clientId: string): Promise<boolean>;
    isUniqueUsername(username: string): Promise<boolean>;
}

export class UserService implements IUserService {
    private userV1Client: UserV1Client;

    constructor() {
        this.userV1Client = new UserV1Client('https://localhost:7174');
    }

    getUsers(): Promise<UserInfoDto[]> {
        return this.userV1Client.getUsers();
    }

    createUser(user: UserDto) {
        return this.userV1Client.createUser(user);
    }


    authenticate(login: AuthenticateRequestDto) {
        return this.userV1Client.authenticate(login);
    }

    deleteClientGrant(clientId: string) {
        return this.userV1Client.deleteClientGrant(clientId);
    }

    isUniqueUsername(username: string) {
        return this.userV1Client.isUniqueUsername(username);
    }


}