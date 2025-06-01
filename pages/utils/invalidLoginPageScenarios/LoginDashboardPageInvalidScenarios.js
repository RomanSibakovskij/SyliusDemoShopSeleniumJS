"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class LoginDashboardPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);

        this._loginDashboardPageUsernameInputField = By.xpath("//div[@class='mb-5']//input[@id='_username']");
        this._loginDashboardPagePasswordInputField = By.xpath("//div[@class='mb-5']//input[@id='_password']");

        //invalid login input data - no singular input
        this._noLoginEmail = "";
        this._noLoginPassword = "";

        //invalid login input data - invalid singular input
        this._invalidLoginEmail = "brodfgd@fakemail.com";
        this._invalidLoginPassword = "Ffdfdf@$#@#4";

    }

    //invalid login data input methods - no singular input
    async inputNoLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginDashboardPageUsernameInputField);
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No user login email: ", noLoginEmail);
        await loginEmailInputField.sendKeys(noLoginEmail);
    }
    async inputNoLoginPasswordIntoPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginDashboardPagePasswordInputField);
        const noLoginPassword = this._noLoginPassword;
        Logger.info("No user login password: ", noLoginPassword);
        await loginPasswordInputField.sendKeys(noLoginPassword);
    }

    //invalid login data input methods - invalid singular input
    async inputInvalidLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginDashboardPageUsernameInputField);
        const invalidLoginEmail = this._invalidLoginEmail;
        Logger.info("Invalid user login email: ", invalidLoginEmail);
        await loginEmailInputField.sendKeys(invalidLoginEmail);
    }
    async inputInvalidLoginPasswordIntoPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginDashboardPagePasswordInputField);
        const invalidLoginPassword = this._invalidLoginPassword;
        Logger.info("Invalid user login password: ", invalidLoginPassword);
        await loginPasswordInputField.sendKeys(invalidLoginPassword);
    }

}
module.exports = { LoginDashboardPageInvalidScenarios }