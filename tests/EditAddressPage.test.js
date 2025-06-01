const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Edit Address Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Address Edit Test", () => {

        //Test 007 -> valid user address edit test
        test("Valid User Address Edit Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //valid user address edit test
            await testMethods.validUserAddressEditTest();
        });

    });

    describe("Invalid User Address Edit Tests", () => {

        describe("Invalid User Address Edit Tests - No Singular Input", () => {

            //Test 007a -> invalid user address edit test - no user edited first name
            test("Invalid User Address Edit Test - No Edited First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - no user edited first name
                await testMethods.invalidUserAddressEditNoFirstNameTest();
            });

            //Test 007b -> invalid user address edit test - no user edited last name
            test("Invalid User Address Edit Test - No Edited Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - no user edited last name
                await testMethods.invalidUserAddressEditNoLastNameTest();
            });

            //Test 007c -> invalid user address edit test - no user edited address
            test("Invalid User Address Edit Test - No Edited Address", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - no user edited address
                await testMethods.invalidUserAddressEditNoAddressTest();
            });

            //Test 007d -> invalid user address edit test - no user edited country
            test("Invalid User Address Edit Test - No Edited Country", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - no user edited country
                await testMethods.invalidUserAddressEditNoCountryTest();
            });

            //Test 007e -> invalid user address edit test - no user edited city
            test("Invalid User Address Edit Test - No Edited City", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - no user edited city
                await testMethods.invalidUserAddressEditNoCityTest();
            });

            //Test 007f -> invalid user address edit test - no user edited post code
            test("Invalid User Address Edit Test - No Edited Post Code", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - no user edited post code
                await testMethods.invalidUserAddressEditNoPostCodeTest();
            });

        });

        describe("Invalid User Address Edit Tests - Too Short Singular Input", () => {

            //Test 007g -> invalid user address edit test - too short user edited first name (1 char)
            test("Invalid User Address Edit Test - Too Short Edited First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too short user edited first name (1 char)
                await testMethods.invalidUserAddressEditTooShortFirstNameTest();
            });

            //Test 007h -> invalid user address edit test - too short user edited last name (1 char)
            test("Invalid User Address Edit Test - Too Short Edited Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too short user edited last name (1 char)
                await testMethods.invalidUserAddressEditTooShortLastNameTest();
            });

            //Test 007i -> invalid user address edit test - too short user edited address (1 char)
            test("Invalid User Address Edit Test - Too Short Edited Address", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too short user edited address (1 char)
                await testMethods.invalidUserAddressEditTooShortAddressTest();
            });

            //Test 007j -> invalid user address edit test - too short user edited city (1 char)
            test("Invalid User Address Edit Test - Too Short Edited City", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too short user edited city (1 char)
                await testMethods.invalidUserAddressEditTooShortCityTest();
            });

            //Test 007k -> invalid user address edit test - too short user edited post code (4 digits) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Too Short Edited Post Code", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too short user edited post code (4 digits)
                await testMethods.invalidUserAddressEditTooShortPostCodeTest();
            });

        });

        describe("Invalid User Address Edit Tests - Too Long Singular Input", () => {

            //Test 007i -> invalid user address edit test - too long user edited first name (100 chars) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Too Long Edited First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too long user edited first name (100 chars)
                await testMethods.invalidUserAddressEditTooLongFirstNameTest();
            });

            //Test 007j -> invalid user address edit test - too long user edited last name (100 chars) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Too Long Edited Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too long user edited last name (100 chars)
                await testMethods.invalidUserAddressEditTooLongLastNameTest();
            });

            //Test 007k -> invalid user address edit test - too long user edited address (100 chars) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Too Long Edited Address", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too long user edited address (100 chars)
                await testMethods.invalidUserAddressEditTooLongAddressTest();
            });

            //Test 007l -> invalid user address edit test - too long user edited city (100 chars) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Too Long Edited City", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too long user edited city (100 chars)
                await testMethods.invalidUserAddressEditTooLongCityTest();
            });

            //Test 007m -> invalid user address edit test - too long user edited post code (6 digits) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Too Long Edited Post Code", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - too long user edited post code (6 digits)
                await testMethods.invalidUserAddressEditTooLongPostCodeTest();
            });

        });

        describe("Invalid User Address Edit Tests - Invalid Singular Input Format", () => {

            //Test 007n -> invalid user address edit test - invalid user edited first name format (special symbols only) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Invalid Edited First Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - invalid user edited first name format (special symbols only)
                await testMethods.invalidUserAddressEditInvalidFirstNameFormatTest();
            });

            //Test 007o -> invalid user address edit test - invalid user edited last name format (special symbols only) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Invalid Edited Last Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - invalid user edited last name format (special symbols only)
                await testMethods.invalidUserAddressEditInvalidLastNameFormatTest();
            });

            //Test 007p -> invalid user address edit test - invalid user edited address format (special symbols only) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Invalid Edited Address Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - invalid user edited address format (special symbols only)
                await testMethods.invalidUserAddressEditInvalidAddressFormatTest();
            });

            //Test 007q -> invalid user address edit test - invalid user edited city format (special symbols only) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Invalid Edited City Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - invalid user edited city format (special symbols only)
                await testMethods.invalidUserAddressEditInvalidCityFormatTest();
            });

            //Test 007r -> invalid user address edit test - invalid user edited post code format (special symbols only) (the address has been updated, test has failed)
            test("Invalid User Address Edit Test - Invalid Edited First Post Code Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //valid user address addition test
                await testMethods.validUserAddressAdditionTest();
                //invalid user address edit test - invalid user edited post code format (special symbols only)
                await testMethods.invalidUserAddressEditInvalidPostCodeFormatTest();
            });

        });

    });



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


