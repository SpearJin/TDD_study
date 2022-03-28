class UserClient {
  login(id, password) {
    return fetch('http://example.com/login/id+passsword').then((response) =>
      response.json()
    );
  }
}

module.exports = UserClient;
