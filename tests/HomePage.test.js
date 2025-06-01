const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Navigate to Register Page Test", () => {

        //Test 001 -> navigate user to register page test
        test("User Navigation to Register Page Test", async function () {
            await testMethods.navigateToRegisterPageTest();
        });

    });

    describe("Single/Multiple Latest Deals Product(s) Addition to Cart Test (as a guest)", () => {

        //Test 008 -> single latest deals product addition to cart test (as a guest)
        test("Single Latest Deals Product Addition To Cart Test (as a guest)", async function () {
            await testMethods.singleLatestDealsProductAdditionToCartTest();
        });

        //Test 008a -> multiple latest deals products addition to cart test (as a guest)
        test("Multiple Latest Deals Products Addition To Cart Test (as a guest)", async function () {
            await testMethods.multipleLatestDealsProductsAdditionToCartTest();
        });

    });

    describe("Single/Multiple Latest Deals Product(s) Addition to Cart Test (as a registered user)", () => {

            //Test 008b -> single latest deals product addition to cart test (as a registered user)
            test("Single Latest Deals Product Addition To Cart Test (as a registered user)", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //single latest deals product addition to cart test (as a registered user)
                await testMethods.singleLatestDealsProductAdditionToCartRegUserTest();
            });

            //Test 008c -> multiple latest deals products addition to cart test (as a registered user)
            test("Multiple Latest Deals Products Addition To Cart Test (as a registered user)", async function () {
                //user navigation to 'Register' page test
                await testMethods.navigateToRegisterPageTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //valid user login test
                await testMethods.validUserLoginTest();
                //multiple latest deals products addition to cart test (as a registered user)
                await testMethods.multipleLatestDealsProductsAdditionToCartRegUserTest();
            });

    });

    describe("Single/Multiple Latest Product(s) Addition to Cart Test (as a guest)", () => {

        //Test 009 -> single latest product addition to cart test (as a guest)
        test("Single Latest Product Addition To Cart Test (as a guest)", async function () {
            await testMethods.singleLatestProductAdditionToCartTest();
        });

        //Test 009a -> multiple latest products addition to cart test (as a guest)
        test("Multiple Latest Products Addition To Cart Test (as a guest)", async function () {
            await testMethods.multipleLatestProductsAdditionToCartTest();
        });

    });

    describe("Single/Multiple Latest Product(s) Addition to Cart Test (as a registered user)", () => {

        //Test 009b -> single latest product addition to cart test (as a registered user)
        test("Single Latest Product Addition To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //single latest product ("Sunshine Strappy Delight") addition to cart test (as a registered user)
            await testMethods.singleLatestProductAdditionToCartRegUserTest();
        });

        //Test 009c -> multiple latest deals products addition to cart test (as a registered user)
        test("Multiple Latest Deals Products Addition To Cart Test (as a registered user)", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user login test
            await testMethods.validUserLoginTest();
            //multiple latest deals products addition to cart test (as a registered user)
            await testMethods.multipleLatestProductsAdditionToCartRegUserTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


