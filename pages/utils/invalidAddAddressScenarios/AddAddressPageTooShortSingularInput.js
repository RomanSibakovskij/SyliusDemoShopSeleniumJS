"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");


class AddAddressPageTooShortSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._addAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._addAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._addAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._addAddressPageCitySubtext = By.xpath("//label[@for='sylius_shop_address_city']");
        this._addAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._addAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");

        //invalid user address input data - too short singular input
        this._tooShortAddressFirstName = "D"; // 1 char
        this._tooShortAddressLastName = "N"; // 1 char
        this._tooShortAddress = "K"; // 1 char
        this._tooShortAddressCity = "L"; // 1 char
        this._tooShortAddressPostCode = 5643; // 4 digits (US requires usually 5-format post code)

    }

    //invalid user address data input methods - too short singular input
    async inputTooShortFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._addAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const tooShortFirstName = this._tooShortAddressFirstName;
        Logger.info("Too short user address first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._addAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const tooShortLastName = this._tooShortAddressLastName;
        Logger.info("Too short user address last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._addAddressPageAddressInputField);
        await addressInputField.clear();
        const tooShortAddress = this._tooShortAddress;
        Logger.info("Too short user address: ", tooShortAddress);
        await addressInputField.sendKeys(tooShortAddress);
    }
    async inputTooShortCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._addAddressPageCityInputField);
        await cityInputField.clear();
        const tooShortCity = this._tooShortAddressCity;
        Logger.info("Too short user address city: ", tooShortCity);
        await cityInputField.sendKeys(tooShortCity);
    }
    async inputTooShortPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._addAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const tooShortPostCode = this._tooShortAddressPostCode;
        Logger.info("Too short user address post code: ", tooShortPostCode);
        await postCodeInputField.sendKeys(tooShortPostCode);
    }

}
module.exports = { AddAddressPageTooShortSingularInput }