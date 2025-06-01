const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Register Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Creation Test", () => {

        //Test 002 -> valid user account creation test
        test("Valid User Account Creation Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
        });

    });

    describe("Invalid User Account Creation Tests", () => {

        describe("Invalid User Account Creation Tests - No Singular Input", () => {

            //Test 002a -> invalid user account creation test - no user first name
            test("Invalid User Account Creation Test - No User First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - no user first name
                await testMethods.invalidUserAccountCreationNoFirstNameTest();
            });

            //Test 002b -> invalid user account creation test - no user last name
            test("Invalid User Account Creation Test - No User Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - no user last name
                await testMethods.invalidUserAccountCreationNoLastNameTest();
            });

            //Test 002c -> invalid user account creation test - no user email
            test("Invalid User Account Creation Test - No User Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - no user email
                await testMethods.invalidUserAccountCreationNoEmailTest();
            });

            //Test 002d -> invalid user account creation test - no user password
            test("Invalid User Account Creation Test - No User Password", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - no user password
                await testMethods.invalidUserAccountCreationNoPasswordTest();
            });

            //Test 002e -> invalid user account creation test - no user confirm password
            test("Invalid User Account Creation Test - No User Confirm Password", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - no user confirm password
                await testMethods.invalidUserAccountCreationNoConfirmPasswordTest();
            });

        });

        describe("Invalid User Account Creation Tests - Too Short Singular Input", () => {

            //Test 002f -> invalid user account creation test - too short user first name (1 char)
            test("Invalid User Account Creation Test - Too Short User First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too short user first name (1 char)
                await testMethods.invalidUserAccountCreationTooShortFirstNameTest();
            });

            //Test 002g -> invalid user account creation test - too short user last name (1 char)
            test("Invalid User Account Creation Test - Too Short User Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too short user last name (1 char)
                await testMethods.invalidUserAccountCreationTooShortLastNameTest();
            });

            //Test 002h -> invalid user account creation test - too short user email (1 char -> name, domain) (the user account gets created, test has failed)
            test("Invalid User Account Creation Test - Too Short User Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too short user email (1 char)
                await testMethods.invalidUserAccountCreationTooShortEmailTest();
            });

            //Test 002i -> invalid user account creation test - too short user password / confirm password (3 chars)
            test("Invalid User Account Creation Test - Too Short User Password / Confirm Password", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too short user password / confirm password (3 chars)
                await testMethods.invalidUserAccountCreationTooShortPasswordConfirmTest();
            });

        });

        describe("Invalid User Account Creation Tests - Too Long Singular Input", () => {

            //Test 002j -> invalid user account creation test - too long user first name (100 chars) (the user account gets created, test has failed)
            test("Invalid User Account Creation Test - Too Long User First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too long user first name (100 chars)
                await testMethods.invalidUserAccountCreationTooLongFirstNameTest();
            });

            //Test 002k -> invalid user account creation test - too long user last name (100 chars) (the user account gets created, test has failed)
            test("Invalid User Account Creation Test - Too Long User Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too long user last name (100 chars)
                await testMethods.invalidUserAccountCreationTooLongLastNameTest();
            });

            //Test 002l -> invalid user account creation test - too long user email (100 chars -> name, domain)
            test("Invalid User Account Creation Test - Too Long User Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too long user email (100 chars)
                await testMethods.invalidUserAccountCreationTooLongEmailTest();
            });

            //Test 002m -> invalid user account creation test - too long user password / confirm password (100 chars) (the user account gets created, test has failed)
            test("Invalid User Account Creation Test - Too Long User Password / Confirm Password", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - too long user password / confirm password (100 chars)
                await testMethods.invalidUserAccountCreationTooLongPasswordConfirmTest();
            });

        });

        describe("Invalid User Account Creation Tests - Invalid Singular Input Format", () => {

            //Test 002n -> invalid user account creation test - invalid user first name format (special symbols only) (the user account gets created, test has failed)
            test("Invalid User Account Creation Test - Invalid User First Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - invalid user first name format (special symbols only)
                await testMethods.invalidUserAccountCreationInvalidFirstNameFormatTest();
            });

            //Test 002o -> invalid user account creation test - invalid user last name format (special symbols only) (the user account gets created, test has failed)
            test("Invalid User Account Creation Test - Invalid User Last Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - invalid user last name format (special symbols only)
                await testMethods.invalidUserAccountCreationInvalidLastNameFormatTest();
            });

            //Test 002p -> invalid user account creation test - invalid user email format (missing '@')
            test("Invalid User Account Creation Test - Invalid User Email Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - invalid user email format (missing '@')
                await testMethods.invalidUserAccountCreationInvalidEmailFormatTest();
            });

            //Test 002q -> invalid user account creation test - existing email (test email input)
            test("Invalid User Account Creation Test - Existing Email", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //invalid user account creation test - invalid existing email (test email input)
                await testMethods.invalidUserAccountCreationExistingEmailTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


