"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class CheckoutPageGuestNoSingularInputScenarios extends BasePage{

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

        //invalid guest input data (billing address) - no singular input
        this._noGuestEmail = "";
        this._noGuestBillFirstName = "";
        this._noGuestBillLastName = "";
        this._noGuestBillAddress = "";
        this._noGuestBillCity = "";
        this._noGuestBillPostCode = "";

        //invalid guest input data (shipping address) - no singular input
        this._noGuestShipFirstName = "";
        this._noGuestShipLastName = "";
        this._noGuestShipAddress = "";
        this._noGuestShipCity = "";
        this._noGuestShipPostCode = "";
    }

    //invalid guest data input methods - no singular input
    async inputNoGuestEmailIntoEmailInputField(){
        const billAddressEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const noGuestEmail = this._noGuestEmail;
        Logger.info("No guest email (checkout page): ", noGuestEmail);
        await billAddressEmailInputField.sendKeys(noGuestEmail);
    }

    //billing address
    async inputNoGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillAddressFirstNameInputField);
        const noGuestBillFirstName = this._noGuestBillFirstName;
        Logger.info("No guest first name (billing address -> checkout page): ", noGuestBillFirstName);
        await billAddressFirstNameInputField.sendKeys(noGuestBillFirstName);
    }
    async inputNoGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressLastNameInputField);
        const noGuestBillLastName = this._noGuestBillLastName;
        Logger.info("No guest last name (billing address -> checkout page): ", noGuestBillLastName);
        await billAddressLastNameInputField.sendKeys(noGuestBillLastName);
    }
    async inputNoGuestAddressIntoBillAddressInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressInputField);
        const noGuestBillAddress = this._noGuestBillAddress;
        Logger.info("No guest address (billing address -> checkout page): ", noGuestBillAddress);
        await billAddressLastNameInputField.sendKeys(noGuestBillAddress);
    }
    async inputNoGuestCityIntoBillAddressCityInputField(){
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillAddressCityInputField);
        const noGuestBillCity = this._noGuestBillCity;
        Logger.info("No guest city (billing address -> checkout page): ", noGuestBillCity);
        await billAddressCityInputField.sendKeys(noGuestBillCity);
    }
    async inputNoGuestPostCodeIntoBillAddressPostCodeInputField(){
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillAddressPostCodeInputField);
        const noGuestBillPostCode = this._noGuestBillPostCode;
        Logger.info("No guest post code (billing address -> checkout page): ", noGuestBillPostCode);
        await billAddressPostCodeInputField.sendKeys(noGuestBillPostCode);
    }

    //shipping address
    async inputNoGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        await shipAddressFirstNameInputField.clear();
        const noGuestShipFirstName = this._noGuestShipFirstName;
        Logger.info("No guest first name (shipping address -> checkout page): ", noGuestShipFirstName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressFirstNameInputField.sendKeys(noGuestShipFirstName);
    }
    async inputNoGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        await shipAddressLastNameInputField.clear();
        const noGuestShipLastName = this._noGuestShipLastName;
        Logger.info("No guest last name (shipping address -> checkout page): ", noGuestShipLastName);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(noGuestShipLastName);
    }
    async inputNoGuestAddressIntoShipAddressInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        await shipAddressLastNameInputField.clear();
        const noGuestShipAddress = this._noGuestShipAddress;
        Logger.info("No guest address (shipping address -> checkout page): ", noGuestShipAddress);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(noGuestShipAddress);
    }
    async inputNoGuestCityIntoShipAddressCityInputField(){
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        await shipAddressCityInputField.clear();
        const noGuestShipCity = this._noGuestShipCity;
        Logger.info("No guest city (shipping address -> checkout page): ", noGuestShipCity);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressCityInputField.sendKeys(noGuestShipCity);
    }
    async inputNoGuestPostCodeIntoShipAddressPostCodeInputField(){
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        await shipAddressPostCodeInputField.clear();
        const noGuestShipPostCode = this._noGuestShipPostCode;
        Logger.info("No guest post code (shipping address -> checkout page): ", noGuestShipPostCode);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressPostCodeInputField.sendKeys(noGuestShipPostCode);
    }

}
module.exports = { CheckoutPageGuestNoSingularInputScenarios }