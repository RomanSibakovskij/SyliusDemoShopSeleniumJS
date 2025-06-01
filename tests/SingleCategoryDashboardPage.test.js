const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Single Category Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single Category Dashboard Page Single/Multiple Product(s) Addition to Cart Test (as a guest)", () => {

        //Test 010 -> single category dashboard page single product ("Boho Beach Breeze") addition to cart test (as a guest)
        test("Single Category Dashboard Page Single Product Addition To Cart Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //single product ("Boho Beach Breeze") addition to cart test (as a guest)
            await testMethods.addSetSingleCategoryBohoProductToCartTest();
        });

        //Test 010a -> single category dashboard page multiple products ("Boho Beach Breeze") addition to cart test (as a guest)
        test("Single Category Dashboard Page Multiple Products Addition To Cart Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //multiple products ("Boho Beach Breeze") addition to cart test (as a guest)
            await testMethods.addSetSingleCategoryMultipleBohoProductsToCartTest();
        });

    });

    describe("Single Category Dashboard Page Single/Multiple Product(s) Addition to Cart Test (as a registered user)", () => {

        //Test 010b -> single category dashboard page single product ("Evening Star Gown") addition to cart test (as a registered user)
        test("Single Category Dashboard Page Single Product Addition To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //single product ("Evening Star Gown") addition to cart test (as a registered user)
            await testMethods.addSetSingleCategoryGownProductToCartTest();
        });

        //Test 010c -> single category dashboard page multiple products ("Evening Star Gown") addition to cart test (as a registered user)
        test("Single Category Dashboard Page Multiple Products Addition To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //multiple products ("Evening Star Gown") addition to cart test (as a registered user)
            await testMethods.addSetSingleCategoryMultipleGownProductsToCartTest();
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Cart Test (as a guest)", () => {

        //Test 011 -> single category dashboard page set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
        test("Single Category Dashboard Page Set Searched Single Product Addition To Cart Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addSingleEleganceProductToCartTest();
        });

        //Test 011a -> single category dashboard page set searched multiple products ("Classic Summer Elegance") addition to cart test (as a guest)
        test("Single Category Dashboard Page Set Searched Multiple Products Addition To Cart Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched multiple products ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addMultipleEleganceProductsToCartTest();
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Cart Test (as a registered user)", () => {

        //Test 011b -> single category dashboard page single product ("Seaside Stroll Midi") addition to cart test (as a registered user)
        test("Single Category Dashboard Page Set Searched Single Product Addition To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //set searched single product ("Seaside Stroll Midi") addition to cart test (as a registered user)
            await testMethods.addSingleStrollProductToCartTest();
        });

        //Test 011c -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") addition to cart test (as a registered user)
        test("Single Category Dashboard Page Set Searched Multiple Products Addition To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //set searched multiple products ("Seaside Stroll Midi") addition to cart test (as a registered user)
            await testMethods.addMultipleStrollProductsToCartTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


