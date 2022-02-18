/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.15.9.0 (NJsonSchema v10.6.8.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
// @ts-nocheck

export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    usersGET(): Promise<void> {
        let url_ = this.baseUrl + "/api/v1/users";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUsersGET(_response);
        });
    }

    protected processUsersGET(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    usersPOST(body?: UserDto | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/v1/users";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUsersPOST(_response);
        });
    }

    protected processUsersPOST(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }
}

export class UserDto implements IUserDto {
    id?: string;
    email?: string | undefined;
    password?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;

    constructor(data?: IUserDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.email = _data["email"];
            this.password = _data["password"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
        }
    }

    static fromJS(data: any): UserDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["email"] = this.email;
        data["password"] = this.password;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        return data;
    }
}

export interface IUserDto {
    id?: string;
    email?: string | undefined;
    password?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    throw new SwaggerException(message, status, response, headers, result);
}