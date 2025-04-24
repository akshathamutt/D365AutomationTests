import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'

 
 
test('createSalesOrder',async({page})=> {
   //Open the Test Environment 
   await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmj&mi=DefaultDashboard')

   //Login using Credentials 
   await page.locator('[id="i0116"]').fill('Lmi.d365testuser4@lesmills.com')
   await page.locator('[type="submit"]').click()
   await page.locator('[name="passwd"]').fill('lmivic-927!')
   await page.locator('[type="submit"]').click()
   await page.locator('[type="submit"]').click()
 
   //Open Sales Order Module
   await page.getByLabel("Expand the navigation pane").click();
   await page.getByLabel("Modules").click();
   await page.getByText("Accounts receivable").dblclick();
   await page.locator('[class="modulesFlyout-ExpandAll"]').click();
   await page.getByText("All sales orders").click()

   //Create New Sales Order
   await page.locator('[class="button-commandRing New-symbol"]').click();
   await page.locator('[name="SalesTable_CustAccount"]').fill('100003');
   await page.keyboard.press('Enter');

  //Check the Sales order is created 
  await expect(page.getByText('LMI Shared Services Ltd.')).toBeVisible();


  /*
  //Adding Sales Order lines
   await page.getByRole('button', { name: ' Add line' }).click();
   await page.getByLabel('Item number').fill('400029');
   await page.getByRole('combobox', { name: 'Item number' }).press('Tab');


   await page.getByRole('menuitem', { name: 'Form information' }).click();
   await page.getByLabel('Unit price', { exact: true }).click();

   await page.getByLabel('Quantity', { exact: true }).click();
   await page.getByLabel('Quantity', { exact: true }).fill('10.00');
  
   await page.getByLabel('Unit price', { exact: true }).fill('100.00');
  */

   /*

   //Adding Sales Order lines
   await page.getByRole('button', { name: ' Add line' }).click();
   await page.getByLabel('Item number').fill('400029');


   await page.keyboard.press('Tab');
   await page.getByLabel('Quantity', { exact: true }).fill('10.00');
   await page.keyboard.press('Tab');
   await page.getByLabel('Unit price', { exact: true }).fill('100.00');
   await page.keyboard.press('Tab');

   await page.getByRole('button', { name: ' Save' }).click();

*/

 //Adding Sales Order lines
await page.getByRole('combobox', { name: 'Item number' }).click();
await page.getByRole('combobox', { name: 'Item number' }).fill('400029');
await page.getByLabel('Product name').click();

/*await page.locator('div:nth-child(2) > div > .ScrollbarLayout_main').click();


await page.locator('#SalesLine_SalesQty_668_0_1_input').fill('10.00');
await page.locator('#SalesLine_SalesQty_668_0_1_input').press('Tab');

await page.getByRole('combobox', { name: 'Unit' }).fill('100.00');
await page.getByRole('combobox', { name: 'Unit' }).press('Tab');*/

await page.getByRole('button', { name: ' Save' }).click();

//Invoicing the sales order  
await page.getByRole('button', { name: 'Invoice' }).first().click();

await page.getByLabel('Generate').getByRole('button', { name: 'Invoice', exact: true }).click();
//await page.getByRole('button', { name: 'Parameters' }).click();
await page.getByRole('combobox', { name: 'Quantity' }).click();
await page.getByRole('option', { name: 'All' }).click();
await page.getByRole('button', { name: 'OK' }).click();
await page.getByLabel('You are about to post the').getByRole('button', { name: 'OK' }).click();

//Check the Sales order is Invoiced
await expect(page.getByRole('combobox', { name: 'Status', exact: true })).toBeVisible();


//var invoiced = await page.getByRole('combobox', { name: 'Status', exact: true }).textContent();
//await expect(invoiced : 'Invoiced')

  });


  /*
  Improvements: 
  1. Select Qty and unit on Sales order lines 
  2. Expand all on Invoice page (Parameters)
  3. Assert to check the status = Invoiced 
  */
