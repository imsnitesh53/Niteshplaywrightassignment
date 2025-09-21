import { Page, Locator } from '@playwright/test';

class UploadPage {
  readonly page: Page;

  readonly header: {
    title: Locator;
    subtitle: Locator;
  };

  readonly tabs: {
    uploadTab: Locator;
    inProgressTab: Locator;
    completedTab: Locator;
  };

  readonly uploadSection: {
    sectionTitle: Locator;
    sectionDescription: Locator;
    uploadGuidelinesTitle: Locator;
    uploadGuidelineItems: Locator;
    cloudUploadIcon: Locator;
    dropAreaText: Locator;
    supportedFormats: Locator;
    maxFileSize: Locator;
    uploadButton: Locator;
    fileInput: Locator;
  };

  readonly inProgressSection: {
    sectionTitle: Locator;
    sectionDescription: Locator;
    noFilesUploadingText: Locator;
  };

  readonly completedSection: {
    sectionTitle: Locator;
    sectionDescription: Locator;
    uploadHistoryItems: Locator;
    uploadHistoryItemByName: (name: string) => Locator;
    uploadStatusChip: (name: string, status: 'Uploaded' | 'Failed' | 'Cancelled') => Locator;
    detailsButton: (name: string) => Locator;
  };

  constructor(page: Page) {
    this.page = page;

    this.header = {
      title: page.locator('//h2[normalize-space(text())="Slide Upload Dashboard"]'),
      subtitle: page.locator('//div[contains(@class,"text-neutral-500") and contains(text(),"Slide Management Dashboard")]'),
    };

    this.tabs = {
      uploadTab: page.locator('//button[@role="tab" and normalize-space(text())="Upload"]'),
      inProgressTab: page.locator('//button[@role="tab" and normalize-space(text())="In Progress"]'),
      completedTab: page.locator('//button[@role="tab" and normalize-space(text())="Completed"]'),
    };

    this.uploadSection = {
      sectionTitle: page.locator('//h2[normalize-space(text())="Upload Slides"]'),
      sectionDescription: page.locator('//p[contains(text(),"Select and upload slide files")]'),
      uploadGuidelinesTitle: page.locator('//h3[normalize-space(text())="Upload Guidelines:"]'),
      uploadGuidelineItems: page.locator('//h3[normalize-space(text())="Upload Guidelines:"]/following-sibling::div//p'),
      cloudUploadIcon: page.locator('svg[data-testid="CloudUploadIcon"]'),
      dropAreaText: page.locator('//h6[contains(text(),"Choose files or drag and drop files here")]'),
      supportedFormats: page.locator('//h3[contains(text(),"Supported formats")]'),
      maxFileSize: page.locator('//h3[contains(text(),"Maximum file size")]'),
      uploadButton: page.locator('//button[normalize-space(text())="Upload"]'),
      fileInput: page.locator('input[type="file"][multiple]'),
    };

    this.inProgressSection = {
      sectionTitle: page.locator('//h2[normalize-space(text())="Slide Upload(s) In Progress"]'),
      sectionDescription: page.locator('//p[contains(text(),"Your files are uploading in the background")]'),
      noFilesUploadingText: page.locator('//h6[contains(text(),"No files currently uploading")]'),
    };

    this.completedSection = {
      sectionTitle: page.locator('//h2[normalize-space(text())="Slide Upload History"]'),
      sectionDescription: page.locator('//p[contains(text(),"View slide(s) upload history")]'),
      uploadHistoryItems: page.locator('//h6[contains(@class,"MuiTypography-h6") and @class and contains(@class,"text-primary")]'),
      uploadHistoryItemByName: (name: string) =>
        page.locator(`//h6[contains(@class,"MuiTypography-h6") and text()="${name}"]`),
      uploadStatusChip: (name: string, status: 'Uploaded' | 'Failed' | 'Cancelled') =>
        page.locator(`//h6[text()="${name}"]/following::span[contains(@class,"MuiChip-label") and text()="${status}"]`),
      detailsButton: (name: string) =>
        page.locator(`//h6[text()="${name}"]/ancestor::div[contains(@class,"flex")]/div[contains(@class,"gap-2")]//button`),
    };
  }
}

export default UploadPage;