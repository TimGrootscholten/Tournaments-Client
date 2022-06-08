export class BaseClass {
    protected transformOptions = async (options: RequestInit): Promise<RequestInit> => {
        let token = /* getToken() */'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsIm5hbWUiOiJ0aW1ncm9vdHNjaG9sdGVuIiwic2NvcGVzIjpbIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4Il0sImV4cCI6MTY1NDE2NzE4NCwiaXNzIjoidG91cm5hbWVudHMubmwiLCJhdWQiOiJ0b3VybmFtZW50cy5ubCJ9.qjOm5MbxIBDOHlCX9TcBCWi7KLylvJ0BMkBfahydUDQ'
        options.headers = {
            ...options.headers,
            Authorization: 'Bearer ' + token,
        };
        return Promise.resolve(options);
    }
    //Create function that get the token from the indexed database
}