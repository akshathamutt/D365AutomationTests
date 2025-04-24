import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Open the Test Environment 
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard');

  //Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();
await page.getByLabel('Bank management').click();
await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=BankTreasurerWorkspace');
await page.getByLabel('Modules').locator('span').nth(1).click();
await page.getByRole('treeitem', { name: 'Expense management' }).click();
await page.getByRole('button', { name: 'Expand all' }).click();
await page.getByText('Expense reports', { exact: true }).click();
  
  

});