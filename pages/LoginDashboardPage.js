"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");
const { RegisterPage } = require("./RegisterPage");
const { EditAccountPage } = require("./EditAccountPage");
const { ChangePasswordPage } = require("./ChangePasswordPage");

class LoginDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);


        //login dashboard page web elements
        //register section
        this._loginPageRegisterLockImage = By.xpath("//div[@class='text-center']/div");
        this._loginPageRegisterSectionTitle = By.xpath("//div[@class='text-center']/h2");
        this._loginPageRegisterLink = By.xpath("//div[@class='text-center']/a");
        //login section
        this._loginPageLoginSectionTitle = By.xpath("//div[@class='d-flex justify-content-center align-items-center h-100 px-3']//h1");
        this._loginDashboardPageTestCredentialsSubtext = By.xpath("//div[@role='alert']/h3");
        this._loginDashboardPageTestCredentialsText = By.xpath("//div[@role='alert']/p");
        //input form
        this._loginDashboardPageUsernameSubtext = By.xpath("//div[@class='mb-5']//label[@for='_username']");
        this._loginDashboardPageUsernameInputField = By.xpath("//div[@class='mb-5']//input[@id='_username']");
        this._loginDashboardPagePasswordSubtext = By.xpath("//div[@class='mb-5']//label[@for='_password']");
        this._loginDashboardPagePasswordInputField = By.xpath("//div[@class='mb-5']//input[@id='_password']");
        this._loginDashboardPageRememberMeSubtext = By.xpath("//label[@for='_remember_me']");
        this._loginDashboardPageRememberMeCheckbox = By.xpath("//input[@id='_remember_me']");
        this._loginDashboardPageLoginButton = By.xpath("//button[@id='login-button']");
        this._loginDashboardPageForgotPasswordLink = By.xpath("//div[@class='d-grid']/a[@class='btn btn-link']");
        //singular input error
        this._loginDashboardPageSingularInputError = By.xpath("//div[@class='alert alert-danger']");

        const registerPage = new RegisterPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);

        //valid login input data
        this._validLoginEmail = registerPage.getEmail();
        this._validLoginUserName = registerPage.getUserName();
        this._validLoginPassword = registerPage.getPassword();

        //valid edited login input data
        this._validEditedLoginEmail = editAccountPage.getEditedEmail();
        this._validEditedLoginPassword = changePasswordPage.getNewPassword();
    }

    //valid login data input methods
    async inputValidLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginDashboardPageUsernameInputField);
        const validLoginEmail = await this._validLoginEmail;
        Logger.info("Valid user login email: ", validLoginEmail);
        await loginEmailInputField.sendKeys(validLoginEmail);
    }
    async inputValidLoginUserNameIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginDashboardPageUsernameInputField);
        const validLoginUserName = await this._validLoginUserName;
        Logger.info("Valid user login user name: ", validLoginUserName);
        await loginEmailInputField.sendKeys(validLoginUserName);
    }
    async inputValidLoginPasswordIntoPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginDashboardPagePasswordInputField);
        const validLoginPassword = await this._validLoginPassword;
        Logger.info("Valid user login password: ", validLoginPassword);
        await loginPasswordInputField.sendKeys(validLoginPassword);
    }

    //valid edited login data input methods
    async inputValidEditedLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginDashboardPageUsernameInputField);
        const validEditedLoginEmail = await this._validEditedLoginEmail;
        Logger.info("Valid edited user login email: ", validEditedLoginEmail);
        await loginEmailInputField.sendKeys(validEditedLoginEmail);
    }
    async inputValidEditedLoginPasswordIntoPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginDashboardPagePasswordInputField);
        const validEditedLoginPassword = await this._validEditedLoginPassword;
        Logger.info("Valid edited user login password: ", validEditedLoginPassword);
        await loginPasswordInputField.sendKeys(validEditedLoginPassword);
    }

    //click 'Remember me' checkbox method
    async clickRememberMeCheckbox(){
        const rememberMeCheckbox = await this.driver.findElement(this._loginDashboardPageRememberMeCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: rememberMeCheckbox }).click().perform();
    }

    //click 'Login' button method
    async clickLoginButton(){
        const loginButton = await this.driver.findElement(this._loginDashboardPageLoginButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: loginButton }).click().perform();
    }

    //login dashboard page text element getters
    async getLoginPageRegisterSectionTitle(){
        const loginPageRegisterSectionTitle = await this.driver.findElement(this._loginPageRegisterSectionTitle);
        return await loginPageRegisterSectionTitle.getText();
    }
    async getLoginPageLoginSectionTitle(){
        const loginPageLoginSectionTitle = await this.driver.findElement(this._loginPageLoginSectionTitle);
        return await loginPageLoginSectionTitle.getText();
    }
    async getLoginPageTestCredentialsSubtext(){
        const loginPageTestCredentialsSubtext = await this.driver.findElement(this._loginDashboardPageTestCredentialsSubtext);
        return await loginPageTestCredentialsSubtext.getText();
    }
    async getLoginPageTestCredentialsText(){
        const loginPageTestCredentialsText = await this.driver.findElement(this._loginDashboardPageTestCredentialsText);
        return await loginPageTestCredentialsText.getText();
    }
    async getLoginPageUsernameSubtext(){
        const loginPageUsernameSubtext = await this.driver.findElement(this._loginDashboardPageUsernameSubtext);
        return await loginPageUsernameSubtext.getText();
    }
    async getLoginPagePasswordSubtext(){
        const loginPagePasswordSubtext = await this.driver.findElement(this._loginDashboardPagePasswordSubtext);
        return await loginPagePasswordSubtext.getText();
    }
    async getLoginPageRememberMeSubtext(){
        const loginPageRememberMeSubtext = await this.driver.findElement(this._loginDashboardPageRememberMeSubtext);
        return await loginPageRememberMeSubtext.getText();
    }

    //singular input error message getter
    async getSingularInputErrorMessage(){
        const singularInputErrorMessage = await this.driver.findElement(this._loginDashboardPageSingularInputError);
        return await singularInputErrorMessage.getText();
    }

    //login dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isLoginDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._loginPageRegisterLockImage,
            this._loginPageRegisterSectionTitle,
            this._loginPageRegisterLink,
            this._loginPageLoginSectionTitle,
            this._loginDashboardPageTestCredentialsSubtext,
            this._loginDashboardPageTestCredentialsText,
            this._loginDashboardPageUsernameSubtext,
            this._loginDashboardPageUsernameInputField,
            this._loginDashboardPagePasswordSubtext,
            this._loginDashboardPagePasswordInputField,
            this._loginDashboardPageRememberMeSubtext,
            this._loginDashboardPageRememberMeCheckbox,
            this._loginDashboardPageLoginButton,
            this._loginDashboardPageForgotPasswordLink,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { LoginDashboardPage }