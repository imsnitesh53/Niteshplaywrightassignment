import { Page, Locator } from '@playwright/test';

class ModelPage {
  readonly page: Page;

  readonly header: {
    title: Locator;
    subtitle: Locator;
  };

  readonly tabs: {
    stainManagementTab: Locator;
  };

  readonly summary: {
    totalStainersLabel: Locator;
    totalStainersValue: Locator;
    totalStainersSubLabel: Locator;
  };

  readonly stainerSections: {
    sectionTitle: (title: string) => Locator;
    modelCardByName: (name: string) => Locator;
    modelName: (name: string) => Locator;
    modelType: (name: string) => Locator;
    modelVersion: (name: string) => Locator;
    modelRUOText: (name: string) => Locator;
    modelSwitch: (name: string) => Locator;
    loadingStainInfo: Locator;
  };

  constructor(page: Page) {
    this.page = page;

    this.header = {
      title: page.locator('//h2[normalize-space(text())="Organization Models"]'),
      subtitle: page.locator('//div[contains(@class,"text-neutral-500") and contains(text(),"Organization Stain Management")]'),
    };

    this.tabs = {
      stainManagementTab: page.locator('//button[@role="tab" and normalize-space(text())="Stain Management"]'),
    };

    this.summary = {
      totalStainersLabel: page.locator('//div[contains(text(),"Total Stainers Available")]'),
      totalStainersValue: page.locator('//div[contains(text(),"Total Stainers Available")]/following-sibling::div[contains(@class,"font-extrabold")]'),
      totalStainersSubLabel: page.locator('//div[contains(text(),"Total Stainers Available")]/following-sibling::div[contains(text(),"Stain Management")]'),
    };

    this.stainerSections = {
      sectionTitle: (title: string) => page.locator(`//h6[contains(@class,"MuiTypography-h6") and normalize-space(text())="${title}"]`),
      modelCardByName: (name: string) => page.locator(`//div[contains(@class,"flex-row") and .//div[contains(@class,"font-bold") and contains(text(),"${name}")]]`),
      modelName: (name: string) => page.locator(`//div[contains(@class,"font-bold") and contains(text(),"${name}")]`),
      modelType: (name: string) => page.locator(`//div[contains(@class,"font-bold") and contains(text(),"${name}")]/span`),
      modelVersion: (name: string) => page.locator(`//div[contains(@class,"font-bold") and contains(text(),"${name}")]/following-sibling::div[contains(text(),"Version:")]`),
      modelRUOText: (name: string) => page.locator(`//div[contains(@class,"font-bold") and contains(text(),"${name}")]/following-sibling::div//div[contains(@class,"italic")]`),
      modelSwitch: (name: string) => page.locator(`//div[contains(@class,"font-bold") and contains(text(),"${name}")]/ancestor::div[contains(@class,"flex-row")]/following-sibling::div//input[@type="checkbox"]`),
      loadingStainInfo: page.locator('//p[contains(text(),"Loading stain information")]'),
    };
  }
}

export default ModelPage;