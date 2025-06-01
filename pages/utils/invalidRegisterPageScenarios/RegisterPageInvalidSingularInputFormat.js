"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class RegisterPageInvalidSingularInputFormat extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._registerPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_firstName']");
        this._registerPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_lastName']");
        this._registerPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_registration_email']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_first']");
        this._registerPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_second']");

        //invalid user input data = invalid singular input format
        this._invalidUserFirstNameFormat = "(*&^*&^%";
        this._invalidUserLastNameFormat = "@#$#@$^%";
        this._invalidUserEmailFormat = "mhghffakemail.com";
        this._existingEmail = "shop@example.com";
    }

    //invalid user register data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const invalidFirstNameFormat = this._invalidUserFirstNameFormat;
        Logger.info("Invalid user first name input format: ", invalidFirstNameFormat);
        await firstNameInputField.sendKeys(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const invalidLastNameFormat = this._invalidUserLastNameFormat;
        Logger.info("Invalid user last name input format: ", invalidLastNameFormat);
        await lastNameInputField.sendKeys(invalidLastNameFormat);
    }
    async inputInvalidEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const invalidEmailFormat = this._invalidUserEmailFormat;
        Logger.info("Invalid user email input format: ", invalidEmailFormat);
        await emailInputField.sendKeys(invalidEmailFormat);
    }
    async inputExistingEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const existingEmail = this._existingEmail;
        Logger.info("Pre-existing user email: ", existingEmail);
        await emailInputField.sendKeys(existingEmail);
    }


}
module.exports = { RegisterPageInvalidSingularInputFormat }