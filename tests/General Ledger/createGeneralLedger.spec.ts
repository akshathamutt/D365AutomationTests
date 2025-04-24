import {expect, test} from '@playwright/test'
import { NavigationPage } from '../../page-objects/navigationPage'

 
 
test('createJournalEntry',async({page})=> {
   await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')
   //const usingTheGridEmailInput = page.locator('[id="i0116"]')
   // await usingTheGridEmailInput.fill('Lmi.d365testuser4@lesmills.com')
   await page.locator('[id="i0116"]').fill('Lmi.d365testuser4@lesmills.com')
   await page.locator('[type="submit"]').click()
   await page.locator('[name="passwd"]').fill('lmivic-927!')
   await page.locator('[type="submit"]').click()
   await page.locator('[type="submit"]').click()
 
 
   await page.getByLabel("Expand the navigation pane").click()
   await page.getByLabel("Modules").click()
   await page.getByText("General Ledger").dblclick()
   await page.locator('[class="modulesFlyout-ExpandAll"]').click()
   await page.getByText("General journals").first().click()


   //Click on the New Button 
  await page.getByRole('button', { name: ' New' }).click();

  await page.getByRole('combobox', { name: 'Name' }).click();
  await page.getByRole('button', { name: 'Open', exact: true }).click();
  await page.getByRole('row', { name: 'MANUAL Manual Journal', exact: true }).getByLabel('Description').click();
  await page.getByTitle('LMJ-JBN-004152\n\r\nClick to follow link').click();
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=LMJ&mi=LedgerJournalTable3');

  await page.locator('#overviewGrid_153_0_grid > .public_fixedDataTable_horizontalScrollbar > div > .ScrollbarLayout_main > .ScrollbarLayout_face').click();
  await page.locator('#overviewGrid_153_0_grid > .public_fixedDataTable_horizontalScrollbar > div > .ScrollbarLayout_main > .ScrollbarLayout_face').click();
  await page.locator('#overviewGrid_153_0_grid > .public_fixedDataTable_horizontalScrollbar > div > .ScrollbarLayout_main').click();
  await page.locator('#LedgerJournalTrans_OffsetAccount_0_segmentedEntryLookup').getByRole('button', { name: 'Open' }).click();
  await page.getByTitle('112015').click();
  
  


















   //Create Journal
   await page.locator('[class="dyn-field dyn-hyperlink _1tyrji1"]').fill('Manual') // CHECK FROM THIS POINT 
   await page.keyboard.press('Enter')
    
   //Open the Journal Voucher
   await page.locator('[class="dyn-field dyn-hyperlink _7vgrl9"]').click()

   //Enter Journal Lines
   await page.locator('[id="LedgerJournalTrans_AccountNum_0_segmentedEntryLookup_input"]').fill('112015.NA.NA.NA.NA.90001.NA') 

   //Enter credit and Debit Amount
   await page.locator('[id="LedgerJournalTrans_AmountCurDebit_135_0_0_input"]').fill('1200') 
   await page.locator('[id="LedgerJournalTrans_AmountCurCredit_135_0_0_input"]').fill('1200')

   //Enter Offset account 
   await page.locator('[id="LedgerJournalTrans_OffsetAccount_0_segmentedEntryLookup_input"]').fill('112010.NA.NA.NA.NA.90001.NA')

   //Validate the JournalVoucher
   await page.locator('[class="button-label button-label-dropDown"]').click()
   await page.locator('[class="Auto button flyout-menuItem selected"]').click()


   

   /*
   await page.locator('[data-dyn-controlname="Yes"]').click()
   await page.locator('[id="SalesCreateOrder_8_OK"]').click()
   //Check if the Sales order is created

   //await page.locator('[class="titleField staticText layout-ignoreArrange fill-width"]').
   const salesOrderNumber = await page.locator('[class="titleField staticText layout-ignoreArrange fill-width"]')
   const text = await salesOrderNumber.textContent()

   await expect(salesOrderNumber).toContainText('LMSS')*/

})