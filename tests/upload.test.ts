import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import UploadPage from '../pages/uploadPage';
import testData from '../testData';
import assertion from '../utils/assertion';
import userActions from '../utils/action';

test.describe('Upload Page Tabs test suite', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

    const dashboardPage = new DashboardPage(page);
    await userActions.clickOn(dashboardPage.navigation.uploads);
    await assertion.verifyPageContainsGivenUrl(page, '/uploads');
  });

  test('should switch to Upload tab and validate section', async ({ page }) => {
    const uploadPage = new UploadPage(page);
    await userActions.clickOn(uploadPage.tabs.uploadTab);
    await assertion.verifyElementExistsOnPage(uploadPage.uploadSection.sectionTitle);
    await assertion.verifyElementExistsOnPage(uploadPage.uploadSection.sectionDescription);
  });

  test('should switch to In Progress tab and validate section', async ({ page }) => {
    const uploadPage = new UploadPage(page);
    await userActions.clickOn(uploadPage.tabs.inProgressTab);
    await assertion.verifyElementExistsOnPage(uploadPage.inProgressSection.sectionTitle);
    await assertion.verifyElementExistsOnPage(uploadPage.inProgressSection.sectionDescription);
    await assertion.verifyElementExistsOnPage(uploadPage.inProgressSection.noFilesUploadingText);
  });

  test('should switch to Completed tab and validate section', async ({ page }) => {
    const uploadPage = new UploadPage(page);
    await userActions.clickOn(uploadPage.tabs.completedTab);
    await assertion.verifyElementExistsOnPage(uploadPage.completedSection.sectionTitle);
    await assertion.verifyElementExistsOnPage(uploadPage.completedSection.sectionDescription);
  });
});
