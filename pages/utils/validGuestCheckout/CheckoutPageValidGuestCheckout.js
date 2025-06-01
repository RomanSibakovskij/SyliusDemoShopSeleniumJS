"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const TestDataGenerator = require('../TestDataGenerator');
const Logger = require("../Logger");

class CheckoutPageValidGuestCheckout extends BasePage{

    constructor(driver) {
        super(driver);

        const testDataGenerator = new TestDataGenerator(this.driver);

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

        //valid guest input data (billing address)
        this._validGuestEmail = testDataGenerator.generateRandomEmailAddress(8);

        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._validGuestFirstName = firstName;
        this._validGuestLastName = lastName;
        this._validGuestBillAddress = testDataGenerator.generateRandomAddress(6);
        this._validGuestBillCity = testDataGenerator.getRandomCity();
        this._validGuestBillPostCode = testDataGenerator.getRandomPostalCode();

        //valid guest input data (shipping address)
        this._validGuestShipAddress = testDataGenerator.generateRandomAddress(11);
        this._validGuestShipCity = testDataGenerator.getRandomCity();
        this._validGuestShipPostCode = testDataGenerator.getRandomPostalCode();

    }

    //valid guest data input methods
    async inputValidGuestEmailIntoEmailInputField(){
        const billAddressEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const guestEmail = this._validGuestEmail;
        Logger.info("Valid guest email (checkout page): ", guestEmail);
        await billAddressEmailInputField.sendKeys(guestEmail);
    }

    //billing address
    async inputValidGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillAddressFirstNameInputField);
        const guestBillFirstName = this._validGuestFirstName;
        Logger.info("Valid guest first name (billing address -> checkout page): ", guestBillFirstName);
        await billAddressFirstNameInputField.sendKeys(guestBillFirstName);
    }
    async inputValidGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressLastNameInputField);
        const guestBillLastName = this._validGuestLastName;
        Logger.info("Valid guest last name (billing address -> checkout page): ", guestBillLastName);
        await billAddressLastNameInputField.sendKeys(guestBillLastName);
    }
    async inputValidGuestAddressIntoBillAddressInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressInputField);
        const guestBillAddress = this._validGuestBillAddress;
        Logger.info("Valid guest address (billing address -> checkout page): ", guestBillAddress);
        await billAddressLastNameInputField.sendKeys(guestBillAddress);
    }
    async inputValidGuestCityIntoBillAddressCityInputField(){
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillAddressCityInputField);
        const guestBillCity = this._validGuestBillCity;
        Logger.info("Valid guest city (billing address -> checkout page): ", guestBillCity);
        await billAddressCityInputField.sendKeys(guestBillCity);
    }
    async inputValidGuestPostCodeIntoBillAddressPostCodeInputField(){
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillAddressPostCodeInputField);
        const guestBillPostCode = this._validGuestBillPostCode;
        Logger.info("Valid guest post code (billing address -> checkout page): ", guestBillPostCode);
        await billAddressPostCodeInputField.sendKeys(guestBillPostCode);
    }

    //shipping address
    async inputValidGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        await shipAddressFirstNameInputField.clear();
        const guestShipFirstName = this._validGuestFirstName;
        Logger.info("Valid guest first name (shipping address -> checkout page): ", guestShipFirstName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressFirstNameInputField.sendKeys(guestShipFirstName);
    }
    async inputValidGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        await shipAddressLastNameInputField.clear();
        const guestShipLastName = this._validGuestLastName;
        Logger.info("Valid guest last name (shipping address -> checkout page): ", guestShipLastName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(guestShipLastName);
    }
    async inputValidGuestAddressIntoShipAddressInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        await shipAddressLastNameInputField.clear();
        const guestShipAddress = this._validGuestShipAddress;
        Logger.info("Valid guest address (shipping address -> checkout page): ", guestShipAddress);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(guestShipAddress);
    }
    async inputValidGuestCityIntoShipAddressCityInputField(){
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        await shipAddressCityInputField.clear();
        const guestShipCity = this._validGuestShipCity;
        Logger.info("Valid guest city (shipping address -> checkout page): ", guestShipCity);
        await new Promise(resolve => setTimeout(resolve, 1200));
        await shipAddressCityInputField.sendKeys(guestShipCity);
    }
    async inputValidGuestPostCodeIntoShipAddressPostCodeInputField(){
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        await shipAddressPostCodeInputField.clear();
        const guestShipPostCode = this._validGuestShipPostCode;
        Logger.info("Valid guest post code (shipping address -> checkout page): ", guestShipPostCode);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressPostCodeInputField.sendKeys(guestShipPostCode);
    }

}
module.exports = { CheckoutPageValidGuestCheckout }