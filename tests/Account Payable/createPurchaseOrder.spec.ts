import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Open the Test Environment
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')

  ////Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').click();
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Yes' }).click();

  ////Open Purchase Order Module
  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.getByText('All purchase orders').click();
  //await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=PurchTableListPage');
  
  //Create Purchase order
  await page.getByRole('button', { name: ' New' }).click();
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').click();
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').fill('000003');
  await page.getByLabel('Create purchase order').getByLabel('Vendor account').press('Tab');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Item number').click();
  await page.getByLabel('Item number').click();
  await page.getByLabel('Item number').fill('400000');
  await page.getByRole('combobox', { name: 'Item number' }).press('Enter');
  await page.getByLabel('Unit price', { exact: true }).click();
  await page.getByLabel('Unit price', { exact: true }).fill('100');
  await page.getByLabel('Unit price', { exact: true }).press('Tab');
  await page.getByRole('button', { name: ' Save' }).click();


  //Submit workflow for Approval 
  await page.getByRole('button', { name: ' Workflow' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //Check the workflow is in Submission status
  await page.getByRole('button', { name: ' Workflow' }).click();
  await page.getByRole('button', { name: 'Workflow history' }).click();
  
  await expect(page.getByText('Submission')).toBeVisible();

  //Approve 

  //Post the PO

});

 /*
  Improvements: 
  1. Assert to check Workflow is submission status 
  */
