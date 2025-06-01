"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");
const TestDataGenerator = require("../TestDataGenerator");

class RegisterPageTooLongSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._registerPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_firstName']");
        this._registerPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_lastName']");
        this._registerPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_registration_email']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_first']");
        this._registerPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_second']");

        const testDataGenerator = new TestDataGenerator(this.driver);
        //invalid user input data = too long singular input
        this._tooLongUserFirstName = "Rffdgfhffvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgfddsafddsfgfdhgwaewrdsdsad";
        this._tooLongUserLastName = "Kffdgfhffvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgfddsafddsfgfdhgwaewrdsdsad";
        this._tooLongUserEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);
        this._tooLongUserPassword = "#544fdsdsfdsdsdvfdgfgjREWRTERWREDFCSFdsfsfdsdadsafsdSADSDFREWRFDDSGVCZXDSGDFHGFGTWSASADSSADSFDSGFDHG";
        this._tooLongUserConfirmPassword = this._tooLongUserPassword;
    }

    //invalid user register data input methods - too short singular input
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const tooLongFirstName = this._tooLongUserFirstName;
        Logger.info("Too long user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const tooLongLastName = this._tooLongUserLastName;
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooLongEmail = this._tooLongUserEmail;
        Logger.info("Too long user email: ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }
    async inputTooLongPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooLongPassword = this._tooLongUserPassword;
        Logger.info("Too long user password: ", tooLongPassword);
        await passwordInputField.sendKeys(tooLongPassword);
    }
    async inputTooLongConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const tooLongConfirmPassword = this._tooLongUserConfirmPassword;
        Logger.info("Too long matching user confirm password: ", tooLongConfirmPassword);
        await confirmPasswordInputField.sendKeys(tooLongConfirmPassword);
    }

}
module.exports = { RegisterPageTooLongSingularInput }