import { test as base, type Page } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

type LoginFixtures = {
  loginPage: LoginPage;
  userLoggedInPage: Page;
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  userLoggedInPage: async ({ loginPage, page }, use) => {
    const username = /*process.env.USERNAME ||*/ 'Admin';
    const password = process.env.PASSWORD || 'admin123';

    await loginPage.goTo();
    await loginPage.login(username, password);

    //TODO await page.waitForLoadState('networkidle');

    await use(page);
  }
});

