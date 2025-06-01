"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');
const { RegisterPage } = require('./RegisterPage');
const Logger = require("./utils/Logger");

class AddAddressPage extends BasePage{

    constructor(driver) {
        super(driver);

        //add address page web elements
        this._addAddressPageTitle = By.xpath("//h1");
        this._addAddressPageSubtitle = By.xpath("//div[@class='col-12 col-md-9']/div[1]");
        //input form
        this._addAddressPageFirstNameSubtext = By.xpath("//label[@for='sylius_shop_address_firstName']");
        this._addAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._addAddressPageLastNameSubtext = By.xpath("//label[@for='sylius_shop_address_lastName']");
        this._addAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._addAddressPageCompanySubtext = By.xpath("//label[@for='sylius_shop_address_company']");
        this._addAddressPageCompanyInputField = By.xpath("//input[@id='sylius_shop_address_company']");
        this._addAddressPageAddressSubtext = By.xpath("//label[@for='sylius_shop_address_street']");
        this._addAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._addAddressPageCountrySubtext = By.xpath("//label[@for='sylius_shop_address_countryCode']");
        this._addAddressPageCountryDropdownMenu = By.xpath("//select[@id='sylius_shop_address_countryCode']");
        this._addAddressPageUSCountryOption = By.xpath("//select[@id='sylius_shop_address_countryCode']/option[@value='US']");
        this._addAddressPageProvinceSubtext = By.xpath("//label[@for='sylius_shop_address_provinceName']");
        this._addAddressPageProvinceInputField = By.xpath("//input[@id='sylius_shop_address_provinceName']");
        this._addAddressPageCitySubtext = By.xpath("//label[@for='sylius_shop_address_city']");
        this._addAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._addAddressPagePostCodeSubtext = By.xpath("//label[@for='sylius_shop_address_postcode']");
        this._addAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");
        this._addAddressPagePhoneSubtext = By.xpath("//label[@for='sylius_shop_address_phoneNumber']");
        this._addAddressPagePhoneInputField = By.xpath("//input[@id='sylius_shop_address_phoneNumber']");
        this._addAddressPageAddButton = By.xpath("//button[@id='add-address']");
        this._addAddressPageCancelButton = By.xpath("//a[@class='btn btn-outline-gray']");
        //singular input error element
        this._addAddressPageSingularInputError = By.xpath("//div[@class='invalid-feedback d-block']");

        const testDataGenerator = new TestDataGenerator(this.driver);
        const registerPage = new RegisterPage(this.driver)

        //valid test data input
        this._addressFirstName = registerPage.getFirstName();
        this._addressLastName = registerPage.getLastName();
        this._address = testDataGenerator.generateRandomAddress(8);
        this._addressCity = testDataGenerator.getRandomCity();
        this._addressPostCode = testDataGenerator.getRandomPostalCode();
    }

    //valid user address data input methods
    async inputFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._addAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const firstName = this._addressFirstName;
        Logger.info("Valid user address first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._addAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const lastName = this._addressLastName;
        Logger.info("Valid user address last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._addAddressPageAddressInputField);
        await addressInputField.clear();
        const address = this._address;
        Logger.info("Valid user address: ", address);
        await addressInputField.sendKeys(address);
    }
    async inputCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._addAddressPageCityInputField);
        await cityInputField.clear();
        const city = this._addressCity;
        Logger.info("Valid user address city: ", city);
        await cityInputField.sendKeys(city);
    }
    async inputPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._addAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const postCode = this._addressPostCode;
        Logger.info("Valid user address post code: ", postCode);
        await postCodeInputField.sendKeys(postCode);
    }

    //click 'Country' dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._addAddressPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }

    //select 'United States' option method
    async selectUSCountryOption(){
        const usCountryOption = await this.driver.findElement(this._addAddressPageUSCountryOption);
        await usCountryOption.click();
    }

    //click 'Add' button method
    async clickAddButton(){
        const addButton = await this.driver.findElement(this._addAddressPageAddButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addButton }).click().perform();
    }

    //add address page text getters
    async getAddAddressPageTitle(){
        const addAddressPageTitle = await this.driver.findElement(this._addAddressPageTitle);
        return await addAddressPageTitle.getText();
    }
    async getAddAddressPageSubtitle(){
        const addAddressPageSubtitle = await this.driver.findElement(this._addAddressPageSubtitle);
        const fullText = await addAddressPageSubtitle.getText();
        //split the text after "/n" (since h1 is stuffed into this div too)
        const textLines = fullText.split('\n');
        return textLines.length > 1 ? textLines[1] : '';
    }
    async getAddAddressPageFirstNameSubtext(){
        const addAddressPageFirstNameSubtext = await this.driver.findElement(this._addAddressPageFirstNameSubtext);
        return await addAddressPageFirstNameSubtext.getText();
    }
    async getAddAddressPageLastNameSubtext(){
        const addAddressPageLastNameSubtext = await this.driver.findElement(this._addAddressPageLastNameSubtext);
        return await addAddressPageLastNameSubtext.getText();
    }
    async getAddAddressPageCompanySubtext(){
        const addAddressPageCompanySubtext = await this.driver.findElement(this._addAddressPageCompanySubtext);
        return await addAddressPageCompanySubtext.getText();
    }
    async getAddAddressPageAddressSubtext(){
        const addAddressPageAddressSubtext = await this.driver.findElement(this._addAddressPageAddressSubtext);
        return await addAddressPageAddressSubtext.getText();
    }
    async getAddAddressPageCountrySubtext(){
        const addAddressPageCountrySubtext = await this.driver.findElement(this._addAddressPageCountrySubtext);
        return await addAddressPageCountrySubtext.getText();
    }
    async getAddAddressPageProvinceSubtext(){
        const addAddressPageProvinceSubtext = await this.driver.findElement(this._addAddressPageProvinceSubtext);
        return await addAddressPageProvinceSubtext.getText();
    }
    async getAddAddressPageCitySubtext(){
        const addAddressPageCitySubtext = await this.driver.findElement(this._addAddressPageCitySubtext);
        return await addAddressPageCitySubtext.getText();
    }
    async getAddAddressPagePostCodeSubtext(){
        const addAddressPagePostCodeSubtext = await this.driver.findElement(this._addAddressPagePostCodeSubtext);
        return await addAddressPagePostCodeSubtext.getText();
    }
    async getAddAddressPagePhoneSubtext(){
        const addAddressPagePhoneSubtext = await this.driver.findElement(this._addAddressPagePhoneSubtext);
        return await addAddressPagePhoneSubtext.getText();
    }

    //singular input error message getter
    async getAddAddressPageSingularInputError(){
        const addAddressPageSingularInputErrorMsg = await this.driver.findElement(this._addAddressPageSingularInputError);
        return await addAddressPageSingularInputErrorMsg.getText();
    }

    //add address page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddAddressPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addAddressPageTitle,
            this._addAddressPageSubtitle,
            this._addAddressPageFirstNameSubtext,
            this._addAddressPageFirstNameInputField,
            this._addAddressPageLastNameSubtext,
            this._addAddressPageLastNameInputField,
            this._addAddressPageCompanySubtext,
            this._addAddressPageCompanyInputField,
            this._addAddressPageAddressSubtext,
            this._addAddressPageAddressInputField,
            this._addAddressPageCountrySubtext,
            this._addAddressPageCountryDropdownMenu,
            this._addAddressPageCitySubtext,
            this._addAddressPageCityInputField,
            this._addAddressPagePostCodeSubtext,
            this._addAddressPagePostCodeInputField,
            this._addAddressPagePhoneSubtext,
            this._addAddressPagePhoneInputField,
            this._addAddressPageCancelButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AddAddressPage }