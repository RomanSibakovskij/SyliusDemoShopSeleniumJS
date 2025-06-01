"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class AddAddressPageNoSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._addAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._addAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._addAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._addAddressPageCitySubtext = By.xpath("//label[@for='sylius_shop_address_city']");
        this._addAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._addAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");

        //invalid user address input data - no singular input
        this._noAddressFirstName = "";
        this._noAddressLastName = "";
        this._noAddress = "";
        this._noAddressCity = "";
        this._noAddressPostCode = "";

    }

    //valid user address data input methods
    async inputNoFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._addAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const noFirstName = this._noAddressFirstName;
        Logger.info("No user address first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._addAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const noLastName = this._noAddressLastName;
        Logger.info("No user address last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    async inputNoAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._addAddressPageAddressInputField);
        await addressInputField.clear();
        const noAddress = this._noAddress;
        Logger.info("No user address: ", noAddress);
        await addressInputField.sendKeys(noAddress);
    }
    async inputNoCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._addAddressPageCityInputField);
        await cityInputField.clear();
        const noCity = this._noAddressCity;
        Logger.info("No user address city: ", noCity);
        await cityInputField.sendKeys(noCity);
    }
    async inputNoPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._addAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const noPostCode = this._noAddressPostCode;
        Logger.info("No user address post code: ", noPostCode);
        await postCodeInputField.sendKeys(noPostCode);
    }


}

module.exports = { AddAddressPageNoSingularInput }