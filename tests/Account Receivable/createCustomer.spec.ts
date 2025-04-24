import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'

 
 
test('createSalesOrder',async({page})=> {
   //Open the Test Environment 
   await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmj&mi=DefaultDashboard')
   


   //Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();



   await page.getByText('All customers').click();
   await page.getByRole('button', { name: ' New' }).click();
   await page.getByRole('combobox', { name: 'Name' }).click();
   await page.getByRole('combobox', { name: 'Name' }).fill('Test 01');
   await page.getByRole('combobox', { name: 'Name' }).click();
   await page.locator('#DirPartyQuickCreateForm_3_DynamicDetail_CustGroup div').nth(1).click();
   await page.getByRole('row', { name: 'RELATED Related Party' }).getByLabel('Customer group').click();
   await page.locator('#DirPartyQuickCreateForm_3_LogisticsPostalAddress_CountryRegionId div').nth(1).click();
   await page.getByLabel('Country/region').fill('nz');
   await page.getByRole('textbox', { name: 'Country/region' }).click();
   await page.getByRole('button', { name: 'Save', exact: true }).click();
   await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmj&mi=CustTableListPage');
   await expect(page.getByText(': Test 01')).toBeVisible();
   await expect(page.locator('#custtablelistpage_2_HeaderTitle')).toContainText('102078 : Test 01');')
   


})