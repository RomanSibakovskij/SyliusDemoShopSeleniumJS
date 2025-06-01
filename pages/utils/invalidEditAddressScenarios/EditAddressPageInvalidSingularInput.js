"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class EditAddressPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._editAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._editAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._editAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._editAddressPageCountryDropdownMenu = By.xpath("//select[@id='sylius_shop_address_countryCode']");
        this._editAddressPageSelectCountryOption = By.xpath("//select[@id='sylius_shop_address_countryCode']/option[1]");
        this._editAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._editAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");

        //invalid user edited input data - invalid singular input format
        this._invalidEditedAddressFirstNameFormat = "*%#$^"; // special symbols only
        this._invalidEditedAddressLastNameFormat = "#%$#%"; // special symbols only
        this._invalidEditedAddressFormat = "(&^*&^%)"; // special symbols only
        this._invalidEditedAddressCityFormat = "!@#!#$"; // special symbols only
        this._invalidEditedAddressPostCodeFormat = "%^%&"; // special symbols only
    }

    //invalid edited user address data input methods - invalid singular input
    async inputInvalidEditedFirstNameFormatIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const invalidEditedAddressFirstNameFormat = this._invalidEditedAddressFirstNameFormat;
        Logger.info("Invalid edited user address first name format: ", invalidEditedAddressFirstNameFormat);
        await firstNameInputField.sendKeys(invalidEditedAddressFirstNameFormat);
    }
    async inputInvalidEditedLastNameFormatIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const invalidEditedAddressLastNameFormat = this._invalidEditedAddressLastNameFormat;
        Logger.info("Invalid edited user address last name format: ", invalidEditedAddressLastNameFormat);
        await lastNameInputField.sendKeys(invalidEditedAddressLastNameFormat);
    }
    async inputInvalidEditedAddressFormatIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._editAddressPageAddressInputField);
        await addressInputField.clear();
        const invalidEditedAddressFormat = this._invalidEditedAddressFormat;
        Logger.info("Invalid user edited address format: ", invalidEditedAddressFormat);
        await addressInputField.sendKeys(invalidEditedAddressFormat);
    }
    async inputInvalidEditedCityFormatIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._editAddressPageCityInputField);
        await cityInputField.clear();
        const invalidEditedAddressCityFormat = this._invalidEditedAddressCityFormat;
        Logger.info("Invalid edited user address city format: ", invalidEditedAddressCityFormat);
        await cityInputField.sendKeys(invalidEditedAddressCityFormat);
    }
    async inputInvalidEditedPostCodeFormatIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._editAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const invalidEditedAddressPostCodeFormat = this._invalidEditedAddressPostCodeFormat;
        Logger.info("Invalid edited user address post code format: ", invalidEditedAddressPostCodeFormat);
        await postCodeInputField.sendKeys(invalidEditedAddressPostCodeFormat);
    }

}
module.exports = { EditAddressPageInvalidSingularInput }