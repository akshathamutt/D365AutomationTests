import { Locator, Page } from "@playwright/test";
 
export class NavigationPage{
 
    readonly page: Page
    readonly expandNavigationPane: Locator
    readonly modulesMenuItem: Locator
    readonly accoutnsReceivable: Locator
    readonly expanyAllMenuItem: Locator
 
    constructor(page: Page){
        this.page = page
 
    }
 
    async salesOrderPage(){
   await this.page.getByLabel("Expand the navigation pane").click()
   await this.page.getByLabel("Modules").click()
   await this.page.getByText("Accounts receivable").click()
   await this.page.locator('[class="modulesFlyout-ExpandAll"]').click()
   await this.page.getByText("All sales orders").click()
 
    }
}
