import { test, expect } from '@playwright/test'
import { NavigationPage } from '../../page-objects/navigationPage'

test('test', async ({ page }) => {
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')
   //const usingTheGridEmailInput = page.locator('[id="i0116"]')
   // await usingTheGridEmailInput.fill('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmuk&mi=DefaultDashboard')
   await page.locator('[id="i0116"]').fill('Lmi.d365testuser4@lesmills.com')
   await page.locator('[type="submit"]').click()
   await page.locator('[name="passwd"]').fill('lmivic-927!')
   await page.locator('[type="submit"]').click()
   await page.locator('[type="submit"]').click()


   //await page.locator('#SysCompanyChooser_2_DataArea_id div').nth(1).click();
   //await page.getByTitle('Les Mills United States Trading Inc').click();
   await page.getByLabel('Modules').locator('span').nth(1).click();
   await page.getByRole('treeitem', { name: 'Fixed assets' }).click();
   await page.getByRole('button', { name: 'Expand all' }).click();
   await page.getByText('Fixed assets', { exact: true }).nth(2).click();
   await page.getByRole('button', { name: ' New' }).click();


  
   await page.getByRole('combobox', { name: 'Fixed asset group' }).click();
   await page.getByRole('combobox', { name: 'Fixed asset group' }).fill('CH');
   await page.getByRole('textbox', { name: 'Quantity' }).click();


   //await page.locator('#assettable_6_Identification_AssetGroup div').nth(1).click();
   //await page.getByRole('gridcell', { name: 'CH' }).getByLabel('Fixed asset group').click();
   await page.getByRole('textbox', { name: 'Name', exact: true }).click();
   await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Test Asset 01');
   //await page.getByRole('textbox', { name: 'Quantity' }).click();
   await page.getByRole('textbox', { name: 'Quantity' }).fill('11.00');
   await page.getByLabel('Unit cost').click();
   await page.getByLabel('Unit cost').fill('500.00');
   await page.getByRole('button', { name: ' Save' }).click();

   //Books SLCORP
  await page.getByRole('button', { name: 'Books' }).click();

/*await page.locator('[class="section-page-caption layout-container layout-horizontal layout-horizontal-bottomalign"]').first().click({
  button: 'right'
})
await page.getByLabel('Expand all').click();*/


/*await page.getByRole('button', {  }).click()
    //button: "right"
  //});
await page.getByLabel('Expand all').click();*/

//await page.getByRole('button', { name: 'General' }).click();
//await page.locator('#AssetBook_3_Acquisition_AcquisitionDate div').nth(3).//click();
//await page.getByRole('button', { name: 'Today', exact: true }).click();

  await page.getByLabel('Acquisition price', { exact: true }).fill('500.00')

  //await page.getByRole('combobox', { name: 'Acquisition date' }).fill('500.00')

  //Depreciation 

  await page.getByRole('button', { name: 'Depreciation' }).ex

  await page.getByLabel('Service life').fill('3.00');
  await page.getByLabel('Depreciation periods', { exact: true }).fill('36');
 // await page.getByLabel('Depreciation periods remaining').fill('36.00');

  


  await page.getByLabel('Department value').fill('CS');
  
  await page.getByLabel('EventType value').fill('na');
  await page.getByLabel('InterCompany value').fill('na');
  await page.getByLabel('JobCode value').fill('na');
  await page.getByLabel('MarketType value').fill('na');
  await page.getByLabel('Platform value').fill('na');
  await page.getByLabel('Product value').fill('na');
  await page.getByLabel('ProductType value').fill('na');
  await page.getByLabel('Role value').fill('na');
  await page.getByLabel('Territory value').fill('US');
  
  await page.getByRole('button', { name: ' Save' }).click();


  await page.getByRole('combobox', { name: 'Reason code' }).fill('DAMGD');
  await page.getByRole('combobox', { name: 'Reason code' }).press('Tab'); 

  await page.getByLabel('Reason comment').click();
  await page.getByRole('button', { name: 'OK' }).click();
})

//Expand all
//