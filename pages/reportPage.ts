import { Page, Locator } from '@playwright/test';

class ReportPage {
  readonly page: Page;
  readonly header: {
    title: Locator;
    subtitle: Locator;
  };
  readonly tabs: {
    stainsTab: Locator;
    usersTab: Locator;
  };
  readonly search: {
    searchInput: Locator;
    searchIcon: Locator;
  };
  readonly stains: {
    infoText: Locator;
    yearLabel: Locator;
    yearInput: Locator;
    yearDropdown: Locator;
    downloadUsageReportButton: Locator;
    chart: Locator;
    legendIHC: Locator;
    legendHE: Locator;
    legendSpecial: Locator;
    stainTypeDetailsTitle: Locator;
    immunohistochemistryAccordion: Locator;
    immunohistochemistryQuarterLabel: Locator;
    immunohistochemistryQuarterInput: Locator;
    immunohistochemistryQuarterDropdown: Locator;
    downloadIHCUsageReportButton: Locator;
    monthlyDistributionTitle: Locator;
    monthlyDistributionTotal: Locator;
    monthlyDistributionSuccess: Locator;
    monthlyDistributionChart: Locator;
    monthlyBreakdownTitle: Locator;
    monthlyBreakdownItem: (month: string) => Locator;
    monthlyBreakdownStains: (month: string) => Locator;
    monthlyBreakdownMoreButton: (month: string) => Locator;
    hematoxylinAccordion: Locator;
    hematoxylinQuarterLabel: Locator;
    hematoxylinQuarterInput: Locator;
    hematoxylinQuarterDropdown: Locator;
    downloadHEUsageReportButton: Locator;
    specialStainAccordion: Locator;
    specialStainQuarterLabel: Locator;
    specialStainQuarterInput: Locator;
    specialStainQuarterDropdown: Locator;
    downloadSpecialUsageReportButton: Locator;
  };
  readonly userList: {
    userCard: (email: string) => Locator;
    userAvatar: (email: string) => Locator;
    userName: (email: string) => Locator;
    userEmail: (email: string) => Locator;
    viewUserButton: (email: string) => Locator;
  };

  constructor(page: Page) {
    this.page = page;

    this.header = {
      title: page.locator('//h2[normalize-space(text())="Organization Reports"]'),
      subtitle: page.locator('//div[contains(@class,"text-neutral-500") and contains(text(),"Entire organization")]'),
    };

    this.tabs = {
      stainsTab: page.locator('//button[@role="tab" and normalize-space(text())="STAINS"]'),
      usersTab: page.locator('//button[@role="tab" and normalize-space(text())="USERS"]'),
    };

    this.search = {
      searchInput: page.locator('input[placeholder="Search by name or email"]'),
      searchIcon: page.locator('//svg[@data-testid="SearchOutlinedIcon"]'),
    };
this.stains = {
  infoText: page.locator('//div[text()="Number of stains Organization completed over the past 365 days"]'),
  yearLabel: page.locator('//label[normalize-space(text())="Year"]'),
  yearInput: page.locator('input[aria-autocomplete="list"][role="combobox"]'),
  yearDropdown: page.locator('button[@aria-label="Open" and @title="Open"]'),
  downloadUsageReportButton: page.locator('//button[text()="Download Usage Report"]'),
  chart: page.locator('//div[@data-highcharts-chart]'),
  legendIHC: page.locator('//span[text()="IHC"]'),
  legendHE: page.locator('//span[text()="H&E"]'),
  legendSpecial: page.locator('//span[text()="Special"]'),
  stainTypeDetailsTitle: page.locator('//h6[text()="Stain Type Details"]'),
  immunohistochemistryAccordion: page.locator('//h6[text()="Immunohistochemistry"]'),
  immunohistochemistryQuarterLabel: page.locator('//label[normalize-space(text())="Quarter"]'),
  immunohistochemistryQuarterInput: page.locator('//h6[text()="Immunohistochemistry"]/ancestor::div[contains(@class,"MuiAccordion-root")]//input[@role="combobox"]'),
  immunohistochemistryQuarterDropdown: page.locator('//h6[text()="Immunohistochemistry"]/ancestor::div[contains(@class,"MuiAccordion-root")]//button[@aria-label="Open"]'),
  downloadIHCUsageReportButton: page.locator('//button[text()="Download IHC Usage Report"]'),
  monthlyDistributionTitle: page.locator('//h6[text()="Monthly Distribution"]'),
  monthlyDistributionTotal: page.locator('//span[text()="Total:"]'),
  monthlyDistributionSuccess: page.locator('//span[text()="Success:"]'),
  monthlyDistributionChart: page.locator('//div[@data-highcharts-chart]'),
  monthlyBreakdownTitle: page.locator('//h6[text()="Monthly Breakdown"]'),
  monthlyBreakdownItem: (month: string) => page.locator(`//h6[text()="${month}"]`),
  monthlyBreakdownStains: (month: string) => page.locator(`//h6[text()="${month}"]/following-sibling::h6[1]`),
  monthlyBreakdownMoreButton: (month: string) => page.locator(`//h6[text()="${month}"]/ancestor::div[contains(@class,"MuiPaper-root")]//button[@aria-label="more"]`),
  hematoxylinAccordion: page.locator('//h6[text()="Hematoxylin and Eosin"]'),
  hematoxylinQuarterLabel: page.locator('//button[.//h6[text()="Hematoxylin and Eosin"]]/ancestor::div[contains(@class,"MuiAccordion-root")]//label[normalize-space(text())="Quarter"]'),
  hematoxylinQuarterInput: page.locator('//button[.//h6[text()="Hematoxylin and Eosin"]]/ancestor::div[contains(@class,"MuiAccordion-root")]//input[@role="combobox"]'),
  hematoxylinQuarterDropdown: page.locator('//button[.//h6[text()="Hematoxylin and Eosin"]]/ancestor::div[contains(@class,"MuiAccordion-root")]//button[@aria-label="Open"]'),
  downloadHEUsageReportButton: page.locator('//button[text()="Download H&E Usage Report"]'),
  specialStainAccordion: page.locator('//button[text()="Special Stain"]'),
  specialStainQuarterLabel: page.locator('//button[.//h6[text()="Special Stain"]]/ancestor::div[contains(@class,"MuiAccordion-root")]//label[normalize-space(text())="Quarter"]'),
  specialStainQuarterInput: page.locator('//button[.//h6[text()="Special Stain"]]/ancestor::div[contains(@class,"MuiAccordion-root")]//input[@role="combobox"]'),
  specialStainQuarterDropdown: page.locator('//button[.//h6[text()="Special Stain"]]/ancestor::div[contains(@class,"MuiAccordion-root")]//button[@aria-label="Open"]'),
  downloadSpecialUsageReportButton: page.locator('//button[text()="Download Special Usage Report"]'),
};

    this.userList = {
      userCard: (email: string) => page.locator(`//p[contains(@class,"font-medium") and text()="${email}"]/ancestor::div[contains(@class,"css-ev42ux")]`),
      userAvatar: (email: string) => page.locator(`//img[contains(@alt,"${email}")]`),
      userName: (email: string) => page.locator(`//p[contains(@class,"font-medium") and text()="${email}"]`),
      userEmail: (email: string) => page.locator(`//p[contains(@class,"text-xs") and text()="${email}"]`),
      viewUserButton: (email: string) => page.locator(`//p[text()="${email}"]/ancestor::div[contains(@class,"css-ev42ux")]//button[normalize-space(text())="View User"]`),
    };
  }
}

export default ReportPage;