export default class UserEntity {
  constructor(
    public username: string,
    public email: string,
    public password: string,
  ) { }

  public isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
  }
}