const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Add Address Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Address Addition Tests", () => {

        //Test 006 -> valid user address addition test
        test("Valid User Address Addition Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
        });

        //Test 006a -> valid user multiple addresses addition test
        test("Valid Multiple User Addresses Addition Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //valid user second address addition test
            await testMethods.validUserSecondAddressAdditionTest();
        });

    });

    describe("Valid User Address Removal Test", () => {

        //Test 006b -> valid user address removal test (re-config this one later)
        test("Valid User Address Removal Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //valid user address removal test
            await testMethods.userRemoveAddressTest();
        });

    });

    describe("Invalid User Address Addition Tests", () => {

        describe("Invalid User Address Addition Tests - No Singular Input", () => {

            //Test 006c -> invalid user address addition test - no user first name
            test("Invalid User Address Addition Test - No First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - no user first name
                await testMethods.invalidUserAddressAdditionNoFirstNameTest();
            });

            //Test 006d -> invalid user address addition test - no user last name
            test("Invalid User Address Addition Test - No Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - no user last name
                await testMethods.invalidUserAddressAdditionNoLastNameTest();
            });

            //Test 006e -> invalid user address addition test - no user address
            test("Invalid User Address Addition Test - No Address", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - no user address
                await testMethods.invalidUserAddressAdditionNoAddressTest();
            });

            //Test 006f -> invalid user address addition test - no user country
            test("Invalid User Address Addition Test - No Country", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - no user country
                await testMethods.invalidUserAddressAdditionNoCountryTest();
            });

            //Test 006g -> invalid user address addition test - no user city
            test("Invalid User Address Addition Test - No City", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - no user city
                await testMethods.invalidUserAddressAdditionNoCityTest();
            });

            //Test 006h -> invalid user address addition test - no user post code
            test("Invalid User Address Addition Test - No Post Code", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - no user post code
                await testMethods.invalidUserAddressAdditionNoPostCodeTest();
            });

        });

        describe("Invalid User Address Addition Tests - Too Short Singular Input", () => {

            //Test 006i -> invalid user address addition test - too short user first name (1 char)
            test("Invalid User Address Addition Test - Too Short First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too short user first name (1 char)
                await testMethods.invalidUserAddressAdditionTooShortFirstNameTest();
            });

            //Test 006j -> invalid user address addition test - too short user last name (1 char)
            test("Invalid User Address Addition Test - Too Short Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too short user last name (1 char)
                await testMethods.invalidUserAddressAdditionTooShortLastNameTest();
            });

            //Test 006k -> invalid user address addition test - too short user address (1 char)
            test("Invalid User Address Addition Test - Too Short Address", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too short user address (1 char)
                await testMethods.invalidUserAddressAdditionTooShortAddressTest();
            });

            //Test 006l -> invalid user address addition test - too short user city (1 char)
            test("Invalid User Address Addition Test - Too Short City", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too short user city (1 char)
                await testMethods.invalidUserAddressAdditionTooShortCityTest();
            });

            //Test 006m -> invalid user address addition test - too short user post code (4 digits) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Too Short Post Code", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too short user post code (4 digits)
                await testMethods.invalidUserAddressAdditionTooShortPostCodeTest();
            });

        });

        describe("Invalid User Address Addition Tests - Too Long Singular Input", () => {

            //Test 006n -> invalid user address addition test - too long user first name (100 chars) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Too Long First Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too long user first name (100 chars)
                await testMethods.invalidUserAddressAdditionTooLongFirstNameTest();
            });

            //Test 006o -> invalid user address addition test - too long user last name (100 chars) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Too Long Last Name", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too long user last name (100 chars)
                await testMethods.invalidUserAddressAdditionTooLongLastNameTest();
            });

            //Test 006p -> invalid user address addition test - too long user address (100 chars) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Too Long Address", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too long user address (100 chars)
                await testMethods.invalidUserAddressAdditionTooLongAddressTest();
            });

            //Test 006q -> invalid user address addition test - too long user city (100 chars) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Too Long City", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too long user city (100 chars)
                await testMethods.invalidUserAddressAdditionTooLongCityTest();
            });

            //Test 006r -> invalid user address addition test - too long user post code (6 digits) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Too Long Post Code", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - too long user post code (6 digits)
                await testMethods.invalidUserAddressAdditionTooLongPostCodeTest();
            });

        });

        describe("Invalid User Address Addition Tests - Invalid Singular Input Format", () => {

            //Test 006s -> invalid user address addition test - invalid user first name format (special symbols only) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Invalid First Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - invalid user first name format (special symbols only)
                await testMethods.invalidUserAddressAdditionInvalidFirstNameFormatTest();
            });

            //Test 006t -> invalid user address addition test - invalid user last name format (special symbols only) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Invalid Last Name Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - invalid user last name format (special symbols only)
                await testMethods.invalidUserAddressAdditionInvalidLastNameFormatTest();
            });

            //Test 006u -> invalid user address addition test - invalid user address format (special symbols only) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Invalid Address Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - invalid user address format (special symbols only)
                await testMethods.invalidUserAddressAdditionInvalidAddressFormatTest();
            });

            //Test 006v -> invalid user address addition test - invalid user city format (special symbols only) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Invalid City Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - invalid user city format (special symbols only)
                await testMethods.invalidUserAddressAdditionInvalidCityFormatTest();
            });

            //Test 006w -> invalid user address addition test - invalid user post code format (special symbols only) (the address has been added, test has failed)
            test("Invalid User Address Addition Test - Invalid Post Code Format", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //invalid user address addition test - invalid user post code format (special symbols only)
                await testMethods.invalidUserAddressAdditionInvalidPostCodeFormatTest();
            });

        });

    });



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


