import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'

 
 
test('Login',async({page})=> {
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
   await page.getByText("Accounts receivable").dblclick()
   await page.locator('[class="modulesFlyout-ExpandAll"]').click()
   await page.getByText("All sales orders").click()
   await page.locator('[class="button-commandRing New-symbol"]').click()
 
 
   //await page.locator('[class="modulesPane-opener"]').click()
   //await page.getByLabel('Modules').click()
   //await page.getByText('Organization administration').click()
 
   //await page.locator('[data-dyn-title="Accounts receivable"]').click()
})
 
test('navigate to salesOrder page', async({page}) => {
 
    //Login to D365 Test
    await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard')
    //const usingTheGridEmailInput = page.locator('[id="i0116"]')
    // await usingTheGridEmailInput.fill('Lmi.d365testuser4@lesmills.com')
    await page.locator('[id="i0116"]').fill('Lmi.d365testuser4@lesmills.com')
    await page.locator('[type="submit"]').click()
    await page.locator('[name="passwd"]').fill('lmivic-927!')
    await page.locator('[type="submit"]').click()
    await page.locator('[type="submit"]').click()
 
 
    //Navigate to Sales order page
 
    const navigateTo = new NavigationPage(page)
    await navigateTo.salesOrderPage()
 
   
 
 
})