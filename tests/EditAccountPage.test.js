const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Edit Account Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Edit User Account Data Test", () => {

        //Test 005 -> valid edit user account data test
        test("Valid Edit User Account Data Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid edit user account data test
            await testMethods.validEditUserAccountDataTest();
        });

    });

    describe("Invalid Edit User Account Data Tests", () => {

        describe("Invalid Edit User Account Data Tests - No Singular Input", () => {

            //Test 005a -> invalid edit user account data test - no user first name
            test("Invalid Edit User Account Data Test - No First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - no user first name
                await testMethods.invalidEditUserAccountNoFirstNameTest();
            });

            //Test 005b -> invalid edit user account data test - no user last name
            test("Invalid Edit User Account Data Test - No Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - no user last name
                await testMethods.invalidEditUserAccountNoLastNameTest();
            });

            //Test 005c -> invalid edit user account data test - no user email
            test("Invalid Edit User Account Data Test - No Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - no user email
                await testMethods.invalidEditUserAccountNoEmailTest();
            });

        });

        describe("Invalid Edit User Account Data Tests - Too Short Singular Input", () => {

            //Test 005d -> invalid edit user account data test - too short user first name (1 char)
            test("Invalid Edit User Account Data Test - Too Short First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - too short user first name (1 char)
                await testMethods.invalidEditUserAccountTooShortFirstNameTest();
            });

            //Test 005e -> invalid edit user account data test - too short user last name (1 char)
            test("Invalid Edit User Account Data Test - Too Short Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - too short user last name (1 char)
                await testMethods.invalidEditUserAccountTooShortLastNameTest();
            });

            //Test 005f -> invalid edit user account data test - too short user email (1 char -> name, domain)
            test("Invalid Edit User Account Data Test - Too Short Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - too short user email (1 char -> name, domain)
                await testMethods.invalidEditUserAccountTooShortEmailTest();
            });

        });

        describe("Invalid Edit User Account Data Tests - Too Long Singular Input", () => {

            //Test 005g -> invalid edit user account data test - too long user first name (100 chars) (the user account gets edited, test has failed)
            test("Invalid Edit User Account Data Test - Too Long First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - too long user first name (100 chars)
                await testMethods.invalidEditUserAccountTooLongFirstNameTest();
            });

            //Test 005h -> invalid edit user account data test - too long user last name (100 chars) (the user account gets edited, test has failed)
            test("Invalid Edit User Account Data Test - Too Long Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - too long user last name (100 chars)
                await testMethods.invalidEditUserAccountTooLongLastNameTest();
            });

            //Test 005i -> invalid edit user account data test - too long user email (100 chars -> name, domain) (the user account gets edited, test has failed)
            test("Invalid Edit User Account Data Test - Too Long Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - too long user email (100 chars -> name, domain)
                await testMethods.invalidEditUserAccountTooLongEmailTest();
            });

        });

        describe("Invalid Edit User Account Data Tests - Invalid Singular Input Format", () => {

            //Test 005j -> invalid edit user account data test - invalid user first name format (special symbols only) (the user account gets edited, test has failed)
            test("Invalid Edit User Account Data Test - Invalid First Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - invalid user first name format (special symbols only)
                await testMethods.invalidEditUserAccountInvalidFirstNameFormatTest();
            });

            //Test 005k -> invalid edit user account data test - invalid user last name format (special symbols only) (the user account gets edited, test has failed)
            test("Invalid Edit User Account Data Test - Invalid Last Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - invalid user last name format (special symbols only)
                await testMethods.invalidEditUserAccountInvalidLastNameFormatTest();
            });

            //Test 005l -> invalid edit user account data test - invalid user email format (missing '@')
            test("Invalid Edit User Account Data Test - Invalid Email Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - invalid user email format (missing '@')
                await testMethods.invalidEditUserAccountInvalidEmailFormatTest();
            });

            //Test 005m -> invalid edit user account data test - existing test email
            test("Invalid Edit User Account Data Test - Existing Test Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid edit user account data test - existing test email
                await testMethods.invalidEditUserAccountExistingEmailFormatTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


