"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class EditAddressPageTooLongSingularInput extends BasePage{

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

        //invalid user edited input data - too long singular input
        this._tooLongEditedAddressFirstName = "Fdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongEditedAddressLastName = "Gdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongEditedAddress = "Ddsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongEditedAddressCity = "Bdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongEditedAddressPostCode = 564778; //6 digits
    }

    //invalid edited user address data input methods - too long singular input
    async inputTooLongEditedFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const tooLongEditedAddressFirstName = this._tooLongEditedAddressFirstName;
        Logger.info("Too long edited user address first name: ", tooLongEditedAddressFirstName);
        await firstNameInputField.sendKeys(tooLongEditedAddressFirstName);
    }
    async inputTooLongEditedLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const tooLongEditedAddressLastName = this._tooLongEditedAddressLastName;
        Logger.info("Too long edited user address last name: ", tooLongEditedAddressLastName);
        await lastNameInputField.sendKeys(tooLongEditedAddressLastName);
    }
    async inputTooLongEditedAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._editAddressPageAddressInputField);
        await addressInputField.clear();
        const tooLongEditedAddress = this._tooLongEditedAddress;
        Logger.info("Too long user edited address: ", tooLongEditedAddress);
        await addressInputField.sendKeys(tooLongEditedAddress);
    }
    async inputTooLongEditedCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._editAddressPageCityInputField);
        await cityInputField.clear();
        const tooLongEditedAddressCity = this._tooLongEditedAddressCity;
        Logger.info("Too long edited user address city: ", tooLongEditedAddressCity);
        await cityInputField.sendKeys(tooLongEditedAddressCity);
    }
    async inputTooLongEditedPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._editAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const tooLongEditedAddressPostCode = this._tooLongEditedAddressPostCode;
        Logger.info("Too long edited user address post code: ", tooLongEditedAddressPostCode);
        await postCodeInputField.sendKeys(tooLongEditedAddressPostCode);
    }

}
module.exports = { EditAddressPageTooLongSingularInput }