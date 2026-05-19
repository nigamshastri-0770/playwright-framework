import { test } from '../fixtures/testFixture';

test('Register User', async ({ registerPage }) => {

  await registerPage.navigate();

  await registerPage.registerUser();

  await registerPage.verifyRegistrationSuccess();
});