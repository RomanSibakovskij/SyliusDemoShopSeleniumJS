const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Shopping Cart Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single/Multiple Latest Deals Product(s) Addition to Checkout Tests (as a guest)", () => {

        //Test 017 -> //single latest deals product addition to check out test (as a guest)
        test("Single Latest Deals Product Addition To Checkout Test (as a guest)", async function () {
            //single latest deals product addition to cart test (as a guest)
            await testMethods.singleLatestDealsProductAdditionToCartTest();
            //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 017a -> multiple latest deals products addition to check out test (as a guest)
        test("Multiple Latest Deals Products Addition To Checkout Test (as a guest)", async function () {
            //multiple latest deals products addition to cart test (as a guest)
            await testMethods.multipleLatestDealsProductsAdditionToCartTest();
            //multiple latest deals products addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Single/Multiple Latest Deals Product(s) Addition to Checkout Tests (as a registered user)", () => {

        //Test 017b -> single latest deals product addition to check out test (as a registered user)
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
        });

        //Test 017c -> multiple latest deals products addition to check out test (as a registered user)
        test("Multiple Latest Deals Products Addition To Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single/Multiple Latest Product(s) Addition to Checkout Tests (as a guest)", () => {

        //Test 018 -> single latest product addition to check out test (as a guest)
        test("Single Latest Product Addition To Checkout Test (as a guest)", async function () {
            //single latest product addition to cart test (as a guest)
            await testMethods.singleLatestProductAdditionToCartTest();
            //single latest product addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 018a -> multiple latest products addition to check out test (as a guest)
        test("Multiple Latest Products Addition To Checkout Test (as a guest)", async function () {
            //multiple latest products addition to cart test (as a guest)
            await testMethods.multipleLatestProductsAdditionToCartTest();
            //multiple latest products addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Single/Multiple Latest Product(s) Addition to Checkout Tests (as a registered user)", () => {

        //Test 018b -> single latest product addition to check out test (as a registered user)
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
        });

        //Test 018c -> multiple latest deals products addition to check out test (as a registered user)
        test("Multiple Latest Deals Products Addition To Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single Category Dashboard Page Single/Multiple Product(s) Addition to Checkout Tests (as a guest)", () => {

        //Test 019 -> single category dashboard page single product ("Boho Beach Breeze") addition to check out test (as a guest)
        test("Single Category Dashboard Page Single Product Addition To Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //single product ("Boho Beach Breeze") addition to cart test (as a guest)
            await testMethods.addSetSingleCategoryBohoProductToCartTest();
            //single category dashboard page single product ("Boho Beach Breeze") addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 019a -> single category dashboard page multiple products ("Boho Beach Breeze") addition to check out test (as a guest)
        test("Single Category Dashboard Page Multiple Products Addition To Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //multiple products ("Boho Beach Breeze") addition to cart test (as a guest)
            await testMethods.addSetSingleCategoryMultipleBohoProductsToCartTest();
            //single category dashboard page multiple products ("Boho Beach Breeze") addition to check out test (as a guest) (single and multiple products share the same method)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Single Category Dashboard Page Single/Multiple Product(s) Addition to Checkout Tests (as a registered user)", () => {

        //Test 019b -> single category dashboard page single product ("Evening Star Gown") addition to check out test (as a registered user)
        test("Single Category Dashboard Page Single Product Addition To Checkout Test (as a registered user)", async function () {
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
            //single category dashboard page single product ("Evening Star Gown") addition to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 019c -> single category dashboard page multiple products ("Evening Star Gown") addition to check out test (as a registered user)
        test("Single Category Dashboard Page Multiple Products Addition To Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Checkout Tests (as a guest)", () => {

        //Test 020 -> single category dashboard page set searched single product ("Classic Summer Elegance") addition to check out test (as a guest)
        test("Single Category Dashboard Page Set Searched Single Product Addition To Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addSingleEleganceProductToCartTest();
            //single category dashboard page set searched single product ("Classic Summer Elegance") addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 020a -> single category dashboard page set searched multiple products ("Classic Summer Elegance") addition to check out test (as a guest)
        test("Single Category Dashboard Page Set Searched Multiple Products Addition To Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched multiple products ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addMultipleEleganceProductsToCartTest();
            //single category dashboard page set searched multiple products ("Classic Summer Elegance") addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Checkout Tests (as a registered user)", () => {

        //Test 020b -> single category dashboard page single product ("Seaside Stroll Midi") addition to check out test (as a registered user)
        test("Single Category Dashboard Page Set Searched Single Product Addition To Checkout Test (as a registered user)", async function () {
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
        });

        //Test 020c -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") addition to check out test (as a registered user)
        test("Single Category Dashboard Page Set Searched Multiple Products Addition To Checkout Test (as a registered user)", async function () {
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
        });

    });

    describe("Single Category Dashboard Page Product Quantity Update During Addition to Checkout Tests", () => {

        //Test 021 -> single category dashboard page product quantity update during ("Classic Summer Elegance") addition to check out test (as a guest)
        test("Single Category Dashboard Page Product Quantity Update During Addition To Checkout Test (as a guest)", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addSingleEleganceProductToCartTest();
            //single category dashboard page product quantity update during ("Classic Summer Elegance") addition to check out test (as a guest)
            await testMethods.addProductQtyUpdateDuringAdditionToCheckoutTest();
        });

        //Test 021a -> single category dashboard page product quantity update during ("Classic Summer Elegance") addition to check out test (as a registered user)
        test("Single Category Dashboard Page Product Quantity Update During Addition To Checkout Test (as a registered user)", async function () {
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
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a registered user)
            await testMethods.addSingleEleganceProductToCartTest();
            //single category dashboard page product quantity update during ("Classic Summer Elegance") addition to check out test (as a registered user)
            await testMethods.addProductQtyUpdateDuringAdditionToCheckoutTest();
        });

    });

    describe("Product Removal From Shopping Cart Tests", () => {

        //Test 022 -> product ("Classic Summer Elegance") removal from shopping cart test
        test("Product Removal From Shopping Cart Test", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addSingleEleganceProductToCartTest();
            //product ("Classic Summer Elegance") removal from shopping cart test
            await testMethods.productRemovalFromShoppingCartTest();
        });

        //Test 022a -> clear  shopping cart test
        test("Clear Shopping Cart Test", async function () {
            //single category dashboard page product sort by test (as a guest)
            await testMethods.singleCategoryDashboardPageProductSortTest();
            //set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
            await testMethods.addSingleEleganceProductToCartTest();
            //clear shopping cart test
            await testMethods.clearShoppingCartTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


