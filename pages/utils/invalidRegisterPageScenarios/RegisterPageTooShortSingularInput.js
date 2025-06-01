"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");
const TestDataGenerator = require("../TestDataGenerator");

class RegisterPageTooShortSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._registerPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_firstName']");
        this._registerPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_lastName']");
        this._registerPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_registration_email']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_first']");
        this._registerPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_second']");

        const testDataGenerator = new TestDataGenerator(this.driver);
        //invalid user input data = too short singular input
        this._tooShortUserFirstName = "H";
        this._tooShortUserLastName = "G";
        this._tooShortUserEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);
        this._tooShortUserPassword = "Hg&";
        this._tooShortUserConfirmPassword = this._tooShortUserPassword;
    }

    //invalid user register data input methods - too short singular input
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const tooShortFirstName = this._tooShortUserFirstName;
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const tooShortLastName = this._tooShortUserLastName;
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooShortEmail = this._tooShortUserEmail;
        Logger.info("Too short user email: ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }
    async inputTooShortPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooShortPassword = this._tooShortUserPassword;
        Logger.info("Too short user password: ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }
    async inputTooShortConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const tooShortConfirmPassword = this._tooShortUserConfirmPassword;
        Logger.info("Too short matching user confirm password: ", tooShortConfirmPassword);
        await confirmPasswordInputField.sendKeys(tooShortConfirmPassword);
    }

}
module.exports = { RegisterPageTooShortSingularInput }