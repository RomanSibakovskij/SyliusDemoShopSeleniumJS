# SyliusDemoShopSeleniumJS

Selenium test suite on basic e-commerce web app functionality (various product addition to / quantity update / removal from shopping cart / order checkout) The test suite captures screenshots at the end of test case run (for logging purposes). Due to dynamic updates of the demo version of this page, locators maay be different, checkout section may not work (throw shipping address error), those are NOT issues of the test script.

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

//navigate user to register page test

1.	//Test 001 -> navigate user to register page test

//Valid user account creation test

1.	//Test 002 -> valid user account creation test

//Invalid User Account Creation Tests - No Singular Input

1.	//Test 002a -> invalid user account creation test - no user first name
2.	//Test 002b -> invalid user account creation test - no user last name
3.	//Test 002c -> invalid user account creation test - no user email
4.	//Test 002d -> invalid user account creation test - no user password

//Invalid User Account Creation Tests - Too Short Singular Input

1.	//Test 002f -> invalid user account creation test - too short user first name (1 char)
2.	//Test 002g -> invalid user account creation test - too short user last name (1 char)
3.	//Test 002h -> invalid user account creation test - too short user email (1 char -> name, domain)
4.	//Test 002i -> invalid user account creation test - too short user password / confirm password (3 chars)

//Invalid User Account Creation Tests - Too Long Singular Input

1.	//Test 002j -> invalid user account creation test - too long user first name (100 chars)
2.	//Test 002k -> invalid user account creation test - too long user last name (100 chars)
3.	//Test 002l -> invalid user account creation test - too long user email (100 chars -> name, domain)
4.	//Test 002m -> invalid user account creation test - too long user password / confirm password (100 chars)

//Invalid User Account Creation Tests - Invalid Singular Input Format

1.	//Test 002n -> invalid user account creation test - invalid user first name format (special symbols only)
2.	//Test 002o -> invalid user account creation test - invalid user last name format (special symbols only)
3.	//Test 002p -> invalid user account creation test - invalid user email format (missing '@')
4.	//Test 002q -> invalid user account creation test - existing email (test email input)

//valid user login tests

1.	//Test 003 -> valid user login test
2.	//Test 003a -> valid user login with valid username test
3.	//Test 003b -> valid user login with edited login email test
4.	//Test 003c -> valid user login with edited login password test

//Invalid User Login Tests - No Singular Input

1.	//Test 003d -> invalid user login test - no login email
2.	//Test 003e -> invalid user login test - no login password

//Invalid User Login Tests - Invalid Singular Input

1.	//Test 003c -> invalid user login test - invalid login email
2.	//Test 003d -> invalid user login test - invalid login password

//user logout test

1.	//Test 003e -> user logout test

//valid change user password test

1.	//Test 004 -> valid change user password test

//Invalid Change Password Page Test - No Singular Input

1.	//Test 004a -> invalid change user password test - no current password
2.	//Test 004b -> invalid change user password test - no new/confirm password

//Invalid Change Password Page Test - Invalid Singular Input

1.	//Test 004c -> invalid change user password test - invalid current password
2.	//Test 004d -> invalid change user password test - mismatching confirm password

//valid edit user account data test

1.	//Test 005 -> valid edit user account data test

//Invalid Edit User Account Data Tests - No Singular Input

1.	//Test 005a -> invalid edit user account data test - no user first name
2.	//Test 005b -> invalid edit user account data test - no user last name
3.	//Test 005c -> invalid edit user account data test - no user email

//Invalid Edit User Account Data Tests - Too Short Singular Input

1.	//Test 005d -> invalid edit user account data test - too short user first name (1 char)
2.	//Test 005e -> invalid edit user account data test - too short user last name (1 char)
3.	//Test 005f -> invalid edit user account data test - too short user email (1 char -> name, domain)

//Invalid Edit User Account Data Tests - Too Long Singular Input

1.	//Test 005g -> invalid edit user account data test - too long user first name (100 chars)
2.	//Test 005h -> invalid edit user account data test - too long user last name (100 chars)
3.	//Test 005i -> invalid edit user account data test - too long user email (100 chars -> name, domain)

//Invalid Edit User Account Data Tests - Invalid Singular Input Format

1.	//Test 005j -> invalid edit user account data test - invalid user first name format (special symbols only) 
2.	//Test 005k -> invalid edit user account data test - invalid user last name format (special symbols only)
3.	//Test 005l -> invalid edit user account data test - invalid user email format (missing '@')
4.	//Test 005m -> invalid edit user account data test - existing test email

//valid user address addition tests

1.	//Test 006 -> valid user address addition test
2.	//Test 006a -> valid user multiple addresses addition test

//Valid User Address  Removal Test

1.	//Test 006b -> valid user address removal test

//Invalid User Address Addition Tests - No Singular Input

1.	//Test 006c -> invalid user address addition test - no user first name
2.	//Test 006d -> invalid user address addition test - no user last name
3.	//Test 006e -> invalid user address addition test - no user address
4.	//Test 006f -> invalid user address addition test - no user country
5.	//Test 006g -> invalid user address addition test - no user city
6.	//Test 006h -> invalid user address addition test - no user post code

//Invalid User Address Addition Tests - Too Short Singular Input

1.	//Test 006i -> invalid user address addition test - too short user first name (1 char)
2.	//Test 006j -> invalid user address addition test - too short user last name (1 char)
3.	//Test 006k -> invalid user address addition test - too short user address (1 char)
4.	//Test 006l -> invalid user address addition test - too short user city (1 char)
5.	//Test 006m -> invalid user address addition test - too short user post code (4 digits)

//Invalid User Address Addition Tests - Too Long Singular Input

1.	//Test 006n -> invalid user address addition test - too long user first name (100 chars)
2.	//Test 006o -> invalid user address addition test - too long user last name (100 chars)
3.	//Test 006p -> invalid user address addition test - too long user address (100 chars)
4.	//Test 006q -> invalid user address addition test - too long user city (100 chars)
5.	//Test 006r -> invalid user address addition test - too long user post code (6 digits)

//Invalid User Address Addition Tests - Invalid Singular Input Format

1.	//Test 006s -> invalid user address addition test - invalid user first name format (special symbols only)
2.	//Test 006t -> invalid user address addition test - invalid user last name format (special symbols only)
3.	//Test 006u -> invalid user address addition test - invalid user address format (special symbols only)
4.	//Test 006v -> invalid user address addition test - invalid user city format (special symbols only)
5.	//Test 006w -> invalid user address addition test - invalid user post code format (special symbols only)

//Valid User Address Edit Test

1.	//Test 007 -> valid user address edit test

//Invalid User Address Edit Tests - No Singular Input

1.	//Test 007a -> invalid user address edit test - no user edited first name
2.	//Test 007b -> invalid user address edit test - no user edited last name
3.	//Test 007c -> invalid user address edit test - no user edited address
4.	//Test 007d -> invalid user address edit test - no user edited country
5.	//Test 007e -> invalid user address edit test - no user edited city
6.	//Test 007f -> invalid user address edit test - no user edited post code

//Invalid User Address Edit Tests - Too Short Singular Input

1.	//Test 007g -> invalid user address edit test - too short user edited first name (1 char)
2.	//Test 007h -> invalid user address edit test - too short user edited last name (1 char)
3.	//Test 007i -> invalid user address edit test - too short user edited address (1 char)
4.	//Test 007j -> invalid user address edit test - too short user edited city (1 char)
5.	//Test 007k -> invalid user address edit test - too short user edited post code (4 digits)

//Invalid User Address Edit Tests - Too Long Singular Input

1.	//Test 007i -> invalid user address edit test - too long user edited first name (100 chars)
2.	//Test 007j -> invalid user address edit test - too long user edited last name (100 chars)
3.	//Test 007k -> invalid user address edit test - too long user edited address (100 chars)
4.	//Test 007l -> invalid user address edit test - too long user edited city (100 chars)
5.	//Test 007m -> invalid user address edit test - too long user edited post code (6 digits)

//Invalid User Address Edit Tests - Invalid Singular Input Format

1.	//Test 007n -> invalid user address edit test - invalid user edited first name format (special symbols only)
2.	//Test 007o -> invalid user address edit test - invalid user edited last name format (special symbols only)
3.	//Test 007p -> invalid user address edit test - invalid user edited address format (special symbols only)
4.	//Test 007q -> invalid user address edit test - invalid user edited city format (special symbols only)
5.	//Test 007r -> invalid user address edit test - invalid user edited post code format (special symbols only)

//Single/Multiple Latest Deals Product(s) Addition to Cart Test (as a guest)

1.	//Test 008 -> single latest deals product addition to cart test (as a guest)
2.	//Test 008a -> multiple latest deals products addition to cart test (as a guest)

//Single/Multiple Latest Deals Product(s) Addition to Cart Test (as a registered user)

1.	//Test 008b -> single latest deals product addition to cart test (as a registered user)
2.	//Test 008c -> multiple latest deals products addition to cart test (as a registered user)

//Single/Multiple Latest Product(s) Addition to Cart Test (as a guest)

1.	//Test 009 -> single latest product addition to cart test (as a guest)
2.	//Test 009a -> multiple latest products addition to cart test (as a guest)

//Single/Multiple Latest Product(s) Addition to Cart Test (as a registered user)

1.	//Test 009b -> single latest product addition to cart test (as a registered user)
2.	//Test 009c -> multiple latest deals products addition to cart test (as a registered user)

//Single Category Dashboard Page Single/Multiple Product(s) Addition to Cart Test (as a guest)

1.	//Test 010 -> single category dashboard page single product ("Boho Beach Breeze") addition to cart test (as a guest)
2.	//Test 010a -> single category dashboard page multiple products ("Boho Beach Breeze") addition to cart test (as a guest)

//Single Category Dashboard Page Single/Multiple Product(s) Addition to Cart Test (as a registered user)

1.	//Test 010b -> single category dashboard page single product ("Evening Star Gown") addition to cart test (as a registered user)
2.	//Test 010c -> single category dashboard page multiple products ("Evening Star Gown") addition to cart test (as a registered user)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Cart Test (as a guest)

1.	//Test 011 -> single category dashboard page set searched single product ("Classic Summer Elegance") addition to cart test (as a guest)
2.	//Test 011a -> single category dashboard page set searched multiple products ("Classic Summer Elegance") addition to cart test (as a guest)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Cart Test (as a registered user)

1.	//Test 011b -> single category dashboard page single product ("Seaside Stroll Midi") addition to cart test (as a registered user)
2.	//Test 011c -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") addition to cart test (as a registered user)

//Valid Add Product Reviews Tests

1.	//Test 012 -> valid product ("Sunshine Strappy Delight") review addition test (as a guest)
2.	//Test 012a -> valid product ("Sunshine Strappy Delight") review addition test (as a registered user)

//Invalid Add Product Review Tests - No Singular Input

1.	//Test 012b -> invalid product ("Sunshine Strappy Delight") review addition test - no rating input (as a guest)
2.	//Test 012c -> invalid product ("Sunshine Strappy Delight") review addition test - no comment title input (as a guest)
3.	//Test 012d -> invalid product ("Sunshine Strappy Delight") review addition test - no comment input (as a guest)
4.	//Test 012e -> invalid product ("Sunshine Strappy Delight") review addition test - no email input (as a guest)

//Invalid Add Product Review Tests - Too Short Singular Input

1.	//Test 012f -> invalid product ("Sunshine Strappy Delight") review addition test - too short comment title input (as a guest) (1 char)
2.	//Test 012g -> invalid product ("Sunshine Strappy Delight") review addition test - too short comment input (as a guest) (1 char)
3.	//Test 012h -> invalid product ("Sunshine Strappy Delight") review addition test - too short email input (as a guest) (1 char -> name, domain)

//Invalid Add Product Review Tests - Too Long Singular Input

1.	//Test 012i -> invalid product ("Sunshine Strappy Delight") review addition test - too long comment title input (as a guest) (256 chars)
2.	//Test 012j -> invalid product ("Sunshine Strappy Delight") review addition test - too long comment input (as a guest) (10001 chars)
3.	//Test 012k -> invalid product ("Sunshine Strappy Delight") review addition test - too long email input (as a guest) (100 chars -> name, domain)

//Add Latest Deals Product To Wishlist Tests

1.	//Test 013 -> add single latest deals product to wishlist test (as a guest)
2.	//Test 013a -> add single latest deals product to wishlist test (as a registered user)

//Add Multiple Latest Products To Wishlist Tests

1.	//Test 014 -> add multiple latest product to wishlist test (as a guest)
2.	//Test 014a -> add multiple latest products to wishlist test (as a registered user) 

//Add Latest Deals Product From Wishlist To Cart Tests

1.	//Test 015 -> add single latest deals product from wishlist (all items to cart button) to cart test (as a guest)
2.	//Test 015a -> add single latest deals product from wishlist to cart (as a registered user)

//Remove Product From Wishlist Test

1.	//Test 016 -> remove product from wishlist to cart test (only guest branch is tested, registered user will have the same result)

//Add Single Latest Deals Product To New Wishlist Test

1.	//Test 016a -> add single latest deals product to new wishlist test (only guest branch is tested, registered user will have the same result)

//Single/Multiple Latest Deals Product(s) Addition to Checkout Tests (as a guest)

1.	//Test 017 -> single latest deals product addition to check out test (as a guest)
2.	//Test 017a -> multiple latest deals products addition to check out test (as a guest)

//Single/Multiple Latest Deals Product(s) Addition to Checkout Tests (as a registered user)

1.	//Test 017b -> single latest deals product addition to check out test (as a registered user)
2.	//Test 017c -> multiple latest deals products addition to check out test (as a registered user)

//Single/Multiple Latest Product(s) Addition to Checkout Tests (as a guest)

1.	//Test 018 -> single latest product addition to check out test (as a guest)
2.	//Test 018a -> multiple latest products addition to check out test (as a guest)

//Single/Multiple Latest Product(s) Addition to Checkout Tests (as a registered user)

1.	//Test 018b -> single latest product addition to check out test (as a registered user)
2.	//Test 018c -> multiple latest deals products addition to check out test (as a registered user)

//Single Category Dashboard Page Single/Multiple Product(s) Addition to Checkout Tests (as a guest)

1.	//Test 019 -> single category dashboard page single product ("Boho Beach Breeze") addition to check out test (as a guest)
2.	//Test 019a -> single category dashboard page multiple products ("Boho Beach Breeze") addition to check out test (as a guest)

//Single Category Dashboard Page Single/Multiple Product(s) Addition to Checkout Tests (as a registered user)

1.	//Test 019b -> single category dashboard page single product ("Evening Star Gown") addition to check out test (as a registered user)
2.	//Test 019c -> single category dashboard page multiple products ("Evening Star Gown") addition to check out test (as a registered user)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Checkout Tests (as a guest)

1.	//Test 020 -> single category dashboard page set searched single product ("Classic Summer Elegance") addition to check out test (as a guest)
2.	//Test 020a -> single category dashboard page set searched multiple products ("Classic Summer Elegance") addition to check out test (as a guest)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Checkout Tests (as a registered user)

1.	//Test 020b -> single category dashboard page single product ("Seaside Stroll Midi") addition to check out test (as a registered user)
2.	//Test 020c -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") addition to check out test (as a registered user)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Addition to Checkout Tests (as a registered user)

1.	//Test 021 -> single category dashboard page product quantity update during ("Classic Summer Elegance") addition to check out test (as a guest)
2.	//Test 021a -> single category dashboard page product quantity update during ("Classic Summer Elegance") addition to check out test (as a registered user)

//Product Removal From Shopping Cart Tests

1.	//Test 022 -> product ("Classic Summer Elegance") removal from shopping cart test
2.	//Test 022a -> clear shopping cart test

//Single/Multiple Latest Deals Product(s) Checkout Tests (as a guest)

1.	//Test 023 -> //single latest deals product check out test (as a guest)
2.	//Test 023a -> multiple latest deals products check out test (as a guest)

//Single/Multiple Latest Deals Product(s) Checkout Tests (as a registered user)

1.	//Test 023b -> single latest deals product check out test (as a registered user)
2.	//Test 023c -> multiple latest deals products check out test (as a registered user)

//Single/Multiple Latest Product(s) Checkout Tests (as a guest)

1.	//Test 024 -> single latest product check out test (as a guest)
2.	//Test 024a -> multiple latest products check out test (as a guest)

//Single/Multiple Latest Product(s) Checkout Tests (as a registered user)

1.	//Test 024b -> single latest product check out test (as a registered user)
2.	//Test 024c -> multiple latest deals products check out test (as a registered user)

//Single Category Dashboard Page Single/Multiple Product(s) Checkout Tests (as a guest)

1.	//Test 025 -> single category dashboard page single product ("Boho Beach Breeze") check out test (as a guest)
2.	//Test 025a -> single category dashboard page multiple products ("Boho Beach Breeze") check out test (as a guest)

//Single Category Dashboard Page Single/Multiple Product(s) Checkout Tests (as a registered user)

1.	//Test 025b -> single category dashboard page single product ("Evening Star Gown") check out test (as a registered user)
2.	//Test 025c -> single category dashboard page multiple products ("Evening Star Gown") check out test (as a registered user)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Checkout Tests (as a guest)

1.	//Test 026 -> single category dashboard page set searched single product ("Classic Summer Elegance") check out test (as a guest)
2.	//Test 026a -> single category dashboard page set searched multiple products ("Classic Summer Elegance") check out test (as a guest)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Checkout Tests (as a registered user)

1.	//Test 026b -> single category dashboard page single product ("Seaside Stroll Midi") check out test (as a registered user)
2.	//Test 026c -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") check out test (as a registered user)

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - No Singular Billing Address Input

1.	//Test 027 -> invalid single latest deals product check out test (as a guest) - no billing address email
2.	//Test 027a -> invalid single latest deals product check out test (as a guest) - no billing address first name
3.	//Test 027b -> invalid single latest deals product check out test (as a guest) - no billing address last name
4.	//Test 027c -> invalid single latest deals product check out test (as a guest) - no billing address
5.	//Test 027d -> invalid single latest deals product check out test (as a guest) - no billing country
6.	//Test 027e -> invalid single latest deals product check out test (as a guest) - no billing city
7.	//Test 027f -> invalid single latest deals product check out test (as a guest) - no billing post code

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - No Singular Shipping Address Input

1.	//Test 027g -> invalid single latest deals product check out test (as a guest) - no shipping address first name
2.	//Test 027h -> invalid single latest deals product check out test (as a guest) - no shipping address last name
3.	//Test 027i -> invalid single latest deals product check out test (as a guest) - no shipping address
4.	//Test 027j -> invalid single latest deals product check out test (as a guest) - no shipping address country
5.	//Test 027k -> invalid single latest deals product check out test (as a guest) - no shipping address city
6.	//Test 027l -> invalid single latest deals product check out test (as a guest) - no shipping address post code

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Short Singular Billing Address Input

1.	//Test 027m -> invalid single latest deals product check out test (as a guest) - too short billing address email (1 char -> name, domain)
2.	//Test 027n -> invalid single latest deals product check out test (as a guest) - too short billing address first name (1 char)
3.	//Test 027o -> invalid single latest deals product check out test (as a guest) - too short billing address last name (1 char)
4.	//Test 027p -> invalid single latest deals product check out test (as a guest) - too short billing address (1 char)
5.	//Test 027q -> invalid single latest deals product check out test (as a guest) - too short billing city (1 char)
6.	//Test 027r -> invalid single latest deals product check out test (as a guest) - too short billing post code (4 digits)

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Short Singular Shipping Address Input

1.	//Test 027s -> invalid single latest deals product check out test (as a guest) - too short shipping address first name (1 char)
2.	//Test 027t -> invalid single latest deals product check out test (as a guest) - too short shipping address last name (1 char)
3.	//Test 027u -> invalid single latest deals product check out test (as a guest) - too short shipping address (1 char)
4.	//Test 027v -> invalid single latest deals product check out test (as a guest) - too short shipping city (1 char)
5.	//Test 027w -> invalid single latest deals product check out test (as a guest) - too short shipping post code (4 digits)

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Long Singular Billing Address Input

1.	//Test 027x -> invalid single latest deals product check out test (as a guest) - too long billing address email (100 chars -> name, domain)
2.	//Test 027y -> invalid single latest deals product check out test (as a guest) - too long billing address first name (100 chars)
3.	//Test 027z -> invalid single latest deals product check out test (as a guest) - too long billing address last name (100 chars)
4.	//Test 027aa -> invalid single latest deals product check out test (as a guest) - too long billing address (100 chars)
5.	//Test 027ab -> invalid single latest deals product check out test (as a guest) - too long billing city (100 chars)
6.	//Test 027ac -> invalid single latest deals product check out test (as a guest) - too long billing post code (6 digits)

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - Too Long Singular Shipping Address Input

1.	//Test 027ad -> invalid single latest deals product check out test (as a guest) - too long shipping address first name (100 chars)
2.	//Test 027ae -> invalid single latest deals product check out test (as a guest) - too long shipping address last name (100 chars)
3.	//Test 027af -> invalid single latest deals product check out test (as a guest) - too long shipping address (100 chars)
4.	//Test 027ag -> invalid single latest deals product check out test (as a guest) - too long shipping city (100 chars)
5.	//Test 027ah -> invalid single latest deals product check out test (as a guest) - too long shipping post code (6 digits)

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - Invalid Singular Billing Address Input Format

1.	//Test 027ai -> invalid single latest deals product check out test (as a guest) - invalid billing address email format (missing '@')
2.	//Test 027aj -> invalid single latest deals product check out test (as a guest) - invalid billing address first name input format (special symbols only)
3.	//Test 027ak -> invalid single latest deals product check out test (as a guest) - invalid billing address last name input format (special symbols only)
4.	//Test 027al -> invalid single latest deals product check out test (as a guest) - invalid billing address input format (special symbols only)
5.	//Test 027am -> invalid single latest deals product check out test (as a guest) - invalid billing address city input format (special symbols only)
6.	//Test 027an -> invalid single latest deals product check out test (as a guest) - invalid billing address post code input format (special symbols only)

//Invalid Single Latest Deals Product Checkout Tests (as a guest) - Invalid Singular Shipping Address Input Format

1.	//Test 027ao -> invalid single latest deals product check out test (as a guest) - invalid shipping address first name format (special symbols only)
2.	//Test 027ap -> invalid single latest deals product check out test (as a guest) - invalid shipping address last name format (special symbols only)
3.	//Test 027aq -> invalid single latest deals product check out test (as a guest) - invalid shipping address format (special symbols only)
4.	//Test 027ar -> invalid single latest deals product check out test (as a guest) - invalid shipping city format (special symbols only)
5.	//Test 027as -> invalid single latest deals product check out test (as a guest) - invalid shipping post code format (special symbols only)

//Single/Multiple Latest Deals Product(s) Order Verification Tests (as a registered user)

1.	//Test 028 -> single latest deals product order verification test (as a registered user)
2.	//Test 028a -> multiple latest deals products order verification test (as a registered user)

//Single/Multiple Latest Product(s) Order Verification Tests (as a registered user)

1.	//Test 029 -> single latest product order verification test (as a registered user)
2.	//Test 029a -> multiple latest deals products order verification test (as a registered user)

//Single Category Dashboard Page Single/Multiple Product(s) Order Verification Tests (as a registered user)

1.	//Test 030 -> single category dashboard page single product ("Evening Star Gown") order verification test (as a registered user)
2.	//Test 030a -> single category dashboard page multiple products ("Evening Star Gown") order verification test (as a registered user)

//Single Category Dashboard Page Set Searched Single/Multiple Product(s) Order Verification Tests (as a registered user)

1.	//Test 031 -> single category dashboard page single product ("Seaside Stroll Midi") order verification test (as a registered user)
2.	//Test 031a -> single category dashboard page set searched multiple products ("Seaside Stroll Midi") order verification test (as a registered user)
