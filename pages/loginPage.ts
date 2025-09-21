import { Page, Locator } from '@playwright/test';
import assertion from "../utils/assertion";
import userActions from "../utils/action";

class LoginPage {
  readonly page: Page;
  readonly emailLabel: Locator;
  readonly usernameInput: Locator;
  readonly passwordLabel: Locator;
  readonly passwordInput: Locator;
  readonly showPasswordButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly submitButton: Locator;
  readonly oktaButton: Locator;
  readonly oktaIcon: Locator;
  readonly oktaText: Locator;
  readonly orDivider: Locator;
  readonly signinButton: Locator;
  readonly errorMessage: Locator;
  readonly dashBoardIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signinButton = page.locator('//p[text()="Sign In"]');
    this.emailLabel = page.locator('label[for="username"]');
    this.usernameInput = page.locator('input#username');
    this.passwordLabel = page.locator('label[for="password"]');
    this.passwordInput = page.locator('input#password');
    this.showPasswordButton = page.locator('button[aria-label="Show password"]');
    this.forgotPasswordLink = page.locator('a[href*="password-reset-start"]');
    this.submitButton = page.locator('button[type="submit"][data-action-button-primary="true"]');
    this.oktaButton = page.locator('button[data-provider="okta"]');
    this.oktaIcon = page.locator('button[data-provider="okta"] img');
    this.oktaText = page.locator('button[data-provider="okta"] span');
    this.orDivider = page.locator('div.c4702611b span');
    this.errorMessage=page.locator('[id="error-element-password"]');
    this.dashBoardIcon=page.locator('[data-testid="ChevronRightIcon"]');
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await assertion.verifyElementExistsOnPage(this.emailLabel);
    await userActions.enterText(this.usernameInput, username);
    await assertion.verifyElementExistsOnPage(this.passwordInput);
    await userActions.enterText(this.passwordInput, password);
    await userActions.clickOn(this.submitButton);
  }
}

export default LoginPage;
