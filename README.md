# Test Automation Framework

A comprehensive Playwright-based test automation framework for testing a web application with multiple modules including Dashboard, Upload, Model, and Report pages.

## 📁 Project Structure

```
new/
├── pages/                    # Page Object Model classes
│   ├── dashboardPage.ts     # Dashboard page locators and methods
│   ├── uploadPage.ts        # Upload page locators and methods
│   ├── modelPage.ts         # Model page locators and methods
│   ├── reportPage.ts        # Report page locators and methods
│   └── loginPage.ts         # Login page locators and methods
├── tests/                   # Test specification files
│   ├── dashboard.spec.ts    # Dashboard functionality tests
│   ├── upload.test.ts       # Upload functionality tests
│   ├── model.spec.ts        # Model page tests
│   ├── report.spec.ts       # Report page tests
│   └── login.spec.ts        # Login functionality tests
├── utils/                   # Utility modules
│   ├── action.ts           # User action utilities
│   ├── assertion.ts        # Assertion utilities
│   └── waitutils.js        # Wait time constants
├── testData.ts             # Test data configuration
├── allure-results/         # Test execution results
├── playwright-report/      # Playwright HTML reports
├── test-results/          # Test artifacts and screenshots
├── playwright.config.ts   # Playwright configuration
└── package.json           # Project dependencies
```

## 🛠️ Tech Stack

- **Playwright** - Browser automation framework
- **TypeScript** - Programming language for type safety
- **Allure** - Advanced test reporting
- **Node.js** - Runtime environment

## 📦 Dependencies

```json
{
  "devDependencies": {
    "@playwright/test": "^1.55.0",
    "@types/node": "^24.5.2"
  },
  "dependencies": {
    "allure": "^3.0.0-beta.18",
    "allure-commandline": "^2.34.1",
    "allure-playwright": "^3.4.1"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd foldername
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📋 Test Modules

### 1. Login Tests (`tests/login.spec.ts`)
- Login page element validation
- Valid credential authentication
- Invalid credential handling
- Logout functionality

### 2. Dashboard Tests (`tests/dashboard.spec.ts`)
- Navigation through dashboard items (Model, Reports, Uploads)
- Slide searching functionality with test data
- Dashboard section element validation
- Upload file disabled state verification

### 3. Upload Tests (`tests/upload.test.ts`)
- Tab switching validation (Upload, In Progress, Completed)
- Upload section content verification
- File upload guidelines validation
- Upload history tracking

### 4. Model Tests (`tests/model.spec.ts`)
- Organization model page validation
- Stainer count verification
- Model switch state validation (disabled state)
- RUO (Research Use Only) text validation for all models

### 5. Report Tests (`tests/report.spec.ts`)
- STAINS tab validation with charts and accordions
- USERS tab validation with user management
- Report section elements verification
- Data filtering and download functionality

## 🎯 Page Object Model

The framework follows the Page Object Model pattern with dedicated classes for each page:

### LoginPage
- Sign-in elements and authentication flow
- Error message handling
- Dashboard navigation verification

### DashboardPage
- Navigation elements (Dashboard, Model, Reports, Uploads)
- Header components (logo, user avatar, organization info)
- Search functionality for slides
- Dashboard sections with slide management

### UploadPage
- Tab navigation (Upload, In Progress, Completed)
- Upload sections with different states
- File upload components and guidelines
- Upload history with status tracking

### ModelPage
- Organization models interface
- Stainer sections (Auto Deep Stainer, Auto Restainer)
- Model switches and configurations
- Version and type information

### ReportPage
- Report tabs (STAINS, USERS)
- Chart and graph elements (Highcharts integration)
- User management components
- Data filtering and export functionality
- Accordion sections for different stain types

## 🔧 Utilities

### Action Utilities (`utils/action.ts`)
- `clickOn()` - Element click actions
- `enterText()` - Text input actions
- `clearText()` - Text clearing functionality
- `getElementText()` - Text extraction utilities

### Assertion Utilities (`utils/assertion.ts`)
- `verifyElementExistsOnPage()` - Element presence verification
- `verifyElementDoesNotExistsOnPage()` - Element absence verification
- `verifyElementIsDisabled()` - Disabled state verification
- `verifyPageContainsGivenUrl()` - URL validation
- `assertForEquality()` - Value comparison assertions

### Wait Utilities (`utils/waitutils.js`)
```javascript
export const wait = {
    tiny: 200,
    small: 500,
    medium: 1000,
    large: 3000,
    extraLarge: 5000,
    // Additional wait constants for different scenarios
}
```

## 🧪 Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run specific test file:
```bash
npx playwright test tests/dashboard.spec.ts
```

### Run specific test suite:
```bash
npx playwright test --grep "Dashboard test suite"
```

### Run with specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run in headed mode (visible browser):
```bash
npx playwright test --headed
```

### Run in debug mode:
```bash
npx playwright test --debug
```

## 📊 Test Reporting

The framework supports multiple reporting options:

### Playwright HTML Report:
```bash
npx playwright show-report
```

### Allure Report:
```bash
npx allure serve allure-results
```

### Generate and view Allure report:
```bash
npx allure generate allure-results --clean
npx allure open allure-report
```

## 🔍 Locator Strategies

The framework uses robust XPath locators for element identification:

```typescript
// Text-based locators
yearLabel: page.locator('//label[normalize-space(text())="Year"]')
uploadButton: page.locator('//button[normalize-space(text())="Upload"]')

// Parameterized locators
userCard: (email: string) => page.locator(`//p[text()="${email}"]/ancestor::div`)
slideName: (name: string) => page.locator(`//div[text()="${name}"]`)

// Complex ancestor/descendant relationships
quarterInput: page.locator('//h6[text()="Immunohistochemistry"]/ancestor::div[contains(@class,"MuiAccordion-root")]//input[@role="combobox"]')
```

## 🏗️ Test Structure

Each test follows a consistent pattern:

```typescript
test.describe('Test Suite Name', () => {
  test.beforeEach(async ({ page }) => {
    // Common setup: Login and navigation
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await userActions.clickOn(loginPage.signinButton);
    await loginPage.login(testData.loginCredential.Validemail, testData.loginCredential.Validpassword);
    await assertion.verifyElementExistsOnPage(loginPage.dashBoardIcon);
  });

  test('test description', async ({ page }) => {
    const pageObject = new PageClass(page);
    
    // Actions
    await userActions.clickOn(pageObject.element);
    
    // Assertions
    await assertion.verifyElementExistsOnPage(pageObject.expectedElement);
  });
});
```

## 📊 Test Data Management

Test data is centralized in `testData.ts`:

```typescript
export const testData = {
  loginCredential: {
    Validemail: "user@example.com",
    Validpassword: "password123",
    InValidemail: "invalid@example.com"
  },
  searchData: {
    test_small_bf_1: "test_small_bf_1",
    test_small_af_1: "test_small_af_1"
  },
  dashboardNavigation: {
    model: "model",
    reports: "reports",
    uploads: "uploads"
  }
}
```

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)
The framework is configured to run tests across multiple browsers with:
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel execution
- Screenshot and video capture on failure
- Allure reporting integration

## 🐛 Troubleshooting

### Common Issues

#### XPath Errors
If you encounter XPath syntax errors:
- Ensure proper escaping of quotes and special characters
- Use `normalize-space()` for text matching with whitespace
- Verify element hierarchy with browser developer tools

#### Element Not Found
- Check if element locators are up to date with UI changes
- Verify page load states before interacting with elements
- Add appropriate waits if elements load asynchronously

#### Test Timeouts
- Increase timeout values for slow-loading pages
- Use `waitForSelector()` for dynamic content
- Optimize test data and reduce unnecessary operations

### Debugging Tips

1. Use `--headed` mode to see browser actions
2. Add `await page.pause()` to stop execution for debugging
3. Use `--debug` flag for step-by-step execution
4. Check screenshots in `test-results/` folder for failures

## 🤝 Contributing

### Guidelines
1. Follow the existing Page Object Model structure
2. Use descriptive test names and organize tests logically
3. Add appropriate assertions for all validations
4. Update documentation for new features
5. Follow TypeScript best practices

### Adding New Tests
1. Create page objects in `pages/` directory
2. Add test specifications in `tests/` directory
3. Update test data in `testData.ts` if needed
4. Ensure proper error handling and assertions

### Code Review Checklist
- [ ] Page objects follow established patterns
- [ ] Tests have descriptive names and clear purpose
- [ ] Proper error handling and assertions
- [ ] No hardcoded values (use testData)
- [ ] Documentation updated for new features

## 📝 Notes

- All tests include authentication flow in `beforeEach` hooks
- Tests validate both UI elements and functional behavior
- Framework supports parallel execution across multiple browsers
- Allure reporting provides detailed execution insights with screenshots
- Robust XPath locators ensure test stability across UI changes

## 📞 Support

For issues or questions:
1. Check existing test results in `allure-results/`
2. Review Playwright documentation for API references
3. Check browser console for JavaScript errors
4. Use debug mode for step-by-step troubleshooting

---

**Last Updated:** September 2025
**Framework Version:** 1.0.0
**Playwright Version:** 1.55.0
