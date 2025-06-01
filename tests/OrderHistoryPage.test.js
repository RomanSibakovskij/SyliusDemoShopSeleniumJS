const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Order History Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(250000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single/Multiple Latest Deals Product(s) Order Verification Tests (as a registered user)", () => {

        //Test 028 -> single latest deals product order verification test (as a registered user)
        test("Single Latest Deals Product Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //single latest deals product addition to cart test (as a registered user)
            await testMethods.singleLatestDealsProductAdditionToCartRegUserTest();
            //single latest deals product addition to check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //single latest deals product check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutRegUserTest();
            //single latest deals product order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

        //Test 028a -> multiple latest deals products order verification test (as a registered user)
        test("Multiple Latest Deals Products Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //multiple latest deals products addition to cart test (as a registered user)
            await testMethods.multipleLatestDealsProductsAdditionToCartRegUserTest();
            //multiple latest deals products addition to check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //multiple latest deals products check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutRegUserTest();
            //multiple latest deals products order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

    });

    describe("Single/Multiple Latest Product(s) Order Verification Tests (as a registered user)", () => {

        //Test 029 -> single latest product order verification test (as a registered user)
        test("Single Latest Product Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //single latest product ("Sunshine Strappy Delight") addition to cart test (as a registered user)
            await testMethods.singleLatestProductAdditionToCartRegUserTest();
            //single latest product addition to check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //single latest product check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutRegUserTest();
            //single latest product order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

        //Test 029a -> multiple latest deals products order verification test (as a registered user)
        test("Multiple Latest Deals Products Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //multiple latest deals products addition to cart test (as a registered user)
            await testMethods.multipleLatestProductsAdditionToCartRegUserTest();
            //multiple latest deals products addition to check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //multiple latest deals products check out test (as a registered user) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutRegUserTest();
            //multiple latest deals products order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

    });

    describe("Single Category Dashboard Page Single/Multiple Product(s) Order Verification Tests (as a registered user)", () => {

        //Test 030 -> single category dashboard page single product ("Evening Star Gown") order verification test (as a registered user)
        test("Single Category Dashboard Page Single Product Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //single product ("Evening Star Gown") addition to cart test (as a registered user)
            await testMethods.addSetSingleCategoryGownProductToCartTest();
            //single category dashboard page single product addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page single product ("Evening Star Gown") check out test (as a registered user)
            await testMethods.validOrderCheckoutRegUserTest();
            //single category dashboard page single product ("Evening Star Gown") order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

        //Test 030a -> single category dashboard page multiple products ("Evening Star Gown") order verification test (as a registered user)
        test("Single Category Dashboard Page Multiple Products Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //multiple products ("Evening Star Gown") addition to cart test (as a registered user)
            await testMethods.addSetSingleCategoryMultipleGownProductsToCartTest();
            //single category dashboard page multiple products ("Evening Star Gown") addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page multiple products ("Evening Star Gown") check out test (as a registered user)
            await testMethods.validOrderCheckoutRegUserTest();
            //single category dashboard page multiple products ("Evening Star Gown") order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Order Verification Tests (as a registered user)", () => {

        //Test 031 -> single category dashboard page single product ("Seaside Stroll Midi") order verification test (as a registered user)
        test("Single Category Dashboard Page Set Searched Single Product Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //set searched single product ("Seaside Stroll Midi") addition to cart test (as a registered user)
            await testMethods.addSingleStrollProductToCartTest();
            //single category dashboard page single product ("Seaside Stroll Midi") addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page single product ("Seaside Stroll Midi") check out test (as a registered user)
            await testMethods.validOrderCheckoutRegUserTest();
            //single category dashboard page single product ("Seaside Stroll Midi") order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

        //Test 031a -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") order verification test (as a registered user)
        test("Single Category Dashboard Page Set Searched Multiple Products Order Verification Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //valid user address addition test
            await testMethods.validUserAddressAdditionTest();
            //single category dashboard page product sort by test (as a registered user)
            await testMethods.singleCategoryDashboardPageProductSortRegUserTest();
            //set searched multiple products ("Seaside Stroll Midi") addition to cart test (as a registered user)
            await testMethods.addMultipleStrollProductsToCartTest();
            //single category dashboard page set searched multiple products ("Seaside Stroll Midi") addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page set searched multiple products ("Seaside Stroll Midi") check out test (as a registered user)
            await testMethods.validOrderCheckoutRegUserTest();
            //single category dashboard page set searched multiple products ("Seaside Stroll Midi") order verification test (as a registered user)
            await testMethods.verifySubmittedOrderInOrderHistoryPageTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


