"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class AddAddressPageInvalidInputFormat extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._addAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._addAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._addAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._addAddressPageCitySubtext = By.xpath("//label[@for='sylius_shop_address_city']");
        this._addAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._addAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");

        //invalid user address input data - invalid singular input format
        this._invalidAddressFirstNameFormat = "*(*&^%"; // special symbols only
        this._invalidAddressLastNameFormat = "%^&%^"; // special symbols only
        this._invalidAddressFormat = ")*&(&&^"; // special symbols only
        this._invalidAddressCityFormat = "@$#%^%"; // special symbols only
        this._invalidAddressPostCodeFormat = "#$%$^%"; // special symbols only
    }

    //invalid user address data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._addAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const invalidFirstNameFormat = this._invalidAddressFirstNameFormat;
        Logger.info("Invalid user address first name format: ", invalidFirstNameFormat);
        await firstNameInputField.sendKeys(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._addAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const invalidLastNameFormat = this._invalidAddressLastNameFormat;
        Logger.info("Invalid user address last name format: ", invalidLastNameFormat);
        await lastNameInputField.sendKeys(invalidLastNameFormat);
    }
    async inputInvalidAddressFormatIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._addAddressPageAddressInputField);
        await addressInputField.clear();
        const invalidAddressFormat = this._invalidAddressFormat;
        Logger.info("Invalid user address format: ", invalidAddressFormat);
        await addressInputField.sendKeys(invalidAddressFormat);
    }
    async inputInvalidCityFormatIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._addAddressPageCityInputField);
        await cityInputField.clear();
        const invalidCityFormat = this._invalidAddressCityFormat;
        Logger.info("Invalid user address city format: ", invalidCityFormat);
        await cityInputField.sendKeys(invalidCityFormat);
    }
    async inputInvalidPostCodeFormatIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._addAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const invalidPostCodeFormat = this._invalidAddressPostCodeFormat;
        Logger.info("Invalid user address post code format: ", invalidPostCodeFormat);
        await postCodeInputField.sendKeys(invalidPostCodeFormat);
    }


}
module.exports = { AddAddressPageInvalidInputFormat }