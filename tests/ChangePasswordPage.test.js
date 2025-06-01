const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Change Password Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Change Password Page Test", () => {

        //Test 004 -> valid change user password test
        test("Valid Change User Password Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid edit user password test
            await testMethods.validChangeUserPasswordTest();
        });

    });

    describe("Invalid Change Password Page Test - No Singular Input", () => {

        //Test 004a -> invalid change user password test - no current password
        test("Invalid Change User Password Test - No Current Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //invalid edit user password test - no current password
            await testMethods.invalidChangeUserNoCurrentPasswordTest();
        });

        //Test 004b -> invalid change user password test - no new/confirm password
        test("Invalid Change User Password Test - No New and Confirm Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //invalid edit user password test - no new/confirm password
            await testMethods.invalidChangeUserNoNewConfirmPasswordTest();
        });

    });

    describe("Invalid Change Password Page Test - Invalid Singular Input", () => {

        //Test 004c -> invalid change user password test - invalid current password
        test("Invalid Change User Password Test - Invalid Current Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //invalid edit user password test - invalid current password
            await testMethods.invalidChangeUserInvalidCurrentPasswordTest();
        });

        //Test 004d -> invalid change user password test - mismatching confirm password
        test("Invalid Change User Password Test - Mismatching Confirm Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //invalid edit user password test - mismatching confirm password
            await testMethods.invalidChangeUserMismatchingConfirmPasswordTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


