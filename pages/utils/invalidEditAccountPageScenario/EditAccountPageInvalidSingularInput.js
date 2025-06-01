"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");
const TestDataGenerator = require("../TestDataGenerator");

class EditAccountPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        this._editAccountPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_profile_firstName']");
        this._editAccountPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_profile_lastName']");
        this._editAccountPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_profile_email']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid user input data - no singular input
        this._editAccountNoFirstName = "";
        this._editAccountNoLastName = "";
        this._editAccountNoEmail = "";

        //invalid user input data - too short singular input
        this._editAccountTooShortFirstName = "K"; // 1 char
        this._editAccountTooShortLastName = "B"; // 1 char
        this._editAccountTooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); // 1 char -> name, domain

        //invalid user input data - too long singular input
        this._editAccountTooLongFirstName = "Rdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._editAccountTooLongLastName = "Bdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; // 100 chars
        this._editAccountTooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); // 100 chars -> name, domain

        //invalid user input data - invalid singular input format
        this._editAccountInvalidFirstNameFormat = "!#@#$@#%"; // special symbols only
        this._editAccountInvalidLastNameFormat = "$%^$%&^%&"; // special symbols only
        this._editAccountInvalidEmailFormat = "Dfrrdsefakemail.com"; // missing '@'
        this._editAccountExistingEmail = "shop@example.com"; // missing '@'

    }

    //invalid edited user data input methods - no singular input
    async inputNoEditedFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountPageFirstNameInputField);
        await firstNameInputField.clear();
        const noEditedFirstName = this._editAccountNoFirstName;
        Logger.info("No edited user first name: ", noEditedFirstName);
        await firstNameInputField.sendKeys(noEditedFirstName);
    }
    async inputNoEditedLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountPageLastNameInputField);
        await lastNameInputField.clear();
        const noEditedLastName = this._editAccountNoLastName;
        Logger.info("No edited user last name: ", noEditedLastName);
        await lastNameInputField.sendKeys(noEditedLastName);
    }
    async inputNoEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await emailInputField.clear();
        const noEditedEmail = this._editAccountNoEmail;
        Logger.info("No edited user email: ", noEditedEmail);
        await emailInputField.sendKeys(noEditedEmail);
    }

    //invalid edited user data input methods - too short singular input
    async inputTooShortEditedFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountPageFirstNameInputField);
        await firstNameInputField.clear();
        const tooShortEditedFirstName = this._editAccountTooShortFirstName;
        Logger.info("Too short edited user first name: ", tooShortEditedFirstName);
        await firstNameInputField.sendKeys(tooShortEditedFirstName);
    }
    async inputTooShortEditedLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountPageLastNameInputField);
        await lastNameInputField.clear();
        const tooShortEditedLastName = this._editAccountTooShortLastName;
        Logger.info("Too short edited user last name: ", tooShortEditedLastName);
        await lastNameInputField.sendKeys(tooShortEditedLastName);
    }
    async inputTooShortEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await emailInputField.clear();
        const tooShortEditedEmail = this._editAccountTooShortEmail;
        Logger.info("Too short edited user email: ", tooShortEditedEmail);
        await emailInputField.sendKeys(tooShortEditedEmail);
    }

    //invalid edited user data input methods - too long singular input
    async inputTooLongEditedFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountPageFirstNameInputField);
        await firstNameInputField.clear();
        const tooLongEditedFirstName = this._editAccountTooLongFirstName;
        Logger.info("Too long edited user first name: ", tooLongEditedFirstName);
        await firstNameInputField.sendKeys(tooLongEditedFirstName);
    }
    async inputTooLongEditedLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountPageLastNameInputField);
        await lastNameInputField.clear();
        const tooLongEditedLastName = this._editAccountTooLongLastName;
        Logger.info("Too long edited user last name: ", tooLongEditedLastName);
        await lastNameInputField.sendKeys(tooLongEditedLastName);
    }
    async inputTooLongEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await emailInputField.clear();
        const tooLongEditedEmail = this._editAccountTooLongEmail;
        Logger.info("Too long edited user email: ", tooLongEditedEmail);
        await emailInputField.sendKeys(tooLongEditedEmail);
    }

    //invalid edited user data input methods - invalid singular input format
    async inputInvalidEditedFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountPageFirstNameInputField);
        await firstNameInputField.clear();
        const invalidEditedFirstNameFormat = this._editAccountInvalidFirstNameFormat;
        Logger.info("Invalid edited user first name format: ", invalidEditedFirstNameFormat);
        await firstNameInputField.sendKeys(invalidEditedFirstNameFormat);
    }
    async inputInvalidEditedLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountPageLastNameInputField);
        await lastNameInputField.clear();
        const invalidEditedLastNameFormat = this._editAccountInvalidLastNameFormat;
        Logger.info("Invalid edited user last name format: ", invalidEditedLastNameFormat);
        await lastNameInputField.sendKeys(invalidEditedLastNameFormat);
    }
    async inputInvalidEditedEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await emailInputField.clear();
        const invalidEditedEmailFormat = this._editAccountInvalidEmailFormat;
        Logger.info("Invalid edited user email format: ", invalidEditedEmailFormat);
        await emailInputField.sendKeys(invalidEditedEmailFormat);
    }
    async inputExistingEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await emailInputField.clear();
        const existingEditedEmail = this._editAccountExistingEmail;
        Logger.info("Existing test email input as edited: ", existingEditedEmail);
        await emailInputField.sendKeys(existingEditedEmail);
    }

}

module.exports = { EditAccountPageInvalidSingularInput }