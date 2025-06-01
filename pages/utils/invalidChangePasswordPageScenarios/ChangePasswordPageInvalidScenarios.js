"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class ChangePasswordPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._changePasswordPageCurrentPasswordInputField = By.xpath("//input[@id='sylius_shop_change_password_currentPassword']");
        this._changePasswordPageNewPasswordInputField = By.xpath("//input[@id='sylius_shop_change_password_newPassword_first']");
        this._changePasswordPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_change_password_newPassword_second']");

        //invalid change password input data - no singular input
        this._noCurrentPassword = "";
        this._noNewPassword = "";
        this._noConfirmPassword = this._noNewPassword;

        //invalid change password input data - invalid singular input
        this._invalidCurrentPassword = "&*^&lkjk@$#322"
        this._mismatchingConfirmPassword = "#$%$4fsdfs";
    }

    //invalid change password data input methods - no singular input
    async inputNoPasswordIntoCurrentPasswordInputField(){
        const currentPasswordInputField = await this.driver.findElement(this._changePasswordPageCurrentPasswordInputField);
        const noPassword = this._noCurrentPassword;
        Logger.info("No current user password: ", noPassword);
        await currentPasswordInputField.sendKeys(noPassword);
    }
    async inputNoNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._changePasswordPageNewPasswordInputField);
        const noNewPassword = this._noNewPassword;
        Logger.info("No new user password: ", noNewPassword);
        await newPasswordInputField.sendKeys(noNewPassword);
    }
    async inputNoConfirmNewPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const noConfirmPassword = this._noConfirmPassword;
        Logger.info("No matching user new password: ", noConfirmPassword);
        await confirmPasswordInputField.sendKeys(noConfirmPassword);
    }

    //invalid singular data input methods - invalid singular input
    async inputInvalidPasswordIntoCurrentPasswordInputField(){
        const currentPasswordInputField = await this.driver.findElement(this._changePasswordPageCurrentPasswordInputField);
        const invalidPassword = this._invalidCurrentPassword;
        Logger.info("Invalid current user password: ", invalidPassword);
        await currentPasswordInputField.sendKeys(invalidPassword);
    }
    async inputMismatchingConfirmNewPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const mismatchingConfirmPassword = this._mismatchingConfirmPassword;
        Logger.info("Mismatching user new password: ", mismatchingConfirmPassword);
        await confirmPasswordInputField.sendKeys(mismatchingConfirmPassword);
    }

}
module.exports = { ChangePasswordPageInvalidScenarios }