"use strict"
const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require('../../pages/GeneralPage');
const { RegisterPage } = require('../../pages/RegisterPage');
const { RegisterPageNoSingularInput } = require("../../pages/utils/invalidRegisterPageScenarios/RegisterPageNoSingularInput");
const { RegisterPageTooShortSingularInput } = require("../../pages/utils/invalidRegisterPageScenarios/RegisterPageTooShortSingularInput");
const { RegisterPageTooLongSingularInput } = require("../../pages/utils/invalidRegisterPageScenarios/RegisterPageTooLongSingularInput");
const { RegisterPageInvalidSingularInputFormat } = require("../../pages/utils/invalidRegisterPageScenarios/RegisterPageInvalidSingularInputFormat");
const { LoginDashboardPage } = require("../../pages/LoginDashboardPage");
const { LoginDashboardPageInvalidScenarios } = require("../../pages/utils/invalidLoginPageScenarios/LoginDashboardPageInvalidScenarios");
const { AccountDashboardPage } = require("../../pages/AccountDashboardPage");
const { EditAccountPage } = require("../../pages/EditAccountPage");
const { EditAccountPageInvalidSingularInput } = require("../../pages/utils/invalidEditAccountPageScenario/EditAccountPageInvalidSingularInput");
const { AddressBookDashboardPage } = require("../../pages/AddressBookDashboardPage");
const { AddAddressPage } = require("../../pages/AddAddressPage");
const { AddAddressPageNoSingularInput } = require("../../pages/utils/invalidAddAddressScenarios/AddAddressPageNoSingularInput");
const { AddAddressPageTooShortSingularInput } = require("../../pages/utils/invalidAddAddressScenarios/AddAddressPageTooShortSingularInput");
const { AddAddressPageTooLongSingularInput } = require("../../pages/utils/invalidAddAddressScenarios/AddAddressPageTooLongSingularInput");
const { AddAddressPageInvalidInputFormat } = require("../../pages/utils/invalidAddAddressScenarios/AddAddressPageInvalidInputFormat");
const { EditAddressPage } = require("../../pages/EditAddressPage");
const { EditAddressPageNoSingularInput } = require("../../pages/utils/invalidEditAddressScenarios/EditAddressPageNoSingularInput");
const { EditAddressPageTooShortSingularInput } = require("../../pages/utils/invalidEditAddressScenarios/EditAddressPageTooShortSingularInput");
const { EditAddressPageTooLongSingularInput } = require("../../pages/utils/invalidEditAddressScenarios/EditAddressPageTooLongSingularInput");
const { EditAddressPageInvalidSingularInput } = require("../../pages/utils/invalidEditAddressScenarios/EditAddressPageInvalidSingularInput");
const { ChangePasswordPage } = require("../../pages/ChangePasswordPage");
const { ChangePasswordPageInvalidScenarios } = require("../../pages/utils/invalidChangePasswordPageScenarios/ChangePasswordPageInvalidScenarios");
const { SingleProductPage } = require("../../pages/SingleProductPage");
const { AddReviewPage } = require("../../pages/AddReviewPage");
const { AddReviewPageInvalidSingularInput } = require("../../pages/utils/invalidAddReviewScenarios/AddReviewPageInvalidSingularInput");
const { SingleCategoryDashboardPage } = require("../../pages/SingleCategoryDashboardPage");
const { WishlistPage } = require("../../pages/WishlistPage");
const { ShoppingCartPage } = require("../../pages/ShoppingCartPage");
const { CheckoutPage } = require("../../pages/CheckoutPage");
const { CheckoutPageValidGuestCheckout } = require("../../pages/utils/validGuestCheckout/CheckoutPageValidGuestCheckout");
const { CheckoutPageGuestNoSingularInputScenarios } = require("../../pages/utils/invalidGuestCheckoutScenarios/CheckoutPageGuestNoSingularInputScenarios");
const { CheckoutPageGuestTooShortSingularInput } = require("../../pages/utils/invalidGuestCheckoutScenarios/CheckoutPageGuestTooShortSingularInput");
const { CheckoutPageGuestTooLongSingularInput } = require("../../pages/utils/invalidGuestCheckoutScenarios/CheckoutPageGuestTooLongSingularInput");
const { CheckoutPageGuestInvalidSingularInputFormat } = require("../../pages/utils/invalidGuestCheckoutScenarios/CheckoutPageGuestInvalidSingularInputFormat");
const { OrderHistoryPage } = require("../../pages/OrderHistoryPage");


class TestMethods{

    constructor(driver) {this.driver = driver;}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //navigate to 'Register' page test method
    async navigateToRegisterPageTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click header 'Register' link
        await generalPage.clickHeaderRegisterLink();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "User Navigation To Register Page Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation test

    //valid user account creation test method
    async validUserAccountCreationTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after valid user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Valid Data Input");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected account creation success message elements
        await this.isAccountCreationSuccessMessageTextAsExpected();
        //click 'Verification' link
        await registerPage.clickVerifyAccountLink();
        //capture screenshot of the user account verification
        await TestMethods.captureScreenshot(this.driver, "User Account Verification Result");
        //click header home page logo
        await generalPage.clickHeaderHomePageLogoLink();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Account Creation Test Result");
    }

    //invalid user account creation tests

    //no singular input

    //invalid user account creation test method - no user first name
    async invalidUserAccountCreationNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //don't input user first name into first name input field
        await registerPageNoSingularInput.inputNoFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - no user first name
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No User First Name");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message
        const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
        assert.strictEqual(singularInputErrorMsg, "Please enter your first name.", "The missing first name input error message doesn't match expectation or it wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No First Name");
    }
    //invalid user account creation test method - no user last name
    async invalidUserAccountCreationNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //don't input user last name into last name input field
        await registerPageNoSingularInput.inputNoLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - no user last name
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No User Last Name");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message
        const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
        assert.strictEqual(singularInputErrorMsg, "Please enter your last name.", "The missing last name input error message doesn't match expectation or it wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Last Name");
    }
    //invalid user account creation test method - no user email
    async invalidUserAccountCreationNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //don't input user email into email input field
        await registerPageNoSingularInput.inputNoEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - no user email
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No User Email");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message
        const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
        assert.strictEqual(singularInputErrorMsg, "Please enter your email.", "The missing email input error message doesn't match expectation or it wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Email");
    }
    //invalid user account creation test method - no user password
    async invalidUserAccountCreationNoPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //don't input user password into password input field
        await registerPageNoSingularInput.inputNoPasswordIntoPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - no user password
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Password");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //scroll down the screen for view
        await registerPage.scrollDownForView();
        //assert the user gets the expected error message
        const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
        assert.strictEqual(singularInputErrorMsg, "Please enter your password.", "The missing password input error message doesn't match expectation or it wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Password");
    }
    //invalid user account creation test method - no user confirm password
    async invalidUserAccountCreationNoConfirmPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //don't input user confirm password into confirm password input field
        await registerPageNoSingularInput.inputNoConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - no user confirm password
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Confirm Password");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //scroll down the screen for view
        await registerPage.scrollDownForView();
        //assert the user gets the expected error message
        const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
        assert.strictEqual(singularInputErrorMsg, "The entered passwords don't match", "The missing confirm password input error message doesn't match expectation or it wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Confirm Password");
    }

    //too short singular input

    //invalid user account creation test method - too short user first name (1 char)
    async invalidUserAccountCreationTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortSingularInput = new RegisterPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input too short user first name into first name input field (1 char)
        await registerPageTooShortSingularInput.inputTooShortFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too short user first name
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short User First Name");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "First name must be at least 2 characters long.", "The too short first name input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too short first name input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short First Name");
    }
    //invalid user account creation test method - too short user last name (1 char)
    async invalidUserAccountCreationTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortSingularInput = new RegisterPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input too short user last name into last name input field (1 char)
        await registerPageTooShortSingularInput.inputTooShortLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too short user last name
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short User Last Name");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "Last name must be at least 2 characters long.", "The too short last name input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too short last name input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Last Name");
    }
    //invalid user account creation test method - too short user email (1 char -> name,domain)
    async invalidUserAccountCreationTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortSingularInput = new RegisterPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input too short user email into email input field (1 char -> name, domain)
        await registerPageTooShortSingularInput.inputTooShortEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too short user email
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short User Email");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "Email is too short.", "The too short email input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too short email input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Email");
    }
    //invalid user account creation test method - too short user password and confirm password (3 chars)
    async invalidUserAccountCreationTooShortPasswordConfirmTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortSingularInput = new RegisterPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input too short user password into password input field (3 chars)
        await registerPageTooShortSingularInput.inputTooShortPasswordIntoPasswordInputField();
        //input too short matching user confirm password into confirm password input field (3 chars)
        await registerPageTooShortSingularInput.inputTooShortConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too short user password/confirm password
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short User Password And Confirm Password");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //scroll down the screen for view
        await registerPage.scrollDownForView();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "Password must be at least 4 characters long.", "The too short password / confirm password input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too short password / confirm password input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Password And Confirm Password");
    }

    //too long singular input

    //invalid user account creation test method - too long user first name (100 chars)
    async invalidUserAccountCreationTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooLongSingularInput = new RegisterPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input too long user first name into first name input field (100 chars)
        await registerPageTooLongSingularInput.inputTooLongFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too long user first name
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long User First Name");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "First name is too long.", "The too long first name input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too long first name input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long First Name");
    }
    //invalid user account creation test method - too long user last name (100 chars)
    async invalidUserAccountCreationTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooLongSingularInput = new RegisterPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input too long user last name into last name input field (100 chars)
        await registerPageTooLongSingularInput.inputTooLongLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too long user last name
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long User Last Name");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "Last name is too long.", "The too long last name input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too long last name input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Last Name");
    }
    //invalid user account creation test method - too long user email (100 chars -> name,domain)
    async invalidUserAccountCreationTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooLongSingularInput = new RegisterPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input too long user email into email input field (100 chars -> name, domain)
        await registerPageTooLongSingularInput.inputTooLongEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too long user email
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long User Email");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "This email is invalid.", "The too long email input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too long email input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Email");
    }
    //invalid user account creation test method - too long user password and confirm password (100 chars)
    async invalidUserAccountCreationTooLongPasswordConfirmTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooLongSingularInput = new RegisterPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input too long user password into password input field (100 chars)
        await registerPageTooLongSingularInput.inputTooLongPasswordIntoPasswordInputField();
        //input too long matching user confirm password into confirm password input field (100 chars)
        await registerPageTooLongSingularInput.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - too long user password/confirm password
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long User Password And Confirm Password");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "Password is too long.", "The too long password / confirm password input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The too long password / confirm password input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Password And Confirm Password");
    }

    //invalid singular input format

    //invalid user account creation test method - invalid user first name format (special symbols only)
    async invalidUserAccountCreationInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInputFormat = new RegisterPageInvalidSingularInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input invalid user first name format into first name input field (special symbols only)
        await registerPageInvalidSingularInputFormat.inputInvalidFirstNameFormatIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - invalid user first name format
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid User First Name Format");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "First name cannot consist of special symbols only.", "The invalid first name input format error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The invalid first name input format error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid First Name Format");
    }
    //invalid user account creation test method - invalid user last name format (special symbols only)
    async invalidUserAccountCreationInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInputFormat = new RegisterPageInvalidSingularInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input invalid user last name format into last name input field (special symbols only)
        await registerPageInvalidSingularInputFormat.inputInvalidLastNameFormatIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - invalid user last name format
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid User Last Name Format");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "Last name cannot consist of special symbols only.", "The invalid last name input format error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The invalid last name input format error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Last Name Format");
    }
    //invalid user account creation test method - invalid user email format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInputFormat = new RegisterPageInvalidSingularInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input invalid user email format into email input field (missing '@')
        await registerPageInvalidSingularInputFormat.inputInvalidEmailFormatIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - invalid user email format
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid User Email Format");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "This email is invalid.", "The invalid email input format error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The invalid email input format error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Email Format");
    }
    //invalid user account creation test method - pre-existing user email format (test email input)
    async invalidUserAccountCreationExistingEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInputFormat = new RegisterPageInvalidSingularInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPagePageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot of the home page display before user data input
        await TestMethods.captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input existing user email into email input field (test email input)
        await registerPageInvalidSingularInputFormat.inputExistingEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid user confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the home page display after invalid user data input - existing user email
        await TestMethods.captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Existing User Email");
        //click 'Create an account' button method
        await registerPage.clickCreateAccountButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await registerPage.getSingularInputErrorMessage();
            assert.strictEqual(singularInputErrorMsg, "This email is already used.", "The existing email input error message doesn't match expectations.")
        } catch (e) {
            Logger.error("The existing email input error message wasn't triggered, test has failed.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Existing Email");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user login tests

    //valid user login test
    async validUserLoginTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input valid user login email into login username (email) input field
        await loginDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //input valid user login password into login password input field
        await loginDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Valid Data Input");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login Test Result");
    }
    //valid user login with valid username test
    async validUserLoginWithValidUsernameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input valid username into login username (email) input field
        await loginDashboardPage.inputValidLoginUserNameIntoEmailInputField();
        //input valid user login password into login password input field
        await loginDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Valid Data Input - Valid User Name");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //if the user fails to log in with valid username, log the issue
        if(!await loginDashboardPage.getSingularInputErrorMessage()){
            Logger.info("The system has recognized the valid username.");
        } else {
            Logger.error("The user has failed to login with valid username. The error message displayed is: " + await loginDashboardPage.getSingularInputErrorMessage());
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login With Valid User Name Test Result");
    }

    //edited data login

    //valid user login with edited login email test (during automation run the user gets dropped onto login dashboard page instead of edit account page as it was during manual run)
    async validUserLoginEditedLoginEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input valid edited user login email into login username (email) input field
        await loginDashboardPage.inputValidEditedLoginEmailIntoEmailInputField();
        //input valid user login password into login password input field
        await loginDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Valid Data Input - Edited Login Email");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login With Edited Login Email Test Result");
    }

    //valid user login with edited login password test
    async validUserLoginEditedLoginPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input valid user login email into login username (email) input field
        await loginDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //input valid edited user login password into login password input field
        await loginDashboardPage.inputValidEditedLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Valid Data Input - Edited Login Password");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login With Edited Login Password Test Result");
    }

    //invalid user login tests

    //no singular input

    //invalid user login test - no login email
    async invalidUserLoginNoLoginEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        const loginDashboardPageInvalidScenarios = new LoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //don't input user login email into login username (email) input field
        await loginDashboardPageInvalidScenarios.inputNoLoginEmailIntoEmailInputField();
        //input valid user login password into login password input field
        await loginDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Invalid Data Input - No Login Email");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const loginSingularInputError = await loginDashboardPage.getSingularInputErrorMessage();
        assert.strictEqual(loginSingularInputError, "Error\n" + "Invalid credentials.", "The missing login email input error doesn't match expectations or the error wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Email");
    }
    //invalid user login test - no login password
    async invalidUserLoginNoLoginPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        const loginDashboardPageInvalidScenarios = new LoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input valid user login email into login username (email) input field
        await loginDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //don't input user login password into login password input field
        await loginDashboardPageInvalidScenarios.inputNoLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Invalid Data Input - No Login Password");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const loginSingularInputError = await loginDashboardPage.getSingularInputErrorMessage();
        assert.strictEqual(loginSingularInputError, "Error\n" + "Invalid credentials.", "The missing login email input error doesn't match expectations or the error wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Password");
    }

    //invalid singular input

    //invalid user login test - invalid login email
    async invalidUserLoginInvalidLoginEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        const loginDashboardPageInvalidScenarios = new LoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input invalid user login email into login username (email) input field
        await loginDashboardPageInvalidScenarios.inputInvalidLoginEmailIntoEmailInputField();
        //input valid user login password into login password input field
        await loginDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Invalid Data Input - Invalid Login Email");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const loginSingularInputError = await loginDashboardPage.getSingularInputErrorMessage();
        assert.strictEqual(loginSingularInputError, "Error\n" + "Invalid credentials.", "The missing login email input error doesn't match expectations or the error wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email");
    }
    //invalid user login test - invalid login password
    async invalidUserLoginInvalidLoginPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        const loginDashboardPageInvalidScenarios = new LoginDashboardPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click header 'Login' link
        await generalPage.clickHeaderLoginLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //login dashboard page web element assert
        await loginDashboardPage.isLoginDashboardPageWebElementDisplayed();
        //login dashboard page text element assert
        await this.isLoginDashboardPageTextElementAsExpected();
        //capture screenshot of login dashboard page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display Before Data Input");
        //input valid user login email into login username (email) input field
        await loginDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //input invalid user login password into login password input field
        await loginDashboardPageInvalidScenarios.inputInvalidLoginPasswordIntoPasswordInputField();
        //click 'Remember me' checkbox
        await loginDashboardPage.clickRememberMeCheckbox();
        //capture screenshot of login dashboard page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Dashboard Page Display After Invalid Data Input - Invalid Login Password");
        //click 'Login' button
        await loginDashboardPage.clickLoginButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const loginSingularInputError = await loginDashboardPage.getSingularInputErrorMessage();
        assert.strictEqual(loginSingularInputError, "Error\n" + "Invalid credentials.", "The missing login email input error doesn't match expectations or the error wasn't triggered.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Password");
    }

    //user logout test

    //user logout test method
    async userLogoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click header "Logout" link
        await generalPage.clickHeaderLogoutLink();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "User Logout Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit user account test

    //valid edit user account test method
    async validEditUserAccountDataTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid edited user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Valid Edited Data Input");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets expected user account data update success messages
        await this.isAccountUpdateSuccessMessagesDataTextElementAsExpected();
        //click update verification link
        await editAccountPage.clickVerifyUpdatedAccountLink();
        //assert the user gets an expected updated email verification success message
        const updatedEmailVerificationSuccessMsg = await editAccountPage.getUpdatedEmailVerificationSuccessMessage();
        assert.strictEqual(updatedEmailVerificationSuccessMsg, "Success\n" + "Your email has been successfully verified.", "The updated email verification success message doesn't match expectations or the email verification has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Edit User Account Data Test Result");
    }

    //invalid edit user account data tests

    //no singular input

    //invalid edit user account data test method - no user first name
    async invalidEditUserAccountNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //don't input user first name into first name input field
        await editAccountPageInvalidSingularInput.inputNoEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - no user first name
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - No User First Name");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        // //wait for elements to load
        // await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
        assert.strictEqual(singularInputErrorMsg, "Please enter your first name.", "The missing first name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - No First Name");
    }

    //invalid edit user account data test method - no user last name
    async invalidEditUserAccountNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //don't input edited user last name into last name input field
        await editAccountPageInvalidSingularInput.inputNoEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - no user last name
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - No User Last Name");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message
        const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
        assert.strictEqual(singularInputErrorMsg, "Please enter your last name.", "The missing last name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - No Last Name");
    }

    //invalid edit user account data test method - no user email
    async invalidEditUserAccountNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //don't input edited user email into email input field
        await editAccountPageInvalidSingularInput.inputNoEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - no user email
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - No User Email");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message
        const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
        assert.strictEqual(singularInputErrorMsg, "Please enter your email.", "The missing email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - No Email");
    }

    //too short singular input

    //invalid edit user account data test method - too short user first name (1 char)
    async invalidEditUserAccountTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Personal Info' link
        await accountDashboardPage.clickAsidePersonalInfoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input too short user first name into first name input field (1 char)
        await editAccountPageInvalidSingularInput.inputTooShortEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - too short user first name
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Too Short User First Name");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "First name must be at least 2 characters long.", "The too short first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short first name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Too Short First Name");
    }

    //invalid edit user account data test method - too short user last name (1 char)
    async invalidEditUserAccountTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Personal Info' link
        await accountDashboardPage.clickAsidePersonalInfoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input too short edited user last name into last name input field (1 char)
        await editAccountPageInvalidSingularInput.inputTooShortEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - too short user last name
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Too Short User Last Name");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "Last name must be at least 2 characters long.", "The too short last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short last name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Too Short Last Name");
    }

    //invalid edit user account data test method - too short user email (1 char -> name, domain)
    async invalidEditUserAccountTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Personal Info' link
        await accountDashboardPage.clickAsidePersonalInfoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input too short edited user email into email input field (1 char -> name, domain)
        await editAccountPageInvalidSingularInput.inputTooShortEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - too short user email
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Too Short User Email");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "Email is too short.", "The too short email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short email input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Too Short Email");
    }

    //too long singular input

    //invalid edit user account data test method - too long user first name (100 chars)
    async invalidEditUserAccountTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Personal Info' link
        await accountDashboardPage.clickAsidePersonalInfoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input too long user first name into first name input field (100 chars)
        await editAccountPageInvalidSingularInput.inputTooLongEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - too long user first name
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Too Long User First Name");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "First name is too long.", "The too long first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long first name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Too Long First Name");
    }

    //invalid edit user account data test method - too long user last name (100 chars)
    async invalidEditUserAccountTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Personal Info' link
        await accountDashboardPage.clickAsidePersonalInfoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid edited user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input too long user last name into last name input field (100 chars)
        await editAccountPageInvalidSingularInput.inputTooLongEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - too long user last name
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Too Long User Last Name");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "Last name is too long.", "The too long last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long last name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Too Long Last Name");
    }

    //invalid edit user account data test method - too long user email (100 chars -> name, domain)
    async invalidEditUserAccountTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Personal Info' link
        await accountDashboardPage.clickAsidePersonalInfoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid edited user first name into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field (100 chars -> name, domain)
        await editAccountPageInvalidSingularInput.inputTooLongEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - too long user email
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Too Long User Email");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "Email is too long.", "The too long email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long email input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Too Long Email");
    }

    //invalid singular input format

    //invalid edit user account data test method - invalid user first name format (special symbols only)
    async invalidEditUserAccountInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input invalid user first name format into first name input field (special symbols only)
        await editAccountPageInvalidSingularInput.inputInvalidEditedFirstNameFormatIntoFirstNameInputField();
        //input valid edited user last name into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - invalid user first name format
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Invalid User First Name Format");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "First name cannot consist of special symbols only.", "The invalid first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid first name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Invalid First Name Format");
    }

    //invalid edit user account data test method - invalid user last name format (special symbols only)
    async invalidEditUserAccountInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid edited user first name format into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input invalid user last name format into last name input field (special symbols only)
        await editAccountPageInvalidSingularInput.inputInvalidEditedLastNameFormatIntoLastNameInputField();
        //input valid edited user email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - invalid user last name format
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Invalid User Last Name Format");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "Last name cannot consist of special symbols only.", "The invalid last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid last name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Invalid Last Name Format");
    }

    //invalid edit user account data test method - invalid user email format (missing '@')
    async invalidEditUserAccountInvalidEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid edited user first name format into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name format into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input invalid edited user email format into email input field (missing '@')
        await editAccountPageInvalidSingularInput.inputInvalidEditedEmailFormatIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - invalid user last name format
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Invalid User Email Format");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "This email is invalid.", "The invalid email input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid email input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Invalid Email Format");
    }

    //invalid edit user account data test method - existing test email
    async invalidEditUserAccountExistingEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click 'Edit' button
        await accountDashboardPage.clickEditButton();
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await this.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page before data input
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display Before Edited Data Input");
        //input valid edited user first name format into first name input field
        await editAccountPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited user last name format into last name input field
        await editAccountPage.inputEditedLastNameIntoLastNameInputField();
        //input existing test email into email input field
        await editAccountPageInvalidSingularInput.inputExistingEditedEmailIntoEmailInputField();
        //click 'Gender' dropdown menu
        await editAccountPage.clickGenderDropdownMenu();
        //select 'Male' gender option
        await editAccountPage.selectMaleGenderOption();
        //capture screenshot of the edit account page after invalid data input - invalid user last name format
        await TestMethods.captureScreenshot(this.driver, "Edit Account Page Display After Invalid Edited Data Input - Existing Test Email");
        //click 'Save changes' button
        await editAccountPage.clickEditSaveChangesButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const singularInputErrorMsg = await editAccountPage.getEditAccountSingularInputError();
            assert.strictEqual(singularInputErrorMsg, "This email is already used.", "The existing email input (as edited data) error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The existing email input (as edited data) error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Edit User Account Data Test Result - Existing Email");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid change password test

    //valid change password test method
    async validChangeUserPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //click 'Change password' button
        await accountDashboardPage.clickChangePasswordButton();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password page text element assert
        await this.isChangePasswordPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input current password into password input field
        await changePasswordPage.inputPasswordIntoCurrentPasswordInputField();
        //input new password into new password input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input matching confirm password into confirm password input field
        await changePasswordPage.inputConfirmNewPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after data input
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display After Valid Data Input");
        //click 'Save changes' button
        await changePasswordPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message (this method shares the same element as success message for address book dashboard page)
        const passwordUpdateSuccessMessage = await addressBookDashboardPage.getAddressBookDashboardPageAddressSuccessMessage();
        assert.strictEqual(passwordUpdateSuccessMessage, "Success\n" + "Your password has been changed successfully!", "The password update success message doesn't match expectations or the password update process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Change User Password Test Result");
    }

    //invalid change password tests

    //no singular input

    //invalid change password test method - no current password
    async invalidChangeUserNoCurrentPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidScenarios = new ChangePasswordPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //click 'Change password' button
        await accountDashboardPage.clickChangePasswordButton();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password page text element assert
        await this.isChangePasswordPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //don't input current password into password input field
        await changePasswordPageInvalidScenarios.inputNoPasswordIntoCurrentPasswordInputField();
        //input new password into new password input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input matching confirm password into confirm password input field
        await changePasswordPage.inputConfirmNewPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - no current password
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - No Current Password");
        //click 'Save changes' button
        await changePasswordPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        const changePasswordSingularInputErrorMsg = await changePasswordPage.getChangePasswordPageSingularInputError();
        assert.strictEqual(changePasswordSingularInputErrorMsg, "Provided password is different than the current one.", "The missing current password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Change User Password Test Result - No Current Password");
    }

    //invalid change password test method - no new/confirm password
    async invalidChangeUserNoNewConfirmPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidScenarios = new ChangePasswordPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //click 'Change password' button
        await accountDashboardPage.clickChangePasswordButton();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password page text element assert
        await this.isChangePasswordPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input current password into password input field
        await changePasswordPage.inputPasswordIntoCurrentPasswordInputField();
        //don't input new password into new password input field
        await changePasswordPageInvalidScenarios.inputNoNewPasswordIntoNewPasswordInputField();
        //don't input matching confirm password into confirm password input field
        await changePasswordPageInvalidScenarios.inputNoConfirmNewPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - no new/confirm password
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - No New and Confirm Password");
        //click 'Save changes' button
        await changePasswordPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        const changePasswordSingularInputErrorMsg = await changePasswordPage.getChangePasswordPageSingularInputError();
        assert.strictEqual(changePasswordSingularInputErrorMsg, "This value should not be blank.", "The missing new / confirm password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Change User Password Test Result - No New and Confirm Password");
    }

    //invalid singular input

    //invalid change password test method - invalid current password
    async invalidChangeUserInvalidCurrentPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidScenarios = new ChangePasswordPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //click 'Change password' button
        await accountDashboardPage.clickChangePasswordButton();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password page text element assert
        await this.isChangePasswordPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input invalid current password into password input field
        await changePasswordPageInvalidScenarios.inputInvalidPasswordIntoCurrentPasswordInputField();
        //input new password into new password input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input matching confirm password into confirm password input field
        await changePasswordPage.inputConfirmNewPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - invalid current password
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - Invalid Current Password");
        //click 'Save changes' button
        await changePasswordPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        const changePasswordSingularInputErrorMsg = await changePasswordPage.getChangePasswordPageSingularInputError();
        assert.strictEqual(changePasswordSingularInputErrorMsg, "Provided password is different than the current one.", "The invalid current password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Change User Password Test Result - No New and Confirm Password");
    }

    //invalid change password test method - mismatching confirm password
    async invalidChangeUserMismatchingConfirmPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidScenarios = new ChangePasswordPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account book dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account book dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account book dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //click 'Change password' button
        await accountDashboardPage.clickChangePasswordButton();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password page text element assert
        await this.isChangePasswordPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input current password into password input field
        await changePasswordPage.inputPasswordIntoCurrentPasswordInputField();
        //input new password into new password input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input mismatching confirm password into confirm password input field
        await changePasswordPageInvalidScenarios.inputMismatchingConfirmNewPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input -  mismatching confirm password
        await TestMethods.captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - Mismatching Confirm Password");
        //click 'Save changes' button
        await changePasswordPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        const changePasswordSingularInputErrorMsg = await changePasswordPage.getChangePasswordPageSingularInputError();
        assert.strictEqual(changePasswordSingularInputErrorMsg, "The entered passwords don't match", "The mismatching confirm password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Change User Password Test Result - Mismatching Confirm Password");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user address addition tests

    //valid user address addition test method
    async validUserAddressAdditionTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Valid Data Input");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        await this.isAddressAdditionSuccessMessageTextAsExpected();
        //log address book dashboard page address data
        await this.logAddressBookDashboardPageData();
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Address Addition Test");
    }

    //valid user second address addition test method
    async validUserSecondAddressAdditionTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed();
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before second address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Second Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Valid Data Input");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        await this.isAddressAdditionSuccessMessageTextAsExpected();
        //log address book dashboard page address data
        await this.logAddressBookDashboardPageData();
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Address Addition Test");
    }

    //user address removal test

    //user address removal test method
    async userRemoveAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //click 'Delete' button
        await addressBookDashboardPage.clickDeleteAddressButton()
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        const addressRemovalSuccessMessage = await addressBookDashboardPage.getAddressBookDashboardPageAddressSuccessMessage();
        assert.strictEqual(addressRemovalSuccessMessage, "Success\n" + "Address has been successfully deleted.", "The address removal success message doesn't match expectations or the address removal has failed.");
        //address dashboard page info box web element assert (to assert address has been removed)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address dashboard page info box text element assert (to assert address has been removed)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected()
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Address Removal Test");
    }

    // invalid user address addition tests

    // no singular input

    //invalid user address addition test method - no user first name
    async invalidUserAddressAdditionNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageNoSingularInput = new AddAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //don't input first name into first name input field
        await addAddressPageNoSingularInput.inputNoFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - no user first name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - No User First Name");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter first name.", "The missing first name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - No First Name");
    }

    //invalid user address addition test method - no user last name
    async invalidUserAddressAdditionNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageNoSingularInput = new AddAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //don't input last name into last name input field
        await addAddressPageNoSingularInput.inputNoLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - no user last name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - No User Last Name");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter last name.", "The missing last name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - No Last Name");
    }

    //invalid user address addition test method - no user address
    async invalidUserAddressAdditionNoAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageNoSingularInput = new AddAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //don't input address into address input field
        await addAddressPageNoSingularInput.inputNoAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - no user address
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - No User Address");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter street.", "The missing address input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - No Address");
    }

    //invalid user address addition test method - no user country
    async invalidUserAddressAdditionNoCountryTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - no user country
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - No User Country");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please select country.", "The missing country input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - No Country");
    }

    //invalid user address addition test method - no user city
    async invalidUserAddressAdditionNoCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageNoSingularInput = new AddAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //don't input city into city input field
        await addAddressPageNoSingularInput.inputNoCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - no user city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - No User City");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter city.", "The missing city input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - No City");
    }

    //invalid user address addition test method - no user post code
    async invalidUserAddressAdditionNoPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageNoSingularInput = new AddAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //don't input post code into post code input field
        await addAddressPageNoSingularInput.inputNoPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - no user post code
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - No User Post Code");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter postcode.", "The missing post code input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - No Post Code");
    }

    // too short singular input

    //invalid user address addition test method - too short user first name (1 char)
    async invalidUserAddressAdditionTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooShortSingularInput = new AddAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input too short first name into first name input field (1 char)
        await addAddressPageTooShortSingularInput.inputTooShortFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too short user first name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Short User First Name");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "First name must be at least 2 characters long.", "The too short first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short first name input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Short First Name");
    }

    //invalid user address addition test method - too short user last name (1 char)
    async invalidUserAddressAdditionTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooShortSingularInput = new AddAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid user first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input too short last name into last name input field (1 char)
        await addAddressPageTooShortSingularInput.inputTooShortLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too short user last name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Short User Last Name");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Last name must be at least 2 characters long.", "The too short last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short last name input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Short Last Name");
    }

    //invalid user address addition test method - too short user address (1 char)
    async invalidUserAddressAdditionTooShortAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooShortSingularInput = new AddAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid user first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid user last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input too short address into address input field (1 char)
        await addAddressPageTooShortSingularInput.inputTooShortAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too short user address
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Short User Address");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Street must be at least 2 characters long.", "The too short address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short address input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Short Address");
    }

    //invalid user address addition test method - too short user city (1 char)
    async invalidUserAddressAdditionTooShortCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooShortSingularInput = new AddAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid user first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid user last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid user address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input too short city into city input field (1 char)
        await addAddressPageTooShortSingularInput.inputTooShortCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too short user city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Short User City");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "City must be at least 2 characters long.", "The too short city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short city input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Short City");
    }

    //invalid user address addition test method - too short user post code (4 digits)
    async invalidUserAddressAdditionTooShortPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooShortSingularInput = new AddAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid user first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid user last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid user address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input too short post code into post code input field (4 digits)
        await addAddressPageTooShortSingularInput.inputTooShortPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too short user post code
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Short Post Code");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Post code is invalid.", "The too short post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short post code input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Short Post Code");
    }

    // too long singular input

    //invalid user address addition test method - too long user first name (100 chars)
    async invalidUserAddressAdditionTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooLongSingularInput = new AddAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input too long first name into first name input field (100 chars)
        await addAddressPageTooLongSingularInput.inputTooLongFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too long user first name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Long User First Name");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "First name is too long.", "The too long first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long first name input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Long First Name");
    }

    //invalid user address addition test method - too long user last name (100 chars)
    async invalidUserAddressAdditionTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooLongSingularInput = new AddAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input too long last name into last name input field (100 chars)
        await addAddressPageTooLongSingularInput.inputTooLongLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too long user last name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Long User Last Name");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Last name is too long.", "The too long last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long last name input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Long Last Name");
    }

    //invalid user address addition test method - too long user address (100 chars)
    async invalidUserAddressAdditionTooLongAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooLongSingularInput = new AddAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input too long address into address input field (100 chars)
        await addAddressPageTooLongSingularInput.inputTooLongAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too long user address
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Long User Address");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Address is too long.", "The too long address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long address input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Long Address");
    }

    //invalid user address addition test method - too long user city (100 chars)
    async invalidUserAddressAdditionTooLongCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooLongSingularInput = new AddAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input too long city into city input field (100 chars)
        await addAddressPageTooLongSingularInput.inputTooLongCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too long user city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Long User City");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "City is too long.", "The too long city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long city input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Long City");
    }

    //invalid user address addition test method - too long user post code (6 digits)
    async invalidUserAddressAdditionTooLongPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageTooLongSingularInput = new AddAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input too long post code into post code input field (6 digits)
        await addAddressPageTooLongSingularInput.inputTooLongPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - too long user city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Too Long User Post Code");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Post code is too long.", "The too long post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long post code input error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Too Long Post Code");
    }

    // invalid singular input format

    //invalid user address addition test method - invalid user first name format (special symbols only)
    async invalidUserAddressAdditionInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageInvalidInputFormat = new AddAddressPageInvalidInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input invalid first name format into first name input field (special symbols only)
        await addAddressPageInvalidInputFormat.inputInvalidFirstNameFormatIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - invalid user first name format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Invalid User First Name Format");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "First name cannot consist of special symbols only.", "The invalid first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid first name input format error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Invalid First Name Format");
    }

    //invalid user address addition test method - invalid user last name format (special symbols only)
    async invalidUserAddressAdditionInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageInvalidInputFormat = new AddAddressPageInvalidInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input invalid last name format into last name input field (special symbols only)
        await addAddressPageInvalidInputFormat.inputInvalidLastNameFormatIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - invalid user last name format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Invalid User Last Name Format");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Last name cannot consist of special symbols only.", "The invalid last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid last name input format error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Invalid Last Name Format");
    }

    //invalid user address addition test method - invalid user address format (special symbols only)
    async invalidUserAddressAdditionInvalidAddressFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageInvalidInputFormat = new AddAddressPageInvalidInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input invalid address format into address input field (special symbols only)
        await addAddressPageInvalidInputFormat.inputInvalidAddressFormatIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - invalid user address format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Invalid User Address Format");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Address cannot consist of special symbols only.", "The invalid address input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid address input format error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Invalid Address Format");
    }

    //invalid user address addition test method - invalid user city format (special symbols only)
    async invalidUserAddressAdditionInvalidCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageInvalidInputFormat = new AddAddressPageInvalidInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input invalid city format into city input field (special symbols only)
        await addAddressPageInvalidInputFormat.inputInvalidCityFormatIntoAddressCityInputField();
        //input valid post code into post code input field
        await addAddressPage.inputPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - invalid user city format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Invalid User City Format");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "City cannot consist of special symbols only.", "The invalid city input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid city input format error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Invalid City Format");
    }

    //invalid user address addition test method - invalid user post code format (special symbols only)
    async invalidUserAddressAdditionInvalidPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const addAddressPageInvalidInputFormat = new AddAddressPageInvalidInputFormat(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (main section elements)
        await accountDashboardPage.isAccountDashboardPageMainSectionWebElementDisplayed();
        //account dashboard page text element assert (main section elements)
        await this.isAccountDashboardPageMainSectionTextElementAsExpected();
        //log account dashboard page data
        await this.logAccountDashboardPageData();
        //capture screenshot of the account dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //address book dashboard page info box web element assert (appears only when the user has no addresses)
        await addressBookDashboardPage.isAddressBookDashboardInfoBoxWebElementDisplayed();
        //address book dashboard page info box text element assert (appears only when the user has no addresses)
        await this.isAddressBookDashboardInfoBoxTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before address addition
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Addition");
        //click 'Add address' button
        await addressBookDashboardPage.clickAddAddressButton();
        //add address page web element assert
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert
        await this.isAddAddressPageTextElementAsExpected();
        //capture screenshot of add address page before data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Data Input");
        //input valid first name into first name input field
        await addAddressPage.inputFirstNameIntoAddressFirstNameInputField();
        //input valid last name into last name input field
        await addAddressPage.inputLastNameIntoAddressLastNameInputField();
        //input valid address into address input field
        await addAddressPage.inputAddressIntoAddressFirstNameInputField();
        //click 'Country' dropdown menu
        await addAddressPage.clickCountryDropdownMenu();
        //select 'United States' option
        await addAddressPage.selectUSCountryOption();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert add address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid city into city input field
        await addAddressPage.inputCityIntoAddressCityInputField();
        //input invalid post code format into post code input field (special symbols only)
        await addAddressPageInvalidInputFormat.inputInvalidPostCodeFormatIntoAddressPostCodeInputField();
        //capture screenshot of add address page after invalid data input - invalid user post code format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Data Input - Invalid User Post Code Format");
        //click 'Add' button
        await addAddressPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await addAddressPage.getAddAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Post code cannot consist of special symbols only.", "The invalid post code input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid post code input format error doesn't get triggered, test has failed")
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Address Addition Test - Invalid Post Code Format");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user address edit test method
    async validUserAddressEditTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after valid edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Valid Edited Data Input");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected address addition success message
        await this.isAddressUpdateSuccessMessageTextAsExpected();
        //log address book dashboard page address data
        await this.logAddressBookDashboardPageData();
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Edit Address Test");
    }

    //invalid edit user address tests

    //no singular input

    //invalid user address edit test method - no user edited first name
    async invalidUserAddressEditNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageNoSingularInput = new EditAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //don't input edited first name into first name input field
        await editAddressPageNoSingularInput.inputNoEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - no user edited first name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - No Edited First Name");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter first name.", "The missing first name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - No Edited First Name");
    }

    //invalid user address edit test method - no user edited last name
    async invalidUserAddressEditNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageNoSingularInput = new EditAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //don't input edited last name into last name input field
        await editAddressPageNoSingularInput.inputNoEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - no user edited last name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - No Edited Last Name");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter last name.", "The missing last name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - No Edited Last Name");
    }

    //invalid user address edit test method - no user edited address
    async invalidUserAddressEditNoAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageNoSingularInput = new EditAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //don't input edited address into address input field
        await editAddressPageNoSingularInput.inputNoEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - no user edited address
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - No Edited Address");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter street.", "The missing address input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - No Edited Address");
    }

    //invalid user address edit test method - no user country
    async invalidUserAddressEditNoCountryTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageNoSingularInput = new EditAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //click 'Country' dropdown menu
        await editAddressPageNoSingularInput.clickCountryDropdownMenu();
        //select 'Select' country option (default)
        await editAddressPageNoSingularInput.selectCountryOption();
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - no user edited country
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - No Edited Country");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please select country.", "The missing country input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - No Edited Country");
    }

    //invalid user address edit test method - no user edited city
    async invalidUserAddressEditNoCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageNoSingularInput = new EditAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //don't input edited city into city input field
        await editAddressPageNoSingularInput.inputNoEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - no user edited city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - No Edited City");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter city.", "The missing city input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - No Edited City");
    }

    //invalid user address edit test method - no user edited post code
    async invalidUserAddressEditNoPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageNoSingularInput = new EditAddressPageNoSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //don't input edited post code into post code input field
        await editAddressPageNoSingularInput.inputNoEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - no user edited post code
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - No Edited Post Code");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
        assert.strictEqual(addressSingularInputErrorMsg, "Please enter postcode.", "The missing post code input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - No Edited Post Code");
    }

    //too short singular input

    //invalid user address edit test method - too short user edited first name (1 char)
    async invalidUserAddressEditTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooShortSingularInput = new EditAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input too short edited first name into first name input field (1 char)
        await editAddressPageTooShortSingularInput.inputTooShortEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too short user edited first name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Short Edited First Name");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "First name must be at least 2 characters long.", "The too short first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short first name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Short Edited First Name");
    }

    //invalid user address edit test method - too short user edited last name (1 char)
    async invalidUserAddressEditTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooShortSingularInput = new EditAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input too short edited last name into last name input field (1 char)
        await editAddressPageTooShortSingularInput.inputTooShortEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too short user edited last name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Short Edited Last Name");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Last name must be at least 2 characters long.", "The too short last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short last name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Short Edited Last Name");
    }

    //invalid user address edit test method - too short user edited address (1 char)
    async invalidUserAddressEditTooShortAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooShortSingularInput = new EditAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input too short edited address into address input field (1 char)
        await editAddressPageTooShortSingularInput.inputTooShortEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too short user edited address
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Short Edited Address");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Street must be at least 2 characters long.", "The too short address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short address input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Short Edited Address");
    }

    //invalid user address edit test method - too short user edited city (1 char)
    async invalidUserAddressEditTooShortCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooShortSingularInput = new EditAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input too short edited city into city input field (1 char)
        await editAddressPageTooShortSingularInput.inputTooShortEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too short user edited city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Short Edited City");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "City must be at least 2 characters long.", "The too short city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short city input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Short Edited City");
    }

    //invalid user address edit test method - too short user edited post code (4 digits)
    async invalidUserAddressEditTooShortPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooShortSingularInput = new EditAddressPageTooShortSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input too short edited post code into post code input field (4 digits)
        await editAddressPageTooShortSingularInput.inputTooShortEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too short user edited post code
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Short Edited Post Code");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Post code is too short.", "The too short post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short post code input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Short Edited Post Code");
    }

    //too long singular input

    //invalid user address edit test method - too long user edited first name (100 chars)
    async invalidUserAddressEditTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooLongSingularInput = new EditAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input too long edited first name into first name input field (100 chars)
        await editAddressPageTooLongSingularInput.inputTooLongEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too long user edited first name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Long Edited First Name");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "First name is too long.", "The too long first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long first name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Long Edited First Name");
    }

    //invalid user address edit test method - too long user edited last name (100 chars)
    async invalidUserAddressEditTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooLongSingularInput = new EditAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input too long edited last name into last name input field (100 chars)
        await editAddressPageTooLongSingularInput.inputTooLongEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too long user edited last name
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Long Edited Last Name");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Last name is too long.", "The too long last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long last name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Long Edited Last Name");
    }

    //invalid user address edit test method - too long user edited address (100 chars)
    async invalidUserAddressEditTooLongAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooLongSingularInput = new EditAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input too long edited address into address input field (100 chars)
        await editAddressPageTooLongSingularInput.inputTooLongEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too long user edited address
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Long Edited Address");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Address is too long.", "The too long address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long address input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Long Edited Address");
    }

    //invalid user address edit test method - too long user edited city (100 chars)
    async invalidUserAddressEditTooLongCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooLongSingularInput = new EditAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input too long edited city into city input field (100 chars)
        await editAddressPageTooLongSingularInput.inputTooLongEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too long user edited city
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Long Edited City");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "City is too long.", "The too long city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long city input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Long Edited City");
    }

    //invalid user address edit test method - too long user edited post code (6 digits)
    async invalidUserAddressEditTooLongPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageTooLongSingularInput = new EditAddressPageTooLongSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input too long edited post code into post code input field (6 digits)
        await editAddressPageTooLongSingularInput.inputTooLongEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - too long user edited post code
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Too Long Edited Post Code");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Post code is too long.", "The too long post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long post code input error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Too Long Edited Post Code");
    }

    //invalid singular input format

    //invalid user address edit test method - invalid user edited first name format (special symbols only)
    async invalidUserAddressEditInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageInvalidSingularInput = new EditAddressPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input invalid edited first name format into first name input field (special symbols only)
        await editAddressPageInvalidSingularInput.inputInvalidEditedFirstNameFormatIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - invalid user edited first name format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Invalid Edited First Name Format");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "First name cannot consist of special symbols only.", "The invalid first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid first name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Invalid Edited First Name Format");
    }

    //invalid user address edit test method - invalid user edited last name format (special symbols only)
    async invalidUserAddressEditInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageInvalidSingularInput = new EditAddressPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input invalid edited last name format into last name input field (special symbols only)
        await editAddressPageInvalidSingularInput.inputInvalidEditedLastNameFormatIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - invalid user edited last name format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Invalid Edited Last Name Format");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Last name cannot consist of special symbols only.", "The invalid last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid last name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Invalid Edited Last Name Format");
    }

    //invalid user address edit test method - invalid user edited address format (special symbols only)
    async invalidUserAddressEditInvalidAddressFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageInvalidSingularInput = new EditAddressPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input invalid edited address format into address input field (special symbols only)
        await editAddressPageInvalidSingularInput.inputInvalidEditedAddressFormatIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - invalid user edited address format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Invalid Edited Address Format");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Address cannot consist of special symbols only.", "The invalid address input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid address input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Invalid Edited Address Format");
    }

    //invalid user address edit test method - invalid user edited city format (special symbols only)
    async invalidUserAddressEditInvalidCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageInvalidSingularInput = new EditAddressPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input invalid edited city format into city input field (special symbols only)
        await editAddressPageInvalidSingularInput.inputInvalidEditedCityFormatIntoAddressCityInputField();
        //input valid edited post code into post code input field
        await editAddressPage.inputEditedPostCodeIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - invalid user edited city format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Invalid Edited City Format");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "City cannot consist of special symbols only.", "The invalid city input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid city input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Invalid Edited City Format");
    }

    //invalid user address edit test method - invalid user edited post code format (special symbols only)
    async invalidUserAddressEditInvalidPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        const addAddressPage = new AddAddressPage(this.driver);
        const editAddressPage = new EditAddressPage(this.driver);
        const editAddressPageInvalidSingularInput = new EditAddressPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //account book dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //click aside 'Address Book' link
        await accountDashboardPage.clickAsideAddressBookLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //address book dashboard page web element assert
        await addressBookDashboardPage.isAddressBookDashboardPageWebElementDisplayed();
        //address book dashboard page text element assert
        await this.isAddressBookDashboardPageTextElementAsExpected();
        //capture screenshot of the address book dashboard page display before editing user address
        await TestMethods.captureScreenshot(this.driver, "Address Dashboard Page Display Before User Address Edit");
        //click 'Edit address' button
        await addressBookDashboardPage.clickEditAddressButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add address page web element assert (edit address page has the same elements)
        await addAddressPage.isAddAddressPageWebElementDisplayed();
        //add address page text element assert (edit address page has the same elements)
        await this.isAddAddressPageTextElementAsExpected();
        //assert edit address page subtitle is as expected
        const editAddressPageSubtitle = await editAddressPage.getEditAddressPageSubtitle();
        assert.strictEqual(editAddressPageSubtitle, "Edit my address", "The edit address page subtitle doesn't match expectations.");
        //capture screenshot of add address page before edited data input
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await editAddressPage.inputEditedFirstNameIntoAddressFirstNameInputField();
        //input valid edited last name into last name input field
        await editAddressPage.inputEditedLastNameIntoAddressLastNameInputField();
        //input valid edited address into address input field
        await editAddressPage.inputEditedAddressIntoAddressFirstNameInputField();
        //assert edit address page province subtext is as expected
        const addAddressBookPageProvinceSubtext = await addAddressPage.getAddAddressPageProvinceSubtext();
        assert.strictEqual(addAddressBookPageProvinceSubtext, "Province", "The add address page province subtext doesn't match expectations.");
        //input valid edited city into city input field
        await editAddressPage.inputEditedCityIntoAddressCityInputField();
        //input invalid edited post code format into post code input field (special symbols only)
        await editAddressPageInvalidSingularInput.inputInvalidEditedPostCodeFormatIntoAddressPostCodeInputField();
        //input phone into phone input field (this method is added to prevent Selenium from skipping edited post code addition)
        await editAddressPage.inputEditedPhoneIntoAddressPhoneInputField();
        //capture screenshot of add address page after invalid edited data input - invalid user edited post code format
        await TestMethods.captureScreenshot(this.driver, "Add Address Page Display After Invalid Edited Data Input - Invalid Edited Post Code Format");
        //click 'Save changes' button
        await editAddressPage.clickSaveChangesButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const addressSingularInputErrorMsg = await editAddressPage.getEditAddressPageSingularInputError();
            assert.strictEqual(addressSingularInputErrorMsg, "Post code cannot consist of special symbols only.", "The invalid post code input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid post code input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Edit Address Test - Invalid Edited Post Code Format");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single latest deals product / products addition test (as a guest) (during automation run the product list is different from the one displayed during manual test)

    //single latest deals product addition to cart test method (as a guest)
    async singleLatestDealsProductAdditionToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest deals product link (due to dynamic page elements, products vary)
        await homePage.clickLatestDealsProductNameLink(3);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The product addition to cart success message doesn't match expectations or the product addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Latest Deals Product Addition To Cart Test Result (as a guest)");
    }

    //multiple latest deals product addition to cart test method (as a guest)
    async multipleLatestDealsProductsAdditionToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest deals product link (due to dynamic page elements, products vary)
        await homePage.clickLatestDealsProductNameLink(2);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display before product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (as a guest)");
        //input product quantity
        await singleProductPage.inputProductQuantity();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the single product page display after product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display After Product Quantity Input (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The products addition to cart success message doesn't match expectations or the products addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Latest Deals Products Addition To Cart Test Result (as a guest)");
    }

    //single latest deals product / products addition test (as a registered user) (during automation run the product list is different from the one displayed during manual test)

    //single latest deals product addition to cart test method (as a registered user)
    async singleLatestDealsProductAdditionToCartRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click homepage logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest deals product link (due to dynamic page elements, products vary)
        await homePage.clickLatestDealsProductNameLink(3);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (registered user)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The product addition to cart success message doesn't match expectations or the product addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Latest Deals Product Addition To Cart Test Result (registered user)");
    }

    //multiple latest deals product addition to cart test method (as a registered user)
    async multipleLatestDealsProductsAdditionToCartRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click homepage logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest deals product link (due to dynamic page elements, products vary)
        await homePage.clickLatestDealsProductNameLink(1);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display before product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (registered user)");
        //input product quantity
        await singleProductPage.inputProductQuantity();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the single product page display after product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display After Product Quantity Input (registered user)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The products addition to cart success message doesn't match expectations or the products addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Latest Deals Products Addition To Cart Test Result (regustered user)");
    }

    //single latest product / products addition test (as a guest) (during automation run the product list is different from the one displayed during manual test)

    //single latest product ("Adventurous Aurora Cap") addition to cart test method (as a guest)
    async singleLatestProductAdditionToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest product ("Adventurous Aurora Cap") link (due to dynamic page elements, products vary)
        await homePage.clickLatestProductNameLink(1);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page reviews info box text element assert (when the reviews aren't submitted)
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The product addition to cart success message doesn't match expectations or the product addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Latest Deals Product Addition To Cart Test Result (as a guest)");
    }

    //multiple latest product ("Adventurous Aurora Cap")  addition to cart test method (as a guest)
    async multipleLatestProductsAdditionToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest product link (due to dynamic page elements, products vary)
        await homePage.clickLatestProductNameLink(1);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display before product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (as a guest)");
        //input product quantity
        await singleProductPage.inputProductQuantity();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the single product page display after product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display After Product Quantity Input (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The products addition to cart success message doesn't match expectations or the products addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Latest Deals Products Addition To Cart Test Result (as a guest)");
    }

    //single latest product / products addition test (as a registered user) (during automation run the product list is different from the one displayed during manual test)

    //single latest product addition to cart test method (as a registered user)
    async singleLatestProductAdditionToCartRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click homepage logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest product link (due to dynamic page elements, products vary)
        await homePage.clickLatestProductNameLink(4);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (registered user)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The product addition to cart success message doesn't match expectations or the product addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Latest Deals Product Addition To Cart Test Result (registered user)");
    }

    //multiple latest product addition to cart test method (as a registered user)
    async multipleLatestProductsAdditionToCartRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click homepage logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest product link (due to dynamic page elements, products vary)
        await homePage.clickLatestProductNameLink(5);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display before product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (registered user)");
        //input product quantity
        await singleProductPage.inputProductQuantity();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the single product page display after product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display After Product Quantity Input (registered user)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected success message
        const productAdditionSuccessMsg = await singleProductPage.getProductAdditionToCartSuccessMsg();
        assert.strictEqual(productAdditionSuccessMsg, "Success\n" + "Item has been added to cart", "The products addition to cart success message doesn't match expectations or the products addition to cart has failed.")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Latest Deals Products Addition To Cart Test Result (registered user)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single category dashboard page tests (as a guest)

    //single category dashboard page test method (as a guest)
    async singleCategoryDashboardPageProductSortTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click header navbar 'Dresses' link
        await generalPage.clickHeaderNavDressesLink();
        //capture screenshot of the single category dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Display (guest)");
        //single category dashboard page web element assert
        await singleCategoryDashboardPage.isSingleCategoryDashboardPagePageWebElementDisplayed();
        //dress category dashboard page text element assert
        await this.isDressCategoryDashboardPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click 'Show' dropdown menu
        await singleCategoryDashboardPage.clickShowDropdownButton();
        //click set show count option
        await singleCategoryDashboardPage.clickShow27Option();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //log single category dashboard page data (to verify the count has increased)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set show option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Show 27 Products Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Name A-Z' option
        await singleCategoryDashboardPage.clickSortByNameAZOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Name A to Z Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Name Z-A' option
        await singleCategoryDashboardPage.clickSortByNameZAOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Name Z to A Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Newest' option
        await singleCategoryDashboardPage.clickSortByNewestOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Newest Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Oldest' option
        await singleCategoryDashboardPage.clickSortByOldestOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Oldest Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Cheapest' option
        await singleCategoryDashboardPage.clickSortByCheapestOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Cheapest Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Expensive' option
        await singleCategoryDashboardPage.clickSortByExpensiveOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Expensive Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Position' (default) option
        await singleCategoryDashboardPage.clickSortByPositionOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Test Result");
    }

    //add single product ("Boho Beach Breeze") to cart test method
    async addSetSingleCategoryBohoProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Boho Beach Breeze") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(1)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert (now it has a review when beforehand there wasn't)
        //await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Boho Beach Breeze") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Boho Product) Page Display (as a guest)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //capture screenshot of the single product ("Boho Beach Breeze") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product Page (Single Boho Products) Display After Parameters Selection (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Category Multiple Products (Multiple Boho Products) Addition To Cart Test Result (as a guest)");
    }

    //add multiple products ("Boho Beach Breeze") to cart test method
    async addSetSingleCategoryMultipleBohoProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Boho Beach Breeze") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(1)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert (now it has a review when beforehand there wasn't)
        //await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the multiple products ("Boho Beach Breeze") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Multiple Boho Product) Page Display (as a guest)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //input set product quantity
        await singleProductPage.inputProductQuantity()
        //capture screenshot of the single product ("Boho Beach Breeze") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product Page (Multiple Boho Products) Display After Parameters Selection (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Category Multiple Products (Multiple Boho Products) Addition To Cart Test Result (as a guest)");
    }

    //single category dashboard page tests (as a registered user)

    //single category dashboard page test method (as a registered user)
    async singleCategoryDashboardPageProductSortRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click header home page logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click header navbar 'Dresses' link
        await generalPage.clickHeaderNavDressesLink();
        //capture screenshot of the single category dashboard page display
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Display (guest)");
        //single category dashboard page web element assert
        await singleCategoryDashboardPage.isSingleCategoryDashboardPagePageWebElementDisplayed();
        //dress category dashboard page text element assert
        await this.isDressCategoryDashboardPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click 'Show' dropdown menu
        await singleCategoryDashboardPage.clickShowDropdownButton();
        //click set show count option
        await singleCategoryDashboardPage.clickShow27Option();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //log single category dashboard page data (to verify the count has increased)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set show option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Show 27 Products Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Name A-Z' option
        await singleCategoryDashboardPage.clickSortByNameAZOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Name A to Z Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Name Z-A' option
        await singleCategoryDashboardPage.clickSortByNameZAOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Name Z to A Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Newest' option
        await singleCategoryDashboardPage.clickSortByNewestOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Newest Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Oldest' option
        await singleCategoryDashboardPage.clickSortByOldestOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Oldest Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Cheapest' option
        await singleCategoryDashboardPage.clickSortByCheapestOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Cheapest Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Expensive' option
        await singleCategoryDashboardPage.clickSortByExpensiveOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Expensive Display");
        //click 'Sort by' dropdown menu
        await singleCategoryDashboardPage.clickSortByDropdownButton();
        //click sort by 'Position' (default) option
        await singleCategoryDashboardPage.clickSortByPositionOption();
        //log single category dashboard page data (to verify the products have been sorted)
        await this.logSingleCategoryDashboardPageData();
        //capture screenshot of the single category dashboard page (set sort by option selected)
        await TestMethods.captureScreenshot(this.driver, "Single Category Dashboard Page Sort By Test Result");
    }

    //add single product ("Evening Star Gown") to cart test method
    async addSetSingleCategoryGownProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Evening Star Gown") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(4)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Evening Star Gown") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Gown Product) Page Display (as a guest)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //capture screenshot of the single product ("Evening Star Gown") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Gown Product) Page Display After Parameters Selection (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Category Single Product (Single Gown Product) Addition To Cart Test Result (as a guest)");
    }

    //add multiple products ("Evening Star Gown") to cart test method
    async addSetSingleCategoryMultipleGownProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Evening Star Gown") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(4)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Evening Star Gown") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Gown Product) Page Display (as a guest)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //input set product quantity
        await singleProductPage.inputProductQuantity()
        //capture screenshot of the single product ("Evening Star Gown") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product Page (Multiple Gown Products) Display After Parameters Selection (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Category Multiple Products Addition To Cart Test Result (as a guest)");
    }

    //single category dashboard page searched product / products addition to cart tests

    //add a single searched product ("Classic Summer Elegance") to cart test method
    async addSingleEleganceProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //input "Classic Summer Elegance" into search input field
        await singleCategoryDashboardPage.inputClassicSummerIntoSearchInputField();
        //click 'Search' button
        await singleCategoryDashboardPage.clickSearchButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //log single category dashboard page data (to verify set product is displayed)
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Classic Summer Elegance") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert (no reviews were beforehand, now there is one)
        //await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Classic Summer Elegance") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Elegance Product) Page Display (as a guest)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //capture screenshot of the single product ("Classic Summer Elegance") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Set Searched (Single Elegance Product) Page Display After Parameters Selection (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Set Searched Single Product (Single Elegance Product) Addition To Cart Test Result (as a guest)");
    }

    //add multiple searched products ("Classic Summer Elegance") to cart test method
    async addMultipleEleganceProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //input "Classic Summer Elegance" into search input field
        await singleCategoryDashboardPage.inputClassicSummerIntoSearchInputField();
        //click 'Search' button
        await singleCategoryDashboardPage.clickSearchButton();
        //log single category dashboard page data (to verify set product is displayed)
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Classic Summer Elegance") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert (no reviews were beforehand, now there is one)
        //await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Classic Summer Elegance") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Elegance Product) Page Display (as a guest)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //input set product quantity
        await singleProductPage.inputProductQuantity()
        //capture screenshot of the multiple products ("Classic Summer Elegance") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Set Searched (Multiple Elegance Products) Page Display After Parameters Selection (as a guest)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Set Searched Multiple Products (Multiple Elegance Products) Addition To Cart Test Result (as a guest)");
    }

    //single category dashboard page searched product / products addition to cart tests (as a registered user)

    //add a single searched product ("Classic Summer Elegance") to cart test method (as a registered user)
    async addSingleStrollProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //input "Seaside Stroll Midi" into search input field
        await singleCategoryDashboardPage.inputSeasideStrollIntoSearchInputField();
        //click 'Search' button
        await singleCategoryDashboardPage.clickSearchButton();
        //log single category dashboard page data (to verify set product is displayed)
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Classic Summer Elegance") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Seaside Stroll Midi") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Stroll Product) Page Display (as a registered user)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //capture screenshot of the single product ("Seaside Stroll Midi") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Set Searched (Single Stroll Product) Page Display After Parameters Selection (as a registered user)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Set Searched Single Product (Single Stroll Product) Addition To Cart Test Result (as a registered user)");
    }

    //add multiple searched products ("Seaside Stroll Midi") to cart test method (as a registered user)
    async addMultipleStrollProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //input "Seaside Stroll Midi" into search input field
        await singleCategoryDashboardPage.inputSeasideStrollIntoSearchInputField();
        //click 'Search' button
        await singleCategoryDashboardPage.clickSearchButton();
        //log single category dashboard page data (to verify set product is displayed)
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Seaside Stroll Midi") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product ("Seaside Stroll Midi") page display before parameters selection
        await TestMethods.captureScreenshot(this.driver, "Single Product (Single Stroll Product) Page Display (as a registered user)");
        //click size dropdown menu
        await singleProductPage.clickSizeDropdownButton();
        //select 'L' size option
        await singleProductPage.selectLSizeOption();
        //click height dropdown menu
        await singleProductPage.clickHeightDropdownButton();
        //select 'Regular' height option
        await singleProductPage.selectRegularHeightOption();
        //input set product quantity
        await singleProductPage.inputProductQuantity()
        //capture screenshot of the multiple products ("Seaside Stroll Midi") page display after parameters selection
        await TestMethods.captureScreenshot(this.driver, "Set Searched (Multiple Stroll Products) Page Display After Parameters Selection (as a registered user)");
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Set Searched Multiple Products (Multiple Stroll Products) Addition To Cart Test Result (as a registered user)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid product review addition tests

    //valid product ("Sunshine Strappy Delight") review addition test method (as a guest)
    async validSunshineProductReviewAdditionTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addReviewWaitMessage = await addReviewPage.getAddReviewApprovalWaitMessage();
        assert.strictEqual(addReviewWaitMessage, "Success\n" + "Your review is waiting for the acceptation.", "The review addition wait for approval message doesn't match expectations or the review addition process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Review Addition Test Result (as a guest)");
    }

    //valid product ("Sunshine Strappy Delight") review addition test method (as a registered user)
    async validSunshineProductReviewAdditionRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addReviewWaitMessage = await addReviewPage.getAddReviewApprovalWaitMessage();
        assert.strictEqual(addReviewWaitMessage, "Success\n" + "Your review is waiting for the acceptation.", "The review addition wait for approval message doesn't match expectations or the review addition process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Review Addition Test Result (as a registered user)");
    }

    //invalid product review addition tests (only guest branch is being tested to avoid redundancy, registered user will have the same output)

    //no singular input

    //invalid product ("Sunshine Strappy Delight") review addition test method - no rating input (as a guest)
    async invalidSunshineProductReviewAdditionNoRatingTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
        assert.strictEqual(addReviewSingularInputErrorMessage, "You must check review rating.", "The missing rating input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - No Rating Input (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - no comment title input (as a guest)
    async invalidSunshineProductReviewAdditionNoCommentTitleTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //don't input comment title into comment title input field
        await addReviewPageInvalidSingularInput.inputNoProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
        assert.strictEqual(addReviewSingularInputErrorMessage, "Review title should not be blank.", "The missing comment title input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - No Comment Title Input (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - no comment input (as a guest)
    async invalidSunshineProductReviewAdditionNoCommentTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //don't input comment into comment textarea
        await addReviewPageInvalidSingularInput.inputNoProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
        assert.strictEqual(addReviewSingularInputErrorMessage, "Review comment should not be blank.", "The missing comment input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - No Comment Input (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - no email input (as a guest)
    async invalidSunshineProductReviewAdditionNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //don't input guest email into email input field
        await addReviewPageInvalidSingularInput.inputNoGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
        assert.strictEqual(addReviewSingularInputErrorMessage, "Please enter your email.", "The missing email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - No Email Input (as a guest)");
    }

    //too short singular input

    //invalid product ("Sunshine Strappy Delight") review addition test method - too short comment title input (as a guest) (1 char)
    async invalidSunshineProductReviewAdditionTooShortCommentTitleTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input too short comment title into comment title input field
        await addReviewPageInvalidSingularInput.inputTooShortProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message, log the message otherwise
        try {
            const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
            assert.strictEqual(addReviewSingularInputErrorMessage, "Review title is too short.", "The too short comment title input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short review comment title input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - Too Short Comment Title (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - too short comment input (as a guest) (1 char)
    async invalidSunshineProductReviewAdditionTooShortCommentTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input too short comment into comment textarea
        await addReviewPageInvalidSingularInput.inputTooShortProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message, log the message otherwise
        try {
            const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
            assert.strictEqual(addReviewSingularInputErrorMessage, "Comment is too short.", "The too short comment input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short review comment input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - Too Short Comment (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - too short email input (as a guest) (1 char -> name, domain)
    async invalidSunshineProductReviewAdditionTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input too short guest email into email input field
        await addReviewPageInvalidSingularInput.inputTooShortGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message, log the message otherwise
        try {
            const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
            assert.strictEqual(addReviewSingularInputErrorMessage, "Email is too short.", "The too short email input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short review email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - Too Short Email (as a guest)");
    }

    //too long singular input

    //invalid product ("Sunshine Strappy Delight") review addition test method - too long comment title input (as a guest) (256 chars)
    async invalidSunshineProductReviewAdditionTooLongCommentTitleTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input too long comment title into comment title input field (256 chars)
        await addReviewPageInvalidSingularInput.inputTooLongProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message, log the message otherwise
        try {
            const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
            assert.strictEqual(addReviewSingularInputErrorMessage, "Review title must have at most 255 characters.", "The too long review comment title input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long review comment title input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - Too Long Comment Title (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - too long comment input (as a guest) (10001 chars)
    async invalidSunshineProductReviewAdditionTooLongCommentTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input too long comment into comment textarea
        await addReviewPageInvalidSingularInput.inputTooLongProductCommentIntoCommentTextarea();
        //input valid guest email into email input field
        await addReviewPage.inputValidGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message, log the message otherwise
        try {
            const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
            assert.strictEqual(addReviewSingularInputErrorMessage, "Review comment is too long.", "The too long review comment input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long review comment input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - Too Long Comment (as a guest)");
    }

    //invalid product ("Sunshine Strappy Delight") review addition test method - too long email input (as a guest) (100 chars -> name, domain)
    async invalidSunshineProductReviewAdditionTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        const addReviewPageInvalidSingularInput = new AddReviewPageInvalidSingularInput(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //single category dashboard page text element assert
        await this.isSingleCategoryDashboardPageTextElementAsExpected();
        //log single category dashboard page data
        await this.logSingleCategoryDashboardPageData();
        //click set single category product ("Sunshine Strappy Delight") link
        await singleCategoryDashboardPage.clickSetSingleCategoryProductLink(0)
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //single product page additional dress dropdown text element assert
        await this.isSingleProductPageAdditionalDressDropdownTextElementAsExpected();
        //single product page reviews info box text element assert
        await this.isSingleProductPageReviewsInfoBoxTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //assert the product review count is as expected
        const sunshineProductReviewCount = await singleProductPage.getSingleProductPageReviewCount();
        assert.strictEqual(sunshineProductReviewCount, "0 reviews", "The product (Sunshine Strappy Delight) count doesn't match expectations.");
        //capture screenshot of the single product ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Single Product (Sunshine Strappy Delight) Page Display (as a guest)");
        //click 'Add review' link
        await singleProductPage.clickAddReviewLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //add review page web element assert
        await addReviewPage.isAddReviewPagePageWebElementDisplayed();
        //add review page text element assert
        await this.isAddReviewPageTextElementAsExpected();
        //log add review product page data
        await this.logAddReviewPageProductData();
        //capture screenshot of the add review ("Sunshine Strappy Delight") page display
        await TestMethods.captureScreenshot(this.driver, "Add Review (Sunshine Strappy Delight) Page Display (as a guest)");
        //click set review stars
        await addReviewPage.clickSetReviewStars(3);
        //input valid comment title into comment title input field
        await addReviewPage.inputValidProductCommentTitleIntoTitleInputField();
        //input valid comment into comment textarea
        await addReviewPage.inputValidProductCommentIntoCommentTextarea();
        //input too long guest email into email input field (100 chars -> name, domain)
        await addReviewPageInvalidSingularInput.inputTooLongGuestEmailIntoEmailInputField();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Add' review button
        await addReviewPage.clickAddButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message, log the message otherwise
        try {
            const addReviewSingularInputErrorMessage = await addReviewPageInvalidSingularInput.getAddReviewPageSingularInputErrorMsg();
            assert.strictEqual(addReviewSingularInputErrorMessage, "This email is invalid.", "The too long email input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long review email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Review Addition Test Result - Too Long Email (as a guest)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single latest deals product addition to wishlist test

    //single latest deals product addition to wishlist test method (as a guest)
    async addSingleLatestDealsProductToWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest deals product add to wishlist button
        await homePage.clickLatestDealsAddToWishlistLink(2);
        //click header wishlist page button
        await generalPage.clickHeaderWishlistPageButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //log wishlist page displayed data
        await this.logWishlistPageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Single Latest Deals Product To Wishlist Test Result (as a guest)");
    }

    //single latest deals product addition to wishlist test method (as a registered user)
    async addSingleLatestDealsProductToWishlistRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click header home page logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest deals product add to wishlist button
        await homePage.clickLatestDealsAddToWishlistLink(0);
        //click header wishlist page button
        await generalPage.clickHeaderWishlistPageButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //log wishlist page displayed data
        await this.logWishlistPageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Single Latest Deals Product To Wishlist Test Result (as a registered user)");
    }

    //multiple latest products addition to wishlist tests

    //multiple latest products addition to wishlist test method (as a guest)
    async addMultipleLatestProductsToWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //info box web element assert
        await generalPage.isInfoBoxWebElementDisplayed();
        //info box text element assert
        await this.isGeneralPageInfoBoxTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //click 'Close' info box button
        await generalPage.clickCloseSyliusInfoBox();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest product link (due to dynamic page elements, products vary)
        await homePage.clickLatestProductNameLink(4);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display before product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (as a guest)");
        //input product quantity
        await singleProductPage.inputProductQuantity();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the single product page display after product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display After Product Quantity Input (as a guest)");
        //click 'Add to wishlist' button
        await singleProductPage.clickAddToWishlistButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //log wishlist page displayed data
        await this.logWishlistPageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Multiple Latest Products To Wishlist Test Result (as a guest)");
    }

    //multiple latest products addition to wishlist test method (as a registered user)
    async addMultipleLatestProductsToWishlistRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click homepage logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePagePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log home page product cards data
        await this.logHomePageProductCardsData();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click set latest product link (due to dynamic page elements, products vary)
        await homePage.clickLatestProductNameLink(3);
        //click 'Attributes' dropdown button (for attributes viewing)
        await singleProductPage.clickAttributesDropdownButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //click 'Reviews' dropdown button (for reviews viewing)
        await singleProductPage.clickReviewsDropdownButton();
        //single product page web element assert
        await singleProductPage.isSingleProductPagePageWebElementDisplayed();
        //single product page text element assert (elements all pages share)
        await this.isSingleProductPageSharedTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //capture screenshot of the single product page display before product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display (registered user)");
        //input product quantity
        await singleProductPage.inputProductQuantity();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //capture screenshot of the single product page display after product quantity input
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display After Product Quantity Input (registered user)");
        //click 'Add to wishlist' button
        await singleProductPage.clickAddToWishlistButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //log wishlist page displayed data
        await this.logWishlistPageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Multiple Latest Deals Products To Wishlist Test Result (as a registered user)");
    }

    //add product from wishlist to cart tests (both guest and registered user share the same method)

    //add product from wishlist to cart test method (add all wishlist items to cart method)
    async addProductFromWishlistToCartAllWishItemsTest(){
        const generalPage = new GeneralPage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //capture screenshot of the wishlist page display
        await TestMethods.captureScreenshot(this.driver, "Wishlist Page Display");
        //click 'Add all wishlist items to cart' button
        await wishlistPage.clickAddWishlistItemsToCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addToCartFromWishlistSuccessMessage = await addReviewPage.getAddReviewApprovalWaitMessage(); //the element is the same as in add review page
        assert.strictEqual(addToCartFromWishlistSuccessMessage, "Success\n" + "Wishlist items have been added to your cart.", "The product addition from wishlist to cart message doesn't match expectations or the product addition from wishlist to cart process has failed.");
        //click header shopping cart button
        await generalPage.clickHeaderShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //header shopping cart modal web element assert
        await generalPage.isHeaderShoppingCartModalWebElementDisplayed();
        //header shopping cart modal text element assert
        await this.isHeaderShoppingCartModalTextElementAsExpected();
        //capture screenshot of the header shopping cart modal display
        await TestMethods.captureScreenshot(this.driver, "Header Shopping Cart Modal Display");
        //log header shopping cart modal product data
        await this.logHeaderShoppingCartModalProductData();
        //click 'View and edit cart' button
        await generalPage.clickHeaderShopCartModalViewEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Product From Wishlist To Cart Test Result (All Items To Cart Button)");
    }

    //add product from wishlist to cart test method (add all wishlist items with bulk actions dropdown menu)
    async addProductFromWishlistToCartBulkActionsTest(){
        const generalPage = new GeneralPage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //capture screenshot of the wishlist page display
        await TestMethods.captureScreenshot(this.driver, "Wishlist Page Display");
        //click item checkbox
        await wishlistPage.clickAllItemsCheckbox();
        //click 'Bulk actions' dropdown menu
        await wishlistPage.clickBulkActionsDropdownMenu();
        //click 'Add to cart' bulk actions menu button
        await wishlistPage.clickAddToCartBulkButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const addToCartFromWishlistSuccessMessage = await addReviewPage.getAddReviewApprovalWaitMessage(); //the element is the same as in add review page
        assert.strictEqual(addToCartFromWishlistSuccessMessage, "Success\n" + "Wishlist items have been added to your cart.", "The product addition from wishlist to cart message doesn't match expectations or the product addition from wishlist to cart process has failed.");
        //click header shopping cart button
        await generalPage.clickHeaderShoppingCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //header shopping cart modal web element assert
        await generalPage.isHeaderShoppingCartModalWebElementDisplayed();
        //header shopping cart modal text element assert
        await this.isHeaderShoppingCartModalTextElementAsExpected();
        //capture screenshot of the header shopping cart modal display
        await TestMethods.captureScreenshot(this.driver, "Header Shopping Cart Modal Display");
        //log header shopping cart modal product data
        await this.logHeaderShoppingCartModalProductData();
        //click 'View and edit cart' button
        await generalPage.clickHeaderShopCartModalViewEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Product From Wishlist To Cart Test Result (Bulk Actions Add To Cart Button)");
    }

    //remove product from wishlist test

    //remove product from wishlist test method
    async removeProductFromWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //capture screenshot of the wishlist page display
        await TestMethods.captureScreenshot(this.driver, "Wishlist Page Display");
        //click 'Clear wishlist' link
        await wishlistPage.clickClearWishlistLink();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const removeFromWishlistSuccessMessage = await addReviewPage.getAddReviewApprovalWaitMessage(); //the element is the same as in add review page
        assert.strictEqual(removeFromWishlistSuccessMessage, "Success\n" + "Wishlist has been cleared.", "The product removal from wishlist message doesn't match expectations or the product removal from wishlist process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Remove Product From Wishlist Test Result (Clear Wishlist Link)");
    }

    //add single latest deals product to new wishlist test (guest and registered user will have the same result so only guest branch is tested to avoid redundancy)

    //add single latest deals product to new wishlist test method (as a guest)
    async addSingleLatestDealsProductToNewWishlistTest(){
        const generalPage = new GeneralPage(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const addReviewPage = new AddReviewPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist text element assert
        await this.isWishlistPageTextElementAsExpected();
        //capture screenshot of the wishlist page display
        await TestMethods.captureScreenshot(this.driver, "Wishlist Page Display");
        //log wishlist page displayed data
        await this.logWishlistPageProductData();
        //click 'Add another wishlist' button
        await wishlistPage.clickAddAnotherWishlistButton();
        //new wishlist modal web element assert
        await wishlistPage.isNewWishlistModalWebElementDisplayed();
        //new wishlist modal page text element assert
        await this.isNewWishlistModalTextElementAsExpected();
        //input new wishlist title into wishlist title input field
        await wishlistPage.inputNewWishlistTitleIntoWishlistTitleInputField();
        //click 'Perform' button
        await wishlistPage.clickPerformButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected message
        const removeFromWishlistSuccessMessage = await addReviewPage.getAddReviewApprovalWaitMessage(); //the element is the same as in add review page
        assert.strictEqual(removeFromWishlistSuccessMessage, "Success\n" + "New wishlist has been created.", "The product addition to new wishlist message doesn't match expectations or the product addition to new wishlist process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Single Latest Deals Product To New Wishlist Test Result (as a guest)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart product / products addition to check out tests

    //product addition to check out test method
    async addProductToCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //capture screenshot of the shopping cart page display
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display");
        //log shopping cart product data
        await this.logShoppingCartPageProductData();
        //click 'checkout' button
        await shoppingCartPage.clickCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Addition To Checkout Test Result");
    }

    //shopping cart product quantity update test

    //product quantity update during addition to check out test method
    async addProductQtyUpdateDuringAdditionToCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display before product quantity update
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display Before Product Quantity Update");
        //input product quantity into a set product quantity update input field
        await shoppingCartPage.inputQuantityIntoQuantityInputField(0);
        //log shopping cart product data (to assert the product quantity has been updated)
        await this.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display after product quantity update
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display After Product Quantity Update");
        //click 'checkout' button
        await shoppingCartPage.clickCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Addition To Checkout Test Result");
    }

    //product removal from shopping cart tests

    //product removal from shopping cart test method
    async productRemovalFromShoppingCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display before product removal
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display Before Product Removal");
        //click product removal button
        await shoppingCartPage.clickRemoveProductButton(0);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert shopping cart info box text is as expected
        const shoppingCartInfoBoxText = await shoppingCartPage.getShoppingCartInfoBoxText();
        assert.strictEqual(shoppingCartInfoBoxText, "Info\n" + "Your cart is empty", "The shopping cart info box doesn't match expectations or the product removal process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Removal From Shopping Cart Test Result");
    }

    //clear shopping cart test method
    async clearShoppingCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await this.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display before product removal
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Display Before Product Removal");
        //click 'Clear Cart' button
        await shoppingCartPage.clickClearCartButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert shopping cart info box text is as expected
        const shoppingCartInfoBoxText = await shoppingCartPage.getShoppingCartInfoBoxText();
        assert.strictEqual(shoppingCartInfoBoxText, "Info\n" + "Your cart is empty", "The shopping cart info box doesn't match expectations or the product removal process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Removal From Shopping Cart Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid checkout tests

    //valid order checkout test method (as a guest)
    async validOrderCheckoutGuestTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (shipment section) web element assert
        await checkoutPage.isCheckoutPageShipSectionWebElementDisplayed();
        //checkout page (shipment section) text element assert
        await this.isCheckoutPageShipMethodTextElementAsExpected();
        //capture screenshot of the checkout page shipping method section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Method Section Display (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (payment section) web element assert (due to dynamic order placement, the cash on delivery radio button may not appear and bank transfer has a different selector)
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (mollie payment section) web element assert
        await checkoutPage.isCheckoutPageMolliePaymentSectionWebElementDisplayed();
        //checkout page (payment section) text element assert (due to dynamic order placement, the cash on delivery radio button may not appear and bank transfer has a different selector)
        await this.isCheckoutPagePaymentMethodTextElementAsExpected();
        //capture screenshot of the checkout page payment method section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Payment Method Section Display (guest)");
        //click 'Bank Transfer' button (due to dynamic radio button appearances / disappearances, first default is being selected)
        await checkoutPage.clickBankTransferButton();
        //capture screenshot of the checkout page payment method section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Payment Method Section Bank Transfer Selection Display (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (order summary) web element assert
        await checkoutPage.isCheckoutPageOrderSummarySectionWebElementDisplayed();
        //checkout page (order summary) text element assert
        await this.isCheckoutPageOrderSummaryTextElementAsExpected();
        //capture screenshot of the checkout page order summary section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Order Summary Section Display (guest)");
        //log checkout page order summary section displayed data
        await this.logCheckoutPageOrderSummaryData();
        //click 'Place order' button
        await checkoutPage.clickPlaceOrderButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected order placement success message
        const checkoutPageThankYouMsg = await checkoutPage.getThankYouMessage();
        assert.strictEqual(checkoutPageThankYouMsg, "Thank you! You have successfully placed an order.", "The checkout thank you message doesn't match expectations or the order checkout process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Order Checkout Test Result (guest)");
    }

    //valid order checkout test method (as a registered user)
    async validOrderCheckoutRegUserTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing address section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display (registered user)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (shipment section) web element assert
        await checkoutPage.isCheckoutPageShipSectionWebElementDisplayed();
        //checkout page (shipment section) text element assert
        await this.isCheckoutPageShipMethodTextElementAsExpected();
        //capture screenshot of the checkout page shipping method section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Method Section Display (registered user)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (payment section) web element assert (due to dynamic order placement, the cash on delivery radio button may not appear and bank transfer has a different selector)
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (mollie payment section) web element assert
        await checkoutPage.isCheckoutPageMolliePaymentSectionWebElementDisplayed();
        //checkout page (payment section) text element assert (due to dynamic order placement, the cash on delivery radio button may not appear and bank transfer has a different selector)
        await this.isCheckoutPagePaymentMethodTextElementAsExpected();
        //capture screenshot of the checkout page payment method section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Payment Method Section Display (registered user)");
        //click 'Cash on Delivery' button (due to dynamic radio button appearances / disappearances, first default is being selected)
        await checkoutPage.clickCashOnDeliveryButton();
        //capture screenshot of the checkout page payment method section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Payment Method Section Bank Transfer Selection Display (registered user)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (order summary) web element assert
        await checkoutPage.isCheckoutPageOrderSummarySectionWebElementDisplayed();
        //checkout page (order summary) text element assert
        await this.isCheckoutPageOrderSummaryTextElementAsExpected();
        //capture screenshot of the checkout page order summary section
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Order Summary Section Display (registered user)");
        //log checkout page order summary section displayed data
        await this.logCheckoutPageOrderSummaryData();
        //click 'Place order' button
        await checkoutPage.clickPlaceOrderButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected order placement success message
        const checkoutPageThankYouMsg = await checkoutPage.getThankYouMessage();
        assert.strictEqual(checkoutPageThankYouMsg, "Thank you! You have successfully placed an order.", "The checkout thank you message doesn't match expectations or the order checkout process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Order Checkout Test Result (registered user)");
    }

    //invalid checkout tests (guest branch only is being tested to avoid redundancy, registered user will have the same output)

    //no singular input

    //invalid order checkout test method (as a guest) - no guest billing address email
    async invalidOrderCheckoutGuestNoBillEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //don't input guest email into email input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing email
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing Email (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter your email.", "The checkout page missing billing address email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing Email (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest billing address first name
    async invalidOrderCheckoutGuestNoBillFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //don't input guest first name into billing address first name input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing first name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing First Name (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter first name.", "The checkout page missing billing address first name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing First Name (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest billing address last name
    async invalidOrderCheckoutGuestNoBillLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //don't input guest last name into billing address last name input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing last name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing Last Name (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter last name.", "The checkout page missing billing address last name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing Last Name (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest billing address
    async invalidOrderCheckoutGuestNoBillAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //don't input guest billing address into billing address input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing address
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing Address (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter street.", "The checkout page missing billing address input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing Address (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest billing country
    async invalidOrderCheckoutGuestNoBillCountryTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing country
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing Country (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please select country.", "The checkout page missing billing country input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing Country (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest billing city
    async invalidOrderCheckoutGuestNoBillCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //don't input guest city into billing address city input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing City (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter city.", "The checkout page missing billing city input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing City (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest billing post code
    async invalidOrderCheckoutGuestNoBillPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //don't input guest post code into billing address post code input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - no billing post code
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - No Billing Post Code (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter postcode.", "The checkout page missing billing post code input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Billing Post Code (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest shipping address first name
    async invalidOrderCheckoutGuestNoShipFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //don't input guest shipping first name into shipping address first name input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - no shipping first name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - No Shipping First Name (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter first name.", "The checkout page missing shipping address first name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Shipping First Name (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest shipping address last name
    async invalidOrderCheckoutGuestNoShipLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //don't input guest shipping last name into shipping address last name input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - no shipping last name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - No Shipping Last Name (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter last name.", "The checkout page missing shipping address last name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Shipping Last Name (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest shipping address
    async invalidOrderCheckoutGuestNoShipAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //don't input guest billing address into shipping address input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - no shipping address
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - No Shipping Address (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter street.", "The checkout page missing shipping address input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Shipping Address (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest shipping country
    async invalidOrderCheckoutGuestNoShipCountryTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'Select' option
        await checkoutPage.selectShipAddressSelectOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - no shipping country
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - No Shipping Country (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please select country.", "The checkout page missing shipping address country input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Shipping Country (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest shipping city
    async invalidOrderCheckoutGuestNoShipCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //don't input guest city into shipping address city input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - no shipping city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - No Shipping City (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter city.", "The checkout page missing shipping address city input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Shipping City (guest)");
    }

    //invalid order checkout test method (as a guest) - no guest shipping post code
    async invalidOrderCheckoutGuestNoShipPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestNoSingularInputScenarios = new CheckoutPageGuestNoSingularInputScenarios(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before invalid shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //don't input guest post code into shipping address post code input field
        await checkoutPageGuestNoSingularInputScenarios.inputNoGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - no shipping post code
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - No Shipping Post Code (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message
        const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(checkoutPageSingularInputErrorMsg, "Please enter postcode.", "The checkout page missing shipping address post code input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - No Shipping Post Code (guest)");
    }

    //too short singular input

    //invalid order checkout test method (as a guest) - too short guest billing address email (1 char -> name, domain)
    async invalidOrderCheckoutGuestTooShortBillEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input too short guest email into email input field (1 char -> name, domain)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too short billing email
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Short Billing Email (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Email is invalid.", "The checkout page too short billing address email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short billing address email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Billing Email (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest billing address first name (1 char)
    async invalidOrderCheckoutGuestTooShortBillFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input too short guest first name into billing address first name input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too short billing first name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Short Billing First Name (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "First name must be at least 2 characters long.", "The checkout page too short billing address first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short billing address first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Billing First Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest billing address last name (1 char)
    async invalidOrderCheckoutGuestTooShortBillLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input too short guest last name into billing address last name input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too short billing last name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Short Billing Last Name (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Last name must be at least 2 characters long.", "The checkout page too short billing address last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short billing address last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Billing Last Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest billing address (1 char)
    async invalidOrderCheckoutGuestTooShortBillAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input too short guest billing address into billing address input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too short billing address
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Short Billing Address (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Street must be at least 2 characters long.", "The checkout page too short billing address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short billing address input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Billing Address (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest billing city (1 char)
    async invalidOrderCheckoutGuestTooShortBillCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input too short guest city into billing address city input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too short billing city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Short Billing City (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "City must be at least 2 characters long.", "The checkout page too short billing city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short billing city input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Billing City (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest billing post code (4 digits)
    async invalidOrderCheckoutGuestTooShortBillPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input too short guest post code into billing address post code input field (4 digits)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too short billing post code
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Short Billing Post Code (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Post code must be 5 digits long.", "The checkout page too short billing post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short billing post code input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Billing Post Code (guest)");
    }

    //shipping address

    //invalid order checkout test method (as a guest) - too short guest shipping first name (1 char)
    async invalidOrderCheckoutGuestTooShortShipFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input too short guest shipping first name into shipping address first name input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too short shipping first name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Short Shipping First Name (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "First name must be at least 2 characters long.", "The checkout page too short shipping first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short shipping first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Shipping First Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest shipping last name (1 char)
    async invalidOrderCheckoutGuestTooShortShipLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input too short guest shipping last name into shipping address last name input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too short shipping last name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Short Shipping Last Name (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Last name must be at least 2 characters long.", "The checkout page too short shipping last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short shipping last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Shipping Last Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest shipping address (1 char)
    async invalidOrderCheckoutGuestTooShortShipAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input too short guest billing address into shipping address input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too short shipping address
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Short Shipping Address (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Street must be at least 2 characters long.", "The checkout page too short shipping address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short shipping address input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Shipping Address (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest shipping city (1 char)
    async invalidOrderCheckoutGuestTooShortShipCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input too short guest city into shipping address city input field (1 char)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too short shipping city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Short Shipping City (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "City must be at least 2 characters long.", "The checkout page too short shipping address city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short shipping address city input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Shipping City (guest)");
    }

    //invalid order checkout test method (as a guest) - too short guest shipping post code (4 digits)
    async invalidOrderCheckoutGuestTooShortShipPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooShortSingularInput = new CheckoutPageGuestTooShortSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input too short guest post code into shipping address post code input field (4 digits)
        await checkoutPageGuestTooShortSingularInput.inputTooShortGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too short shipping post code
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Short Shipping Post Code (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Post code must be at least 5 digits long.", "The checkout page too short shipping address post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short shipping address post code input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Short Shipping Post Code (guest)");
    }

    //too long singular input

    //invalid order checkout test method (as a guest) - too long guest billing address email (100 chars -> name, domain)
    async invalidOrderCheckoutGuestTooLongBillEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input too long guest email into email input field (100 chars -> name, domain)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too long billing email
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Long Billing Email (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "This email is invalid.", "The checkout page too long billing address email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long billing address email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Billing Email (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest billing address first name (100 chars)
    async invalidOrderCheckoutGuestTooLongBillFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input too long guest first name into billing address first name input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too long billing first name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Long Billing First Name (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "First name is too long.", "The checkout page too long billing address first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long billing address first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Billing First Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest billing address last name (100 chars)
    async invalidOrderCheckoutGuestTooLongBillLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input too long guest last name into billing address last name input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too long billing last name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Long Billing Last Name (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Last name is too long.", "The checkout page too long billing address last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long billing address last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Billing Last Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest billing address (100 chars)
    async invalidOrderCheckoutGuestTooLongBillAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input too long guest billing address into billing address input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too long billing address
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Long Billing Address (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Address is too long.", "The checkout page too long billing address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long billing address input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Billing Address (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest billing city (100 chars)
    async invalidOrderCheckoutGuestTooLongBillCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input too long guest city into billing address city input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too long billing city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Long Billing City (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "City is too long.", "The checkout page too long billing address city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long billing address city input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Billing City (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest billing post code (6 digits)
    async invalidOrderCheckoutGuestTooLongBillPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input too long guest post code into billing address post code input field (6 digits)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - too long billing post code
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Too Long Billing Post Code (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Post code is too long.", "The checkout page too long billing address post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long billing address post code input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Billing Post Code (guest)");
    }

    //shipping address

    //invalid order checkout test method (as a guest) - too long guest shipping first name (100 chars)
    async invalidOrderCheckoutGuestTooLongShipFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input too long guest shipping first name into shipping address first name input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too long shipping first name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Long Shipping First Name (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "First name is too long.", "The checkout page too long shipping address first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long shipping address first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Shipping First Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest shipping last name (100 chars)
    async invalidOrderCheckoutGuestTooLongShipLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input too long guest shipping last name into shipping address last name input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too long shipping last name
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Long Shipping Last Name (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Last name is too long.", "The checkout page too long shipping address last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long shipping address last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Shipping Last Name (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest shipping address (100 chars)
    async invalidOrderCheckoutGuestTooLongShipAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input too long guest billing address into shipping address input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too long shipping address
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Long Shipping Address (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Address is too long.", "The checkout page too long shipping address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long shipping address input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Shipping Address (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest shipping city (100 chars)
    async invalidOrderCheckoutGuestTooLongShipCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input too long guest city into shipping address city input field (100 chars)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too long shipping city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Long Shipping City (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "City is too long.", "The checkout page too long shipping address city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long shipping address city input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Shipping City (guest)");
    }

    //invalid order checkout test method (as a guest) - too long guest shipping post code (6 digits)
    async invalidOrderCheckoutGuestTooLongShipPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestTooLongSingularInput = new CheckoutPageGuestTooLongSingularInput(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input too long guest post code into shipping address post code input field (6 digits)
        await checkoutPageGuestTooLongSingularInput.inputTooLongGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - too long shipping city
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Too Long Shipping City (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Post code is too long.", "The checkout page too long shipping address post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long shipping address post code input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Too Long Shipping Post Code (guest)");
    }

    //invalid singular input format

    //invalid order checkout test method (as a guest) - invalid guest billing address email format (missing '@')
    async invalidOrderCheckoutGuestInvalidBillEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input invalid guest email format into email input field (missing '@')
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestEmailFormatIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - invalid billing email input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Invalid Billing Email Format (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "This email is invalid.", "The checkout page invalid billing address email input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid billing address email format input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Billing Email Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid billing address first name format (special symbols only)
    async invalidOrderCheckoutGuestInvalidBillFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input invalid guest first name format into billing address first name input field (special symbols)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestFirstNameFormatIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - invalid billing first name input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Invalid Billing First Name Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "First name cannot consist of special symbols only.", "The checkout page invalid billing address first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid billing address first name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Billing First Name Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid billing address last name format (special symbols only)
    async invalidOrderCheckoutGuestInvalidBillLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input invalid guest last name format into billing address last name input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestLastNameFormatIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - invalid billing last name input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Invalid Billing Last Name Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Last name cannot consist of special symbols only.", "The checkout page invalid billing address last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid billing address last name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Billing Last Name Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid billing address format (special symbols only)
    async invalidOrderCheckoutGuestInvalidBillAddressFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input invalid guest billing address format into billing address input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestAddressFormatIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - invalid billing address input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Invalid Billing Address Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Address cannot consist of special symbols only.", "The checkout page invalid billing address input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid billing address input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Billing Address Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid billing city format (special symbols only)
    async invalidOrderCheckoutGuestInvalidBillCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input invalid guest city format into billing address city input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestCityFormatIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - invalid billing city input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Invalid Billing City Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "City cannot consist of special symbols only.", "The checkout page invalid billing address city input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid billing address city input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Billing City Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid billing post code format (special symbols only)
    async invalidOrderCheckoutGuestInvalidBillPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input invalid guest post code format into billing address post code input field
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestPostCodeFormatIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid billing address data input - invalid billing post code input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Billing Address Data Input  - Invalid Billing Post Code Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Guest Shipping Address Data Input (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Post code cannot consist of special symbols only.", "The checkout page invalid billing address post code input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid billing address post code input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Billing Post Code Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid shipping first name format (special symbols only)
    async invalidOrderCheckoutGuestInvalidShipFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input invalid guest shipping first name format into shipping address first name input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestFirstNameFormatIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - invalid shipping first name input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Invalid Shipping First Name Input Format (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "First name cannot consist of special symbols only.", "The checkout page invalid shipping address first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid shipping address first name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Shipping First Name Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid shipping last name format (special symbols only)
    async invalidOrderCheckoutGuestInvalidShipLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input invalid guest shipping last name format into shipping address last name input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestLastNameFormatIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - invalid shipping last name input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Invalid Shipping Last Name Input Format (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Last name cannot consist of special symbols only.", "The checkout page invalid shipping address last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid shipping address last name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Shipping Last Name Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid shipping address format (special symbols only)
    async invalidOrderCheckoutGuestInvalidShipAddressFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input invalid guest billing address into shipping address input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestAddressFormatIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - invalid shipping address input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Invalid Shipping Address Input Format (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Address cannot consist of special symbols only.", "The checkout page invalid shipping address input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid shipping address input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Shipping Address Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid shipping city format (special symbols only)
    async invalidOrderCheckoutGuestInvalidShipCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input invalid guest city format into shipping address city input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestCityFormatIntoShipAddressCityInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - invalid shipping city input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Invalid Shipping City Input Format (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "City cannot consist of special symbols only.", "The checkout page invalid shipping city input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid shipping city input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Shipping City Format (guest)");
    }

    //invalid order checkout test method (as a guest) - invalid shipping post code format (special symbols only)
    async invalidOrderCheckoutGuestInvalidShipPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageValidCheckout = new CheckoutPageValidGuestCheckout(this.driver);
        const checkoutPageGuestInvalidSingularInputFormat = new CheckoutPageGuestInvalidSingularInputFormat(this.driver);
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page (billing address section) web element assert
        await checkoutPage.isCheckoutPageBillAddressWebElementDisplayed();
        //checkout page (billing address section) text element assert
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Address Data Input (guest)");
        //log checkout page aside section order summary data
        await this.logCheckoutPageAsideSummaryProductData();
        //input valid guest email into email input field
        await checkoutPageValidCheckout.inputValidGuestEmailIntoEmailInputField();
        //input valid guest first name into billing address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest billing address into billing address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoBillAddressInputField();
        //click billing address 'Country' dropdown menu
        await checkoutPage.clickBillAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectBillAddressUSOption();
        //input valid guest city into billing address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoBillAddressCityInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPageValidCheckout.inputValidGuestPostCodeIntoBillAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after valid billing address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Billing Address Data Input (guest)");
        //click 'Different shipping address' checkbox
        await checkoutPage.clickDiffShipAddressCheckbox();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //checkout page shipping address section web element assert
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address section text element assert
        await this.isCheckoutPageShipAddressTextElementAsExpected();
        //capture screenshot of the checkout page billing / shipping address section before shipping address data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Address Data Input (guest)");
        //input valid guest shipping first name into shipping address first name input field
        await checkoutPageValidCheckout.inputValidGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest shipping last name into shipping address last name input field
        await checkoutPageValidCheckout.inputValidGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest billing address into shipping address input field
        await checkoutPageValidCheckout.inputValidGuestAddressIntoShipAddressInputField();
        //click shipping address 'Country' dropdown menu
        await checkoutPage.clickShipAddressDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectShipAddressUSOption();
        //input valid guest city into shipping address city input field
        await checkoutPageValidCheckout.inputValidGuestCityIntoShipAddressCityInputField();
        //input invalid guest post code format into shipping address post code input field (special symbols only)
        await checkoutPageGuestInvalidSingularInputFormat.inputInvalidGuestPostCodeFormatIntoShipAddressPostCodeInputField();
        //capture screenshot of the checkout page billing / shipping address section after invalid shipping address data input - invalid shipping post code input format
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Shipping Address Data Input - Invalid Shipping Post Code Input Format (guest)");
        //click 'Next' button
        await checkoutPage.clickNextButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const checkoutPageSingularInputErrorMsg = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(checkoutPageSingularInputErrorMsg, "Post code cannot consist of special symbols only.", "The checkout page invalid shipping post code input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid shipping post code input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Order Checkout Test Result - Invalid Shipping Post Code Format (guest)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //order history page test (only registered users have this feature)

    //valid order verification test method
    async verifySubmittedOrderInOrderHistoryPageTest(){
        const generalPage = new GeneralPage(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const orderHistoryPage = new OrderHistoryPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click 'View order' button
        await checkoutPage.clickViewOrderButton();
        //wait for elements to load
        await generalPage.waitForElementLoad();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardBreadcrumbWebElementDisplayed()
        //account dashboard page web element assert (aside elements)
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert (aside elements)
        await this.isAccountDashboardPageTextElementAsExpected();
        //order history page web element assert
        await orderHistoryPage.isOrderHistoryPageWebElementDisplayed();
        //order history page text element assert
        await this.isOrderHistoryPageTextElementAsExpected();
        //capture screenshot of the order history page display
        await TestMethods.captureScreenshot(this.driver, "Order History Page Display");
        //log order history page data
        await this.logOrderHistoryPageData();
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page text element assert test method
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert header newsletter signup link text is as expected
        const signUpLinkText = await generalPage.getHeaderSignUpNewsletterLinkText();
        assert.strictEqual(signUpLinkText, "Sign up to our newsletter and grab -20% off", "The header newsletter signup link text doesn't match the expectations.");
        //assert header newsletter signup link text is as expected
        const footerPoweredByText = await generalPage.getFooterPoweredByText();
        assert.strictEqual(footerPoweredByText, "© Your Store, Powered by Sylius", "The footer powered by text doesn't match the expectations.");
    }

    //general page info box text element assert test method
    async isGeneralPageInfoBoxTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert footer info box sylius version subtext is as expected
        const infoBoxSyliusVersionSubtext = await generalPage.getFooterInfoBoxSyliusVersionSubtext();
        assert.strictEqual(infoBoxSyliusVersionSubtext, "Sylius version:", "The footer info box sylius version subtext doesn't match expectations.");
        //assert footer info box admin panel subtext is as expected
        const infoBoxAdminPanelSubtext = await generalPage.getFooterInfoBoxAdminPanelSubtext();
        assert.strictEqual(infoBoxAdminPanelSubtext, "Admin panel:", "The footer info box admin panel subtext doesn't match expectations.");
        //assert footer info box sylius API subtext is as expected
        const infoBoxSyliusAPISubtext = await generalPage.getFooterInfoBoxSyliusAPISubtext();
        assert.strictEqual(infoBoxSyliusAPISubtext, "Sylius API:", "The footer info box sylius API subtext doesn't match expectations.");
    }

    //header shopping cart modal text element assert test method
    async isHeaderShoppingCartModalTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert header shopping cart modal title is as expected
        const headerShoppingCartModalTitle = await generalPage.getHeaderShoppingCartModalTitle();
        assert.strictEqual(headerShoppingCartModalTitle, "Cart", "The header shopping cart modal title doesn't match expectations.");
        //assert header shopping cart modal subtotal subtext is as expected
        const headerShoppingCartModalSubtotalSubtext = await generalPage.getHeaderShoppingCartModalSubtotalSubtext();
        assert.strictEqual(headerShoppingCartModalSubtotalSubtext, "Subtotal:", "The header shopping cart modal subtotal subtext doesn't match expectations.");
    }

    //home page text element assert test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert home page latest deals section subtitle is as expected
        const homePageLatestDealsSubtitle = await homePage.getHomePageLatestDealsSectionSubtitle();
        assert.strictEqual(homePageLatestDealsSubtitle, "Latest deals", "The home page latest deals section subtitle doesn't match the expectations.");
        //assert home page new collection section subtitle is as expected
        const homePageNewCollectionSubtitle = await homePage.getHomePageNewCollectionSectionSubtitle();
        assert.strictEqual(homePageNewCollectionSubtitle, "New collection", "The home page new collection section subtitle doesn't match the expectations.");
        //assert home page latest products section subtitle is as expected
        const homePageLatestProductsSubtitle = await homePage.getHomePageLatestProductsSectionSubtitle();
        assert.strictEqual(homePageLatestProductsSubtitle, "Latest products", "The home page latest products section subtitle doesn't match the expectations.");
    }

    //register page text element assert test method
    async isRegisterPageTextElementAsExpected(){
        const registerPage = new RegisterPage(this.driver);
        //assert register page title is as expected
        const registerPageTitle = await registerPage.getRegisterPageTitle();
        assert.strictEqual(registerPageTitle, "Create a new customer account", "The register page title doesn't match the expectations.");
        //assert register page subtitle is as expected
        const registerPageSubtitle = await registerPage.getRegisterPageSubtitle();
        assert.strictEqual(registerPageSubtitle, "Have an account already? Sign in here.", "The register page subtitle doesn't match the expectations.");
        //input form
        //assert register page personal info subtitle is as expected
        const registerPagePersonalInfoSubtitle = await registerPage.getRegisterPagePersonalInfoSubtitle();
        assert.strictEqual(registerPagePersonalInfoSubtitle, "Personal information", "The register page personal info subtitle doesn't match the expectations.");
        //assert register page first name subtext is as expected
        const registerPageFirstNameSubtext = await registerPage.getRegisterPageFirstNameSubtext();
        assert.strictEqual(registerPageFirstNameSubtext, "First name", "The register page first name subtext doesn't match the expectations.");
        //assert register page last name subtext is as expected
        const registerPageLastNameSubtext = await registerPage.getRegisterPageLastNameSubtext();
        assert.strictEqual(registerPageLastNameSubtext, "Last name", "The register page last name subtext doesn't match the expectations.");
        //assert register page email subtext is as expected
        const registerPageEmailSubtext = await registerPage.getRegisterPageEmailSubtext();
        assert.strictEqual(registerPageEmailSubtext, "Email", "The register page email subtext doesn't match the expectations.");
        //assert register page phone subtext is as expected
        const registerPagePhoneSubtext = await registerPage.getRegisterPagePhoneSubtext();
        assert.strictEqual(registerPagePhoneSubtext, "Phone number", "The register page phone subtext doesn't match the expectations.");
        //assert register page account credentials subtext is as expected
        const registerPageAccountCredentialsSubtext = await registerPage.getRegisterPageAccountCredentialsSubtitle();
        assert.strictEqual(registerPageAccountCredentialsSubtext, "Account credentials", "The register page account credentials subtext doesn't match the expectations.");
        //assert register page subscribe newsletter subtext is as expected
        const registerPageSubscribeNewsletterSubtext = await registerPage.getRegisterPageSubscribeNewsletterSubtext();
        assert.strictEqual(registerPageSubscribeNewsletterSubtext, "Subscribe to the newsletter", "The register page subscribe newsletter subtext doesn't match the expectations.");
        //assert register page password subtext is as expected
        const registerPagePasswordSubtext = await registerPage.getRegisterPagePasswordSubtext();
        assert.strictEqual(registerPagePasswordSubtext, "Password", "The register page password subtext doesn't match the expectations.");
        //assert register page confirm password subtext is as expected
        const registerPageConfirmPasswordSubtext = await registerPage.getRegisterPageConfirmPasswordSubtext();
        assert.strictEqual(registerPageConfirmPasswordSubtext, "Verification", "The register page confirm password subtext doesn't match the expectations.");
    }

    //account creation success message text elements test method
    async isAccountCreationSuccessMessageTextAsExpected(){
        const registerPage = new RegisterPage(this.driver);
        //assert account creation success message header is as expected
        const accountCreationSuccessMsgHeader = await registerPage.getAccountCreationSuccessMessageHeader();
        assert.strictEqual(accountCreationSuccessMsgHeader, "Thank you for your registration", "The account creation success message header text doesn't match expectation or the user account creation has failed.");
        //assert account creation success message one is as expected
        const accountCreationSuccessMsgOne = await registerPage.getAccountCreationSuccessMessageOne();
        assert.strictEqual(accountCreationSuccessMsgOne, "Success\n" + "Thank you for registering.", "The account creation success message one doesn't match expectation or it wasn't triggered.");
        //assert account creation success message two is as expected
        const accountCreationSuccessMsgTwo = await registerPage.getAccountCreationSuccessMessageTwo();
        assert.strictEqual(accountCreationSuccessMsgTwo, "Success\n" + "For demo purposes you can visit  to verify the account.", "The account creation success message two doesn't match expectation or it wasn't triggered.");
    }

    //login dashboard page text element assert test method
    async isLoginDashboardPageTextElementAsExpected(){
        const loginDashboardPage = new LoginDashboardPage(this.driver);
        //assert login dashboard page register section title is as expected
        const loginDashboardPageRegisterSectionTitle = await loginDashboardPage.getLoginPageRegisterSectionTitle();
        assert.strictEqual(loginDashboardPageRegisterSectionTitle, "Don't have an account?", "The login dashboard page register section title doesn't match expectations.");
        //assert login dashboard page login section title is as expected
        const loginDashboardPageLoginSectionTitle = await loginDashboardPage.getLoginPageLoginSectionTitle();
        assert.strictEqual(loginDashboardPageLoginSectionTitle, "Login", "The login dashboard page login section title doesn't match expectations.");
        //assert login dashboard page test credentials subtext is as expected
        const loginDashboardPageTestCredentialsSubtext = await loginDashboardPage.getLoginPageTestCredentialsSubtext();
        assert.strictEqual(loginDashboardPageTestCredentialsSubtext, "Test credentials", "The login dashboard page test credentials subtext doesn't match expectations.");
        //assert login dashboard page test credentials text is as expected
        const loginDashboardPageTestCredentialsText = await loginDashboardPage.getLoginPageTestCredentialsText();
        assert.strictEqual(loginDashboardPageTestCredentialsText, "Username: shop@example.com\n" + "Password: sylius", "The login dashboard page test credentials text doesn't match expectations.");
        //input form (login section)
        //assert login dashboard page username subtext is as expected
        const loginDashboardPageUserNameSubtext = await loginDashboardPage.getLoginPageUsernameSubtext();
        assert.strictEqual(loginDashboardPageUserNameSubtext, "Username", "The login dashboard page username subtext doesn't match expectations.");
        //assert login dashboard page password subtext is as expected
        const loginDashboardPagePasswordSubtext = await loginDashboardPage.getLoginPagePasswordSubtext();
        assert.strictEqual(loginDashboardPagePasswordSubtext, "Password", "The login dashboard page password subtext doesn't match expectations.");
        //assert login dashboard page remember me subtext is as expected
        const loginDashboardPageRememberMeSubtext = await loginDashboardPage.getLoginPageRememberMeSubtext();
        assert.strictEqual(loginDashboardPageRememberMeSubtext, "Remember me", "The login dashboard page remember me subtext doesn't match expectations.");
    }

    //account dashboard page text element assert test method
    async isAccountDashboardPageTextElementAsExpected(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //assert account dashboard page aside subtitle is as expected
        const accountDashboardPageAsideSubtitle = await accountDashboardPage.getAccountDashboardPageAsideSectionTitle();
        assert.strictEqual(accountDashboardPageAsideSubtitle, "Your account", "The account dashboard page aside section title doesn't match expectations.");
        //assert account dashboard page aside dashboard link text is as expected
        const asideDashboardLinkText = await accountDashboardPage.getAccountDashboardPageAsideDashboardLinkText();
        assert.strictEqual(asideDashboardLinkText, "Dashboard", "The account dashboard page aside dashboard link text doesn't match expectations.");
        //assert account dashboard page aside personal info link text is as expected
        const asidePersonalInfoLinkText = await accountDashboardPage.getAccountDashboardPageAsidePersonalInfoLinkText();
        assert.strictEqual(asidePersonalInfoLinkText, "Personal information", "The account dashboard page aside personal info link text doesn't match expectations.");
        //assert account dashboard page aside change password link text is as expected
        const asideChangePasswordLinkText = await accountDashboardPage.getAccountDashboardPageAsideChangePasswordLinkText();
        assert.strictEqual(asideChangePasswordLinkText, "Change password", "The account dashboard page aside change password link text doesn't match expectations.");
        //assert account dashboard page aside address book link text is as expected
        const asideAddressBookLinkText = await accountDashboardPage.getAccountDashboardPageAsideAddressBookLinkText();
        assert.strictEqual(asideAddressBookLinkText, "Address book", "The account dashboard page aside address book link text doesn't match expectations.");
        //assert account dashboard page aside order history link text is as expected
        const asideOrderHistoryLinkText = await accountDashboardPage.getAccountDashboardPageAsideOrderHistoryLinkText();
        assert.strictEqual(asideOrderHistoryLinkText, "Order history", "The account dashboard page aside order history link text doesn't match expectations.");
    }

    //account dashboard page (main section) text element assert test method
    async isAccountDashboardPageMainSectionTextElementAsExpected(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //assert account dashboard page title is as expected
        const accountDashboardPageTitle = await accountDashboardPage.getAccountDashboardPageTitle();
        assert.strictEqual(accountDashboardPageTitle, "My account", "The account dashboard page title doesn't match expectations.");
        //assert account dashboard page subtitle is as expected
        const accountDashboardPageSubtitle = await accountDashboardPage.getAccountDashboardPageSubtitle();
        assert.strictEqual(accountDashboardPageSubtitle, "Manage your personal information and preferences", "The account dashboard page subtitle doesn't match expectations.");
    }

    //edit account page text element assert test method
    async isEditAccountPageTextElementAsExpected(){
        const editAccountPage = new EditAccountPage(this.driver);
        //assert edit account page title is as expected
        const editAccountPageTitle = await editAccountPage.getEditAccountPageTitle();
        assert.strictEqual(editAccountPageTitle, "Your profile", "The edit account page title doesn't match expectations.");
        //assert edit account page subtitle is as expected
        const editAccountPageSubtitle = await editAccountPage.getEditAccountPageSubtitle();
        assert.strictEqual(editAccountPageSubtitle, "Edit your personal information", "The edit account page subtitle doesn't match expectations.");
        //assert edit account page first name subtext is as expected
        const editAccountPageFirstNameSubtext = await editAccountPage.getEditAccountPageFirstNameSubtext();
        assert.strictEqual(editAccountPageFirstNameSubtext, "First name", "The edit account page first name subtext doesn't match expectations.");
        //assert edit account page last name subtext is as expected
        const editAccountPageLastNameSubtext = await editAccountPage.getEditAccountPageLastNameSubtext();
        assert.strictEqual(editAccountPageLastNameSubtext, "Last name", "The edit account page last name subtext doesn't match expectations.");
        //assert edit account page email subtext is as expected
        const editAccountPageEmailSubtext = await editAccountPage.getEditAccountPageEmailSubtext();
        assert.strictEqual(editAccountPageEmailSubtext, "Email", "The edit account page email subtext doesn't match expectations.");
        //assert edit account page birthday subtext is as expected
        const editAccountPageBirthdaySubtext = await editAccountPage.getEditAccountPageBirthdaySubtext();
        assert.strictEqual(editAccountPageBirthdaySubtext, "Birthday", "The edit account page birthday subtext doesn't match expectations.");
        //assert edit account page gender subtext is as expected
        const editAccountPageGenderSubtext = await editAccountPage.getEditAccountPageGenderSubtext();
        assert.strictEqual(editAccountPageGenderSubtext, "Gender", "The edit account page gender subtext doesn't match expectations.");
        //assert edit account page phone subtext is as expected
        const editAccountPagePhoneSubtext = await editAccountPage.getEditAccountPagePhoneSubtext();
        assert.strictEqual(editAccountPagePhoneSubtext, "Phone number", "The edit account page phone subtext doesn't match expectations.");
        //assert edit account page 'subscribe to the newsletter' subtext is as expected
        const editAccountPageNewsletterSubtext = await editAccountPage.getEditAccountPageNewsletterSubtext();
        assert.strictEqual(editAccountPageNewsletterSubtext, "Subscribe to the newsletter", "The edit account page 'subscribe to the newsletter' subtext doesn't match expectations.");
    }

    //user account update success text element assert test methods (in manual testing the user gets onto edit account page, but in automation, the user gets onto login page)
    async isAccountUpdateSuccessMessagesDataTextElementAsExpected(){
        const editAccountPage = new EditAccountPage(this.driver);
        //assert the user gets expected user account data update success messages
        const userAccountUpdateSuccessMsgMain = await editAccountPage.getUserAccountUpdateSuccessMessage();
        assert.strictEqual(userAccountUpdateSuccessMsgMain, "Success\n" + "Customer has been successfully updated.", "The user account update success message doesn't match expectations or the account update process has failed.");

        const userAccountUpdateSuccessMsgOne = await editAccountPage.getUpdateSuccessMessageOne();
        assert.strictEqual(userAccountUpdateSuccessMsgOne, "Success\n" + "For demo purposes you can visit  to verify the account.", "The user account update success message one doesn't match expectations.");

        const userAccountUpdateSuccessMsgTwo = await editAccountPage.getUpdateSuccessMessageTwo();
        assert.strictEqual(userAccountUpdateSuccessMsgTwo, "Success\n" + "An email with the verification link has been sent to your email address.", "The user account update success message two doesn't match expectations.");
    }

    //address book dashboard page text element assert test method
    async isAddressBookDashboardPageTextElementAsExpected(){
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //assert address book dashboard page title is as expected
        const addressBookDashboardPageTitle = await addressBookDashboardPage.getAddressBookDashboardPageTitle();
        assert.strictEqual(addressBookDashboardPageTitle, "Address book", "The address book dashboard page title doesn't match expectations.");
        //assert address book dashboard page subtitle is as expected
        const addressBookDashboardPageSubtitle = await addressBookDashboardPage.getAddressBookDashboardPageSubtitle();
        assert.strictEqual(addressBookDashboardPageSubtitle, "Manage your saved addresses", "The address book dashboard page subtitle doesn't match expectations.");
    }

    //address book dashboard page info box text element assert test method
    async isAddressBookDashboardInfoBoxTextElementAsExpected(){
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //assert address book dashboard page title is as expected
        const addressBookDashboardInfoBoxText = await addressBookDashboardPage.getAddressBookDashboardPageInfoBoxText();
        assert.strictEqual(addressBookDashboardInfoBoxText, "Info\n" + "You have no addresses defined", "The address book dashboard page info box text doesn't match expectations.");
    }

    //add address page text element assert test method
    async isAddAddressPageTextElementAsExpected(){
        const addAddressPage = new AddAddressPage(this.driver);
        //assert add address page title is as expected
        const addAddressBookPageTitle = await addAddressPage.getAddAddressPageTitle();
        assert.strictEqual(addAddressBookPageTitle, "Address book", "The add address page title doesn't match expectations.");
        //assert add address page subtitle is as expected (or "Edit my address)
        //const addAddressBookPageSubtitle = await addAddressPage.getAddAddressPageSubtitle();
        //assert.strictEqual(addAddressBookPageSubtitle, "Add address", "The add address page subtitle doesn't match expectations.");
        //assert add address page first name subtext is as expected
        const addAddressBookPageFirstNameSubtext = await addAddressPage.getAddAddressPageFirstNameSubtext();
        assert.strictEqual(addAddressBookPageFirstNameSubtext, "First name", "The add address page first name subtext doesn't match expectations.");
        //assert add address page last name subtext is as expected
        const addAddressBookPageLastNameSubtext = await addAddressPage.getAddAddressPageLastNameSubtext();
        assert.strictEqual(addAddressBookPageLastNameSubtext, "Last name", "The add address page last name subtext doesn't match expectations.");
        //assert add address page company subtext is as expected
        const addAddressBookPageCompanySubtext = await addAddressPage.getAddAddressPageCompanySubtext();
        assert.strictEqual(addAddressBookPageCompanySubtext, "Company", "The add address page company subtext doesn't match expectations.");
        //assert add address page address subtext is as expected
        const addAddressBookPageAddressSubtext = await addAddressPage.getAddAddressPageAddressSubtext();
        assert.strictEqual(addAddressBookPageAddressSubtext, "Street address", "The add address page address subtext doesn't match expectations.");
        //assert add address page country subtext is as expected
        const addAddressBookPageCountrySubtext = await addAddressPage.getAddAddressPageCountrySubtext();
        assert.strictEqual(addAddressBookPageCountrySubtext, "Country", "The add address page country subtext doesn't match expectations.");
        //assert add address page city subtext is as expected
        const addAddressBookPageCitySubtext = await addAddressPage.getAddAddressPageCitySubtext();
        assert.strictEqual(addAddressBookPageCitySubtext, "City", "The add address page city subtext doesn't match expectations.");
        //assert add address page post code subtext is as expected
        const addAddressBookPagePostCodeSubtext = await addAddressPage.getAddAddressPagePostCodeSubtext();
        assert.strictEqual(addAddressBookPagePostCodeSubtext, "Postcode", "The add address page post code subtext doesn't match expectations.");
        //assert add address page phone subtext is as expected
        const addAddressBookPagePhoneSubtext = await addAddressPage.getAddAddressPagePhoneSubtext();
        assert.strictEqual(addAddressBookPagePhoneSubtext, "Phone number", "The add address page phone subtext doesn't match expectations.");
    }

    //address addition success message text element assert test method
    async isAddressAdditionSuccessMessageTextAsExpected(){
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //assert the user gets an expected address addition success message
        const addressAdditionSuccessMessage = await addressBookDashboardPage.getAddressBookDashboardPageAddressSuccessMessage();
        assert.strictEqual(addressAdditionSuccessMessage, "Success\n" + "Address has been successfully added.", "The address addition success message doesn't match expectations or the address addition has failed.");
    }

    //address update success message text element assert test method
    async isAddressUpdateSuccessMessageTextAsExpected(){
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //assert the user gets an expected address addition success message
        const addressUpdateSuccessMessage = await addressBookDashboardPage.getAddressBookDashboardPageAddressSuccessMessage();
        assert.strictEqual(addressUpdateSuccessMessage, "Success\n" + "Address has been successfully updated.", "The address update success message doesn't match expectations or the address update process has failed.");
    }

    //change password page text element assert test method
    async isChangePasswordPageTextElementAsExpected(){
        const changePasswordPage = new ChangePasswordPage(this.driver);
        //assert the change password page title is as expected
        const changePasswordPageTitle = await changePasswordPage.getChangePasswordTitle();
        assert.strictEqual(changePasswordPageTitle, "Change password", "The change password page title doesn't match expectations.");
        //assert the change password page subtitle is as expected
        const changePasswordPageSubtitle = await changePasswordPage.getChangePasswordSubtitle();
        assert.strictEqual(changePasswordPageSubtitle, "Set a new password for your account", "The change password page subtitle doesn't match expectations.");
        //assert the change password page current password subtext is as expected
        const changePasswordPageCurrentPasswordSubtext = await changePasswordPage.getChangePasswordCurrentPasswordSubtext();
        assert.strictEqual(changePasswordPageCurrentPasswordSubtext, "Current password", "The change password page current password subtext doesn't match expectations.");
        //assert the change password page new password subtext is as expected
        const changePasswordPageNewPasswordSubtext = await changePasswordPage.getChangePasswordNewPasswordSubtext();
        assert.strictEqual(changePasswordPageNewPasswordSubtext, "New password", "The change password page new password subtext doesn't match expectations.");
        //assert the change password page confirm password subtext is as expected
        const changePasswordPageConfirmPasswordSubtext = await changePasswordPage.getChangePasswordConfirmPasswordSubtext();
        assert.strictEqual(changePasswordPageConfirmPasswordSubtext, "Confirmation", "The change password page confirm password subtext doesn't match expectations.");
    }

    //single product page reviews info box text element assert test method
    async isSingleProductPageReviewsInfoBoxTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert the single product page reviews info box text element is as expected
        const singleProductPageReviewsInfoBoxText = await singleProductPage.getSingleProductPageReviewsInfoBoxText();
        assert.strictEqual(singleProductPageReviewsInfoBoxText, "Info\n" + "There are no reviews", "The single product page reviews info box text doesn't match expectations.");
    }

    //single product page text element assert test method (elements all pages share)
    async isSingleProductPageSharedTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert the single product page quantity as expected
        const singleProductPageQuantity = await singleProductPage.getSingleProductPageQuantitySubtext();
        assert.strictEqual(singleProductPageQuantity, "Quantity", "The single product page quantity subtext doesn't match expectations.");
        //assert the single product page details dropdown button subtext as expected
        const singleProductPageDetailsSubtext = await singleProductPage.getSingleProductPageDetailsDropdownSubtext();
        assert.strictEqual(singleProductPageDetailsSubtext, "Details", "The single product page details dropdown button subtext doesn't match expectations.");
        //assert the single product page attributes dropdown button subtext as expected
        const singleProductPageAttributesSubtext = await singleProductPage.getSingleProductPageAttributesDropdownSubtext();
        assert.strictEqual(singleProductPageAttributesSubtext, "Attributes", "The single product page attributes dropdown button subtext doesn't match expectations.");
        //assert the single product page reviews dropdown button subtext as expected
        const singleProductPageReviewsSubtext = await singleProductPage.getSingleProductPageReviewsDropdownSubtext();
        assert.strictEqual(singleProductPageReviewsSubtext, "Reviews", "The single product page reviews dropdown button subtext doesn't match expectations.");
        //assert the single product page you may like products section subtitle as expected (it can be 'Similar Products' too)
        const singleProductPageMayLikeProductsSectionSubtitle = await singleProductPage.getSingleProductPageMayLikeSectionSubtitle();
        assert.strictEqual(singleProductPageMayLikeProductsSectionSubtitle, "You may also like:", "The single product page you may like products section subtitle doesn't match expectations.");
        //assert the single product page best sales products section subtitle as expected (it can be 'Similar Products' too)
        const singleProductPageBestSalesProductsSectionSubtitle = await singleProductPage.getSingleProductPageBestSalesSectionSubtitle();
        assert.strictEqual(singleProductPageBestSalesProductsSectionSubtitle, "Our best sales:", "The single product page best sales products section subtitle doesn't match expectations.");
    }

    //single product page additional dropdown text element assert test method
    async isSingleProductPageAdditionalDressDropdownTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert the single product page size dropdown subtext is as expected
        const sizeDropdownSubtext = await singleProductPage.getSingleProductPageSizeSubtext();
        assert.strictEqual(sizeDropdownSubtext, "Dress size", "The single product page dress size dropdown subtext doesn't match expectations.");
        //assert the single product page height dropdown subtext is as expected
        const heightDropdownSubtext = await singleProductPage.getSingleProductPageHeightSubtext();
        assert.strictEqual(heightDropdownSubtext, "Dress height", "The single product page dress height dropdown subtext doesn't match expectations.");
    }

    //add review page text element assert test method
    async isAddReviewPageTextElementAsExpected(){
        const addReviewPage = new AddReviewPage(this.driver);
        //assert the add review page title is as expected
        const addReviewPageTitle = await addReviewPage.getAddReviewPageTitle();
        assert.strictEqual(addReviewPageTitle, "Add your review", "The add review page title doesn't match expectations.");
        //assert the add review page rating subtext is as expected
        const addReviewPageRatingSubtext = await addReviewPage.getAddReviewPageRatingSubtext();
        assert.strictEqual(addReviewPageRatingSubtext, "Rating", "The add review page rating subtext doesn't match expectations.");
        //assert the add review page title subtext is as expected
        const addReviewPageTitleSubtext = await addReviewPage.getAddReviewPageTitleSubtext();
        assert.strictEqual(addReviewPageTitleSubtext, "Title", "The add review page title subtext doesn't match expectations.");
        //assert the add review page comment subtext is as expected
        const addReviewPageCommentSubtext = await addReviewPage.getAddReviewPageCommentSubtext();
        assert.strictEqual(addReviewPageCommentSubtext, "Comment", "The add review page comment subtext doesn't match expectations.");
        //assert the add review page email subtext is as expected (registered user doesn't have this element)
        //const addReviewPageEmailSubtext = await addReviewPage.getAddReviewPageEmailSubtext();
        //assert.strictEqual(addReviewPageEmailSubtext, "Email", "The add review page email subtext doesn't match expectations.");
    }

    //single category (dress) dashboard page text element assert test method
    async isDressCategoryDashboardPageTextElementAsExpected(){
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        //assert the single category dashboard page title is as expected
        const singleCategoryDashboardPageTitle = await singleCategoryDashboardPage.getSingleCategoryDashboardPageTitle();
        assert.strictEqual(singleCategoryDashboardPageTitle, "Dresses", "The single category dashboard page title doesn't match expectations.");
    }

    //single category dashboard page text element assert test method
    async isSingleCategoryDashboardPageTextElementAsExpected(){
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        //assert the single category dashboard page show subtext is as expected
        const singleCategoryDashboardPageShowSubtext = await singleCategoryDashboardPage.getSingleCategoryDashboardShowSubtext();
        assert.strictEqual(singleCategoryDashboardPageShowSubtext, "Show:", "The single category dashboard page show subtext doesn't match expectations.");
        //assert the single category dashboard page sort by subtext is as expected
        const singleCategoryDashboardPageSortBySubtext = await singleCategoryDashboardPage.getSingleCategoryDashboardSortBySubtext();
        assert.strictEqual(singleCategoryDashboardPageSortBySubtext, "Sort:", "The single category dashboard page sort by subtext doesn't match expectations.");
    }

    //wishlist page text element assert test method
    async isWishlistPageTextElementAsExpected(){
        const wishlistPage = new WishlistPage(this.driver);
        //assert the wishlist page title is as expected
        const wishlistPageTitle = await wishlistPage.getWishlistPageTitle();
        assert.strictEqual(wishlistPageTitle, "Wishlist", "The wishlist page title doesn't match expectations.");
        //assert the wishlist page table item subtext is as expected
        const wishlistPageTableItemSubtext = await wishlistPage.getWishlistPageTableItemSubtext();
        assert.strictEqual(wishlistPageTableItemSubtext, "Item", "The wishlist page table item subtext doesn't match expectations.");
        //assert the wishlist page table unit price subtext is as expected
        const wishlistPageTableUnitPriceSubtext = await wishlistPage.getWishlistPageTableProductUnitPriceSubtext();
        assert.strictEqual(wishlistPageTableUnitPriceSubtext, "Unit price", "The wishlist page table unit price subtext doesn't match expectations.");
        //assert the wishlist page table product quantity subtext is as expected
        const wishlistPageTableProductQtySubtext = await wishlistPage.getWishlistPageTableProductQtySubtext();
        assert.strictEqual(wishlistPageTableProductQtySubtext, "Qty", "The wishlist page table product quantity subtext doesn't match expectations.");
        //assert the wishlist page table actions subtext is as expected
        const wishlistPageTableActionsSubtext = await wishlistPage.getWishlistPageTableActionsSubtext();
        assert.strictEqual(wishlistPageTableActionsSubtext, "Actions", "The wishlist page table actions subtext doesn't match expectations.");
    }

    //new wishlist text element assert test method
    async isNewWishlistModalTextElementAsExpected(){
        const wishlistPage = new WishlistPage(this.driver);
        //assert the wishlist page title is as expected
        const newWishlistModalTitle = await wishlistPage.getNewWishlistModalTitle();
        assert.strictEqual(newWishlistModalTitle, "Choose name for your new wishlist", "The new wishlist modal title doesn't match expectations.");
    }

    //shopping cart page text element assert test method
    async isShoppingCartPageTextElementAsExpected(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //assert the shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartTitle();
        assert.strictEqual(shoppingCartPageTitle, "Your shopping cart", "The shopping cart page title doesn't match expectations.");
        //assert the shopping cart page subtitle is as expected
        const shoppingCartPageSubtitle = await shoppingCartPage.getShoppingCartSubtitle();
        assert.strictEqual(shoppingCartPageSubtitle, "Edit your items, apply coupon or proceed to the checkout", "The shopping cart page subtitle doesn't match expectations.");
        //table elements
        //assert the shopping cart product table item subtext is as expected
        const shoppingCartTableItemSubtext = await shoppingCartPage.getShoppingCartTableItemSubtext();
        assert.strictEqual(shoppingCartTableItemSubtext, "Item", "The shopping cart page product table item subtext doesn't match expectations.");
        //assert the shopping cart product table subscription subtext is as expected
        const shoppingCartTableSubscriptionSubtext = await shoppingCartPage.getShoppingCartTableSubscriptionSubtext();
        assert.strictEqual(shoppingCartTableSubscriptionSubtext, "Subscription", "The shopping cart page product table subscription subtext doesn't match expectations.");
        //assert the shopping cart product table unit price subtext is as expected
        const shoppingCartTableUnitPriceSubtext = await shoppingCartPage.getShoppingCartTableUnitPriceSubtext();
        assert.strictEqual(shoppingCartTableUnitPriceSubtext, "Unit price", "The shopping cart page product table unit price subtext doesn't match expectations.");
        //assert the shopping cart product table quantity subtext is as expected
        const shoppingCartTableQtySubtext = await shoppingCartPage.getShoppingCartTableQtySubtext();
        assert.strictEqual(shoppingCartTableQtySubtext, "Qty", "The shopping cart page product table quantity subtext doesn't match expectations.");
        //assert the shopping cart product table total price subtext is as expected
        const shoppingCartTableTotalSubtext = await shoppingCartPage.getShoppingCartTableTotalSubtext();
        assert.strictEqual(shoppingCartTableTotalSubtext, "Total", "The shopping cart page product table total price subtext doesn't match expectations.");
        //summary section
        //assert the shopping cart order summary subtitle is as expected
        const shoppingCartSummarySubtitle = await shoppingCartPage.getShoppingCartPageSummarySubtitle();
        assert.strictEqual(shoppingCartSummarySubtitle, "Summary", "The shopping cart page product table summary subtitle doesn't match expectations.");
        //assert the shopping cart order summary items total subtext is as expected
        const shoppingCartSummaryItemsTotalSubtext = await shoppingCartPage.getShoppingCartPageItemsTotalSubtext();
        assert.strictEqual(shoppingCartSummaryItemsTotalSubtext, "Items total:", "The shopping cart page product table summary items total subtext doesn't match expectations.");
        //assert the shopping cart order summary estimated shipping cost subtext is as expected
        const shoppingCartSummaryEstCostSubtext = await shoppingCartPage.getShoppingCartPageEstCostSubtext();
        assert.strictEqual(shoppingCartSummaryEstCostSubtext, "Estimated shipping cost:", "The shopping cart page product table summary estimated shipping cost subtext doesn't match expectations.");
        //assert the shopping cart order summary taxes total subtext is as expected
        const shoppingCartSummaryTaxesTotalSubtext = await shoppingCartPage.getShoppingCartPageTaxesTotalSubtext();
        assert.strictEqual(shoppingCartSummaryTaxesTotalSubtext, "Taxes total:", "The shopping cart page product table summary taxes total subtext doesn't match expectations.");
        //assert the shopping cart order summary order total subtext is as expected
        const shoppingCartSummaryOrderTotalSubtext = await shoppingCartPage.getShoppingCartPageOrderTotalSubtext();
        assert.strictEqual(shoppingCartSummaryOrderTotalSubtext, "Order total:", "The shopping cart page product table summary order total subtext doesn't match expectations.");
        //may like section
        //assert the shopping cart may like section subtitle is as expected
        const shoppingCartMayLikeSectionSubtitle = await shoppingCartPage.getShoppingCartPageMayLikeSectionSubtitle();
        assert.strictEqual(shoppingCartMayLikeSectionSubtitle, "You may also like", "The shopping cart page may like section subtitle doesn't match expectations.");
    }

    //checkout page (billing address) text element assert method
    async isCheckoutPageBillAddressTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page title is as expected
        const checkoutPageTitle = await checkoutPage.getCheckoutPageTitle();
        assert.strictEqual(checkoutPageTitle, "Address", "The checkout page title doesn't match expectations.");
        //assert the checkout page billing address section title is as expected (Selenium can't seem to find this element with VALID selector)
        //const checkoutPageBillAddressSectionTitle = await checkoutPage.getCheckoutPageBillAddressSectionTitle();
        //assert.strictEqual(checkoutPageBillAddressSectionTitle, "Billing address", "The checkout page billing address section title doesn't match expectations.");
        //input form
        //assert the checkout page billing address first name subtext is as expected
        const checkoutPageBillAddressFirstNameSubtext = await checkoutPage.getCheckoutPageBillAddressFirstNameSubtext();
        assert.strictEqual(checkoutPageBillAddressFirstNameSubtext, "First name", "The checkout page billing address first name subtext doesn't match expectations.");
        //assert the checkout page billing address last name subtext is as expected
        const checkoutPageBillAddressLastNameSubtext = await checkoutPage.getCheckoutPageBillAddressLastNameSubtext();
        assert.strictEqual(checkoutPageBillAddressLastNameSubtext, "Last name", "The checkout page billing address last name subtext doesn't match expectations.");
        //assert the checkout page billing address company subtext is as expected
        const checkoutPageBillAddressCompanySubtext = await checkoutPage.getCheckoutPageBillAddressCompanySubtext();
        assert.strictEqual(checkoutPageBillAddressCompanySubtext, "Company", "The checkout page billing address company subtext doesn't match expectations.");
        //assert the checkout page billing address subtext is as expected
        const checkoutPageBillAddressSubtext = await checkoutPage.getCheckoutPageBillAddressSubtext();
        assert.strictEqual(checkoutPageBillAddressSubtext, "Street address", "The checkout page billing address subtext doesn't match expectations.");
        //assert the checkout page billing address country subtext is as expected
        const checkoutPageBillAddressCountrySubtext = await checkoutPage.getCheckoutPageBillAddressCountrySubtext();
        assert.strictEqual(checkoutPageBillAddressCountrySubtext, "Country", "The checkout page billing address country subtext doesn't match expectations.");
        //assert the checkout page billing address city subtext is as expected
        const checkoutPageBillAddressCitySubtext = await checkoutPage.getCheckoutPageBillAddressCitySubtext();
        assert.strictEqual(checkoutPageBillAddressCitySubtext, "City", "The checkout page billing address city subtext doesn't match expectations.");
        //assert the checkout page billing address post code subtext is as expected
        const checkoutPageBillAddressPostCodeSubtext = await checkoutPage.getCheckoutPageBillAddressPostCodeSubtext();
        assert.strictEqual(checkoutPageBillAddressPostCodeSubtext, "Postcode", "The checkout page billing address post code subtext doesn't match expectations.");
        //assert the checkout page billing address phone subtext is as expected
        const checkoutPageBillAddressPhoneSubtext = await checkoutPage.getCheckoutPageBillAddressPhoneSubtext();
        assert.strictEqual(checkoutPageBillAddressPhoneSubtext, "Phone number", "The checkout page billing address phone subtext doesn't match expectations.");
        //assert the checkout page billing address different addresses subtext is as expected
        const checkoutPageBillAddressDiffAddressSubtext = await checkoutPage.getCheckoutPageBillAddressDiffAddressSubtext();
        assert.strictEqual(checkoutPageBillAddressDiffAddressSubtext, "Use different address for shipping?", "The checkout page billing address different address subtext doesn't match expectations.");
        //aside summary section
        //assert the checkout page aside summary section subtitle is as expected
        const checkoutPageAsideSummarySectionSubtitle = await checkoutPage.getCheckoutPageAsideSummarySubtitle();
        assert.strictEqual(checkoutPageAsideSummarySectionSubtitle, "Summary", "The checkout page aside summary section subtitle doesn't match expectations.");
        //assert the checkout page aside summary items total subtext is as expected
        const checkoutPageAsideSummaryItemsTotalSubtext = await checkoutPage.getCheckoutPageAsideSummaryItemsTotalSubtext();
        assert.strictEqual(checkoutPageAsideSummaryItemsTotalSubtext, "Items total:", "The checkout page aside summary items total subtext doesn't match expectations.");
        //assert the checkout page aside summary discount subtext is as expected
        const checkoutPageAsideSummaryDiscountSubtext = await checkoutPage.getCheckoutPageAsideSummaryDiscountSubtext();
        assert.strictEqual(checkoutPageAsideSummaryDiscountSubtext, "Discount:", "The checkout page aside summary discount subtext doesn't match expectations.");
        //assert the checkout page aside summary estimated cost subtext is as expected
        const checkoutPageAsideSummaryEstCostSubtext = await checkoutPage.getCheckoutPageAsideSummaryEstCostSubtext();
        assert.strictEqual(checkoutPageAsideSummaryEstCostSubtext, "Estimated shipping cost:", "The checkout page aside summary estimated cost subtext doesn't match expectations.");
        //assert the checkout page aside summary taxes total subtext is as expected
        const checkoutPageAsideSummaryTaxesTotalSubtext = await checkoutPage.getCheckoutPageAsideSummaryTaxesTotalSubtext();
        assert.strictEqual(checkoutPageAsideSummaryTaxesTotalSubtext, "Taxes total:", "The checkout page aside summary taxes total subtext doesn't match expectations.");
        //assert the checkout page aside summary order total subtext is as expected
        const checkoutPageAsideSummaryOrderTotalSubtext = await checkoutPage.getCheckoutPageAsideSummaryOrderTotalSubtext();
        assert.strictEqual(checkoutPageAsideSummaryOrderTotalSubtext, "Order total:", "The checkout page aside summary order total subtext doesn't match expectations.");
    }

    //checkout page (shipping address) text element assert test method
    async isCheckoutPageShipAddressTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page shipping address section title is as expected
        const checkoutPageShipAddressSectionTitle = await checkoutPage.getCheckoutPageShipAddressSectionTitle();
        assert.strictEqual(checkoutPageShipAddressSectionTitle, "Shipping address", "The checkout page shipping address title doesn't match expectations.");
        //input form
        //assert the checkout page shipping address first name subtext is as expected
        const checkoutPageShipAddressFirstNameSubtext = await checkoutPage.getCheckoutPageShipAddressFirstNameSubtext();
        assert.strictEqual(checkoutPageShipAddressFirstNameSubtext, "First name", "The checkout page shipping address first name subtext doesn't match expectations.");
        //assert the checkout page shipping address last name subtext is as expected
        const checkoutPageShipAddressLastNameSubtext = await checkoutPage.getCheckoutPageShipAddressLastNameSubtext();
        assert.strictEqual(checkoutPageShipAddressLastNameSubtext, "Last name", "The checkout page shipping address last name subtext doesn't match expectations.");
        //assert the checkout page shipping address company subtext is as expected
        const checkoutPageShipAddressCompanySubtext = await checkoutPage.getCheckoutPageShipAddressCompanySubtext();
        assert.strictEqual(checkoutPageShipAddressCompanySubtext, "Company", "The checkout page shipping address company subtext doesn't match expectations.");
        //assert the checkout page shipping address subtext is as expected
        const checkoutPageShipAddressSubtext = await checkoutPage.getCheckoutPageShipAddressSubtext();
        assert.strictEqual(checkoutPageShipAddressSubtext, "Street address", "The checkout page shipping address subtext doesn't match expectations.");
        //assert the checkout page shipping address country subtext is as expected
        const checkoutPageShipAddressCountrySubtext = await checkoutPage.getCheckoutPageShipAddressCountrySubtext();
        assert.strictEqual(checkoutPageShipAddressCountrySubtext, "Country", "The checkout page shipping address country subtext doesn't match expectations.");
        //assert the checkout page shipping address city subtext is as expected
        const checkoutPageShipAddressCitySubtext = await checkoutPage.getCheckoutPageShipAddressCitySubtext();
        assert.strictEqual(checkoutPageShipAddressCitySubtext, "City", "The checkout page shipping address city subtext doesn't match expectations.");
        //assert the checkout page shipping address post code subtext is as expected
        const checkoutPageShipAddressPostCodeSubtext = await checkoutPage.getCheckoutPageShipAddressPostCodeSubtext();
        assert.strictEqual(checkoutPageShipAddressPostCodeSubtext, "Postcode", "The checkout page shipping address post code subtext doesn't match expectations.");
        //assert the checkout page shipping address phone subtext is as expected
        const checkoutPageShipAddressPhoneSubtext = await checkoutPage.getCheckoutPageShipAddressPhoneSubtext();
        assert.strictEqual(checkoutPageShipAddressPhoneSubtext, "Phone number", "The checkout page shipping address phone subtext doesn't match expectations.");
    }

    //checkout page shipping method section text element assert test method
    async isCheckoutPageShipMethodTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page shipping method section title is as expected
        const checkoutPageShipAddressSectionTitle = await checkoutPage.getCheckoutPageShipMethodSubtitle();
        assert.strictEqual(checkoutPageShipAddressSectionTitle, "Shipment #1", "The checkout page shipping method section title doesn't match expectations.");
    }

    //checkout page payment method section text element assert test method ()
    async isCheckoutPagePaymentMethodTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page payment method section title is as expected
        const checkoutPagePaymentMethodSectionTitle = await checkoutPage.getCheckoutPagePaymentMethodSubtitle();
        assert.strictEqual(checkoutPagePaymentMethodSectionTitle, "Payment #1", "The checkout page payment method section title doesn't match expectations.");
        //assert the checkout page payment method pay pal subtext is as expected
        const checkoutPagePaymentMethodPaypalSubtext = await checkoutPage.getCheckoutPagePaymentMethodPaypalSubtext();
        assert.strictEqual(checkoutPagePaymentMethodPaypalSubtext, "PayPal", "The checkout page payment method paypal subtext doesn't match expectations.");
        //assert the checkout page payment method cash on delivery subtext is as expected (this element's dynamic, depending on the product)
        //const checkoutPagePaymentMethodCashOnDeliverySubtext = await checkoutPage.getCheckoutPagePaymentMethodCashOnDeliverySubtitle();
        //assert.strictEqual(checkoutPagePaymentMethodCashOnDeliverySubtext, "Cash on delivery", "The checkout page payment method cash on delivery subtext doesn't match expectations.");
        //assert the checkout page payment method cash on delivery description is as expected (this element's dynamic, depending on the product)
        //const checkoutPagePaymentMethodCashOnDeliveryDescription = await checkoutPage.getCheckoutPagePaymentMethodCashOnDeliveryDescription();
        //assert.strictEqual(checkoutPagePaymentMethodCashOnDeliveryDescription, "Esse inventore voluptatem nam laudantium.", "The checkout page payment method cash on delivery description doesn't match expectations.");
        //assert the checkout page payment method bank transfer subtext is as expected (this element's dynamic, depending on the product)
        //const checkoutPagePaymentMethodBankTransferSubtext = await checkoutPage.getCheckoutPagePaymentMethodBankTransferSubtitle();
        //assert.strictEqual(checkoutPagePaymentMethodBankTransferSubtext, "Bank transfer", "The checkout page payment method bank transfer subtext doesn't match expectations.");
        //assert the checkout page payment method bank transfer description is as expected (this element's dynamic, depending on the product)
        //const checkoutPagePaymentMethodBankTransferDescription = await checkoutPage.getCheckoutPagePaymentMethodBankTransferDescription();
        //assert.strictEqual(checkoutPagePaymentMethodBankTransferDescription, "Molestias possimus illo dolore esse sed facere voluptatem.", "The checkout page payment method bank transfer description doesn't match expectations.");
        //assert the checkout page payment method mollie payment section subtitle is as expected
        const checkoutPagePaymentMollieSubtitle = await checkoutPage.getCheckoutPagePaymentMethodMollieSubtitle();
        assert.strictEqual(checkoutPagePaymentMollieSubtitle, "Mollie", "The checkout page payment mollie payment section subtitle doesn't match expectations.");
    }

    //checkout page (order summary section) text element assert test method
    async isCheckoutPageOrderSummaryTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page order summary section title is as expected
        const checkoutPageOrderSummarySectionTitle = await checkoutPage.getCheckoutPageOrderSummarySubtitle();
        assert.strictEqual(checkoutPageOrderSummarySectionTitle, "Summary of your order", "The checkout page order summary section title doesn't match expectations.");
        //upper table
        //assert the checkout page order summary upper table currency subtext is as expected
        const checkoutPageOrderSummaryCurrencySubtext = await checkoutPage.getCheckoutPageOrderSummaryCurrencySubtext();
        assert.strictEqual(checkoutPageOrderSummaryCurrencySubtext, "Currency", "The checkout page order summary section upper table currency subtext doesn't match expectations.");
        //assert the checkout page order summary upper table locale subtext is as expected
        const checkoutPageOrderSummaryLocaleSubtext = await checkoutPage.getCheckoutPageOrderSummaryLocaleSubtext();
        assert.strictEqual(checkoutPageOrderSummaryLocaleSubtext, "Locale", "The checkout page order summary section upper table locale subtext doesn't match expectations.");
        //billing address table
        //assert the checkout page order summary billing address table subtext is as expected
        const checkoutPageOrderSummaryBillAddressSubtext = await checkoutPage.getCheckoutPageOrderSummaryBillAddressSubtext();
        assert.strictEqual(checkoutPageOrderSummaryBillAddressSubtext, "Billing address", "The checkout page order summary section billing address table subtext doesn't match expectations.");
        //shipping address table
        //assert the checkout page order summary shipping address table subtext is as expected
        const checkoutPageOrderSummaryShipAddressSubtext = await checkoutPage.getCheckoutPageOrderSummaryShipAddressSubtext();
        assert.strictEqual(checkoutPageOrderSummaryShipAddressSubtext, "Shipping address", "The checkout page order summary section shipping address table subtext doesn't match expectations.");
        //payments section
        //assert the checkout page order summary payments section subtext is as expected
        const checkoutPageOrderSummaryPaymentSecSubtext = await checkoutPage.getCheckoutPageOrderSummaryPaymentsSubtitle();
        assert.strictEqual(checkoutPageOrderSummaryPaymentSecSubtext, "Payments", "The checkout page order summary payments section subtext doesn't match expectations.");
        //shipments section
        //assert the checkout page order summary shipments section subtext is as expected
        const checkoutPageOrderSummaryShipmentSecSubtext = await checkoutPage.getCheckoutPageOrderSummaryShipmentsSubtitle();
        assert.strictEqual(checkoutPageOrderSummaryShipmentSecSubtext, "Shipments", "The checkout page order summary shipments section subtext doesn't match expectations.");
        //order products table
        //assert the checkout page order product table item subtext is as expected
        const checkoutPageOrderProductTableItemSubtext = await checkoutPage.getCheckoutPageOrderSummaryProductTableItemSubtext();
        assert.strictEqual(checkoutPageOrderProductTableItemSubtext, "Item", "The checkout page order summary product table item subtext doesn't match expectations.");
        //assert the checkout page order product table subscription subtext is as expected
        const checkoutPageOrderProductTableSubscriptionSubtext = await checkoutPage.getCheckoutPageOrderSummaryProductTableSubscriptionSubtext();
        assert.strictEqual(checkoutPageOrderProductTableSubscriptionSubtext, "Subscription", "The checkout page order summary product table subscription subtext doesn't match expectations.");
        //assert the checkout page order product table unit price subtext is as expected
        const checkoutPageOrderProductTableUnitPriceSubtext = await checkoutPage.getCheckoutPageOrderSummaryProductTableUnitPriceSubtext();
        assert.strictEqual(checkoutPageOrderProductTableUnitPriceSubtext, "Unit price", "The checkout page order summary product table unit price subtext doesn't match expectations.");
        //assert the checkout page order product table quantity subtext is as expected
        const checkoutPageOrderProductTableQtySubtext = await checkoutPage.getCheckoutPageOrderSummaryProductTableQtySubtext();
        assert.strictEqual(checkoutPageOrderProductTableQtySubtext, "Qty", "The checkout page order summary product table quantity subtext doesn't match expectations.");
        //assert the checkout page order product table subtotal subtext is as expected
        const checkoutPageOrderProductTableSubtotalSubtext = await checkoutPage.getCheckoutPageOrderSummaryProductTableSubtotalSubtext();
        assert.strictEqual(checkoutPageOrderProductTableSubtotalSubtext, "Subtotal", "The checkout page order summary product table subtotal subtext doesn't match expectations.");
        //summary(product table)
        //assert the checkout page order product table summary payments fee subtext is as expected
        const checkoutPageOrderProductTablePaymentsFeeSubtext = await checkoutPage.getCheckoutPageOrderSummaryPaymentFeeSubtext();
        assert.strictEqual(checkoutPageOrderProductTablePaymentsFeeSubtext, "Payment Fee:", "The checkout page order summary product table summary payment fee subtext doesn't match expectations.");
        //assert the checkout page order product table summary items total subtext is as expected
        const checkoutPageOrderProductTableItemsTotalSubtext = await checkoutPage.getCheckoutPageOrderSummaryItemsTotalSubtext();
        assert.strictEqual(checkoutPageOrderProductTableItemsTotalSubtext, "Items total:", "The checkout page order summary product table summary items total subtext doesn't match expectations.");
        //assert the checkout page order product table summary taxes total subtext is as expected
        const checkoutPageOrderProductTableTaxesTotalSubtext = await checkoutPage.getCheckoutPageOrderSummaryTaxesTotalSubtext();
        assert.strictEqual(checkoutPageOrderProductTableTaxesTotalSubtext, "Taxes total:", "The checkout page order summary product table summary taxes total subtext doesn't match expectations.");
        //assert the checkout page order product table summary discount subtext is as expected
        const checkoutPageOrderProductTableDiscountSubtext = await checkoutPage.getCheckoutPageOrderSummaryDiscountSubtext();
        assert.strictEqual(checkoutPageOrderProductTableDiscountSubtext, "Discount:", "The checkout page order summary product table summary discount subtext doesn't match expectations.");
        //assert the checkout page order product table summary shipping total subtext is as expected
        const checkoutPageOrderProductTableShippingTotalSubtext = await checkoutPage.getCheckoutPageOrderSummaryShippingTotalSubtext();
        assert.strictEqual(checkoutPageOrderProductTableShippingTotalSubtext, "Shipping total:", "The checkout page order summary product table summary shipping total subtext doesn't match expectations.");
        //assert the checkout page order product table summary order total subtext is as expected (this element may display 'Total')
        //const checkoutPageOrderProductTableOrderTotalSubtext = await checkoutPage.getCheckoutPageOrderSummaryOrderTotalSubtext();
        //assert.strictEqual(checkoutPageOrderProductTableOrderTotalSubtext, "Order total:", "The checkout page order summary product table summary order total subtext doesn't match expectations.");
        //extra notes section
        //assert the checkout page order product table summary extra notes subtext is as expected
        const checkoutPageOrderProductTableExtraNotesSubtext = await checkoutPage.getCheckoutPageOrderSummaryExtraNotesSubtext();
        assert.strictEqual(checkoutPageOrderProductTableExtraNotesSubtext, "Extra notes", "The checkout page order summary product table summary extra notes section subtext doesn't match expectations.");
    }

    //order history page text element assert test method
    async isOrderHistoryPageTextElementAsExpected(){
        const orderHistoryPage = new OrderHistoryPage(this.driver);
        //order table
        //assert the order history page state subtext is as expected
        const orderHistoryPageStateSubtext = await orderHistoryPage.getOrderHistoryStateSubtext();
        assert.strictEqual(orderHistoryPageStateSubtext, "State", "The order history page state subtext doesn't match expectations.");
        //assert the order history page created at subtext is as expected
        const orderHistoryPageCreatedAtSubtext = await orderHistoryPage. getOrderHistoryCreatedAtSubtext();
        assert.strictEqual(orderHistoryPageCreatedAtSubtext, "Created at", "The order history page created at subtext doesn't match expectations.");
        //assert the order history page currency subtext is as expected
        const orderHistoryPageCurrencySubtext = await orderHistoryPage.getOrderHistoryCurrencySubtext();
        assert.strictEqual(orderHistoryPageCurrencySubtext, "Currency", "The order history page currency subtext doesn't match expectations.");
        //invoice table
        //assert the order history page state subtitle is as expected
        const orderHistoryPageInvoicesSectionSubtitle = await orderHistoryPage.getOrderHistoryInvoicesSectionSubtitle();
        assert.strictEqual(orderHistoryPageInvoicesSectionSubtitle, "Invoices", "The order history page invoices section subtitle doesn't match expectations.");
        //assert the order history page order number subtext is as expected
        const orderHistoryPageOrderNumberSubtext = await orderHistoryPage.getOrderHistoryOrderNumberSubtext();
        assert.strictEqual(orderHistoryPageOrderNumberSubtext, "Number", "The order history page order number subtext doesn't match expectations.");
        //assert the order history page order issued at subtext is as expected
        const orderHistoryPageOrderIssuedAtSubtext = await orderHistoryPage.getOrderHistoryIssuedAtSubtext();
        assert.strictEqual(orderHistoryPageOrderIssuedAtSubtext, "Issued at", "The order history page order issued at subtext doesn't match expectations.");
        //assert the order history page order actions subtext is as expected
        const orderHistoryPageOrderActionsSubtext = await orderHistoryPage.getOrderHistoryActionsSubtext();
        assert.strictEqual(orderHistoryPageOrderActionsSubtext, "Actions", "The order history page order actions subtext doesn't match expectations.");
        //billing address
        //assert the order history page order billing address subtitle is as expected
        const orderHistoryPageOrderBillAddressSubtitle = await orderHistoryPage.getOrderHistoryBillAddressSubtext();
        assert.strictEqual(orderHistoryPageOrderBillAddressSubtitle, "Billing address", "The order history page order billing address subtitle doesn't match expectations.");
        //shipping address
        //assert the order history page order shipping address subtitle is as expected
        const orderHistoryPageOrderShipAddressSubtitle = await orderHistoryPage.getOrderHistoryShipAddressSubtext();
        assert.strictEqual(orderHistoryPageOrderShipAddressSubtitle, "Shipping address", "The order history page order shipping address subtitle doesn't match expectations.");
        //payments section
        //assert the order history page payments subtext is as expected
        const orderHistoryPagePaymentsSubtext = await orderHistoryPage.getOrderHistoryPaymentsSubtext();
        assert.strictEqual(orderHistoryPagePaymentsSubtext, "Payments", "The order history page payments subtext doesn't match expectations.");
        //shipments section
        //assert the order history page payments subtext is as expected
        const orderHistoryPageShipmentsSubtext = await orderHistoryPage.getOrderHistoryShipmentsSubtext();
        assert.strictEqual(orderHistoryPageShipmentsSubtext, "Shipments", "The order history page shipments subtext doesn't match expectations.");
        //product table
        //assert the order history page product table item subtext is as expected
        const orderHistoryPageItemSubtext = await orderHistoryPage.getOrderHistoryItemSubtext();
        assert.strictEqual(orderHistoryPageItemSubtext, "Item", "The order history page product table item subtext doesn't match expectations.");
        //assert the order history page product table subscription subtext is as expected
        const orderHistoryPageSubscriptionSubtext = await orderHistoryPage.getOrderHistorySubscriptionSubtext();
        assert.strictEqual(orderHistoryPageSubscriptionSubtext, "Subscription", "The order history page product table subscription subtext doesn't match expectations.");
        //assert the order history page product table unit price subtext is as expected
        const orderHistoryPageUnitPriceSubtext = await orderHistoryPage.getOrderHistoryUnitPriceSubtext();
        assert.strictEqual(orderHistoryPageUnitPriceSubtext, "Unit price", "The order history page product table unit price subtext doesn't match expectations.");
        //assert the order history page product table quantity subtext is as expected
        const orderHistoryPageQuantitySubtext = await orderHistoryPage.getOrderHistoryProductQuantitySubtext();
        assert.strictEqual(orderHistoryPageQuantitySubtext, "Qty", "The order history page product table quantity subtext doesn't match expectations.");
        //assert the order history page product table subtotal price subtext is as expected
        const orderHistoryPageSubtotalSubtext = await orderHistoryPage.getOrderHistoryProductSubtotalPriceSubtext();
        assert.strictEqual(orderHistoryPageSubtotalSubtext, "Subtotal", "The order history page product table subtotal subtext doesn't match expectations.");
        //order summary
        //assert the order history page order summary payment fee subtext is as expected
        const orderHistoryPagePaymentFeeSubtext = await orderHistoryPage.getOrderHistoryPaymentFeeSubtext();
        assert.strictEqual(orderHistoryPagePaymentFeeSubtext, "Payment Fee:", "The order history page order summary payment fee subtext doesn't match expectations.");
        //assert the order history page order summary items total subtext is as expected
        const orderHistoryPageItemsTotalSubtext = await orderHistoryPage.getOrderHistoryItemsTotalSubtext();
        assert.strictEqual(orderHistoryPageItemsTotalSubtext, "Items total:", "The order history page order summary items total subtext doesn't match expectations.");
        //assert the order history page order summary taxes total subtext is as expected
        const orderHistoryPageTaxesTotalSubtext = await orderHistoryPage.getOrderHistoryTaxesTotalSubtext();
        assert.strictEqual(orderHistoryPageTaxesTotalSubtext, "Taxes total:", "The order history page order summary taxes total subtext doesn't match expectations.");
        //assert the order history page order summary discount subtext is as expected
        const orderHistoryPageDiscountSubtext = await orderHistoryPage.getOrderHistoryDiscountSubtext();
        assert.strictEqual(orderHistoryPageDiscountSubtext, "Discount:", "The order history page order summary discount subtext doesn't match expectations.");
        //assert the order history page order summary shipping total subtext is as expected
        const orderHistoryPageShippingTotalSubtext = await orderHistoryPage.getOrderHistoryShippingTotalSubtext();
        assert.strictEqual(orderHistoryPageShippingTotalSubtext, "Shipping total:", "The order history page order summary shipping total subtext doesn't match expectations.");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page product cards data logger method
    async logHomePageProductCardsData(){
        const homePage = new HomePage(this.driver);
        //latest deals
        //log home page latest deals product name(s)
        const homePageLatestDealsProductNames = await homePage.getHomePageLatestDealsProductName();
        Logger.info("Home page latest deals product name(s): " + homePageLatestDealsProductNames);
        //log home page latest deals product spring sale text(s)
        //const homePageLatestDealsSpringSaleTexts = await homePage.getHomePageLatestDealsProductSpringSaleText();
        //Logger.info("Home page latest deals product spring sale(s): " + homePageLatestDealsSpringSaleTexts);
        //log home page latest deals product unit price(s)
        const homePageLatestDealsProductUnitPrices = await homePage.getHomePageLatestDealsProductUnitPrice();
        Logger.info("Home page latest deals product unit price(s): " + homePageLatestDealsProductUnitPrices + "\n");
        //new collection products
        //log home page new collection product name(s)
        const homePageNewCollectionProductNames = await homePage.getHomePageNewCollectionProductName();
        Logger.info("Home page new collection product name(s): " + homePageNewCollectionProductNames);
        //log home page new collection product unit price(s)
        const homePageNewCollectionProductUnitPrices = await homePage.getHomePageNewCollectionProductUnitPrice();
        Logger.info("Home page new collection product unit price(s): " + homePageNewCollectionProductUnitPrices);
        //latest products
        //log home page latest products product name(s)
        const homePageLatestProductsProductNames = await homePage.getHomePageLatestProductsProductName();
        Logger.info("Home page latest products product name(s): " + homePageLatestProductsProductNames);
        //log home page latest products product spring sale text(s)
        //const homePageLatestProductsSpringSaleTexts = await homePage.getHomePageLatestProductsProductSpringSale();
        //Logger.info("Home page latest products product spring sale(s): " + homePageLatestProductsSpringSaleTexts);
        //log home page latest products product unit price(s)
        const homePageLatestProductsProductUnitPrices = await homePage.getHomePageLatestProductsProductUnitPrice();
        Logger.info("Home page latest products product unit price(s): " + homePageLatestProductsProductUnitPrices);
    }

    //header shopping cart modal product data logger method
    async logHeaderShoppingCartModalProductData(){
        const generalPage = new GeneralPage(this.driver);
        console.log("Header shopping cart modal displayed data: " + "\n");
        //log header shopping cart modal product name(s)
        const headerShopCartModalProductNames = await generalPage.getHeaderShoppingCartModalProductName();
        Logger.info("Header shopping cart modal product name(s): " + headerShopCartModalProductNames);
        //log header shopping cart modal product description(s)
        const headerShopCartModalProductDescription = await generalPage.getHeaderShoppingCartModalProductDescription();
        Logger.info("Header shopping cart modal product description(s): " + headerShopCartModalProductDescription);
        //log header shopping cart modal product quantity(ies)
        const headerShopCartModalProductQty = await generalPage.getHeaderShoppingCartModalProductQuantity();
        Logger.info("Header shopping cart modal product quantity(ies): " + headerShopCartModalProductQty);
        //log header shopping cart modal product unit price(s)
        const headerShopCartModalProductUnitPrice = await generalPage.getHeaderShoppingCartModalProductUnitPrice();
        Logger.info("Header shopping cart modal product unit price(s): " + headerShopCartModalProductUnitPrice);
        //log header shopping cart modal subtotal price
        const headerShopCartModalSubtotalPrice = await generalPage.getHeaderShoppingCartModalSubtotalPrice();
        Logger.info("Header shopping cart modal subtotal price: " + headerShopCartModalSubtotalPrice);
    }

    //account page dashboard data logger method
    async logAccountDashboardPageData(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //log account dashboard page username
        const accountDashboardPageUserName = await accountDashboardPage.getAccountDashboardPageUserName();
        Logger.info("Account dashboard page displayed user name: " + accountDashboardPageUserName);
        //log account dashboard page user email
        const accountDashboardPageUserEmail = await accountDashboardPage.getAccountDashboardPageUserEmail();
        Logger.info("Account dashboard page displayed user email: " + accountDashboardPageUserEmail);
    }

    //address book dashboard data logger method
    async logAddressBookDashboardPageData(){
        const addressBookDashboardPage = new AddressBookDashboardPage(this.driver);
        //log address book dashboard page username(usernames)
        const addressBookDashboardPageUserName = await addressBookDashboardPage.getAddressBookDashboardAddressUserName();
        Logger.info("Address book dashboard page displayed user name(s): " + addressBookDashboardPageUserName);
        //log address book dashboard page user street(s)
        const addressBookDashboardPageUserStreet = await addressBookDashboardPage.getAddressBookDashboardAddressUserStreet();
        Logger.info("Address book dashboard page displayed user street(s): " + addressBookDashboardPageUserStreet);
        //log address book dashboard page user city(ies)
        const addressBookDashboardPageUserCity = await addressBookDashboardPage.getAddressBookDashboardAddressUserCity();
        Logger.info("Address book dashboard page displayed user city(ies): " + addressBookDashboardPageUserCity);
        //log address book dashboard page user country(ies)
        const addressBookDashboardPageUserCountry = await addressBookDashboardPage.getAddressBookDashboardAddressUserCountry();
        Logger.info("Address book dashboard page displayed user country(ies): " + addressBookDashboardPageUserCountry);
    }

    //single product page data logger method
    async logSingleProductPageData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //log single product page title (product name)
        const singleProductPageTitle = await singleProductPage.getSingleProductPageTitle();
        Logger.info("Single product page title (product name): " + singleProductPageTitle);
        //log single product page product unit price
        const singleProductPageProductUnitPrice = await singleProductPage.getSingleProductPageProductUnitPrice();
        Logger.info("Single product page product unit price: " + singleProductPageProductUnitPrice);
        //log single product page product short description
        const singleProductPageProductShortDesc = await singleProductPage.getSingleProductPageProductShortDescription();
        Logger.info("Single product page product short description: " + singleProductPageProductShortDesc);
        //log single product page product tag
        const singleProductPageProductTag = await singleProductPage.getSingleProductPageProductTag();
        Logger.info("Single product page product tag: " + singleProductPageProductTag);
        //log single product page product description
        const singleProductPageProductDescription = await singleProductPage.getSingleProductPageProductDescription();
        Logger.info("Single product page product description: " + singleProductPageProductDescription);
        //attributes
        //log single product page product brand
        const singleProductPageProductBrand = await singleProductPage.getSingleProductPageProductBrand();
        Logger.info("Single product page product brand (attribute): " + singleProductPageProductBrand);
        //log single product page product collection
        const singleProductPageProductCollection = await singleProductPage.getSingleProductPageProductCollection();
        Logger.info("Single product page product collection (attribute): " + singleProductPageProductCollection);
        //log single product page product material
        const singleProductPageProductMaterial = await singleProductPage.getSingleProductPageProductMaterial();
        Logger.info("Single product page product material (attribute): " + singleProductPageProductMaterial);
        //you may also like products section
        //log single product page you may also like product name(s)
        const singleProductPageMayLikeProductName = await singleProductPage.getSingleProductMayLikeProductName();
        Logger.info("Single product page you may also like product name(s): " + singleProductPageMayLikeProductName);
        //log single product page you may also like product unit price(s)
        const singleProductPageMayLikeProductUnitPrice = await singleProductPage.getSingleProductMayLikeProductUnitPrice();
        Logger.info("Single product page you may also like product unit price(s): " + singleProductPageMayLikeProductUnitPrice);
        //best sales products section
        //log single product page best sales product name(s)
        const singleProductPageBestSalesProductName = await singleProductPage.getSingleProductBestSalesProductName();
        Logger.info("Single product page best sales product name(s): " + singleProductPageBestSalesProductName);
        //log single product page best sales product unit price(s)
        const singleProductPageBestSalesProductUnitPrice = await singleProductPage.getSingleProductBestSalesProductUnitPrice();
        Logger.info("Single product page best sales product unit price(s): " + singleProductPageBestSalesProductUnitPrice);
    }

    //add review page product data logger method
    async logAddReviewPageProductData(){
        const addReviewPage = new AddReviewPage(this.driver);
        //log add review page product name
        const addReviewPageProductName = await addReviewPage.getAddReviewPageProductName();
        Logger.info("Add review page product name: " + addReviewPageProductName);
        //log add review page product unit price
        const addReviewPageProductUnitPrice = await addReviewPage.getAddReviewPageProductUnitPrice();
        Logger.info("Add review page product unit price: " + addReviewPageProductUnitPrice);
    }

    //single category dashboard page data logger method
    async logSingleCategoryDashboardPageData(){
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        //assert the single category dashboard page subtitle is as expected
        const singleCategoryDashboardPageSubtitle = await singleCategoryDashboardPage.getSingleCategoryDashboardPageSubtitle();
        Logger.info("Displayed single category dashboard subtitle: ", singleCategoryDashboardPageSubtitle);
        //log single category dashboard page product name(s)
        const singleCategoryPageProductName = await singleCategoryDashboardPage.getSingleCategoryProductName();
        Logger.info("Single category dashboard page product name(s): " + singleCategoryPageProductName);
        //log single category dashboard page product unit price(s)
        const singleCategoryPageProductUnitPrice = await singleCategoryDashboardPage.getSingleCategoryProductUnitPrice();
        Logger.info("Single category dashboard page product unit price(s): " + singleCategoryPageProductUnitPrice);
    }

    //wishlist page product data logger method
    async logWishlistPageProductData(){
        const wishlistPage = new WishlistPage(this.driver);
        Logger.info("Wishlist page product table displayed data: " + "\n");
        //log wishlist page product name(s)
        const wishlistPageProductName = await wishlistPage.getWishlistPageProductName();
        Logger.info("Wishlist page product table product name(s): " + wishlistPageProductName);
        //log wishlist page product unit price(s)
        const wishlistPageProductUnitPrice = await wishlistPage.getWishlistPageProductUnitPrice();
        Logger.info("Wishlist page product table product unit price(s): " + wishlistPageProductUnitPrice);
        //log wishlist page product quantity(ies)
        const wishlistPageProductQuantity = await wishlistPage.getWishlistPageProductQuantity();
        Logger.info("Wishlist page product table product quantity(ies): " + wishlistPageProductQuantity);
    }

    //shopping cart page product data logger method
    async logShoppingCartPageProductData(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        Logger.info("Shopping cart product table displayed data: " + "\n");
        //log shopping cart page product name(s)
        const shoppingCartPageProductName = await shoppingCartPage.getShoppingCartTableProductName();
        Logger.info("Shopping cart product table product name(s): " + shoppingCartPageProductName);
        //log shopping cart page product description(s)
        const shoppingCartPageProductDesc = await shoppingCartPage.getShoppingCartTableProductDescription();
        Logger.info("Shopping cart product table product description(s): " + shoppingCartPageProductDesc);
        //log shopping cart page product unit price(s)
        const shoppingCartPageProductUnitPrice = await shoppingCartPage.getShoppingCartTableProductUnitPrice();
        Logger.info("Shopping cart product table product unit price(s): " + shoppingCartPageProductUnitPrice);
        //log shopping cart page product quantity(ies)
        const shoppingCartPageProductQuantity = await shoppingCartPage.getShoppingCartTableProductQuantity();
        Logger.info("Shopping cart product table product quantity(ies): " + shoppingCartPageProductQuantity);
        //log shopping cart page product total price(s)
        const shoppingCartPageProductTotalPrice = await shoppingCartPage.getShoppingCartTableProductTotalPrice();
        Logger.info("Shopping cart product table product total price(s): " + shoppingCartPageProductTotalPrice);
        //summary section
        Logger.info("Shopping cart order summary section displayed data: " + "\n")
        //log shopping cart page order summary items total price
        const shoppingCartPageSummaryItemsTotalPrice = await shoppingCartPage.getShoppingCartItemsTotalPrice();
        Logger.info("Shopping cart order summary items total price: " + shoppingCartPageSummaryItemsTotalPrice);
        //log shopping cart page order summary estimated shipping cost
        const shoppingCartPageSummaryEstCost = await shoppingCartPage.getShoppingCartEstimatedCost();
        Logger.info("Shopping cart order summary estimated shipping cost: " + shoppingCartPageSummaryEstCost);
        //log shopping cart page order summary taxes total
        const shoppingCartPageSummaryTaxesTotal = await shoppingCartPage.getShoppingCartTaxesTotal();
        Logger.info("Shopping cart order summary taxes total: " + shoppingCartPageSummaryTaxesTotal);
        //log shopping cart page order summary total price
        const shoppingCartPageOrderSummaryTotalPrice = await shoppingCartPage.getShoppingCartOrderTotalPrice();
        Logger.info("Shopping cart order summary total price: " + shoppingCartPageOrderSummaryTotalPrice);
        //may like section
        Logger.info("Shopping cart you may like section product displayed data: " + "\n");
        //log shopping cart may like section product name(s)
        const shoppingCartPageMayLikeProductName = await shoppingCartPage.getShoppingCartMayLikeSectionProductName();
        Logger.info("Shopping cart page may like section product name(s): " + shoppingCartPageMayLikeProductName);
        //log shopping cart may like section product spring sale tag text(s)
        const shoppingCartPageMayLikeProductSpringSaleTagText = await shoppingCartPage.getShoppingCartMayLikeSectionProductSpringSale();
        Logger.info("Shopping cart page may like section product spring sale tag text(s): " + shoppingCartPageMayLikeProductSpringSaleTagText);
        //log shopping cart may like section product unit price(s)
        const shoppingCartPageMayLikeProductUnitPrice = await shoppingCartPage.getShoppingCartMayLikeSectionProductUnitPrice();
        Logger.info("Shopping cart page may like section product unit price(s): " + shoppingCartPageMayLikeProductUnitPrice);
    }

    //checkout page (aside summary section) order data logger method
    async logCheckoutPageAsideSummaryProductData(){
        const checkoutPage = new CheckoutPage(this.driver);
        Logger.info("Checkout page aside order summary section product displayed data: " + "\n");
        //log checkout page aside order summary section product name(s)
        const checkoutPageAsideSummaryProductName = await checkoutPage.getCheckoutPageAsideSummaryProductName();
        Logger.info("Checkout page aside order summary section product name(s): " + checkoutPageAsideSummaryProductName);
        //log checkout page aside order summary section product quantity(ies)
        const checkoutPageAsideSummaryProductQty = await checkoutPage.getCheckoutPageAsideSummaryProductQuantity();
        Logger.info("Checkout page aside order summary section product quantity(ies): " + checkoutPageAsideSummaryProductQty);
        //log checkout page aside order summary section product price(s)
        const checkoutPageAsideSummaryProductPrice = await checkoutPage.getCheckoutPageAsideSummaryProductPrice();
        Logger.info("Checkout page aside order summary section product price(s): " + checkoutPageAsideSummaryProductPrice);
    }

    //log checkout page order summary data method
    async logCheckoutPageOrderSummaryData(){
        const checkoutPage = new CheckoutPage(this.driver);
        Logger.info("Checkout page order summary section product displayed data: " + "\n");
        //log checkout page order summary section currency
        const checkoutPageOrderSummaryCurrency = await checkoutPage.getCheckoutPageOrderSummaryCurrency();
        Logger.info("Checkout page order summary displayed currency: " + checkoutPageOrderSummaryCurrency);
        //log checkout page order summary section locale
        const checkoutPageOrderSummaryLocale = await checkoutPage.getCheckoutPageOrderSummaryLocale();
        Logger.info("Checkout page order summary displayed locale: " + checkoutPageOrderSummaryLocale);
        //billing address table
        Logger.info("Checkout page order summary section displayed billing address: " + "\n");
        //log checkout page order summary section billing address username
        const checkoutPageBillAddressUserName = await checkoutPage.getCheckoutPageOrderSummaryBillAddressUserName();
        Logger.info("Checkout page order summary billing address username: " + checkoutPageBillAddressUserName);
        //log checkout page order summary section billing address
        const checkoutPageBillAddress = await checkoutPage.getCheckoutPageOrderSummaryBillAddress();
        Logger.info("Checkout page order summary billing address: " + checkoutPageBillAddress);
        //shipping address table
        Logger.info("Checkout page order summary section displayed shipping address: " + "\n");
        //log checkout page order summary section shipping address username
        const checkoutPageShipAddressUserName = await checkoutPage.getCheckoutPageOrderSummaryShipAddressUserName();
        Logger.info("Checkout page order summary shipping address username: " + checkoutPageShipAddressUserName);
        //log checkout page order summary section billing address
        const checkoutPageShipAddress = await checkoutPage.getCheckoutPageOrderSummaryShipAddress();
        Logger.info("Checkout page order summary shipping address: " + checkoutPageShipAddress);
        //payments section
        Logger.info("Checkout page order summary payments section displayed data: " + "\n");
        //log checkout page order summary payments section payment cost
        const checkoutPagePaymentCost = await checkoutPage.getCheckoutPageOrderSummaryPaymentsCost();
        Logger.info("Checkout page order summary payment cost: " + checkoutPagePaymentCost);
        //shipments section
        Logger.info("Checkout page order summary shipments section displayed data: " + "\n");
        //log checkout page order summary shipments section payment cost
        const checkoutPageShipmentCost = await checkoutPage.getCheckoutPageOrderSummaryShipmentsCost();
        Logger.info("Checkout page order summary payment cost: " + checkoutPageShipmentCost);
        //product table
        Logger.info("Checkout page order summary product table displayed data: " + "\n");
        //log checkout page order summary product table product name(s)
        const checkoutPageProductName = await checkoutPage.getOrderSummaryProductName();
        Logger.info("Checkout page order summary product name(s): " + checkoutPageProductName);
        //log checkout page order summary product table product description(s) (some elements may be small, not span)
        const checkoutPageProductDesc = await checkoutPage.getOrderSummaryProductDesc();
        Logger.info("Checkout page order summary product description(s): " + checkoutPageProductDesc);
        //log checkout page order summary product table product unit price(s)
        const checkoutPageProductUnitPrice = await checkoutPage.getOrderSummaryProductUnitPrice();
        Logger.info("Checkout page order summary product unit price(s): " + checkoutPageProductUnitPrice);
        //log checkout page order summary product table product quantity(ies)
        const checkoutPageProductQty = await checkoutPage.getOrderSummaryProductQuantity();
        Logger.info("Checkout page order summary product quantity(ies): " + checkoutPageProductQty);
        //log checkout page order summary product table product subtotal price(s)
        const checkoutPageProductSubtotalPrice = await checkoutPage.getOrderSummaryProductSubtotalPrice();
        Logger.info("Checkout page order summary product subtotal price(s): " + checkoutPageProductSubtotalPrice);
        //summary section
        Logger.info("Checkout page order summary section displayed data: " + "\n");
        //log checkout page order summary payment fee
        const checkoutPagePaymentFee = await checkoutPage.getCheckoutPageOrderSummaryPaymentFee();
        Logger.info("Checkout page order summary payment fee: " + checkoutPagePaymentFee);
        //log checkout page order summary items total price
        const checkoutPageItemsTotalPrice = await checkoutPage.getCheckoutPageOrderSummaryItemsTotalPrice();
        Logger.info("Checkout page order summary items total price: " + checkoutPageItemsTotalPrice);
        //log checkout page order summary taxes total (amount)
        const checkoutPageSummaryTaxesTotal = await checkoutPage.getCheckoutPageOrderSummaryTaxesTotalPrice();
        Logger.info("Checkout page order summary taxes total: " + checkoutPageSummaryTaxesTotal);
        //log checkout page order summary items discount price
        const checkoutPageItemsDiscount = await checkoutPage.getCheckoutPageOrderSummaryItemsDiscount();
        Logger.info("Checkout page order summary items discount: " + checkoutPageItemsDiscount);
        //log checkout page order summary shipping total price
        const checkoutPageShipTotalPrice = await checkoutPage.getCheckoutPageOrderSummaryShippingTotalPrice();
        Logger.info("Checkout page order summary shipping total price: " + checkoutPageShipTotalPrice);
        //log checkout page order summary order total price
        const checkoutPageOrderTotalPrice = await checkoutPage.getCheckoutPageOrderSummaryOrderTotalPrice();
        Logger.info("Checkout page order summary order total price: " + checkoutPageOrderTotalPrice);
    }

    //order history page data logger method
    async logOrderHistoryPageData(){
        const orderHistoryPage = new OrderHistoryPage(this.driver);
        Logger.info("Order history page displayed data: " + "\n");
        //log order history page title
        const orderHistoryPageTitle = await orderHistoryPage.getOrderHistoryPageTitle();
        Logger.info("Order history page title (it's dynamic): " + orderHistoryPageTitle);
        //order table
        //log order history page order state
        const orderState = await orderHistoryPage.getOrderState();
        Logger.info("Order state: " + orderState);
        //log order history page order created at date
        const orderCreatedAtDate = await orderHistoryPage.getOrderCreatedAtDate();
        Logger.info("Order created at date: " + orderCreatedAtDate);
        //log order history page order currency
        const orderCurrency = await orderHistoryPage.getOrderCurrency();
        Logger.info("Order currency: " + orderCurrency);
        //invoices table
        //log order history page order number
        const orderNumber = await orderHistoryPage.getOrderNumber();
        Logger.info("Order number: " + orderNumber);
        //log order history page order issued at date
        const orderIssuedAtDate = await orderHistoryPage.getOrderIssuedAtDate();
        Logger.info("Order issued at date: " + orderIssuedAtDate);
        //billing address
        //log order history page billing address username
        const orderBillAddressUserName = await orderHistoryPage.getBillingAddressUserName();
        Logger.info("Order billing address user name: " + orderBillAddressUserName);
        //log order history page billing address
        const orderBillAddress = await orderHistoryPage.getBillingAddress();
        Logger.info("Order billing address: " + orderBillAddress);
        //shipping address
        //log order history page shipping address username
        const orderShipAddressUserName = await orderHistoryPage.getShippingAddressUserName();
        Logger.info("Order shipping address user name: " + orderShipAddressUserName);
        //log order history page shipping address
        const orderShipAddress = await orderHistoryPage.getShippingAddress();
        Logger.info("Order shipping address: " + orderShipAddress);
        //product table
        Logger.info("Order history page product table displayed data: " + "\n");
        //log order history page product name(s)
        const orderProductName = await orderHistoryPage.getOrderHistoryProductName();
        Logger.info("Order product table product name(s): " + orderProductName);
        //log order history page product description(s)
        const orderProductDesc = await orderHistoryPage.getOrderHistoryProductDescription();
        Logger.info("Order product table product description(s): " + orderProductDesc);
        //log order history page product unit price(s)
        const orderProductUnitPrice = await orderHistoryPage.getOrderHistoryProductUnitPrice();
        Logger.info("Order product table product unit price(s): " + orderProductUnitPrice);
        //log order history page product quantity(ies)
        const orderProductQuantity = await orderHistoryPage.getOrderHistoryProductQuantity();
        Logger.info("Order product table product quantity(ies): " + orderProductQuantity);
        //log order history page product subtotal price(s)
        const orderProductSubtotalPrice = await orderHistoryPage.getOrderHistoryProductSubtotalPrice();
        Logger.info("Order product table product subtotal price(s): " + orderProductSubtotalPrice);
        //order summary
        //log order history page order payment fee price
        const orderProductOrderPaymentFee = await orderHistoryPage.getOrderPaymentFee();
        Logger.info("Order product table order payment fee: " + orderProductOrderPaymentFee);
        //log order history page order items total price
        const orderProductOrderItemTotalPrice = await orderHistoryPage.getOrderItemsTotalPrice();
        Logger.info("Order product table order items total price: " + orderProductOrderItemTotalPrice);
        //log order history page order taxes total price
        const orderProductOrderTaxesTotalPrice = await orderHistoryPage.getOrderTaxesTotalPrice();
        Logger.info("Order product table order taxes total: " + orderProductOrderTaxesTotalPrice);
        //log order history page order discount
        const orderProductOrderDiscount = await orderHistoryPage.getOrderDiscount();
        Logger.info("Order product table order discount: " + orderProductOrderDiscount);
        //log order history page order shipping total price
        const orderProductOrderShipTotalPrice = await orderHistoryPage.getOrderShippingTotalPrice();
        Logger.info("Order product table order shipping total price: " + orderProductOrderShipTotalPrice);
        //log order history page order total price
        const orderProductOrderTotalPrice = await orderHistoryPage.getOrderTotalPrice();
        Logger.info("Order product table order total price: " + orderProductOrderTotalPrice);
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, {recursive: true});
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }

}
module.exports = TestMethods;