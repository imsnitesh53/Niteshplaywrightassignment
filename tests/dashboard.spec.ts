import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import testData from '../testData';
import assertion from '../utils/assertion';
import userActions from '../utils/action';


test.describe('Dashboard test suite', () => {

test('should navigate through all dashboard navigation items', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await userActions.clickOn(loginPage.signinButton);
  await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
  await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

  // Dashboard navigation
  const dashboardPage = new DashboardPage(page);

  await userActions.clickOn(dashboardPage.navigation.model);
  await assertion.verifyPageContainsGivenUrl(page, `/${testData.dashboardNavigation.model}`);

  // Click Reports and validate
  await userActions.clickOn(dashboardPage.navigation.reports);
  await assertion.verifyPageContainsGivenUrl(page, `/${testData.dashboardNavigation.reports}`);

  // Click Uploads and validate
  await userActions.clickOn(dashboardPage.navigation.uploads);
  await assertion.verifyPageContainsGivenUrl(page, `/${testData.dashboardNavigation.uploads}`);

  // Chevron icon should be visible
  await assertion.verifyElementExistsOnPage(dashboardPage.navigation.chevronRightIcon);
});

  test('should search for slides and validate results', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

    const dashboardPage = new DashboardPage(page);

    // Navigate to Model tab
    await userActions.clickOn(dashboardPage.navigation.dashboard);

    // Search for "test_small_bf_1"
    await userActions.enterText(dashboardPage.dashboardSection.searchInput, testData.searchData.test_small_bf_1);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.slideName(testData.searchData.test_small_bf_1));
    await assertion.verifyElementDoesNotExistsOnPage(dashboardPage.dashboardSection.slideName(testData.searchData.test_small_af_1));

    // Clear search and search for "test_small_af_1"
    await userActions.clearText(dashboardPage.dashboardSection.searchInput);
    await userActions.enterText(dashboardPage.dashboardSection.searchInput, testData.searchData.test_small_af_1);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.slideName(testData.searchData.test_small_af_1));
    await assertion.verifyElementDoesNotExistsOnPage(dashboardPage.dashboardSection.slideName(testData.searchData.test_small_bf_1));
  });

  test('should display all dashboard section elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

    const dashboardPage = new DashboardPage(page);

    await userActions.clickOn(dashboardPage.navigation.dashboard);

    // Validate all dashboardSection Element
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.slidesTab);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.projectsTab);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.searchInput);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.addFiltersButton);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.uploadSlidesButton);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.createProjectButton);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.overrideButton);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.qcHeader.first());
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.slideNameHeader);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.imageTypeHeader);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.dateHeader);
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.stainsHeader.first());
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.tissueTypeHeader.first());
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.speciesHeader.first());

  });
  test('should Validate upload file Present', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);

    const dashboardPage = new DashboardPage(page);

    await userActions.clickOn(dashboardPage.navigation.dashboard);

    // Validate all upload file Disabled
    await assertion.verifyElementExistsOnPage(dashboardPage.dashboardSection.uploadSlidesButton);

  });

});