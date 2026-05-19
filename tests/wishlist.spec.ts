import { test } from '../fixtures/testFixture';
import { users } from '../utils/TestData';

test('Add Book To Wishlist', async ({
  loginPage,
  homePage,
  booksPage
}) => {

  await loginPage.navigate();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await homePage.openBooks();

  await booksPage.sortBooks();

  await booksPage.selectBook();

  await booksPage.addToWishlist();
});