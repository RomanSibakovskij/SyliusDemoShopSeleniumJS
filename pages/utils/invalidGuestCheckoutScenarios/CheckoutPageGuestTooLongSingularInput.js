"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const TestDataGenerator = require('../TestDataGenerator');
const Logger = require("../Logger")

class CheckoutPageGuestTooLongSingularInput extends BasePage{

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

        //invalid guest input data (billing address) - too long singular input
        this._tooLongGuestEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //100 chars -> name, domain
        this._tooLongGuestBillFirstName = "Gdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; //100 chars
        this._tooLongGuestBillLastName = "Ddsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; //100 chars
        this._tooLongGuestBillAddress = testDataGenerator.generateRandomAddress(100); //100 chars
        this._tooLongGuestBillCity = "dsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; //100 chars
        this._tooLongGuestBillPostCode = 567445; //6 digits

        //invalid guest input data (shipping address) - too long singular input
        this._tooLongGuestShipFirstName = "Hdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; //100 chars
        this._tooLongGuestShipLastName = "Bdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; //100 chars
        this._tooLongGuestShipAddress = testDataGenerator.generateRandomAddress(100); //100 chars
        this._tooLongGuestShipCity = "Ddsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfd"; //100 chars
        this._tooLongGuestShipPostCode = 234123; //6 digits
    }

    //invalid guest data input methods - too long singular input
    async inputTooLongGuestEmailIntoEmailInputField(){
        const billAddressEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const tooLongGuestEmail = this._tooLongGuestEmail;
        Logger.info("Too long guest email (checkout page): ", tooLongGuestEmail);
        await billAddressEmailInputField.sendKeys(tooLongGuestEmail);
    }

    //billing address
    async inputTooLongGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillAddressFirstNameInputField);
        const tooLongGuestBillFirstName = this._tooLongGuestBillFirstName;
        Logger.info("Too long guest first name (billing address -> checkout page): ", tooLongGuestBillFirstName);
        await billAddressFirstNameInputField.sendKeys(tooLongGuestBillFirstName);
    }
    async inputTooLongGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressLastNameInputField);
        const tooLongGuestBillLastName = this._tooLongGuestBillLastName;
        Logger.info("Too long guest last name (billing address -> checkout page): ", tooLongGuestBillLastName);
        await billAddressLastNameInputField.sendKeys(tooLongGuestBillLastName);
    }
    async inputTooLongGuestAddressIntoBillAddressInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressInputField);
        const tooLongGuestBillAddress = this._tooLongGuestBillAddress;
        Logger.info("Too long guest address (billing address -> checkout page): ", tooLongGuestBillAddress);
        await billAddressLastNameInputField.sendKeys(tooLongGuestBillAddress);
    }
    async inputTooLongGuestCityIntoBillAddressCityInputField(){
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillAddressCityInputField);
        const tooLongGuestBillCity = this._tooLongGuestBillCity;
        Logger.info("Too long guest city (billing address -> checkout page): ", tooLongGuestBillCity);
        await billAddressCityInputField.sendKeys(tooLongGuestBillCity);
    }
    async inputTooLongGuestPostCodeIntoBillAddressPostCodeInputField(){
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillAddressPostCodeInputField);
        const tooLongGuestBillPostCode = this._tooLongGuestBillPostCode;
        Logger.info("Too long guest post code (billing address -> checkout page): ", tooLongGuestBillPostCode);
        await billAddressPostCodeInputField.sendKeys(tooLongGuestBillPostCode);
    }

    //shipping address
    async inputTooLongGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        await shipAddressFirstNameInputField.clear();
        const tooLongGuestShipFirstName = this._tooLongGuestShipFirstName;
        Logger.info("Too long guest first name (shipping address -> checkout page): ", tooLongGuestShipFirstName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressFirstNameInputField.sendKeys(tooLongGuestShipFirstName);
    }
    async inputTooLongGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        await shipAddressLastNameInputField.clear();
        const tooLongGuestShipLastName = this._tooLongGuestShipLastName;
        Logger.info("Too long guest last name (shipping address -> checkout page): ", tooLongGuestShipLastName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(tooLongGuestShipLastName);
    }
    async inputTooLongGuestAddressIntoShipAddressInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        await shipAddressLastNameInputField.clear();
        const tooLongGuestShipAddress = this._tooLongGuestShipAddress;
        Logger.info("Too long guest address (shipping address -> checkout page): ", tooLongGuestShipAddress);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(tooLongGuestShipAddress);
    }
    async inputTooLongGuestCityIntoShipAddressCityInputField(){
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        await shipAddressCityInputField.clear();
        const tooLongGuestShipCity = this._tooLongGuestShipCity;
        Logger.info("Too long guest city (shipping address -> checkout page): ", tooLongGuestShipCity);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressCityInputField.sendKeys(tooLongGuestShipCity);
    }
    async inputTooLongGuestPostCodeIntoShipAddressPostCodeInputField(){
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        await shipAddressPostCodeInputField.clear();
        const tooLongGuestShipPostCode = this._tooLongGuestShipPostCode;
        Logger.info("Too long guest post code (shipping address -> checkout page): ", tooLongGuestShipPostCode);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressPostCodeInputField.sendKeys(tooLongGuestShipPostCode);
    }

}
module.exports = { CheckoutPageGuestTooLongSingularInput }