export class SignIndata {
    private Username: string;
    private Password: string;

    constructor(login: string, password: string) {
        this.Username = login;
        this.Password = password;
    }

    getLogin(): string {
        return this.Username;
    }

    getPassword(): string {
        return this.Password;
    }
}
