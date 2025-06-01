"use strict"

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require("./utils/TestDataGenerator");
const Logger = require("./utils/Logger");

class EditAccountPage extends BasePage{

    constructor(driver) {
        super(driver);

        //edit account page web elements
        this._editAccountPageTitle = By.xpath("//h1");
        this._editAccountPageSubtitle = By.xpath("//div[@class='col-12 col-md-9']/div[1]");
        //input form
        this._editAccountPageFirstNameSubtext = By.xpath("//label[@for='sylius_shop_customer_profile_firstName']");
        this._editAccountPageFirstNameInputField = By.xpath("//input[@id='sylius_shop_customer_profile_firstName']");
        this._editAccountPageLastNameSubtext = By.xpath("//label[@for='sylius_shop_customer_profile_lastName']");
        this._editAccountPageLastNameInputField = By.xpath("//input[@id='sylius_shop_customer_profile_lastName']");
        this._editAccountPageEmailSubtext = By.xpath("//label[@for='sylius_shop_customer_profile_email']");
        this._editAccountPageEmailInputField = By.xpath("//input[@id='sylius_shop_customer_profile_email']");
        this._editAccountPageGenderSubtext = By.xpath("//label[@for='sylius_shop_customer_profile_gender']");
        this._editAccountPageGenderDropdownMenu = By.xpath("//select[@id='sylius_shop_customer_profile_gender']");
        this._editAccountPageMaleGenderOption = By.xpath("//select[@id='sylius_shop_customer_profile_gender']/option[2]");
        this._editAccountPageFemaleGenderOption = By.xpath("//select[@id='sylius_shop_customer_profile_gender']/option[3]");
        this._editAccountPageBirthdaySubtext = By.xpath("//label[@for='sylius_shop_customer_profile_birthday']");
        this._editAccountPageBirthdayInputField = By.xpath("//input[@id='sylius_shop_customer_profile_birthday']");
        this._editAccountPagePhoneSubtext = By.xpath("//label[@for='sylius_shop_customer_profile_phoneNumber']");
        this._editAccountPagePhoneInputField = By.xpath("//input[@id='sylius_shop_customer_profile_phoneNumber']");
        this._editAccountPageNewsletterSubtext = By.xpath("//label[@for='sylius_shop_customer_profile_subscribedToNewsletter']");
        this._editAccountPageNewsletterSubCheckbox = By.xpath("//input[@id='sylius_shop_customer_profile_subscribedToNewsletter']");
        this._editAccountPageSaveChangesButton = By.xpath("//button[@id='save-changes']");
        //singular input error element
        this._editAccountPageSingularInputError = By.xpath("//div[@class='invalid-feedback d-block']");
        //account update data success message elements
        this._editAccountUpdateSuccessMessage = By.xpath("//div[@class='alert alert-success my-2'][1]");
        this._editAccountUpdateMessageOne = By.xpath("//div[@class='alert alert-success my-2'][2]");
        this._editAccountUpdateMessageTwo = By.xpath("//div[@class='alert alert-success my-2'][3]");
        //updated email verification success message element
        this._editAccountUpdateEmailVerificationSuccessMessage = By.xpath("//div[@class='alert alert-success my-2']");

        const testDataGenerator = new TestDataGenerator(this.driver)

        //valid edited user data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._validEditedFirstName = firstName;
        this._validEditedLastName = lastName;
        this._validEditedEmail = testDataGenerator.generateRandomEditedEmailAddress(7);
    }

    //valid edited user data input methods
    async inputEditedFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._editAccountPageFirstNameInputField);
        await firstNameInputField.clear();
        const editedFirstName = await this._validEditedFirstName;
        Logger.info("Valid edited user first name: ", editedFirstName);
        await firstNameInputField.sendKeys(editedFirstName);
    }
    async inputEditedLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._editAccountPageLastNameInputField);
        await lastNameInputField.clear();
        const editedLastName = this._validEditedLastName;
        Logger.info("Valid edited user last name: ", editedLastName);
        await lastNameInputField.sendKeys(editedLastName);
    }
    async inputEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await emailInputField.clear();
        const editedEmail = this._validEditedEmail;
        Logger.info("Valid edited user email: ", editedEmail);
        await emailInputField.sendKeys(editedEmail);
    }

    //click 'Gender' dropdown menu method
    async clickGenderDropdownMenu(){
        const genderDropdownMenu = await this.driver.findElement(this._editAccountPageGenderDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: genderDropdownMenu }).click().perform();
    }

    //select 'Male' gender option method
    async selectMaleGenderOption(){
        const maleGenderOption = await this.driver.findElement(this._editAccountPageMaleGenderOption);
        maleGenderOption.click();
    }

    //select 'Female' gender option method
    async selectFemaleGenderOption(){
        const femaleGenderOption = await this.driver.findElement(this._editAccountPageFemaleGenderOption);
        femaleGenderOption.click();
    }

    //click 'Save changes' button method
    async clickEditSaveChangesButton(){
        const editSaveChangesButton = await this.driver.findElement(this._editAccountPageSaveChangesButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: editSaveChangesButton }).click().perform();
    }

    //edited email getter
    async getEditedEmail(){ return this._validEditedEmail; }

    //edit account page text element getters
    async getEditAccountPageTitle(){
        const editAccountPageTitle = await this.driver.findElement(this._editAccountPageTitle);
        return await editAccountPageTitle.getText();
    }
    async getEditAccountPageSubtitle(){
        const editAccountPageSubtitle = await this.driver.findElement(this._editAccountPageSubtitle);
        const fullText = await editAccountPageSubtitle.getText();
        //split the text after "/n" (since h1 is stuffed into this div too)
        const textLines = fullText.split('\n');
        return textLines.length > 1 ? textLines[1] : '';
    }
    async getEditAccountPageFirstNameSubtext(){
        const editAccountPageFirstNameSubtext = await this.driver.findElement(this._editAccountPageFirstNameSubtext);
        return await editAccountPageFirstNameSubtext.getText();
    }
    async getEditAccountPageLastNameSubtext(){
        const editAccountPageLastNameSubtext = await this.driver.findElement(this._editAccountPageLastNameSubtext);
        return await editAccountPageLastNameSubtext.getText();
    }
    async getEditAccountPageEmailSubtext(){
        const editAccountPageEmailSubtext = await this.driver.findElement(this._editAccountPageEmailSubtext);
        return await editAccountPageEmailSubtext.getText();
    }
    async getEditAccountPageGenderSubtext(){
        const editAccountPageGenderSubtext = await this.driver.findElement(this._editAccountPageGenderSubtext);
        return await editAccountPageGenderSubtext.getText();
    }
    async getEditAccountPageBirthdaySubtext(){
        const editAccountPageBirthdaySubtext = await this.driver.findElement(this._editAccountPageBirthdaySubtext);
        return await editAccountPageBirthdaySubtext.getText();
    }
    async getEditAccountPagePhoneSubtext(){
        const editAccountPagePhoneSubtext = await this.driver.findElement(this._editAccountPagePhoneSubtext);
        return await editAccountPagePhoneSubtext.getText();
    }
    async getEditAccountPageNewsletterSubtext(){
        const editAccountPageNewsletterSubtext = await this.driver.findElement(this._editAccountPageNewsletterSubtext);
        return await editAccountPageNewsletterSubtext.getText();
    }

    //singular input error getter
    async getEditAccountSingularInputError(){
        const editAccountInputError = await this.driver.findElement(this._editAccountPageSingularInputError);
        return await editAccountInputError.getText();
    }

    //user account update success message getter
    async getUserAccountUpdateSuccessMessage(){
        const accountUpdateSuccessMessage = await this.driver.findElement(this._editAccountUpdateSuccessMessage);
        return await accountUpdateSuccessMessage.getText();
    }
    //additional update success message getters
    async getUpdateSuccessMessageOne(){
        const updateSuccessMessageOne = await this.driver.findElement(this._editAccountUpdateMessageOne);
        const fullText =  await updateSuccessMessageOne.getText();
        return fullText.replace(/https:\/\/\S+/g, "").trim();//return text without the link
    }

    async getUpdateSuccessMessageTwo(){
        const updateSuccessMessageTwo = await this.driver.findElement(this._editAccountUpdateMessageTwo);
        return await updateSuccessMessageTwo.getText();
    }

    //account verification link getter
    async getUpdatedAccountVerificationLink() {
        const updateSuccessMessage = await this.driver.findElement(this._editAccountUpdateMessageOne);
        const fullText = await updateSuccessMessage.getText();
        let updateAccountVerificationLink;

        //regex to extract URL
        const pattern = /https:\/\/[^\s]+/;
        const match = fullText.match(pattern);

        if (match) {
            updateAccountVerificationLink = match[0];
        } else {
            updateAccountVerificationLink = "";
        }

        return updateAccountVerificationLink;
    }

    //click account update verification link method
    async clickVerifyUpdatedAccountLink(){
        const updateVerificationLink = this.getUpdatedAccountVerificationLink();

        if (updateVerificationLink === "") {
            throw new Error("Update verification link not found in the message");
        }

        await this.driver.get(updateVerificationLink);

        await this.driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(), 'Your email has been successfully verified.')]")),
            1400
        )
    }

    //email verification success message getter
    async getUpdatedEmailVerificationSuccessMessage(){
        const updatedEmailVerificationSuccessMessage = await this.driver.findElement(this._editAccountUpdateEmailVerificationSuccessMessage);
        return await updatedEmailVerificationSuccessMessage.getText();
    }

    //edit account page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isEditAccountPageWebElementDisplayed(){
        const elementsToCheck = [
            this._editAccountPageTitle,
            this._editAccountPageSubtitle,
            this._editAccountPageFirstNameSubtext,
            this._editAccountPageFirstNameInputField,
            this._editAccountPageLastNameSubtext,
            this._editAccountPageLastNameInputField,
            this._editAccountPageEmailSubtext,
            this._editAccountPageEmailInputField,
            this._editAccountPageBirthdaySubtext,
            this._editAccountPageBirthdayInputField,
            this._editAccountPageGenderSubtext,
            this._editAccountPageGenderDropdownMenu,
            this._editAccountPagePhoneSubtext,
            this._editAccountPagePhoneInputField,
            this._editAccountPageNewsletterSubtext,
            this._editAccountPageNewsletterSubCheckbox,
            this._editAccountPageSaveChangesButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { EditAccountPage }