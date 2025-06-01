"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { RegisterPage } = require('./RegisterPage');
const Logger = require("./utils/Logger");

class ChangePasswordPage extends BasePage{

    constructor(driver) {
        super(driver);

        //change password page web elements
        this._changePasswordPageTitle = By.xpath("//h1");
        this._changePasswordPageSubtitle = By.xpath("//div[@class='col-12 col-md-9']/div[1]");
        //input form
        this._changePasswordPageCurrentPasswordSubtext = By.xpath("//label[@for='sylius_shop_change_password_currentPassword']");
        this._changePasswordPageCurrentPasswordInputField = By.xpath("//input[@id='sylius_shop_change_password_currentPassword']");
        this._changePasswordPageNewPasswordSubtext = By.xpath("//label[@for='sylius_shop_change_password_newPassword_first']");
        this._changePasswordPageNewPasswordInputField = By.xpath("//input[@id='sylius_shop_change_password_newPassword_first']");
        this._changePasswordPageConfirmPasswordSubtext = By.xpath("//label[@for='sylius_shop_change_password_newPassword_second']");
        this._changePasswordPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_change_password_newPassword_second']");
        this._changePasswordPageSaveChangesButton = By.xpath("//button[@id='save-changes']");
        //singular input error element
        this._changePasswordPageSingularInputError = By.xpath("//div[@class='invalid-feedback d-block']");

        const registerPage = new RegisterPage(this.driver)

        //valid change password input data
        this._currentPassword = registerPage.getPassword();
        this._newPassword = "testPassword@@#12#$%#"; //change this to random variable later
        this._confirmPassword = this._newPassword;
    }

    //valid change password data input methods
    async inputPasswordIntoCurrentPasswordInputField(){
        const currentPasswordInputField = await this.driver.findElement(this._changePasswordPageCurrentPasswordInputField);
        const password = await this._currentPassword;
        Logger.info("Current user password: ", password);
        await currentPasswordInputField.sendKeys(password);
    }
    async inputNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._changePasswordPageNewPasswordInputField);
        const newPassword = this._newPassword;
        Logger.info("New user password: ", newPassword);
        await newPasswordInputField.sendKeys(newPassword);
    }
    async inputConfirmNewPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const confirmPassword = this._confirmPassword;
        Logger.info("Matching user new password: ", confirmPassword);
        await confirmPasswordInputField.sendKeys(confirmPassword);
    }

    //click 'Save changes' button method
    async clickSaveChangesButton(){
        const saveChangesButton = await this.driver.findElement(this._changePasswordPageSaveChangesButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: saveChangesButton }).click().perform();
    }

    //private data getter
    async getNewPassword() {return this._newPassword;}

    //change password page text element getters
    async getChangePasswordTitle(){
        const changePasswordPageTitle = await this.driver.findElement(this._changePasswordPageTitle);
        return await changePasswordPageTitle.getText();
    }
    async getChangePasswordSubtitle(){
        const changePasswordPageSubtitle = await this.driver.findElement(this._changePasswordPageSubtitle);
        const fullText = await changePasswordPageSubtitle.getText();
        //split the text after "\n" (since h1 is stuffed into this div too)
        const textLines = fullText.split('\n');
        return textLines.length > 1 ? textLines[1].trim() : '';
    }
    async getChangePasswordCurrentPasswordSubtext(){
        const changePasswordPageCurrentPasswordSubtext = await this.driver.findElement(this._changePasswordPageCurrentPasswordSubtext);
        return await changePasswordPageCurrentPasswordSubtext.getText();
    }
    async getChangePasswordNewPasswordSubtext(){
        const changePasswordPageNewPasswordSubtext = await this.driver.findElement(this._changePasswordPageNewPasswordSubtext);
        return await changePasswordPageNewPasswordSubtext.getText();
    }
    async getChangePasswordConfirmPasswordSubtext(){
        const changePasswordPageConfirmPasswordSubtext = await this.driver.findElement(this._changePasswordPageConfirmPasswordSubtext);
        return await changePasswordPageConfirmPasswordSubtext.getText();
    }

    //singular input error message getter
    async getChangePasswordPageSingularInputError(){
        const changePasswordPageSingularInputErrorMsg = await this.driver.findElement(this._changePasswordPageSingularInputError);
        return await changePasswordPageSingularInputErrorMsg.getText();
    }

    //change password page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isChangePasswordPageWebElementDisplayed() {
        const elementsToCheck = [
            this._changePasswordPageTitle,
            this._changePasswordPageSubtitle,
            this._changePasswordPageCurrentPasswordSubtext,
            this._changePasswordPageCurrentPasswordInputField,
            this._changePasswordPageNewPasswordSubtext,
            this._changePasswordPageNewPasswordInputField,
            this._changePasswordPageConfirmPasswordSubtext,
            this._changePasswordPageConfirmPasswordInputField,
            this._changePasswordPageSaveChangesButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}
module.exports = { ChangePasswordPage }