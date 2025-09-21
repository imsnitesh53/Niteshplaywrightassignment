import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import testData from '../testData';
import assertion from '../utils/assertion';
import userActions from '../utils/action';

test.describe('Login test suite', () => {
  test('should display all login page elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await assertion.verifyElementExistsOnPage(loginPage.signinButton)
    await userActions.clickOn(loginPage.signinButton);
    await assertion.verifyElementExistsOnPage(loginPage.emailLabel)
    await assertion.verifyElementExistsOnPage(loginPage.usernameInput)
    await assertion.verifyElementExistsOnPage(loginPage.passwordLabel)
    await assertion.verifyElementExistsOnPage(loginPage.passwordInput)
    await assertion.verifyElementExistsOnPage(loginPage.oktaButton)
    await assertion.verifyElementExistsOnPage(loginPage.oktaIcon)
    await assertion.verifyElementExistsOnPage(loginPage.oktaIcon)
   
  });


  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

  });
  test('should login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.InValidemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.errorMessage);
    await assertion.verifyElementDoesNotExistsOnPage(loginPage.dashBoardIcon);

  });
    test('should logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await assertion.verifyElementExistsOnPage(loginPage.signinButton);
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

    const dashboardPage = new DashboardPage(page);
    await userActions.clickOn(dashboardPage.header.userAvatarButton);
    await userActions.clickOn(dashboardPage.header.logout);

    await assertion.verifyElementExistsOnPage(loginPage.signinButton);
  });
  
});