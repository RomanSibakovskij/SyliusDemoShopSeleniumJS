"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');
const Logger = require("./utils/Logger");

class EditAddressPage extends BasePage{

    constructor(driver) {
        super(driver);

        //edit address page web elements
        this._editAddressPageSubtitle = By.xpath("//div[@class='col-12 col-md-9']/div[1]");
        //input form
        this._editAddressPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_address_firstName']");
        this._editAddressPageLastNameInputField = By.xpath("//input[@id='sylius_shop_address_lastName']");
        this._editAddressPageAddressInputField = By.xpath("//input[@id='sylius_shop_address_street']");
        this._editAddressPageCityInputField = By.xpath("//input[@id='sylius_shop_address_city']");
        this._editAddressPagePostCodeInputField = By.xpath("//input[@id='sylius_shop_address_postcode']");
        this._editAddressPagePhoneInputField = By.xpath("//input[@id='sylius_shop_address_phoneNumber']");
        this._editAddressPageSaveButton = By.xpath("//button[@id='save-changes']");
        //singular input error element
        this._editAddressPageSingularInputError = By.xpath("//div[@class='invalid-feedback d-block']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid edited address data
        this._editedAddress = testDataGenerator.generateRandomAddress(8);
        this._editedAddressCity = testDataGenerator.getRandomCity();
        this._editedAddressPostCode = testDataGenerator.getRandomPostalCode();
    }

    //valid edited user address data input methods
    async inputEditedFirstNameIntoAddressFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAddressPageFirstNameInputField);
        await firstNameInputField.clear();
        const editedAddressFirstName = "Jonathan";
        Logger.info("Valid user edited address first name: ", editedAddressFirstName);
        await firstNameInputField.sendKeys(editedAddressFirstName);
    }
    async inputEditedLastNameIntoAddressLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAddressPageLastNameInputField);
        await lastNameInputField.clear();
        const editedAddressLastName = "O'Vargas";
        Logger.info("Valid user edited address last name: ", editedAddressLastName);
        await lastNameInputField.sendKeys(editedAddressLastName);
    }
    async inputEditedAddressIntoAddressFirstNameInputField(){
        const addressInputField = await this.driver.findElement(this._editAddressPageAddressInputField);
        await addressInputField.clear();
        const editedAddress = this._editedAddress;
        Logger.info("Valid user edited address: ", editedAddress);
        await addressInputField.sendKeys(editedAddress);
    }
    async inputEditedCityIntoAddressCityInputField(){
        const cityInputField = await this.driver.findElement(this._editAddressPageCityInputField);
        await cityInputField.clear();
        const editedAddressCity = this._editedAddressCity;
        Logger.info("Valid user edited address city: ", editedAddressCity);
        await cityInputField.sendKeys(editedAddressCity);
    }
    async inputEditedPostCodeIntoAddressPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._editAddressPagePostCodeInputField);
        await postCodeInputField.clear();
        const editedAddressPostCode = this._editedAddressPostCode;
        Logger.info("Valid user address edited post code: ", editedAddressPostCode);
        await postCodeInputField.sendKeys(editedAddressPostCode);
    }

    //this method is added to prevent Selenium from skipping edited post code addition
    async inputEditedPhoneIntoAddressPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._editAddressPagePhoneInputField);
        const editedAddressPhone = "";
        //Logger.info("Valid user address edited post code: ", editedAddressPostCode);
        await phoneInputField.sendKeys(editedAddressPhone);
    }

    //edit address page text getter (rest of subtexts / title are the same as for add address page)
    async getEditAddressPageSubtitle(){
        const addAddressPageSubtitle = await this.driver.findElement(this._editAddressPageSubtitle);
        const fullText = await addAddressPageSubtitle.getText();
        //split the text after "/n" (since h1 is stuffed into this div too)
        const textLines = fullText.split('\n');
        return textLines.length > 1 ? textLines[1] : '';
    }

    //click 'Save changes' button method
    async clickSaveChangesButton(){
        const saveChangesButton = await this.driver.findElement(this._editAddressPageSaveButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: saveChangesButton }).click().perform();
    }

    //singular input error message getter
    async getEditAddressPageSingularInputError(){
        const editAddressPageSingularInputErrorMsg = await this.driver.findElement(this._editAddressPageSingularInputError);
        return await editAddressPageSingularInputErrorMsg.getText();
    }



}
module.exports = { EditAddressPage }