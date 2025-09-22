import { Page, Locator } from '@playwright/test';

class DashboardPage {
  readonly page: Page;
  readonly navigation: {
    dashboard: Locator;
    model: Locator;
    reports: Locator;
    uploads: Locator;
    chevronRightIcon: Locator;
  };

  readonly header: {
    readonly logo: Locator;
    readonly supportIcon: Locator;
    readonly userAvatarButton: Locator;
    readonly userAvatarImage: Locator;
    readonly orgName: Locator;
    readonly myOrganization: Locator;
    readonly logout: Locator;
  };
      
  
  readonly dashboardSection: {
    slidesTab: Locator;
    projectsTab: Locator;
    searchInput: Locator;
    searchIcon: Locator;
    addFiltersButton: Locator;
    uploadSlidesButton: Locator;
    createProjectButton: Locator;
    orderStainsButton: Locator;
    overrideButton: Locator;
    selectAllCheckbox: Locator;
    qcHeader: Locator;
    slideNameHeader: Locator;
    imageTypeHeader: Locator;
    dateHeader: Locator;
    stainsHeader: Locator;
    tissueTypeHeader: Locator;
    speciesHeader: Locator;
    slideName: (Slidename: string) => Locator;

   
  };

  constructor(page: Page) {
    this.page = page;

    this.navigation = {
      dashboard: page.locator(`(//ul/li[contains(@class, 'MuiListItem-root')])[1]`),
      model: page.locator(`(//ul/li[contains(@class, 'MuiListItem-root')])[2]`),
      reports: page.locator(`(//ul/li[contains(@class, 'MuiListItem-root')])[3]`),
      uploads: page.locator(`(//ul/li[contains(@class, 'MuiListItem-root')])[4]`),
      chevronRightIcon: page.locator('[data-testid="ChevronRightIcon"]'),
    };
    this.header={
      logo: page.locator('img[src*="svg"][class*="w-10"]'),
      supportIcon: page.locator('img[alt="Support"]'),
      userAvatarButton: page.locator('button#long-button[aria-label="more"]'),
      userAvatarImage: page.locator('button#long-button img[alt*="@pictorlabs.ai"]'),
      orgName: page.locator('div.flex.items-center.capitalize span'),
      myOrganization: page.locator('//div[normalize-space(text())="My Organization"]'),
      logout: page.locator('//div[normalize-space(text())="Log out"]'),

    }

    this.dashboardSection = {
  slidesTab: page.locator('//button[@role="tab" and normalize-space()="Slides"]'),
  projectsTab: page.locator('//button[@role="tab" and normalize-space()="Projects"]'),
  searchInput: page.locator('//input[@placeholder="Search"]'),
  searchIcon: page.locator('//*[local-name()="svg" and @data-testid="SearchOutlinedIcon"]'),
  addFiltersButton: page.locator('//button[normalize-space()="Add Filters"]'),
  uploadSlidesButton: page.locator('//span[normalize-space()="Upload Slides"]/ancestor::button'),
  createProjectButton: page.locator('//button[normalize-space()="Create / Add to Project"]'),
  orderStainsButton: page.locator('//button[normalize-space()="Order Stains"]'),
  overrideButton: page.locator('//button[normalize-space()="Override"]'),
  selectAllCheckbox: page.locator('//input[@type="checkbox" and @aria-label="Select All"]'),
  
  // Headers
  qcHeader: page.locator('//div[normalize-space()="QC"]'),
  slideNameHeader: page.locator('//span[normalize-space()="Slide Name"]'),
  imageTypeHeader: page.locator('//span[normalize-space()="Image Type"]'),
  dateHeader: page.locator('//span[normalize-space()="Date"]'),
  stainsHeader: page.locator('//div[normalize-space()="Stains"]'),
  tissueTypeHeader: page.locator('//div[normalize-space()="Tissue Type"]'),
  speciesHeader: page.locator('//div[normalize-space()="Species"]'),

  // Dynamic slide name
  slideName: (name) => page.locator(`//div[normalize-space()="${name}"]`)

     
    };
  }
}

export default DashboardPage;