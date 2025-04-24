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
  

  //Open General Ledger Module
  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'General ledger' }).click();
  await page.getByText('Trial balance', { exact: true }).click();


  //Select the dates and click on calculate balances
  await page.getByRole('button', { name: 'Calculate balances' }).click();


  //Check the balance = 0.00
        ///var balance = await page.getByLabel('Balance', { exact: true }).textContent();
        //expect(balance).toBe("0.00");

        //var creditTotal = await page.getByText('Credit total', { exact: true }).textContent();

        //expect(creditTotal).toBe("0.00");



});



  /*
  Improvements: 
  1. Select specific dates 
  2. Check Balance value = 0.00
  */
