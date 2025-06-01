const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Login Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Login Tests", () => {

        //Test 003 -> valid user login test
        test("Valid User Login Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
        });

        //Test 003a -> valid user login with valid username test (the login has failed, the system doesn't recognize the valid username or the subtext of the input field is misleading, test has failed)
        test("Valid User Login With Valid Username Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login with valid username test
            await testMethods.validUserLoginWithValidUsernameTest();
        });

        //Test 003b -> valid user login with edited login email test
        test("Valid User Login With Edited Login Email Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid edit user account data test
            await testMethods.validEditUserAccountDataTest();
            //valid user login with edited login email test
            await testMethods.validUserLoginEditedLoginEmailTest();
        });

        //Test 003c -> valid user login with edited login password test
        test("Valid User Login With Edited Login Password Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid edit user password test
            await testMethods.validChangeUserPasswordTest();
            //user logout test
            await testMethods.userLogoutTest();
            //valid user login with edited login password test
            await testMethods.validUserLoginEditedLoginPasswordTest();
        });

    });

    describe("Invalid User Login Tests", () => {

        describe("Invalid User Login Tests - No Singular Input", () => {

            //Test 003d -> invalid user login test - no login email
            test("Invalid User Login Test - No Login Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid user login test - no login email
                await testMethods.invalidUserLoginNoLoginEmailTest();
            });

            //Test 003e -> invalid user login test - no login password
            test("Invalid User Login Test - No Login Password", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid user login test - no login password
                await testMethods.invalidUserLoginNoLoginPasswordTest();
            });

        });

        describe("Invalid User Login Tests - Invalid Singular Input", () => {

            //Test 003c -> invalid user login test - invalid login email
            test("Invalid User Login Test - Invalid Login Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid user login test - invalid login email
                await testMethods.invalidUserLoginInvalidLoginEmailTest();
            });

            //Test 003d -> invalid user login test - invalid login password
            test("Invalid User Login Test - Invalid Login Password", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid user login test - invalid login password
                await testMethods.invalidUserLoginInvalidLoginPasswordTest();
            });

        });

    });

    describe("User Logout Test", () => {

        //Test 003e -> user logout test
        test("User Logout Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //user logout test
            await testMethods.userLogoutTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


