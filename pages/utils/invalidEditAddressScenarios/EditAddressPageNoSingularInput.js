"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class EditAddressPageNoSingularInput extends BasePage{

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

        //invalid user edited input data - no singular input
        this._noEditedAddressFirstName = "";
        this._noEditedAddressLastName = "";
        this._noEditedAddress = "";
        this._noEditedAddressCity = "";
        this._noEditedAddressPostCode = "";

    }

    //invalid edited user address data input methods - no singular input
    async inputNoEditedFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const noEditedAddressFirstName = this._noEditedAddressFirstName;
        Logger.info("No edited user address first name: ", noEditedAddressFirstName);
        await firstNameInputField.sendKeys(noEditedAddressFirstName);
    }
    async inputNoEditedLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const noEditedAddressLastName = this._noEditedAddressLastName;
        Logger.info("No edited user address last name: ", noEditedAddressLastName);
        await lastNameInputField.sendKeys(noEditedAddressLastName);
    }
    async inputNoEditedAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._editAddressPageAddressInputField);
        await addressInputField.clear();
        const noEditedAddress = this._noEditedAddress;
        Logger.info("No user edited address: ", noEditedAddress);
        await addressInputField.sendKeys(noEditedAddress);
    }
    async inputNoEditedCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._editAddressPageCityInputField);
        await cityInputField.clear();
        const noEditedAddressCity = this._noEditedAddressCity;
        Logger.info("No edited user address city: ", noEditedAddressCity);
        await cityInputField.sendKeys(noEditedAddressCity);
    }
    async inputNoEditedPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._editAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const noEditedAddressPostCode = this._noEditedAddressPostCode;
        Logger.info("No edited user address post code: ", noEditedAddressPostCode);
        await postCodeInputField.sendKeys(noEditedAddressPostCode);
    }

    //click 'Country' dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._editAddressPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }

    //select 'United States' option method
    async selectCountryOption(){
        const selectCountryOption = await this.driver.findElement(this._editAddressPageSelectCountryOption);
        await selectCountryOption.click();
    }

}
module.exports = { EditAddressPageNoSingularInput }