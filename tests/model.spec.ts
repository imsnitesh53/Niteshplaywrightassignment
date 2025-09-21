import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import ModelPage from '../pages/modelPage';
import testData from '../testData';
import assertion from '../utils/assertion';
import userActions from '../utils/action';

test.describe('Model Page test suite', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);
    const dashboardPage = new DashboardPage(page);
    await userActions.clickOn(dashboardPage.navigation.model);
    await assertion.verifyPageContainsGivenUrl(page, `/${testData.dashboardNavigation.model}`);
   

  });

  test('should display correct number of stainers and models heading', async ({ page }) => {
    const modelPage = new ModelPage(page);
    await assertion.verifyElementExistsOnPage(modelPage.header.title);
    await assertion.verifyElementExistsOnPage(modelPage.header.subtitle)
    await assertion.verifyElementExistsOnPage(modelPage.summary.totalStainersLabel);
    await assertion.verifyElementExistsOnPage(modelPage.summary.totalStainersValue);
    await assertion.verifyElementExistsOnPage(modelPage.summary.totalStainersSubLabel);

    const stainersValue = await userActions.getElementText(modelPage.summary.totalStainersValue);
    await assertion.assertForEquality(Number.parseInt(stainersValue ?? '0') > 0, true);
  });

  test('should have all model switches', async ({ page }) => {
    const modelPage = new ModelPage(page);
    const modelNames = ['CD45 Multiorgan', 'H&E Multiorgan', "PanCK Multiorgan", "Masson's Trichrome Multiorgan"];
    for (const name of modelNames) {
      await assertion.verifyElementExistsOnPage(modelPage.stainerSections.modelSwitch(name).first());
    }
  });

  test('should show RUO text for each model', async ({ page }) => {
    const modelPage = new ModelPage(page);
    const modelNames = ['CD45 Multiorgan', 'H&E Multiorgan', "PanCK Multiorgan", "Masson's Trichrome Multiorgan"];
    for (const name of modelNames) {
      await assertion.verifyElementExistsOnPage(modelPage.stainerSections.modelRUOText(name).first());

    }
  })
});