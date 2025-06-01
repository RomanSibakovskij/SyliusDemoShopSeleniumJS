"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class EditAddressPageTooShortSingularInput extends BasePage{

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

        //invalid user edited input data - too short singular input
        this._tooShortEditedAddressFirstName = "F"; // 1 char
        this._tooShortEditedAddressLastName = "G"; // 1 char
        this._tooShortEditedAddress = "D"; // 1 char
        this._tooShortEditedAddressCity = "B"; // 1 char
        this._tooShortEditedAddressPostCode = 5647; //4 digits
    }

    //invalid edited user address data input methods - too short singular input
    async inputTooShortEditedFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const tooShortEditedAddressFirstName = this._tooShortEditedAddressFirstName;
        Logger.info("Too short edited user address first name: ", tooShortEditedAddressFirstName);
        await firstNameInputField.sendKeys(tooShortEditedAddressFirstName);
    }
    async inputTooShortEditedLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const tooShortEditedAddressLastName = this._tooShortEditedAddressLastName;
        Logger.info("Too short edited user address last name: ", tooShortEditedAddressLastName);
        await lastNameInputField.sendKeys(tooShortEditedAddressLastName);
    }
    async inputTooShortEditedAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._editAddressPageAddressInputField);
        await addressInputField.clear();
        const tooShortEditedAddress = this._tooShortEditedAddress;
        Logger.info("Too short user edited address: ", tooShortEditedAddress);
        await addressInputField.sendKeys(tooShortEditedAddress);
    }
    async inputTooShortEditedCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._editAddressPageCityInputField);
        await cityInputField.clear();
        const tooShortEditedAddressCity = this._tooShortEditedAddressCity;
        Logger.info("Too short edited user address city: ", tooShortEditedAddressCity);
        await cityInputField.sendKeys(tooShortEditedAddressCity);
    }
    async inputTooShortEditedPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._editAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const tooShortEditedAddressPostCode = this._tooShortEditedAddressPostCode;
        Logger.info("Too short edited user address post code: ", tooShortEditedAddressPostCode);
        await postCodeInputField.sendKeys(tooShortEditedAddressPostCode);
    }

}
module.exports = { EditAddressPageTooShortSingularInput }