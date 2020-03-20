export class UserLogInData {
    public email = ''

    public password = ''

    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
}
