import { Page, Locator } from '@playwright/test';
import { wait } from './waitutils';


class Action {
  async waitForPageToLoad(page: Page, timeout: number = wait.extraLarge): Promise<void> {
    await this.log("Waiting for the page to load");
    try {
      await page.waitForLoadState('networkidle', { timeout });
      await this.log("Page loaded");
    } catch (error) {
      await this.log("Network idle timeout, falling back to domcontentloaded");
      await page.waitForLoadState('domcontentloaded');
    }
  }

  /**
   * Logs a message to the console and Allure report (if available).
   */
  async log(message: string): Promise<void> {
    console.log(message);
  }

  async clickOn(locator: Locator, options: Parameters<Locator['click']>[0] = {}): Promise<void> {
    await this.log(`Performing click action on: ${locator.toString()}`);
    await locator.click(options);
  }

  async enterText(locator: Locator, text: string): Promise<void> {
    await this.log(`Entering text "${text}" in: ${locator.toString()}`);
    await locator.fill(text);
  }

  async clearText(locator: Locator): Promise<void> {
    await this.log(`Clearing text in: ${locator.toString()}`);
    await locator.clear();
  }

  async getElementText(locator: Locator): Promise<string | null> {
    await this.log(`Getting text from: ${locator.toString()}`);
    return await locator.textContent();
  }

  async getInputValue(locator: Locator): Promise<string> {
    await this.log(`Getting input value from: ${locator.toString()}`);
    return await locator.inputValue();
  }

  async selectOption(locator: Locator, value: string): Promise<void> {
    await this.log(`Selecting option "${value}" in: ${locator.toString()}`);
    await locator.selectOption(value);
  }

  async hoverOn(locator: Locator): Promise<void> {
    await this.log(`Hovering over: ${locator.toString()}`);
    await locator.hover();
  }

  async waitFor(page: Page, timeOut: number): Promise<void> {
    await this.log(`Waiting for ${timeOut} milliseconds`);
    await page.waitForTimeout(timeOut);
  }

  async waitForInvisible(locator: Locator, options: Parameters<Locator['waitFor']>[0] = {}): Promise<void> {
    await this.log(`Waiting for invisibility of: ${locator.toString()}`);
    await locator.waitFor({ state: 'hidden', ...options });
  }

  async pressKey(page: Page, keyName: string): Promise<void> {
    await this.log(`Pressing key: ${keyName}`);
    await page.keyboard.press(keyName);
  }

  async getNoOfElements(locator: Locator): Promise<number> {
    await this.log(`Getting no of elements for: ${locator.toString()}`);
    return await locator.count();
  }
}

export default new Action();
