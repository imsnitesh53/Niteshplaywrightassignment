
import { expect, Page, Locator } from '@playwright/test';

class Assertion {
  async log(message: string): Promise<void> {
    console.log(message);
  }

  async verifyElementExistsOnPage(locator: Locator, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting visibility of element: ${locatorDescription}`);
    await expect(locator).toBeVisible(options);
  }

  async verifyElementDoesNotExistsOnPage(locator: Locator, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting invisibility of element: ${locatorDescription}`);
    await expect(locator).not.toBeVisible(options);
  }

  async verifyElementIsHidden(locator: Locator, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting element is hidden: ${locatorDescription}`);
    await expect(locator).toBeHidden(options);
  }
  async verifyElementIsDisabled(locator: Locator, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting element is Disabled: ${locatorDescription}`);
    await expect(locator).toBeDisabled(options);
  }

  async verifyElementContainsGivenText(locator: Locator, text: string, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting element contains text: ${locatorDescription}`);
    await expect(locator).toContainText(text, options);
  }

  async verifyInputValue(locator: Locator, expectedValue: string): Promise<void> {
    const actualValue = await locator.inputValue();
    await this.log(`Asserting input value: expected "${expectedValue}", actual "${actualValue}"`);
    expect(actualValue).toBe(expectedValue);
  }

  async verifyElementHaveGivenText(locator: Locator, text: string, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting element has text: ${locatorDescription}`);
    await expect(locator).toHaveText(text, options);
  }

  async verifyElementContainsGivenTextInInputField(locator: Locator, text: string): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting input field contains text: ${locatorDescription}`);
    const value = await locator.inputValue();
    expect(value).toBe(text);
  }

  /**
   * Verify element has exact text
   */
  async verifyElementText(locator: Locator, expectedText: string, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting exact text of element: ${locatorDescription} - Expected: "${expectedText}"`);
    await expect(locator).toHaveText(expectedText, options);
  }

  /**
   * Verify element contains specific text
   */
  async verifyElementContainsText(locator: Locator, expectedText: string, options: object = {}): Promise<void> {
    const locatorDescription = locator.toString();
    await this.log(`Asserting element contains text: ${locatorDescription} - Expected to contain: "${expectedText}"`);
    await expect(locator).toContainText(expectedText, options);
  }

  async verifyPageContainsGivenTitle(page: Page, title: string): Promise<void> {
    await this.log(`Asserting title of page: ${title}`);
    await expect(page).toHaveTitle(title);
  }

  async assertForEquality<T>(actual: T, expected: T): Promise<void> {
    await this.log(`Asserting equality: expected "${expected}", actual "${actual}"`);
    await expect(actual).toBe(expected);
  }

  async verifyPageContainsGivenUrl(page: Page, url: string): Promise<void> {
    await this.log(`Asserting url of page: ${url}`);
    await expect(page).toHaveURL(url);
  }

}

export default new Assertion();