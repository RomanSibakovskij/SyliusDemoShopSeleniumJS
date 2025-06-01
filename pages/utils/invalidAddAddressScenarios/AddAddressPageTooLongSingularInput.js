"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const TestDataGenerator = require("../TestDataGenerator");
const Logger = require("../Logger");

class AddAddressPageTooLongSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        const testDataGenerator = new TestDataGenerator(this.driver);

        //input form
        this._addAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._addAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._addAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._addAddressPageCitySubtext = By.xpath("//label[@for='sylius_shop_address_city']");
        this._addAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._addAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");

        //invalid user address input data - too short singular input
        this._tooLongAddressFirstName = "Ddsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongAddressLastName = "Ndsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongAddress = testDataGenerator.generateRandomAddress(100); // 100 chars
        this._tooLongAddressCity = "Ldsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._tooLongAddressPostCode = 564334; // 6 digits (US requires usually 5-format post code)

    }

    //invalid user address data input methods - too long singular input
    async inputTooLongFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._addAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const tooLongFirstName = this._tooLongAddressFirstName;
        Logger.info("Too long user address first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._addAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const tooLongLastName = this._tooLongAddressLastName;
        Logger.info("Too long user address last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._addAddressPageAddressInputField);
        await addressInputField.clear();
        const tooLongAddress = this._tooLongAddress;
        Logger.info("Too long user address: ", tooLongAddress);
        await addressInputField.sendKeys(tooLongAddress);
    }
    async inputTooLongCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._addAddressPageCityInputField);
        await cityInputField.clear();
        const tooLongCity = this._tooLongAddressCity;
        Logger.info("Too long user address city: ", tooLongCity);
        await cityInputField.sendKeys(tooLongCity);
    }
    async inputTooLongPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._addAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const tooLongPostCode = this._tooLongAddressPostCode;
        Logger.info("Too long user address post code: ", tooLongPostCode);
        await postCodeInputField.sendKeys(tooLongPostCode);
    }

}
module.exports = { AddAddressPageTooLongSingularInput }