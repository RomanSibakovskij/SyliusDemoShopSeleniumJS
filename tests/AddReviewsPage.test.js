const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Add Reviews Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Add Product Reviews Tests", () => {

        //Test 012 -> valid product ("Sunshine Strappy Delight") review addition test (as a guest)
        test("Valid Product Review Addition Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //valid product ("Sunshine Strappy Delight") review addition test (as a guest)
            await testMethods.validSunshineProductReviewAdditionTest();
        });

        //Test 012a -> valid product ("Sunshine Strappy Delight") review addition test (as a registered user)
        test("Valid Product Review Addition Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //valid product ("Sunshine Strappy Delight") review addition test (as a guest)
            await testMethods.validSunshineProductReviewAdditionRegUserTest();
        });

    });

    describe("Invalid Add Product Review Tests", () => {

        describe("Invalid Add Product Review Tests - No Singular Input", () => {

            //Test 012b -> invalid product ("Sunshine Strappy Delight") review addition test - no rating input (as a guest)
            test("Invalid Product Review Addition Test - No Rating Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - no rating input (as a guest)
                await testMethods.invalidSunshineProductReviewAdditionNoRatingTest();
            });

            //Test 012c -> invalid product ("Sunshine Strappy Delight") review addition test - no comment title input (as a guest)
            test("Invalid Product Review Addition Test - No Comment Title Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - no comment title input (as a guest)
                await testMethods.invalidSunshineProductReviewAdditionNoCommentTitleTest();
            });

            //Test 012d -> invalid product ("Sunshine Strappy Delight") review addition test - no comment input (as a guest)
            test("Invalid Product Review Addition Test - No Comment Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - no comment input (as a guest)
                await testMethods.invalidSunshineProductReviewAdditionNoCommentTest();
            });

            //Test 012e -> invalid product ("Sunshine Strappy Delight") review addition test - no email input (as a guest)
            test("Invalid Product Review Addition Test - No Email Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - no email input (as a guest)
                await testMethods.invalidSunshineProductReviewAdditionNoEmailTest();
            });

        });

        describe("Invalid Add Product Review Tests - Too Short Singular Input", () => {

            //Test 012f -> invalid product ("Sunshine Strappy Delight") review addition test - too short comment title input (as a guest) (1 char)
            test("Invalid Product Review Addition Test - Too Short Comment Title Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - too short comment title input (as a guest) (1 char)
                await testMethods.invalidSunshineProductReviewAdditionTooShortCommentTitleTest();
            });

            //Test 012g -> invalid product ("Sunshine Strappy Delight") review addition test - too short comment input (as a guest) (1 char) (too short review comment error wasn't triggered, test has failed)
            test("Invalid Product Review Addition Test - Too Short Comment Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - too short comment input (as a guest) (1 char)
                await testMethods.invalidSunshineProductReviewAdditionTooShortCommentTest();
            });

            //Test 012h -> invalid product ("Sunshine Strappy Delight") review addition test - too short email input (as a guest) (1 char -> name, domain) (too short email error wasn't triggered, test has failed)
            test("Invalid Product Review Addition Test - Too Short Email Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - too short email input (as a guest) (1 char -> name, domain)
                await testMethods.invalidSunshineProductReviewAdditionTooShortEmailTest();
            });

        });

        describe("Invalid Add Product Review Tests - Too Long Singular Input", () => {

            //Test 012i -> invalid product ("Sunshine Strappy Delight") review addition test - too long comment title input (as a guest) (256 chars)
            test("Invalid Product Review Addition Test - Too Long Comment Title Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - too long comment title input (as a guest) (256 chars)
                await testMethods.invalidSunshineProductReviewAdditionTooLongCommentTitleTest();
            });

            //Test 012j -> invalid product ("Sunshine Strappy Delight") review addition test - too long comment input (as a guest) (10001 chars) (too long comment error wasn't triggered, test has failed)
            test("Invalid Product Review Addition Test - Too Long Comment Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - too long comment input (as a guest) (10001 chars)
                await testMethods.invalidSunshineProductReviewAdditionTooLongCommentTest();
            });

            //Test 012k -> invalid product ("Sunshine Strappy Delight") review addition test - too long email input (as a guest) (100 chars -> name, domain)
            test("Invalid Product Review Addition Test - Too Long Email Input(as a guest)", async function () {
                //single category dashboard page product sort by test (as a guest)
                await testMethods.singleCategoryDashboardPageProductSortTest();
                //invalid product ("Sunshine Strappy Delight") review addition test - too long email input (as a guest) (100 chars -> name, domain)
                await testMethods.invalidSunshineProductReviewAdditionTooLongEmailTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


