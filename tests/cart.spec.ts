import { test } from '../fixtures/testFixture';
import { users } from '../utils/TestData';

test('Estimate Shipping', async ({
  loginPage,
  cartPage
}) => {

  await loginPage.navigate();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await cartPage.estimateShipping();
});