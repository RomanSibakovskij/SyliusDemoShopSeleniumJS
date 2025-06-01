"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');

class AccountDashboardPage extends BasePage{

    constructor(driver){
        super(driver)

        //account dashboard page web elements
        this._accountDashboardPageBreadcrumb = By.xpath("//ol[@class='breadcrumb']/li");
        this._accountDashboardPageTitle = By.xpath("//h1");
        this._accountDashboardPageSubtitle = By.xpath("//div[@class='mb-4']");
        this._accountDashboardPageUserName = By.xpath("//div[@class='card-body']//strong");
        this._accountDashboardPageUserEmail = By.xpath("//div[@class='card-body']//div[@class='col-12 col-sm']/div");
        this._accountDashboardPageEditButton = By.xpath("//div[@class='d-flex flex-column align-items-center flex-sm-row gap-2']/a[1]");
        this._accountDashboardPageChangePasswordButton = By.xpath("//div[@class='d-flex flex-column align-items-center flex-sm-row gap-2']/a[2]");
        this._accountDashboardPageVerifiedBadge = By.xpath("//div[@class='col-12 col-sm-auto mb-2 order-sm-1']/span");
        //aside elements
        this._accountDashboardPageAsideSectionTitle = By.xpath("//div[@class='h3 mb-4']");
        this._accountDashboardPageAsideDashboardLink = By.xpath("//div[@class='d-inline-flex flex-column']/a[1]");
        this._accountDashboardPageAsidePersonalInfoLink = By.xpath("//div[@class='d-inline-flex flex-column']/a[2]");
        this._accountDashboardPageAsideChangePasswordLink = By.xpath("//div[@class='d-inline-flex flex-column']/a[3]");
        this._accountDashboardPageAsideAddressBookLink = By.xpath("//div[@class='d-inline-flex flex-column']/a[4]");
        this._accountDashboardPageAsideOrderHistoryLink = By.xpath("//div[@class='d-inline-flex flex-column']/a[5]");
    }

    //account dashboard user data getters
    async getAccountDashboardPageUserName(){
        const accountDashboardPageUserName = await this.driver.findElement(this._accountDashboardPageUserName);
        return await accountDashboardPageUserName.getText();
    }
    async getAccountDashboardPageUserEmail(){
        const accountDashboardPageUserEmail = await this.driver.findElement(this._accountDashboardPageUserEmail);
        return await accountDashboardPageUserEmail.getText();
    }

    //click aside 'Personal Info' link method
    async clickAsidePersonalInfoLink(){
        const asidePersonalInfoLink = await this.driver.findElement(this._accountDashboardPageAsidePersonalInfoLink);
        asidePersonalInfoLink.click();
    }

    //click aside 'Personal Info' link method
    async clickAsideAddressBookLink(){
        const addressBookLink = await this.driver.findElement(this._accountDashboardPageAsideAddressBookLink);
        addressBookLink.click();
    }

    //click 'Edit' button method
    async clickEditButton(){
        const editButton = await this.driver.findElement(this._accountDashboardPageEditButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: editButton }).click().perform();
    }

    //click 'Change password' button method
    async clickChangePasswordButton(){
        const changePasswordButton = await this.driver.findElement(this._accountDashboardPageChangePasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: changePasswordButton }).click().perform();
    }

    //account dashboard page text element getters
    async getAccountDashboardPageTitle(){
        const accountDashboardPageTitle = await this.driver.findElement(this._accountDashboardPageTitle);
        return await accountDashboardPageTitle.getText();
    }
    async getAccountDashboardPageSubtitle() {
        const accountDashboardPageSubtitle = await this.driver.findElement(this._accountDashboardPageSubtitle);
        const fullText = await accountDashboardPageSubtitle.getText();
        //split the text after "\n" (since h1 is stuffed into this div too)
        const textLines = fullText.split('\n');
        return textLines.length > 1 ? textLines[1].trim() : '';
    }
    //aside
    async getAccountDashboardPageAsideSectionTitle(){
        const accountDashboardPageAsideSectionTitle = await this.driver.findElement(this._accountDashboardPageAsideSectionTitle);
        return await accountDashboardPageAsideSectionTitle.getText();
    }
    async getAccountDashboardPageAsideDashboardLinkText(){
        const accountDashboardPageAsideDashboardLinkText = await this.driver.findElement(this._accountDashboardPageAsideDashboardLink);
        return await accountDashboardPageAsideDashboardLinkText.getText();
    }
    async getAccountDashboardPageAsidePersonalInfoLinkText(){
        const accountDashboardPageAsidePersonalInfoLinkText = await this.driver.findElement(this._accountDashboardPageAsidePersonalInfoLink);
        return await accountDashboardPageAsidePersonalInfoLinkText.getText();
    }
    async getAccountDashboardPageAsideChangePasswordLinkText(){
        const accountDashboardPageAsideChangePasswordLinkText = await this.driver.findElement(this._accountDashboardPageAsideChangePasswordLink);
        return await accountDashboardPageAsideChangePasswordLinkText.getText();
    }
    async getAccountDashboardPageAsideAddressBookLinkText(){
        const accountDashboardPageAsideAddressBookLinkText = await this.driver.findElement(this._accountDashboardPageAsideAddressBookLink);
        return await accountDashboardPageAsideAddressBookLinkText.getText();
    }
    async getAccountDashboardPageAsideOrderHistoryLinkText(){
        const accountDashboardPageAsideOrderHistoryLinkText = await this.driver.findElement(this._accountDashboardPageAsideOrderHistoryLink);
        return await accountDashboardPageAsideOrderHistoryLinkText.getText();
    }

    //account dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAccountDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._accountDashboardPageAsideSectionTitle,
            this._accountDashboardPageAsideDashboardLink,
            this._accountDashboardPageAsidePersonalInfoLink,
            this._accountDashboardPageAsideChangePasswordLink,
            this._accountDashboardPageAsideAddressBookLink,
            this._accountDashboardPageAsideOrderHistoryLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAccountDashboardBreadcrumbWebElementDisplayed(){
        const elementsToCheck = [
            this._accountDashboardPageBreadcrumb,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAccountDashboardPageMainSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._accountDashboardPageTitle,
            this._accountDashboardPageSubtitle,
            this._accountDashboardPageUserName,
            this._accountDashboardPageUserEmail,
            this._accountDashboardPageEditButton,
            this._accountDashboardPageChangePasswordButton,
            this._accountDashboardPageVerifiedBadge
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AccountDashboardPage }