# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test
- Location: tests/login.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ico-logout')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.ico-logout')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Welcome, Please Sign In!" [level=1]
- strong: New Customer
- text: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
- button "Register"
- strong: Returning Customer
- text: Login was unsuccessful. Please correct the errors and try again.
- list:
  - listitem: No customer account found
- text: "Email:"
- textbox "Email:": test1779170031976@gmail.com
- text: "Password:"
- textbox "Password:"
- checkbox "Remember me?"
- text: Remember me?
- link "Forgot password?":
  - /url: /passwordrecovery
- button "Log in"
- heading "About login / registration" [level=2]
- paragraph: Put your login / registration information here. You can edit this in the admin site.
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  17  |   constructor(page: Page) {
  18  | 
  19  |     this.page = page;
  20  | 
  21  |     this.loginLink = page.locator('.ico-login');
  22  | 
  23  |     this.emailField = page.locator('#Email');
  24  | 
  25  |     this.passwordField = page.locator('#Password');
  26  | 
  27  |     this.loginButton = page.locator('input[value="Log in"]');
  28  | 
  29  |     this.logoutButton = page.locator('.ico-logout');
  30  | 
  31  |     this.myAccountLink = page.locator('.account');
  32  | 
  33  |     this.errorMessage = page.locator('.validation-summary-errors');
  34  | 
  35  |     this.cartLabel = page.locator('.cart-label');
  36  | 
  37  |     this.wishlistLabel = page.locator('.wishlist-label');
  38  |   }
  39  | 
  40  |   async navigate() {
  41  | 
  42  |     await this.page.goto(
  43  |       'https://demowebshop.tricentis.com/',
  44  |       {
  45  |         waitUntil: 'domcontentloaded',
  46  |         timeout: 60000
  47  |       }
  48  |     );
  49  | 
  50  |     await this.page.waitForLoadState('networkidle');
  51  | 
  52  |     await expect(this.loginLink).toBeVisible();
  53  |   }
  54  | 
  55  |   async openLoginPage() {
  56  | 
  57  |     await this.loginLink.click();
  58  | 
  59  |     await this.page.waitForLoadState('networkidle');
  60  | 
  61  |     await expect(this.emailField).toBeVisible();
  62  |   }
  63  | 
  64  |   async login(username: string, password: string) {
  65  | 
  66  |     await this.openLoginPage();
  67  | 
  68  |     await this.emailField.clear();
  69  | 
  70  |     await this.emailField.fill(username);
  71  | 
  72  |     await this.passwordField.clear();
  73  | 
  74  |     await this.passwordField.fill(password);
  75  | 
  76  |     await this.loginButton.click();
  77  | 
  78  |     await this.page.waitForLoadState('networkidle');
  79  | 
  80  |     const logoutVisible =
  81  |       await this.logoutButton.isVisible()
  82  |         .catch(() => false);
  83  | 
  84  |     const accountVisible =
  85  |       await this.myAccountLink.isVisible()
  86  |         .catch(() => false);
  87  | 
  88  |     const cartVisible =
  89  |       await this.cartLabel.isVisible()
  90  |         .catch(() => false);
  91  | 
  92  |     if (
  93  |       logoutVisible ||
  94  |       accountVisible ||
  95  |       cartVisible
  96  |     ) {
  97  | 
  98  |       console.log('Login Successful');
  99  | 
  100 |     } else {
  101 | 
  102 |       await this.page.screenshot({
  103 |         path: 'test-results/login-failure.png',
  104 |         fullPage: true
  105 |       });
  106 | 
  107 |       throw new Error(
  108 |         'Login Failed - User not authenticated'
  109 |       );
  110 |     }
  111 |   }
  112 | 
  113 |   async verifyLoginSuccess() {
  114 | 
  115 |     await expect(
  116 |       this.logoutButton
> 117 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  118 |       timeout: 15000
  119 |     });
  120 | 
  121 |     await expect(
  122 |       this.cartLabel
  123 |     ).toBeVisible();
  124 | 
  125 |     await expect(
  126 |       this.wishlistLabel
  127 |     ).toBeVisible();
  128 |   }
  129 | 
  130 |   async logout() {
  131 | 
  132 |     if (
  133 |       await this.logoutButton.isVisible()
  134 |         .catch(() => false)
  135 |     ) {
  136 | 
  137 |       await this.logoutButton.click();
  138 | 
  139 |       await this.page.waitForLoadState(
  140 |         'networkidle'
  141 |       );
  142 | 
  143 |       await expect(
  144 |         this.loginLink
  145 |       ).toBeVisible();
  146 |     }
  147 |   }
  148 | }
  149 | 
```