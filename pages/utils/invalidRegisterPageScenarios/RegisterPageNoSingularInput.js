"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class RegisterPageNoSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._registerPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_firstName']");
        this._registerPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_lastName']");
        this._registerPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_registration_email']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_first']");
        this._registerPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_second']");

        //invalid user input data = no singular input
        this._noUserFirstName = "";
        this._noUserLastName = "";
        this._noUserEmail = "";
        this._noUserPassword = "";
        this._noUserConfirmPassword = "";
    }

    //invalid user register data input methods - no singular input
    async inputNoFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const noFirstName = this._noUserFirstName;
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const noLastName = this._noUserLastName;
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const noEmail = this._noUserEmail;
        Logger.info("No user email: ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const noPassword = this._noUserPassword;
        Logger.info("No user password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }
    async inputNoConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const noConfirmPassword = this._noUserConfirmPassword;
        Logger.info("No user confirm password: ", noConfirmPassword);
        await confirmPasswordInputField.sendKeys(noConfirmPassword);
    }

}
module.exports = { RegisterPageNoSingularInput }