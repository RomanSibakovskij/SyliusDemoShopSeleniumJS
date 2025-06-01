"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const TestDataGenerator = require('../TestDataGenerator');
const Logger = require("../Logger");

class CheckoutPageGuestTooShortSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //billing address section
        this._checkoutPageEmailInputField = By.xpath("//input[@id='sylius_shop_checkout_address_customer_email']");
        //input form
        this._checkoutPageBillAddressFirstNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_firstName']");
        this._checkoutPageBillAddressLastNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_lastName']");
        this._checkoutPageBillAddressCompanyInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_company']");
        this._checkoutPageBillAddressInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_street']");
        this._checkoutPageBillAddressCountryDropdownMenu = By.xpath("//select[@id='sylius_shop_checkout_address_billingAddress_countryCode']");
        this._checkoutPageBillAddressCityInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_city']");
        this._checkoutPageBillAddressPostCodeInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_postcode']");
        //shipping address (input form)
        this._checkoutPageShipAddressFirstNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_firstName']");
        this._checkoutPageShipAddressLastNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_lastName']");
        this._checkoutPageShipAddressCompanyInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_company']");
        this._checkoutPageShipAddressInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_street']");
        this._checkoutPageShipAddressCityInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_city']");
        this._checkoutPageShipAddressPostCodeInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_postcode']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid guest input data (billing address) - too short singular input
        this._tooShortGuestEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name, domain
        this._tooShortGuestBillFirstName = "G"; //1 char
        this._tooShortGuestBillLastName = "D"; //1 char
        this._tooShortGuestBillAddress = "B"; //1 char
        this._tooShortGuestBillCity = "I"; //1 char
        this._tooShortGuestBillPostCode = 5674; //4 digits

        //invalid guest input data (shipping address) - too short singular input
        this._tooShortGuestShipFirstName = "H"; //1 char
        this._tooShortGuestShipLastName = "B"; //1 char
        this._tooShortGuestShipAddress = "V"; //1 char
        this._tooShortGuestShipCity = "D"; //1 char
        this._tooShortGuestShipPostCode = 2343; //4 digits
    }

    //invalid guest data input methods - too short singular input
    async inputTooShortGuestEmailIntoEmailInputField(){
        const billAddressEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const tooShortGuestEmail = this._tooShortGuestEmail;
        Logger.info("Too short guest email (checkout page): ", tooShortGuestEmail);
        await billAddressEmailInputField.sendKeys(tooShortGuestEmail);
    }

    //billing address
    async inputTooShortGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillAddressFirstNameInputField);
        const tooShortGuestBillFirstName = this._tooShortGuestBillFirstName;
        Logger.info("Too short guest first name (billing address -> checkout page): ", tooShortGuestBillFirstName);
        await billAddressFirstNameInputField.sendKeys(tooShortGuestBillFirstName);
    }
    async inputTooShortGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressLastNameInputField);
        const tooShortGuestBillLastName = this._tooShortGuestBillLastName;
        Logger.info("Too short guest last name (billing address -> checkout page): ", tooShortGuestBillLastName);
        await billAddressLastNameInputField.sendKeys(tooShortGuestBillLastName);
    }
    async inputTooShortGuestAddressIntoBillAddressInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressInputField);
        const tooShortGuestBillAddress = this._tooShortGuestBillAddress;
        Logger.info("Too short guest address (billing address -> checkout page): ", tooShortGuestBillAddress);
        await billAddressLastNameInputField.sendKeys(tooShortGuestBillAddress);
    }
    async inputTooShortGuestCityIntoBillAddressCityInputField(){
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillAddressCityInputField);
        const tooShortGuestBillCity = this._tooShortGuestBillCity;
        Logger.info("Too short guest city (billing address -> checkout page): ", tooShortGuestBillCity);
        await billAddressCityInputField.sendKeys(tooShortGuestBillCity);
    }
    async inputTooShortGuestPostCodeIntoBillAddressPostCodeInputField(){
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillAddressPostCodeInputField);
        const tooShortGuestBillPostCode = this._tooShortGuestBillPostCode;
        Logger.info("Too short guest post code (billing address -> checkout page): ", tooShortGuestBillPostCode);
        await billAddressPostCodeInputField.sendKeys(tooShortGuestBillPostCode);
    }

    //shipping address
    async inputTooShortGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        await shipAddressFirstNameInputField.clear();
        const tooShortGuestShipFirstName = this._tooShortGuestShipFirstName;
        Logger.info("Too short guest first name (shipping address -> checkout page): ", tooShortGuestShipFirstName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressFirstNameInputField.sendKeys(tooShortGuestShipFirstName);
    }
    async inputTooShortGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        await shipAddressLastNameInputField.clear();
        const tooShortGuestShipLastName = this._tooShortGuestShipLastName;
        Logger.info("Too short guest last name (shipping address -> checkout page): ", tooShortGuestShipLastName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(tooShortGuestShipLastName);
    }
    async inputTooShortGuestAddressIntoShipAddressInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        await shipAddressLastNameInputField.clear();
        const tooShortGuestShipAddress = this._tooShortGuestShipAddress;
        Logger.info("Too short guest address (shipping address -> checkout page): ", tooShortGuestShipAddress);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(tooShortGuestShipAddress);
    }
    async inputTooShortGuestCityIntoShipAddressCityInputField(){
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        await shipAddressCityInputField.clear();
        const tooShortGuestShipCity = this._tooShortGuestShipCity;
        Logger.info("Too short guest city (shipping address -> checkout page): ", tooShortGuestShipCity);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressCityInputField.sendKeys(tooShortGuestShipCity);
    }
    async inputTooShortGuestPostCodeIntoShipAddressPostCodeInputField(){
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        await shipAddressPostCodeInputField.clear();
        const tooShortGuestShipPostCode = this._tooShortGuestShipPostCode;
        Logger.info("Too short guest post code (shipping address -> checkout page): ", tooShortGuestShipPostCode);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressPostCodeInputField.sendKeys(tooShortGuestShipPostCode);
    }

}
module.exports = { CheckoutPageGuestTooShortSingularInput }