import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Open the Test Environment 
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmus&mi=DefaultDashboard');

  //Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByText('All purchase orders').click();

await page.getByRole('combobox', { name: 'Filter' }).click();
await page.getByRole('combobox', { name: 'Filter' }).fill('LMUS-PO-000472');
  await page.getByRole('combobox', { name: 'Filter' }).press('Enter');
 
  try {
    await page.locator('input[value="LMUS-PO-000472"]').click();
  } catch (error) {
    console.error('Error clicking on the element with value TestOrder0899:', JSON.stringify(error));
  }
 
 await page.locator('#purchtablelistpage_2_Invoice_button').click();
 //await page.locator('#purchtablelistpage_11_buttonJournalInvoice').click();
 
 await page.getByLabel('Journals').getByRole('button', { name: 'Invoice', exact: true }).click();
 await page.getByLabel('Preview/Print').click();
 await page.getByLabel('Use print management').click();
 

});