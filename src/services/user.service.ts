import { UserDto, AuthenticateRequestDto, UserInfoDto, UserV1Client, AuthResponse,  } from "../api/tournamentapiclient";

export interface IUserService {
    createUser(user: UserDto): Promise<AuthResponse>;
    authenticate(login: AuthenticateRequestDto): Promise<AuthResponse> ;
    deleteClientGrant(clientId: string): Promise<boolean>;
    isUniqueUsername(username: string): Promise<boolean>;
    getUsers():  Promise<UserInfoDto[]>;
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

    deleteClientGrant(clientId: string) {
        return this.userV1Client.deleteClientGrant(clientId);
    }

    isUniqueUsername(username: string) {
        return this.userV1Client.isUniqueUsername(username);
    }
    getUsers(){
        return this.userV1Client.getUsers()
    }


}