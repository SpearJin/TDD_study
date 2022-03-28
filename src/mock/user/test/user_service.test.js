const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });

  it('login2', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');

    expect(login.mock.calls.length).toBe(1);
  });
});
