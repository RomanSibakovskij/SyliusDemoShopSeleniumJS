"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class AddressBookDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //address book dashboard page web elements
        this._addressBookDashboardPageTitle = By.xpath("//h1");
        this._addressBookDashboardPageSubtitle = By.xpath("//div[@class='mb-4'][1]");
        this._addressBookDashboardPageInfoBoxText = By.xpath("//div[@class='alert alert-info']");
        this._addressBookDashboardPageAddAddressButton = By.xpath("//div[@class='text-end mb-4']/a[@class='btn btn-primary']");
        //success message element
        this._addressBookDashboardPageAddressSuccessMessage = By.xpath("//div[@role='alert']");
        //address book elements
        this._addressBookUserNameElements = By.xpath("//div[@class='card-body']/div[2]/strong");
        this._addressBookUserStreetElements = By.xpath("//div[@class='card-body']/div[2]/span[1]");
        this._addressBookUserCityElements = By.xpath("//div[@class='card-body']/div[2]/span[2]");
        this._addressBookUserCountryElements = By.xpath("//div[@class='card-body']/div[2]/span[3]");
        this._addressBookUserEditAddressButton = By.xpath("//div[@class='card-body']/div[3]/a");
        this._addressBookUserDeleteAddressButton = By.xpath("//div[@class='card-body']/div[3]//button");
    }

    //click 'Edit address' button method
    async clickEditAddressButton() {
        const editAddressButton = await this.driver.findElement(this._addressBookUserEditAddressButton)
        await editAddressButton.click();
    }

    //click 'Add address' button method
    async clickAddAddressButton() {
        const addAddressButton = await this.driver.findElement(this._addressBookDashboardPageAddAddressButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addAddressButton }).click().perform();
    }

    //click 'Delete address' button method
    async clickDeleteAddressButton() {
        const deleteAddressButton = await this.driver.findElement(this._addressBookUserDeleteAddressButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: deleteAddressButton }).click().perform();
    }

    //address book dashboard page address data getters
    async getAddressBookDashboardAddressUserName() {
        const elements = await this.driver.findElements(this._addressBookUserNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address book user name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getAddressBookDashboardAddressUserStreet() {
        const elements = await this.driver.findElements(this._addressBookUserStreetElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address book user street(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getAddressBookDashboardAddressUserCity() {
        const elements = await this.driver.findElements(this._addressBookUserCityElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address book user city(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getAddressBookDashboardAddressUserCountry() {
        const elements = await this.driver.findElements(this._addressBookUserCountryElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address book user country(ies):', error.message);
                    return '';
                }
            })
        );
    }

    //address book dashboard page text getters
    async getAddressBookDashboardPageTitle(){
        const addressBookDashboardPageTitle = await this.driver.findElement(this._addressBookDashboardPageTitle);
        return await addressBookDashboardPageTitle.getText();
    }
    async getAddressBookDashboardPageSubtitle() {
        const addressBookDashboardPageSubtitle = await this.driver.findElement(this._addressBookDashboardPageSubtitle);
        const fullText = await addressBookDashboardPageSubtitle.getText();
        //split the text after "\n" (since h1 is stuffed into this div too)
        const textLines = fullText.split('\n');
        return textLines.length > 1 ? textLines[1].trim() : '';
    }
    async getAddressBookDashboardPageInfoBoxText(){
        const addressBookDashboardPageInfoBoxText = await this.driver.findElement(this._addressBookDashboardPageInfoBoxText);
        return await addressBookDashboardPageInfoBoxText.getText();
    }

    //address addition success message getter
    async getAddressBookDashboardPageAddressSuccessMessage(){
        const addressSuccessMessage = await this.driver.findElement(this._addressBookDashboardPageAddressSuccessMessage);
        return await addressSuccessMessage.getText();
    }

    //address book dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddressBookDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addressBookDashboardPageTitle,
            this._addressBookDashboardPageSubtitle,
            this._addressBookDashboardPageAddAddressButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isAddressBookDashboardInfoBoxWebElementDisplayed(){
        const elementsToCheck = [
            this._addressBookDashboardPageInfoBoxText
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AddressBookDashboardPage }