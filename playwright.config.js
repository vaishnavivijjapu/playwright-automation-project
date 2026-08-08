// @ts-check
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir : './tests',
  timeout : 50*1000,
  expect :{
    timeout : 5000
  },
  //retries : 1,
  reporter : 'html',
  use:{
    browserName : 'chromium',
    // headless : false,
    // screenshot : 'on',
    // trace : 'on',
    // slowMo : 2000
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    slowMo: process.env.CI ? 0 : 2000
  }
});