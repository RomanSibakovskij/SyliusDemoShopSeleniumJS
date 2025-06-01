const TestMethods = require('./TestMethods');
const BaseTest = require('./BaseTest');

describe('Checkout Page Invalid Singular Input Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(250000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //only guest branch here is being tested to avoid redundancy -> registered user will have the same output

    describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - No Singular Input", () => {

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - No Singular Billing Address Input", () => {

            //Test 027 -> invalid single latest deals product check out test (as a guest) - no billing address email
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing Email", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing address email
                await testMethods.invalidOrderCheckoutGuestNoBillEmailTest();
            });

            //Test 027a -> invalid single latest deals product check out test (as a guest) - no billing address first name
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing First Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing address first name
                await testMethods.invalidOrderCheckoutGuestNoBillFirstNameTest();
            });

            //Test 027b -> invalid single latest deals product check out test (as a guest) - no billing address last name
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing Last Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing address last name
                await testMethods.invalidOrderCheckoutGuestNoBillLastNameTest();
            });

            //Test 027c -> invalid single latest deals product check out test (as a guest) - no billing address
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing Address", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing address
                await testMethods.invalidOrderCheckoutGuestNoBillAddressTest();
            });

            //Test 027d -> invalid single latest deals product check out test (as a guest) - no billing country
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing Country", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing country
                await testMethods.invalidOrderCheckoutGuestNoBillCountryTest();
            });

            //Test 027e -> invalid single latest deals product check out test (as a guest) - no billing city
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing City", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing city
                await testMethods.invalidOrderCheckoutGuestNoBillCityTest();
            });

            //Test 027f -> invalid single latest deals product check out test (as a guest) - no billing post code
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Billing Post Code", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no billing post code
                await testMethods.invalidOrderCheckoutGuestNoBillPostCodeTest();
            });

        });

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - No Singular Shipping Address Input", () => {

            //Test 027g -> invalid single latest deals product check out test (as a guest) - no shipping address first name
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Shipping First Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no shipping address first name
                await testMethods.invalidOrderCheckoutGuestNoShipFirstNameTest();
            });

            //Test 027h -> invalid single latest deals product check out test (as a guest) - no shipping address last name
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Shipping Last Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no shipping address last name
                await testMethods.invalidOrderCheckoutGuestNoShipLastNameTest();
            });

            //Test 027i -> invalid single latest deals product check out test (as a guest) - no shipping address
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Shipping Address", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no shipping address
                await testMethods.invalidOrderCheckoutGuestNoShipAddressTest();
            });

            //Test 027j -> invalid single latest deals product check out test (as a guest) - no shipping address country
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Shipping Country", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no shipping country
                await testMethods.invalidOrderCheckoutGuestNoShipCountryTest();
            });

            //Test 027k -> invalid single latest deals product check out test (as a guest) - no shipping address city
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Shipping City", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no shipping city
                await testMethods.invalidOrderCheckoutGuestNoShipCityTest();
            });

            //Test 027l -> invalid single latest deals product check out test (as a guest) - no shipping address post code
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - No Shipping Post Code", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - no shipping post code
                await testMethods.invalidOrderCheckoutGuestNoShipPostCodeTest();
            });

        });

    });

    describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Short Singular Input", () => {

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Short Singular Billing Address Input", () => {

            //Test 027m -> invalid single latest deals product check out test (as a guest) - too short billing address email (1 char -> name, domain) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Billing Email", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short billing address email (1 char -> name, domain)
                await testMethods.invalidOrderCheckoutGuestTooShortBillEmailTest();
            });

            //Test 027n -> invalid single latest deals product check out test (as a guest) - too short billing address first name (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Billing First Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short billing address first name (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortBillFirstNameTest();
            });

            //Test 027o -> invalid single latest deals product check out test (as a guest) - too short billing address last name (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Billing Last Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short billing address last name (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortBillLastNameTest();
            });

            //Test 027p -> invalid single latest deals product check out test (as a guest) - too short billing address (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Billing Address", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short billing address (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortBillAddressTest();
            });

            //Test 027q -> invalid single latest deals product check out test (as a guest) - too short billing city (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Billing City", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short billing city (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortBillCityTest();
            });

            //Test 027r -> invalid single latest deals product check out test (as a guest) - too short billing post code (4 digits) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Billing Post Code", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short billing post code (4 digits)
                await testMethods.invalidOrderCheckoutGuestTooShortBillPostCodeTest();
            });

        });

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Short Singular Shipping Address Input", () => {

            //Test 027s -> invalid single latest deals product check out test (as a guest) - too short shipping address first name (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Shipping First Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short shipping address first name (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortShipFirstNameTest();
            });

            //Test 027t -> invalid single latest deals product check out test (as a guest) - too short shipping address last name (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Shipping Last Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short shipping address last name (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortShipLastNameTest();
            });

            //Test 027u -> invalid single latest deals product check out test (as a guest) - too short shipping address (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Shipping Address", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short shipping address (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortShipAddressTest();
            });

            //Test 027v -> invalid single latest deals product check out test (as a guest) - too short shipping city (1 char)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Shipping City", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short shipping city (1 char)
                await testMethods.invalidOrderCheckoutGuestTooShortShipCityTest();
            });

            //Test 027w -> invalid single latest deals product check out test (as a guest) - too short shipping post code (4 digits)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Short Shipping Post Code", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too short shipping post code (4 digits)
                await testMethods.invalidOrderCheckoutGuestTooShortShipPostCodeTest();
            });

        });

    });

    describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Long Singular Input", () => {

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Long Singular Billing Address Input", () => {

            //Test 027x -> invalid single latest deals product check out test (as a guest) - too long billing address email (100 chars -> name, domain)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Billing Email", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long billing address email (100 chars -> name, domain)
                await testMethods.invalidOrderCheckoutGuestTooLongBillEmailTest();
            });

            //Test 027y -> invalid single latest deals product check out test (as a guest) - too long billing address first name (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Billing First Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long billing address first name (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongBillFirstNameTest();
            });

            //Test 027z -> invalid single latest deals product check out test (as a guest) - too long billing address last name (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Billing Last Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long billing address last name (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongBillLastNameTest();
            });

            //Test 027aa -> invalid single latest deals product check out test (as a guest) - too long billing address (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Billing Address", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long billing address (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongBillAddressTest();
            });

            //Test 027ab -> invalid single latest deals product check out test (as a guest) - too long billing city (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Billing City", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long billing city (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongBillCityTest();
            });

            //Test 027ac -> invalid single latest deals product check out test (as a guest) - too long billing post code (6 digits) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Billing Post Code", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long billing post code (6 digits)
                await testMethods.invalidOrderCheckoutGuestTooLongBillPostCodeTest();
            });

        });

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Long Singular Shipping Address Input", () => {

            //Test 027ad -> invalid single latest deals product check out test (as a guest) - too long shipping address first name (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Shipping First Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long shipping address first name (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongShipFirstNameTest();
            });

            //Test 027ae -> invalid single latest deals product check out test (as a guest) - too long shipping address last name (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Shipping Last Name", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long shipping address last name (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongShipLastNameTest();
            });

            //Test 027af -> invalid single latest deals product check out test (as a guest) - too long shipping address (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Shipping Address", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long shipping address (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongShipAddressTest();
            });

            //Test 027ag -> invalid single latest deals product check out test (as a guest) - too long shipping city (100 chars) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Shipping City", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long shipping city (100 chars)
                await testMethods.invalidOrderCheckoutGuestTooLongShipCityTest();
            });

            //Test 027ah -> invalid single latest deals product check out test (as a guest) - too long shipping post code (6 digits) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Too Long Shipping Post Code", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - too long shipping post code (6 digits)
                await testMethods.invalidOrderCheckoutGuestTooLongShipPostCodeTest();
            });

        });

    });

    describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Invalid Singular Input Format", () => {

        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Invalid Singular Billing Address Input Format", () => {

            //Test 027ai -> invalid single latest deals product check out test (as a guest) - invalid billing address email format (missing '@')
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Billing Email Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid billing address email format (missing '@')
                await testMethods.invalidOrderCheckoutGuestInvalidBillEmailFormatTest();
            });

            //Test 027aj -> invalid single latest deals product check out test (as a guest) - invalid billing address first name input format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Billing First Name Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid billing address first name input format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidBillFirstNameFormatTest();
            });

            //Test 027ak -> invalid single latest deals product check out test (as a guest) - invalid billing address last name input format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Billing Last Name Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid billing address last name input format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidBillLastNameFormatTest();
            });

            //Test 027al -> invalid single latest deals product check out test (as a guest) - invalid billing address input format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Billing Address Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid billing address input format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidBillAddressFormatTest();
            });

            //Test 027am -> invalid single latest deals product check out test (as a guest) - invalid billing address city input format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Billing City Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid billing address city input format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidBillCityFormatTest();
            });

            //Test 027an -> invalid single latest deals product check out test (as a guest) - invalid billing address post code input format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Billing Post Code Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid billing address post code input format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidBillPostCodeFormatTest();
            });

        });



        describe("Invalid Single Latest Deals Product Checkout Tests (as a guest) - Invalid Singular Shipping Address Input Format", () => {

            //Test 027ao -> invalid single latest deals product check out test (as a guest) - invalid shipping address first name format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Shipping First Name Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid shipping address first name format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidShipFirstNameFormatTest();
            });

            //Test 027ap -> invalid single latest deals product check out test (as a guest) - invalid shipping address last name format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Shipping Last Name Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid shipping address last name format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidShipLastNameFormatTest();
            });

            //Test 027aq -> invalid single latest deals product check out test (as a guest) - invalid shipping address format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Shipping Address Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid shipping address format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidShipAddressFormatTest();
            });

            //Test 027ar -> invalid single latest deals product check out test (as a guest) - invalid shipping city format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Shipping City Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid shipping city format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidShipCityFormatTest();
            });

            //Test 027as -> invalid single latest deals product check out test (as a guest) - invalid shipping post code format (special symbols only) (the checkout wasn't aborted, test has failed)
            test("Invalid Single Latest Deals Product Checkout Test (as a guest) - Invalid Shipping Post Code Format", async function () {
                //single latest deals product addition to cart test (as a guest)
                await testMethods.singleLatestDealsProductAdditionToCartTest();
                //single latest deals product addition to check out test (as a guest) (single and multiple products share the same method)
                await testMethods.addProductToCheckoutTest();
                //invalid single latest deals product check out test (as a guest) - invalid shipping post code format (special symbols only)
                await testMethods.invalidOrderCheckoutGuestInvalidShipPostCodeFormatTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


