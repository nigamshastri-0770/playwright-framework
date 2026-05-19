import { test } from '../fixtures/testFixture';
import { users } from '../utils/TestData';

test('Login Test', async ({ loginPage }) => {

  await loginPage.navigate();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await loginPage.verifyLoginSuccess();
});