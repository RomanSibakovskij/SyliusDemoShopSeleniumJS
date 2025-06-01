const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Wishlist Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Latest Deals Product To Wishlist Tests", () => {

        //Test 013 -> add single latest deals product to wishlist test (as a guest)
        test("Add Single Latest Deals Product To Wishlist Test (as a guest)", async function () {
            await testMethods.addSingleLatestDealsProductToWishlistTest();
        });

        //Test 013a -> add single latest deals product to wishlist test (as a registered user)
        test("Add Single Latest Deals Product To Wishlist Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //add single latest deals product to wishlist test (as a registered user)
            await testMethods.addSingleLatestDealsProductToWishlistRegUserTest();
        });

    });

    describe("Add Multiple Latest Products To Wishlist Tests", () => {

        //Test 014 -> add multiple latest product to wishlist test (as a guest) (the product quantity resets on wishlist page, test has failed)
        test("Add Multiple Latest Products To Wishlist Test (as a guest)", async function () {
            await testMethods.addMultipleLatestProductsToWishlistTest();
        });

        //Test 014a -> add multiple latest products to wishlist test (as a registered user) (the product quantity resets on wishlist page, test has failed)
        test("Add Multiple Latest Products To Wishlist Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //add multiple latest products to wishlist test (as a registered user)
            await testMethods.addMultipleLatestProductsToWishlistRegUserTest();
        });

    });

    describe("Add Latest Deals Product From Wishlist To Cart Tests", () => {

        //Test 015 -> add single latest deals product from wishlist (all items to cart button) to cart test (as a guest)
        test("Add Single Latest Deals Product From Wishlist (All Items To Cart Button) To Cart Test (as a guest)", async function () {
            //add single latest deals product to wishlist test (as a guest)
            await testMethods.addSingleLatestDealsProductToWishlistTest();
            //add single latest deals product from wishlist (all items to cart button) to cart test (as a guest)
            await testMethods.addProductFromWishlistToCartAllWishItemsTest();
        });

        //Test 015a -> add single latest deals product from wishlist to cart (as a registered user)
        test("Add Single Latest Deals Product From Wishlist (Bulk Actions Add To Cart Button) To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //add single latest deals product to wishlist test (as a registered user)
            await testMethods.addSingleLatestDealsProductToWishlistRegUserTest();
            //add single latest deals product from wishlist (bulk actions add to cart button) to cart (as a registered user)
            await testMethods.addProductFromWishlistToCartBulkActionsTest();
        });

    });

    describe("Remove Product From Wishlist Test", () => {

        //Test 016 -> remove product from wishlist to cart test (only guest branch is tested, registered user will have the same result)
        test("Remove Product (Clear Wishlist Link) From Wishlist Test (as a guest)", async function () {
            //add single latest deals product to wishlist test (as a guest)
            await testMethods.addSingleLatestDealsProductToWishlistTest();
            //remove product from wishlist to cart test (as a guest)
            await testMethods.removeProductFromWishlistTest();
        });

    });

    describe("Add Product To New Wishlist Test", () => {

        //Test 016a -> add single latest deals product to new wishlist test (only guest branch is tested, registered user will have the same result)
        test("Add Single Latest Deals Product To New Wishlist Test", async function () {
            //add single latest deals product to wishlist test (as a guest)
            await testMethods.addSingleLatestDealsProductToWishlistTest();
            //add single latest deals product to new wishlist test (only guest branch is tested, registered user will have the same result)
            await testMethods.addSingleLatestDealsProductToNewWishlistTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


