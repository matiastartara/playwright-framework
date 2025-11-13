import { expect } from '@playwright/test';
import { test } from '../../fixtures/auth-setup';


test('Login test', async ({ userLoggedInPage }) => {

  await expect(userLoggedInPage).toHaveTitle(/OrangeHRM/);

  //TODO await userLoggedInPage.click('selector-after-login');
  //TODO await userLoggedInPage.close();

});