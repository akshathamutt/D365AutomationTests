import {expect, test} from '@playwright/test'
import { NavigationPage } from '../../page-objects/navigationPage'

 
 
test('runTrailBalance',async({page})=> {
   await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')
   //const usingTheGridEmailInput = page.locator('[id="i0116"]')
   // await usingTheGridEmailInput.fill('Lmi.d365testuser4@lesmills.com')
   await page.locator('[id="i0116"]').fill('Lmi.d365testuser4@lesmills.com')
   await page.locator('[type="submit"]').click()
   await page.locator('[name="passwd"]').fill('lmivic-927!')
   await page.locator('[type="submit"]').click()
   await page.locator('[type="submit"]').click()


   await page.getByRole('textbox')
 
 
   await page.getByLabel("Expand the navigation pane").click();
   await page.getByLabel("Modules").click();
   await page.getByText("General Ledger").dblclick();
   await page.locator('[class="modulesFlyout-ExpandAll"]').click();
   await page.getByText("Trial balance").first().click()

   //Click on the "Calculate balances" Button 
   await page.getByRole('button',{name:"Calculate balances"}).click()
   await page.close()
   
   //Assert to make sure the balances are Zero
   
  

})