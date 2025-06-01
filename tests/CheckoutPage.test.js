const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(250000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single/Multiple Latest Deals Product(s) Checkout Tests (as a guest)", () => {

        //Test 023 -> //single latest deals product check out test (as a guest)
        test("Single Latest Deals Product Checkout Test (as a guest)", async function () {
            //single latest deals product addition to cart test (as a guest)
            await testMethods.singleLatestDealsProductAdditionToCartTest();
            //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //single latest deals product check out test (as a guest) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutGuestTest();
        });

        //Test 023a -> multiple latest deals products check out test (as a guest)
        test("Multiple Latest Deals Products Checkout Test (as a guest)", async function () {
            //multiple latest deals products addition to cart test (as a guest)
            await testMethods.multipleLatestDealsProductsAdditionToCartTest();
            //multiple latest deals products addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //multiple latest deals products check out test (as a guest) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutGuestTest();
        });

    });

    describe("Single/Multiple Latest Deals Product(s) Checkout Tests (as a registered user)", () => {

        //Test 023b -> single latest deals product check out test (as a registered user)
        test("Single Latest Deals Product Addition To Checkout Test (as a registered user)", async function () {
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
        });

        //Test 023c -> multiple latest deals products check out test (as a registered user)
        test("Multiple Latest Deals Products Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single/Multiple Latest Product(s) Checkout Tests (as a guest)", () => {

        //Test 024 -> single latest product check out test (as a guest)
        test("Single Latest Product Checkout Test (as a guest)", async function () {
            //single latest product addition to cart test (as a guest)
            await testMethods.singleLatestProductAdditionToCartTest();
            //single latest product addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //single latest product check out test (as a guest) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutGuestTest();
        });

        //Test 024a -> multiple latest products check out test (as a guest)
        test("Multiple Latest Products Checkout Test (as a guest)", async function () {
            //multiple latest products addition to cart test (as a guest)
            await testMethods.multipleLatestProductsAdditionToCartTest();
            //multiple latest products addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //multiple latest products check out test (as a guest) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutGuestTest();
        });

    });

    describe("Single/Multiple Latest Product(s) Checkout Tests (as a registered user)", () => {

        //Test 024b -> single latest product check out test (as a registered user)
        test("Single Latest Product Addition To Checkout Test (as a registered user)", async function () {
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
        });

        //Test 024c -> multiple latest deals products check out test (as a registered user)
        test("Multiple Latest Deals Products Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single Category Dashboard Page Single/Multiple Product(s) Checkout Tests (as a guest)", () => {

        //Test 025 -> single category dashboard page single product ("Boho Beach Breeze") check out test (as a guest)
        test("Single Category Dashboard Page Single Product Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //single product ("Boho Beach Breeze") addition to cart test (as a guest)
            await testMethods.addSetSingleCategoryBohoProductToCartTest();
            //single category dashboard page single product ("Boho Beach Breeze") addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page single product ("Boho Beach Breeze") check out test (as a guest) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutGuestTest();
        });

        //Test 025a -> single category dashboard page multiple products ("Boho Beach Breeze") check out test (as a guest)
        test("Single Category Dashboard Page Multiple Products Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //multiple products ("Boho Beach Breeze") addition to cart test (as a guest)
            await testMethods.addSetSingleCategoryMultipleBohoProductsToCartTest();
            //single category dashboard page multiple products ("Boho Beach Breeze") addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page multiple products ("Boho Beach Breeze") check out test (as a guest) (single and multiple products share the same method)
            await testMethods.validOrderCheckoutGuestTest();
        });

    });

    describe("Single Category Dashboard Page Single/Multiple Product(s) Checkout Tests (as a registered user)", () => {

        //Test 025b -> single category dashboard page single product ("Evening Star Gown") check out test (as a registered user)
        test("Single Category Dashboard Page Single Product Checkout Test (as a registered user)", async function () {
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
        });

        //Test 025c -> single category dashboard page multiple products ("Evening Star Gown") check out test (as a registered user)
        test("Single Category Dashboard Page Multiple Products Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Checkout Tests (as a guest)", () => {

        //Test 026 -> single category dashboard page set searched single product ("Classic Summer Elegance") check out test (as a guest)
        test("Single Category Dashboard Page Set Searched Single Product Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addSingleEleganceProductToCartTest();
            //single category dashboard page set searched single product ("Classic Summer Elegance") addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page set searched single product ("Classic Summer Elegance") check out test (as a guest)
            await testMethods.validOrderCheckoutGuestTest();
        });

        //Test 026a -> single category dashboard page set searched multiple products ("Classic Summer Elegance") check out test (as a guest)
        test("Single Category Dashboard Page Set Searched Multiple Products Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched multiple products ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addMultipleEleganceProductsToCartTest();
            //single category dashboard page set searched multiple products ("Classic Summer Elegance") addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //single category dashboard page set searched multiple products ("Classic Summer Elegance") check out test (as a guest)
            await testMethods.validOrderCheckoutGuestTest();
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Checkout Tests (as a registered user)", () => {

        //Test 026b -> single category dashboard page single product ("Seaside Stroll Midi") check out test (as a registered user)
        test("Single Category Dashboard Page Set Searched Single Product Checkout Test (as a registered user)", async function () {
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
        });

        //Test 026c -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") check out test (as a registered user)
        test("Single Category Dashboard Page Set Searched Multiple Products Checkout Test (as a registered user)", async function () {
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
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


