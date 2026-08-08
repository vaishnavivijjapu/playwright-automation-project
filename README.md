# playwright-automation-project
# Playwright Automation Framework

A maintainable UI automation testing framework built using **Playwright, JavaScript and Node.js**.
This project automates end-to-end testing of an employee management application and follows the **Page Object Model (POM)** design pattern.

## 🚀 Tech Stack

* JavaScript
* Playwright
* Node.js
* npm
* Git & GitHub
* GitHub Actions
* HTML Test Reporter

## 🏗️ Framework Structure

```text
PROJECT1/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── Helpers/
│   └── EmployeeSetup.js
│
├── Pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── PIMPage.js
│   ├── AddEmployee.js
│   └── ...
│
├── Utils/
│   ├── testdata.json
│   └── test-assets/
│
├── tests/
│   ├── LoginValidation.spec.js
│   ├── EmployeeValidation.spec.js
│   ├── PersonalDetailsValidation.spec.js
│   ├── ContactDetailsValidation.spec.js
│   ├── QualificationValidation.spec.js
│   └── ...
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 🧪 Test Coverage

The framework covers multiple employee-management modules, including:

* Login validation
* PIM validation
* Employee creation
* Employee search and reset
* Personal details
* Contact details
* Emergency contacts
* Dependents
* Job details
* Immigration details
* Qualifications
* Membership
* Salary details
* Reports
* Dashboard functionality

## 🔧 Framework Features

* Page Object Model (POM)
* Centralized `POManager`
* Reusable helper classes
* Common employee setup using `EmployeeSetup`
* External test data using JSON
* Reusable test assets
* Explicit assertions using Playwright `expect`
* Screenshot capture on test failure
* Playwright trace collection on failure
* HTML test reporting
* Configurable headless/headed execution
* GitHub Actions CI execution

## 📊 Test Execution

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/LoginValidation.spec.js
```

### Generate and open the HTML report

```bash
npx playwright show-report
```

## ⚙️ Configuration

The Playwright configuration is maintained in:

```text
playwright.config.js
```

The framework is configured to:

* Run Chromium tests
* Use different headed/headless behavior for local and CI execution
* Capture screenshots on failures
* Retain traces for failed tests
* Generate HTML reports
* Configure test and assertion timeouts

## 🔄 CI/CD

The project uses **GitHub Actions** to automatically execute Playwright tests whenever changes are pushed to the repository.

Workflow:

```text
Developer Push
      ↓
GitHub Repository
      ↓
GitHub Actions
      ↓
Install Dependencies
      ↓
Install Playwright Browsers
      ↓
Execute Tests
      ↓
Generate Test Results
```

## 🎯 Purpose of the Project

The purpose of this project is to demonstrate practical experience in building a maintainable Playwright automation framework using:

* Page Object Model
* Reusable components
* Test data management
* Helper classes
* Assertions
* CI automation
* Test reporting

## 👨‍💻 Author

Vaishnavi Vijjapu

