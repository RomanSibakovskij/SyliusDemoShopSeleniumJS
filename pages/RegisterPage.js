"use strict"

const { By, until } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');
const Logger = require("./utils/Logger");

class RegisterPage extends BasePage{

    constructor(driver) {
        super(driver);

        //register page web elements
        this._registerPageTitle = By.xpath("//h1");
        this._registerPageSubtitle = By.xpath("//div[@class='col-12 col-md-6']/div[@class='mb-5']/div");
        this._registerPageSignInLink = By.xpath("//div[@class='col-12 col-md-6']/div[@class='mb-5']//a");
        this._registerPagePersonalInfoSubtext = By.xpath("//form[@id='sylius_shop_customer_registration']/div[@class='mb-5'][1]/h2");
        //input form
        this._registerPageFirstNameSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_firstName']");
        this._registerPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_firstName']");
        this._registerPageLastNameSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_lastName']");
        this._registerPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_registration_lastName']");
        this._registerPageEmailSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_email']");
        this._registerPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_registration_email']");
        this._registerPagePhoneSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_phoneNumber']");
        this._registerPagePhoneInputField = By.xpath("//input[@id='sylius_shop_customer_registration_phoneNumber']");
        this._registerPageAccountCredentialsSubtitle = By.xpath("//form[@id='sylius_shop_customer_registration']/div[@class='mb-5'][2]/h2");
        this._registerPageSubscribeNewsletterSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_subscribedToNewsletter']");
        this._registerPageSubscribeNewsletterCheckbox = By.xpath("//input[@id='sylius_shop_customer_registration_subscribedToNewsletter']");
        this._registerPagePasswordSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_user_plainPassword_first']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_first']");
        this._registerPageConfirmPasswordSubtext = By.xpath("//label[@for='sylius_shop_customer_registration_user_plainPassword_second']");
        this._registerPageConfirmPasswordInputField = By.xpath("//input[@id='sylius_shop_customer_registration_user_plainPassword_second']");
        this._registerPageCreateAccountButton = By.xpath("//button[@id='register-button']");
        //account creation success message elements
        this._accountCreationMessageOne = By.xpath("//div[@role='alert'][1]");
        this._accountCreationMessageTwo = By.xpath("//div[@role='alert'][2]");
        this._accountCreationMessageHeaderText = By.xpath("//h1");
        //singular input error message element
        this._regPageSingularInputErrorMessage = By.xpath("//div[@class='invalid-feedback d-block']")

        //valid user input data
        const testDataGenerator = new TestDataGenerator();

        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(9);
        this._password = testDataGenerator.generateRandomPassword();
        this._confirmPassword = this._password;

    }

    //valid user register data input methods
    async inputFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const firstName = this._firstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const lastName = this._lastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const email = this._email;
        Logger.info("Valid user email: ", email);
        await emailInputField.sendKeys(email);
    }
    async inputPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }
    async inputConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const confirmPassword = this._confirmPassword;
        Logger.info("Valid user matching confirm password: ", confirmPassword);
        await confirmPasswordInputField.sendKeys(confirmPassword);
    }

    //click 'Create account' button method
    async clickCreateAccountButton(){
        const createAccountButton = await this.driver.findElement(this._registerPageCreateAccountButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: createAccountButton }).click().perform();
    }

    //register page private data getters
    async getUserName(){return this._firstName + " " + this._lastName;}
    async getFirstName(){return this._firstName;}
    async getLastName(){return this._lastName;}
    async getEmail(){return this._email;}
    async getPassword(){return this._password;}


    //register page text element getters
    async getRegisterPageTitle(){
        const registerPageTitle = await this.driver.findElement(this._registerPageTitle);
        return await registerPageTitle.getText();
    }

    async getRegisterPageSubtitle(){
        const registerPageSubtitle = await this.driver.findElement(this._registerPageSubtitle);
        return await registerPageSubtitle.getText();
    }

    async getRegisterPagePersonalInfoSubtitle(){
        const personalInfoSubtitle = await this.driver.findElement(this._registerPagePersonalInfoSubtext);
        return await personalInfoSubtitle.getText();
    }

    async getRegisterPageFirstNameSubtext(){
        const registerPageFirstNameSubtext = await this.driver.findElement(this._registerPageFirstNameSubtext);
        return await registerPageFirstNameSubtext.getText();
    }

    async getRegisterPageLastNameSubtext(){
        const registerPageLastNameSubtext = await this.driver.findElement(this._registerPageLastNameSubtext);
        return await registerPageLastNameSubtext.getText();
    }

    async getRegisterPageEmailSubtext(){
        const registerPageEmailSubtext = await this.driver.findElement(this._registerPageEmailSubtext);
        return await registerPageEmailSubtext.getText();
    }

    async getRegisterPagePhoneSubtext(){
        const registerPagePhoneSubtext = await this.driver.findElement(this._registerPagePhoneSubtext);
        return await registerPagePhoneSubtext.getText();
    }

    async getRegisterPageAccountCredentialsSubtitle(){
        const accountCredentialsSubtitle = await this.driver.findElement(this._registerPageAccountCredentialsSubtitle);
        return await accountCredentialsSubtitle.getText();
    }

    async getRegisterPageSubscribeNewsletterSubtext(){
        const subscribeNewsletterSubtext = await this.driver.findElement(this._registerPageSubscribeNewsletterSubtext);
        return await subscribeNewsletterSubtext.getText();
    }

    async getRegisterPagePasswordSubtext(){
        const registerPagePasswordSubtext = await this.driver.findElement(this._registerPagePasswordSubtext);
        return await registerPagePasswordSubtext.getText();
    }

    async getRegisterPageConfirmPasswordSubtext(){
        const registerPageConfirmPasswordSubtext = await this.driver.findElement(this._registerPageConfirmPasswordSubtext);
        return await registerPageConfirmPasswordSubtext.getText();
    }

    //account creation success message getters
    async getAccountCreationSuccessMessageOne(){
        const accountCreationSuccessMessageOne = await this.driver.findElement(this._accountCreationMessageOne);
        return await accountCreationSuccessMessageOne.getText();
    }

    async getAccountCreationSuccessMessageTwo(){
        const accountCreationSuccessMessageTwo = await this.driver.findElement(this._accountCreationMessageTwo);
        const fullText =  await accountCreationSuccessMessageTwo.getText();
        return fullText.replace(/https:\/\/[^\s]+/g, "").trim();//return text without the link
    }

    async getAccountCreationSuccessMessageHeader(){
        const accountCreationSuccessMessageHeader = await this.driver.findElement(this._accountCreationMessageHeaderText);
        return await accountCreationSuccessMessageHeader.getText();
    }

    //account verification link getter
    async getAccountVerificationLink() {
        const accountCreationSuccessMessage = await this.driver.findElement(this._accountCreationMessageTwo);
        const fullText = await accountCreationSuccessMessage.getText();
        let accountVerificationLink;

        //regex to extract URL
        const pattern = /https:\/\/[^\s]+/;
        const match = fullText.match(pattern);

        if (match) {
            accountVerificationLink = match[0];
        } else {
            accountVerificationLink = "";
        }

        return accountVerificationLink;
    }

    //click account verification link method
    async clickVerifyAccountLink(){
        const verificationLink = this.getAccountVerificationLink();

        if (verificationLink === "") {
            throw new Error("Verification link not found in the message");
        }

        await this.driver.get(verificationLink);

        await this.driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(), 'Your email has been successfully verified.')]")),
            1400
        )
    }

    //singular input error message getter
    async getSingularInputErrorMessage(){
        const regPageSingularInputError = await this.driver.findElement(this._regPageSingularInputErrorMessage);
        return await regPageSingularInputError.getText();
    }

    //scroll down method for better page view (for logging purposes
    async scrollDownForView(){
        const elementToScrollDownTo = await this.driver.findElement(this._registerPagePhoneInputField);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", elementToScrollDownTo);
    }

    //register page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isRegisterPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerPageTitle,
            this._registerPageSubtitle,
            this._registerPageSignInLink,
            this._registerPagePersonalInfoSubtext,
            this._registerPageFirstNameSubtext,
            this._registerPageFirstNameInputField,
            this._registerPageLastNameSubtext,
            this._registerPageLastNameInputField,
            this._registerPageEmailSubtext,
            this._registerPageEmailInputField,
            this._registerPagePhoneSubtext,
            this._registerPagePhoneInputField,
            this._registerPageAccountCredentialsSubtitle,
            this._registerPageSubscribeNewsletterSubtext,
            this._registerPageSubscribeNewsletterCheckbox,
            this._registerPagePasswordSubtext,
            this._registerPagePasswordInputField,
            this._registerPageConfirmPasswordSubtext,
            this._registerPageConfirmPasswordInputField,
            this._registerPageCreateAccountButton,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { RegisterPage }