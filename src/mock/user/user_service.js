class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, passsword) {
    if (!this.isLogedIn) {
      return this.userClient
        .login(id, passsword)
        .then((data) => (this.isLogedIn = true));
    }
  }
}
module.exports = UserService;
